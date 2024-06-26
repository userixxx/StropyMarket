<?php
/**
 * Title: Essential Header Dark
 * Slug: woocommerce-blocks/header-essential-dark
 * Categories: WooCommerce
 * Block Types: core/template-part/header
 */
?>
<!-- wp:group {"className":"wc-blocks-header-pattern","align":"full","style":{"spacing":{"padding":{"right":"2%","bottom":"32px","left":"2%","top":"32px"},"margin":{"top":"0px","bottom":"0px"}},"elements":{"link":{"color":{"text":"var:preset|color|background"}}}},"backgroundColor":"black","textColor":"white","className":"sticky-header has-background-color","layout":{"type":"flex","flexWrap":"wrap","justifyContent":"space-between"}} -->
<div class="wc-blocks-header-pattern wp-block-group alignfull sticky-header has-background-color has-white-color has-black-background-color has-text-color has-background has-link-color" style="margin-top:0px;margin-bottom:0px;padding-top:32px;padding-right:2%;padding-bottom:32px;padding-left:2%">
	<!-- wp:group {"style":{"spacing":{"blockGap":"40px"}},"layout":{"type":"flex","flexWrap":"wrap"}} -->
	<div class="wp-block-group">
		<!-- wp:site-logo {"shouldSyncIcon":false} /-->
		<!-- wp:search {"style":{"border":{"radius":"0px"}},"label":"<?php esc_html_e( 'Search', 'woocommerce' ); ?>","showLabel":false,"placeholder":"<?php esc_html_e( 'Search', 'woocommerce' ); ?>","buttonText":"<?php esc_html_e( 'Search', 'woocommerce' ); ?>","buttonUseIcon":true,"query":{"post_type":"product"},"width":100,"widthUnit":"%","backgroundColor":"contrast-2"} /-->
		<!-- wp:navigation {"textColor":"background","overlayTextColor":"contrast","layout":{"type":"flex","justifyContent":"center"}} /-->
	</div>
	<!-- /wp:group -->

	<!-- wp:group {"style":{"spacing":{"blockGap":"8px"},"layout":{"selfStretch":"fill","flexSize":null}},"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"right"}} -->
	<div class="wp-block-group">
		<!-- wp:woocommerce/customer-account {"displayStyle":"icon_only","iconStyle":"alt","iconClass":"wc-block-customer-account__account-icon"} /-->
		<!-- wp:woocommerce/mini-cart {"textColor":"background"} /-->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->
