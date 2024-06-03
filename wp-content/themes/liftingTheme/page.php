<?php get_header(); ?>

<div class="container">
    <div class="row">                
        <div class="col-xxl-12">
            <div class="content">


            <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
            <article id="post-<?php the_ID(); ?>">
                <header class="post-header">
                    <div class="breadcrumbs">
                    <?php bcn_display();?>
                    </div>
                    <h1 class="page-title" itemprop="name"><?php the_title(); ?></h1>
                </header>
                <div class="entry-content" itemprop="mainContentOfPage">                    
                    <?php the_content(); ?>                    
                </div>
                </article>
            <?php endwhile; endif; ?>
            </div>
        </div>
    </div>
</div>


<?php get_footer(); ?>