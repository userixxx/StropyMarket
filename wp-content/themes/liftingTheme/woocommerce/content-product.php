<?php

/**
 * The template for displaying product content within loops
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-product.php.
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

// Ensure visibility.
if (empty($product) || !$product->is_visible()) {
    return;
}

?>

<!-- <li class="col-xl-3 col-lg-4 col-md-6 col-6 product"> -->
<li class="product">
    <div class="product__inner">
        <?php do_action('woocommerce_before_shop_loop_item'); ?>

        <a href="<?php echo $product->get_permalink(); ?>" class="product__link">
            <div class="product__image">
                <?php do_action('woocommerce_before_shop_loop_item_title'); ?>
                <!-- <img src="images/product-1.png" alt=""> -->
            </div>
            <?php echo '<h3 class="product__title">' . get_the_title() . '</h3>'; ?>
        </a>
        <?php if ($product->get_stock_quantity()) { ?>
            <div class="in_stock">В наличии <span class="count"><?php echo $product->get_stock_quantity(); ?></span> шт</div>
        <?php } else { ?>
            <div class="in_stock">Под заказ</div>
        <?php } ?>

        <?php do_action('woocommerce_after_shop_loop_item_title'); ?>
    <?php do_action('woocommerce_after_shop_loop_item'); ?>
    </div>
</li>