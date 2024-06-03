<?php

defined('ABSPATH') || exit;

get_header();
?>
<div class="container">
	<div class="row">
		<div class="col-xxl-3 col-xl-12">
			<div class="sidebar">
				<div class="navigation">
					<h3>Продукция</h3>
					<div class="vertical-menu vertical-menu-light">
						<?php wp_nav_menu(array('theme_location' => 'category-menu', 'link_before' => '<span itemprop="name">', 'link_after' => '</span>')); ?>
					</div>
				</div>
			</div>
		</div>

		<div class="col-xxl-9 col-xl-12">
			<div class="content">

				<?

				if (is_archive()) {
					/**
					 * Hook: woocommerce_before_main_content.
					 *
					 * @hooked woocommerce_output_content_wrapper - 10 (outputs opening divs for the content)
					 * @hooked woocommerce_breadcrumb - 20
					 * @hooked WC_Structured_Data::generate_website_data() - 30
					 */
					do_action('woocommerce_before_main_content');
					/**
					 * Hook: woocommerce_shop_loop_header.
					 *
					 * @since 8.6.0
					 *
					 * @hooked woocommerce_product_taxonomy_archive_header - 10
					 */
					do_action('woocommerce_shop_loop_header');
					if (woocommerce_product_loop()) {

						/**
						 * Hook: woocommerce_before_shop_loop.
						 *
						 * @hooked woocommerce_output_all_notices - 10
						 * @hooked woocommerce_result_count - 20
						 * @hooked woocommerce_catalog_ordering - 30
						 */
						do_action('woocommerce_before_shop_loop');

						woocommerce_product_loop_start();

						if (wc_get_loop_prop('total')) {
							while (have_posts()) {
								the_post();

								/**
								 * Hook: woocommerce_shop_loop.
								 */
								do_action('woocommerce_shop_loop');

								wc_get_template_part('content', 'product');
							}
						}

						woocommerce_product_loop_end();

						/**
						 * Hook: woocommerce_after_shop_loop.
						 *
						 * @hooked woocommerce_pagination - 10
						 */
						do_action('woocommerce_after_shop_loop');
					} else {
						/**
						 * Hook: woocommerce_no_products_found.
						 *
						 * @hooked wc_no_products_found - 10
						 */
						do_action('woocommerce_no_products_found');
					}

					/**
					 * Hook: woocommerce_after_main_content.
					 *
					 * @hooked woocommerce_output_content_wrapper_end - 10 (outputs closing divs for the content)
					 */
					do_action('woocommerce_after_main_content');
				} else if (is_single()) {
					if (have_posts()) : while (have_posts()) : the_post(); ?>
							<article id="post-<?php the_ID(); ?>">
								<header class="post-header">
									<div class="breadcrumbs">
										<?php bcn_display(); ?>
									</div>

								</header>
								<div class="entry-content" itemprop="mainContentOfPage">
									<?php
									wc_get_template_part('content', 'single-product');
									?>
								</div>
							</article>
				<?php endwhile;
					endif;
				}

				?>




				<?php ?>
			</div>
		</div>
	</div>
</div>
<?

get_footer();
