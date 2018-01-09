<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the "site-content" div and all content after.
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */
?>

	</div><!-- .site-content -->
<?php /*
	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="site-info">
			<?php
				//
				 // Fires before the Twenty Fifteen footer text for footer customization.
				 //
				 // @since Twenty Fifteen 1.0
				 //
				do_action( 'twentyfifteen_credits' );
			?>
			<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'twentyfifteen' ) ); ?>"><?php printf( __( 'Proudly powered by %s', 'twentyfifteen' ), 'WordPress' ); ?></a>
		</div><!-- .site-info -->
	</footer><!-- .site-footer -->

</div><!-- .site -->
*/ ?>


<!-- Begin MailChimp Signup Form -->
<div id="mc_embed_signup">
	<form action="https://life.us17.list-manage.com/subscribe/post?u=af8860d0aaaa7378ddb4b27c8&amp;id=45a85b2a7b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
	    <div id="mc_embed_signup_scroll">
			<p><span>Connect with Reconnect.</span> &nbsp; Join Our Mailing List.</p>
			<div class="mc-field-group">
				<!-- <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span> -->
				</label>
				<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="Enter Your Email Address">
			</div>
			<div id="mce-responses" class="clear">
				<div class="response" id="mce-error-response" style="display:none"></div>
				<div class="response" id="mce-success-response" style="display:none"></div>
			</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
			<div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_af8860d0aaaa7378ddb4b27c8_45a85b2a7b" tabindex="-1" value=""></div>
			<div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
	    </div>
	</form>
</div>

<!--End mc_embed_signup-->

<?php wp_footer(); ?>

</body>
</html>
