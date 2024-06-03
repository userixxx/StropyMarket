<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet">

    <link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/css/style.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/css/media.css">
    <?php wp_head(); ?>
</head>

<body class="page-home">
    <header class="header">
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarHeader">
                    <div class="navbar-nav me-auto">
                        <?php wp_nav_menu( array( 'theme_location' => 'main-menu', 'link_before' => '<span itemprop="name">', 'link_after' => '</span>' ) ); ?>
                    </div>
                    <div class="header__contacts">
                        <div class="phone">
                            <a href="tel:89187225056"><img src="<?php echo get_template_directory_uri();?>/images/phone.png" alt=""> 8(918)722-50-56</a>
                        </div>
                        <div class="email">
                            <a href="mailto:romserenkov@gmail.com"><img src="<?php echo get_template_directory_uri();?>/images/email.png" alt=""> romserenkov@gmail.com</a>
                        </div>
                    </div>
                    <div class="header__callback">
                        <a href="#" class="btn btn_style_1 popup-open">Заказать звонок</a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    <main>