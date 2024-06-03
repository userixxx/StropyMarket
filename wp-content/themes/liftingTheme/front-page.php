<?php get_header('front');?>
        <section class="hero">
            <div class="container">
                <div class="row">
                    <div class="col-12 my-auto">
                        <h1 class="headingLg white uc">Магазин грузоподъемного оборудования</h1>
                        <h2 class="headingSm white uc">производство грузоподъемной техники</h2>
                        <div>
                            <a href="/about-us/" class="btn btn-lg btn_style_1">Подробнее</a>
                        </div>
                    </div>
                </div><!-- close row -->
            </div><!-- close container  -->
        </section>
        <section class="ourproducts">
            <div class="container">
                <h2 class="title_section">НАША ПРОДУКЦИЯ</h2>
                <?php echo do_shortcode('[products limit="4" columns="4" orderby="popularity" class="quick-buy"]');?>
                
                <div class="text-center">
                    <a href="/shop/" class="btn btn-lg btn_style_1">Каталог</a>
                </div>
            </div>
        </section>
        <section class="why">
            <div class="container">
                <h2 class="title_section text_color_theme">ПОЧЕМУ НАС ВЫБИРАЮТ</h2>
                <div class="row resons">
                    <div class="col-lg-6">
                        <div class="item">
                            <img src="<?php echo get_template_directory_uri();?>/images/num_1.png" alt="">
                            <span>Большой ассортимент товаров</span>
                        </div>
                        <div class="item">
                            <img src="<?php echo get_template_directory_uri();?>/images/num_2.png" alt="">
                            <span>Формируем доставку</span>
                        </div>
                        <div class="item">
                            <img src="<?php echo get_template_directory_uri();?>/images/num_3.png" alt="">
                            <span>Высокое качество </span>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="item">
                            <img src="<?php echo get_template_directory_uri();?>/images/num_4.png" alt="">
                            <span>Закрытие потребности - 100%</span>
                        </div>
                        <div class="item">
                            <img src="<?php echo get_template_directory_uri();?>/images/num_5.png" alt="">
                            <span>Сертифицированная продукция</span>
                        </div>
                        <div class="item">
                            <img src="<?php echo get_template_directory_uri();?>/images/num_6.png" alt="">
                            <span>Короткие сроки</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="feedback">
            <div class="container">
                <h2 class="title_section">ОСТАВЬТЕ ЗАЯВКУ</h2>
                <p class="subtitle text-center">для оформления коммерчекого заказа</p>
                <?php echo do_shortcode('[contact-form-7 id="3338cb0" title="Контактная форма 1"]');?>
                
            </div>
        </section>
<?php get_footer('front');?>