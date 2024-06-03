</main>
    <footer class="footer">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-2"></div>
                <div class="col-lg-4">
                <div class="footer__menu">
                        <?php wp_nav_menu( array( 'theme_location' => 'footer-menu', 'link_before' => '<span itemprop="name">', 'link_after' => '</span>' ) ); ?>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="footer__contacts">
                    <div class="phone">
                            <a href="tel:89187225056"><img src="<?php echo get_template_directory_uri();?>/images/phone.png" alt=""> 8(918)722-50-56</a>
                        </div>
                        <div class="email">
                            <a href="mailto:romserenkov@gmail.com"><img src="<?php echo get_template_directory_uri();?>/images/email.png" alt=""> romserenkov@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2"></div>
            </div>
        </div>
    </footer>



    <?php wp_footer(); ?>
    <script src="https://yandex.st/jquery/2.1.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
    <script src="<?php echo get_template_directory_uri();?>/js/scritps.js"></script>



    <!-- Modal -->
    <div class="popup-fade">
        <div class="popup">
            <div class="popup__inner">
                <a class="popup-close" href="#">+</a>
                <div class="popup__title">Отправьте заявку</div>
                <p>Если у вас есть коммерческое предложение, отправьте заявку и мы свяжемся с вами</p>
                <?php echo do_shortcode('[contact-form-7 id="3338cb0" title="Контактная форма 1"]');?>
            </div>
        </div>
    </div>
     <!--  -->

</body>

</html>