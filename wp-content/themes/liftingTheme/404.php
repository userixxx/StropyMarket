<?php get_header(); ?>

<div class="container">
    <div class="row">                
        <div class="col-xxl-12">
            <div class="content not-found">


            <article id="post-<?php the_ID(); ?>">
                <header class="post-header">
                    <div class="breadcrumbs">
                    <?php bcn_display();?>
                    </div>
                    <h1 class="page-title" itemprop="name">К сожалению, указанная страница не найдена.</h1>
                </header>
                <div class="entry-content" itemprop="mainContentOfPage">                    
                    <p>Перейдите в <a href="/shop/">каталог товаров</a> или свяжитесь с нами.</p>
                </div>
                </article>
            </div>
        </div>
    </div>
</div>


<?php get_footer(); ?>