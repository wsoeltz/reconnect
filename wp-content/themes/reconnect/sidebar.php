<?php
/**
 * The sidebar containing the main widget area
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */


if ( has_nav_menu( 'primary' ) || has_nav_menu( 'social' ) || is_active_sidebar( 'sidebar-1' )  ) : ?>
	<div id="secondary" class="secondary">
		<?php if ( has_nav_menu( 'primary' ) ) : ?>
			<hr>
			<nav id="site-navigation" class="main-navigation" role="navigation">
				<?php
					// Primary navigation menu.
					wp_nav_menu( array(
						'menu_class'     => 'nav-menu',
						'theme_location' => 'primary',
					) );
				?>
			</nav><!-- .main-navigation -->
		<?php endif; ?>
		<?php if ( has_nav_menu( 'additional-links' ) ) : ?>
			<hr>
			<nav id="site-navigation-social" class="main-navigation" role="navigation">
				<?php
					// Primary navigation menu.
					wp_nav_menu( array(
						'menu_class'     => 'nav-menu',
						'theme_location' => 'additional-links',
					) );
				?>
			</nav><!-- .main-navigation -->
		<?php endif; ?>
		<?php if ( has_nav_menu( 'social-custom' ) ) : ?>
			<hr>
			<nav id="site-navigation-social" class="main-navigation" role="navigation">
				<?php
					// Primary navigation menu.
					wp_nav_menu( array(
						'menu_class'     => 'nav-menu',
						'theme_location' => 'social-custom',
					) );
				?>
			</nav><!-- .main-navigation -->
		<?php endif; ?>

		<?php if ( has_nav_menu( 'social' ) ) : ?>
			<hr>
			<nav id="social-navigation" class="social-navigation" role="navigation">
				<?php
					// Social links navigation menu.
					wp_nav_menu( array(
						'theme_location' => 'social',
						'depth'          => 1,
						'link_before'    => '<span class="screen-reader-text">',
						'link_after'     => '</span>',
					) );
				?>
			</nav><!-- .social-navigation -->
		<?php endif; ?>

		<?php if ( is_active_sidebar( 'sidebar-1' ) ) : ?>
			<hr>
			<div id="widget-area" class="widget-area" role="complementary">
				<?php dynamic_sidebar( 'sidebar-1' ); ?>
			</div><!-- .widget-area -->
		<?php endif; ?>


	</div><!-- .secondary -->
	<div class="copyright-information">
		<small>Content Copyright &copy; Kyle Soeltz <?php echo date("Y"); ?></small>
	</div>
	<button class="toggle-mobile-menu">Menu</button>
<?php endif; ?>

<script type="text/javascript">
	$('button.toggle-mobile-menu').on('click', function(){
		$('body').toggleClass('menu-open');
	});
</script>
