<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "site-content" div.
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-55198370-2"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'UA-55198370-2');
	</script>
	<!-- /Google Analytics -->
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<?php if ( is_home() || is_page() ) { ?>
		<meta name="description" content="Read about all things hiking, from the Pacific Crest Trail to bushwhacking in New England to gear reviews and tips." />
		<meta property="og:url" content="http://reconnect.life" />
		<meta property="og:image" content="http://reconnect.life/wp-content/uploads/2018/03/og-image.jpg" />
		<meta property="og:description" content="Read about all things hiking, from the Pacific Crest Trail to bushwhacking in New England to gear reviews and tips." />
		<meta name="twitter:image" content="http://reconnect.life/wp-content/uploads/2018/03/og-image.jpg">
	<?php } else if ( is_single() ){
				setup_postdata( $post );
				$excerpt = wp_strip_all_tags(get_the_excerpt());
			?>
		<meta name="description" content='<?php echo $excerpt; ?>' />
		<meta property="og:title" content="<?php the_title(); ?>" />
		<meta property="og:type" content="article" />
		<meta property="og:image" content="<?php the_post_thumbnail_url('medium'); ?>" />
		<meta property="og:description" content='<?php echo $excerpt; ?>' />
		<meta name="twitter:image" content="<?php the_post_thumbnail_url('medium'); ?>">
	<?php } else if(is_category()) { ?>
		<meta name="description" content="<?php echo strip_tags(category_description(get_category_by_slug(get_the_category())->term_id)); ?>" />
	<?php }?>
	<!--[if lt IE 9]>
	<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/html5.js"></script>
	<![endif]-->
	<script src="https://use.typekit.net/rfn7rbz.js"></script>
	<script>try{Typekit.load({ async: true });}catch(e){}</script>

	<?php
		function load_js() {
				wp_deregister_script( 'jquery' );
				wp_enqueue_script( 'plugins', get_template_directory_uri() . '/js/plugins.js', false, NULL, 'all');
			}
		add_action( 'wp_enqueue_scripts', 'load_js' );
	?>
	<?php wp_head(); ?>
	<script src="https://use.fontawesome.com/ae56797031.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<!-- Google adsense -->
	<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
	<script>
	  (adsbygoogle = window.adsbygoogle || []).push({
	    google_ad_client: "ca-pub-8705223487628395",
	    enable_page_level_ads: true
	  });
	</script>
	<!-- /Google adsense -->
</head>

<body <?php body_class(); ?>>
<div id="page" class="hfeed site">
	<a class="skip-link screen-reader-text" href="#content"><?php _e( 'Skip to content', 'twentyfifteen' ); ?></a>

	<div id="sidebar" class="sidebar">
		<header id="masthead" class="site-header" role="banner">
			<div class="site-branding">
				<?php
					if ( is_front_page() && is_home() ) : ?>
						<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'Reconnect' ); ?></a></h1>
					<?php else : ?>
						<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'Reconnect' ); ?></a></p>
					<?php endif;

					/*$description = get_bloginfo( 'description', 'display' );
					if ( $description || is_customize_preview() ) : ?>
						<p class="site-description"><?php echo $description; ?></p>
					<?php endif; */
				?>
			</div><!-- .site-branding -->
		</header><!-- .site-header -->

		<?php get_sidebar(); ?>
	</div><!-- .sidebar -->

	<div id="content" class="site-content">
