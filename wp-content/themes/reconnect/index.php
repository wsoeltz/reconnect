<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * e.g., it puts together the home page when no home.php file exists.
 *
 * Learn more: {@link https://codex.wordpress.org/Template_Hierarchy}
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php if ( have_posts() ) : ?>

			<?php if ( is_home() && ! is_front_page() ) : ?>
				<header>
					<h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
				</header>
			<?php endif; ?>

			<?php
			global $wp_query;
			// Start the loop.
			echo '<div class="group">';
			while ( have_posts() ) : the_post();

				/*
				 * Include the Post-Format-specific template for the content.
				 * If you want to override this in a child theme, then include a file
				 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
				 */
				// get_template_part( 'content', get_post_format() );
				if ( $wp_query->current_post == 0 && !get_query_var('paged') ) {
					echo '<div class="featured-post" style="background-image:url(';
					the_post_thumbnail_url('full');
					echo ')">';
					echo '<h3>Featured</h3>';
					echo '<div class="card group">';
					the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' );
					echo '<span class="entry-details">';
					echo get_the_date('m.d.Y');
					echo ' - ';
					echo get_the_author();
					echo '</span>';
					echo '<p>';
					echo excerpt(60);
					echo '</p>';
					echo '</div>';
					echo '</div>';
					echo '<h3>Older Posts</h3>';
				} else if (!get_query_var('paged')) {
					echo '<div class="card matchHeight group">';
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
					echo excerpt(30);
					echo '</p>';
					echo '</div>';
				} else {
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
				}

			// End the loop.
			endwhile;
			echo '</div>';

			// Previous/next page navigation.
			the_posts_pagination( array(
				'prev_text'          => __( 'Previous page', 'twentyfifteen' ),
				'next_text'          => __( 'Next page', 'twentyfifteen' ),
				'before_page_number' => '<span class="meta-nav screen-reader-text">' . __( 'Page', 'twentyfifteen' ) . ' </span>',
			) );

		// If no content, include the "No posts found" template.
		else :
			get_template_part( 'content', 'none' );

		endif;
		?>

		</main><!-- .site-main -->
	</div><!-- .content-area -->



<?php get_footer(); ?>

<script type="text/javascript">
		$(function() {
			$('.matchHeight').matchHeight();
		});
</script>