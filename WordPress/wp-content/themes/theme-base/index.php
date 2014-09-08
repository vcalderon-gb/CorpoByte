<?php
$style_web=new style_web;
?>
<?php get_header(); ?>
<section class="container">
	<section class="destacados_home">
		<?php if ( function_exists('show_skitter') ) { show_skitter(); } ?>

    </section>
    
    <section class="contenido_izq">
    	<?php $style_web->noticias("noticias"); ?>
    </section>
    
   <?php get_sidebar(); ?>

</section>


<?php get_footer(); ?>