<?php

/**
 * The template for displaying product content in the single-product.php template
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-single-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.6.0
 */

defined('ABSPATH') || exit;

global $product;

/**
 * Hook: woocommerce_before_single_product.
 *
 * @hooked woocommerce_output_all_notices - 10
 */
do_action('woocommerce_before_single_product');

if (post_password_required()) {
    echo get_the_password_form(); // WPCS: XSS ok.
    return;
}
?>
<div id="product-<?php the_ID(); ?>" <?php wc_product_class('', $product); ?>>
    <div class="entry">
        <div class="summary">
            <div class="row">
                <div class="col-xl-4">
                    <div class="summary_image">
                        <!-- <img src="images/product-1.png" alt=""> -->
                        <?php do_action('woocommerce_before_single_product_summary'); ?>
                    </div>
                </div>
                <div class="col-xl-8">
                    <div class="summary_inner">
                        <h1 class="product_title"><?php the_title(); ?></h1>
                        <div class="attributes">
                            <?php woocommerce_template_single_excerpt(); ?>
                        </div>
                        <div class="product__price">
                            <?php woocommerce_template_single_price(); ?>
                        </div>
                        <div class="card_footer">
                            <?php /* if ($product->get_stock_quantity()) { ?>
                                <div class="in_stock">В наличии <span class="count"><?php echo $product->get_stock_quantity(); ?></span> шт</div>
                            <?php } else { ?>
                                <div class="in_stock">Под заказ</div>
                            <?php }*/ ?>
                            <!-- </div> -->
                            <?php woocommerce_template_single_add_to_cart();?>
                            <!-- <a href="#" class="btn btn-lg btn_style_1">В корзину</a> -->
                            <a href="<? echo wc_get_checkout_url();?>?add-to-cart=<?php echo get_the_ID();?>&quantity=1" class="btn btn-lg btn_style_1 green">Купить</a>
                            
                            

                        </div>
                        <div class="meta">
                            <?php woocommerce_template_single_meta(); ?>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
    <div class="content_product">
        <?php the_content(); ?>
    </div>
</div>
<?php do_action('woocommerce_after_single_product'); ?>

<?/*

<div id="product-<?php the_ID(); ?>" <?php wc_product_class('', $product); ?>>

    <?php
    /**
     * Hook: woocommerce_before_single_product_summary.
     *
     * @hooked woocommerce_show_product_sale_flash - 10
     * @hooked woocommerce_show_product_images - 20
     */
// do_action('woocommerce_before_single_product_summary');
?>

<!-- <div class="summary entry-summary">
        <?php
        /**
         * Hook: woocommerce_single_product_summary.
         *
         * @hooked woocommerce_template_single_title - 5
         * @hooked woocommerce_template_single_rating - 10
         * @hooked woocommerce_template_single_price - 10
         * @hooked woocommerce_template_single_excerpt - 20
         * @hooked woocommerce_template_single_add_to_cart - 30
         * @hooked woocommerce_template_single_meta - 40
         * @hooked woocommerce_template_single_sharing - 50
         * @hooked WC_Structured_Data::generate_product_data() - 60
         */
        // do_action('woocommerce_single_product_summary');
        ?>
    </div> -->

<?php
/**
 * Hook: woocommerce_after_single_product_summary.
 *
 * @hooked woocommerce_output_product_data_tabs - 10
 * @hooked woocommerce_upsell_display - 15
 * @hooked woocommerce_output_related_products - 20
 */
// do_action('woocommerce_after_single_product_summary');
?>
</div>

<?php
// do_action('woocommerce_after_single_product');
?>