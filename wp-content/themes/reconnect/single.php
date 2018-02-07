<?php
/**
 * The template for displaying all single posts and attachments
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php
		// Start the loop.
		while ( have_posts() ) : the_post();

			/*
			 * Include the post format-specific template for the content. If you want to
			 * use this in a child theme, then include a file called called content-___.php
			 * (where ___ is the post format) and that will be used instead.
			 */
			get_template_part( 'content', get_post_format() );

			// If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) :
				comments_template();
			endif;

			// Previous/next post navigation.

			/*the_post_navigation( array(
				'next_text' => '<span class="meta-nav" aria-hidden="true">' . __( 'Next', 'twentyfifteen' ) . '</span> ' .
					'<span class="screen-reader-text">' . __( 'Next post:', 'twentyfifteen' ) . '</span> ' .
					'<span class="post-title">%title</span>',
				'prev_text' => '<span class="meta-nav" aria-hidden="true">' . __( 'Previous', 'twentyfifteen' ) . '</span> ' .
					'<span class="screen-reader-text">' . __( 'Previous post:', 'twentyfifteen' ) . '</span> ' .
					'<span class="post-title">%title</span>',
			) );*/

			// Get categories
	        $categories = wp_get_post_terms( get_the_ID(), 'category');

	        // Check if there are any categories
	        if( ! empty( $categories ) ) :

	            // Get all posts within current category, but exclude current post
	            $category_posts = new WP_Query( array(
	                'cat'          => $categories[0]->term_id,
	                'post__not_in' => array( get_the_ID() ),
	            ) );

	            // Check if there are any posts
	            $i = 0;
	            if( $category_posts->have_posts() ) :
	                // Loop trough them
	            	echo '<div class="inner">';
	            	echo '<h2>You May Also Be Interested In</h2>';
	                while( $category_posts->have_posts() && $i < 4 ) : $category_posts->the_post();
	                    // Display posts
	                    // echo get_the_title() . '<br />';
	                    echo '<div class="card thumbnail-left matchHeight group">';
						echo '<a class="thumbnail-image" style="background-image:url(';
						the_post_thumbnail_url('full');
						echo ')" href="';
						echo get_permalink();
						echo '"></a>';
						the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' );
						echo '<span class="entry-details">';
						echo get_the_date('m.d.Y');
						echo ' - ';
						echo get_the_author();
						echo '</span>';
						echo '<p>';
						echo excerpt_inline(30);
						// echo excerpt(30);
						echo '</p>';
						echo '</div>';
	                    $i++;
	                endwhile;
	                echo '</div>';
	            endif;
	        endif;
	        wp_reset_postdata();

		// End the loop.
		endwhile;
		?>

		</main><!-- .site-main -->
	</div><!-- .content-area -->

<?php get_footer(); ?>
