<?php
$style_web=new style_web;
$cat_name=single_cat_title("",false);
$cat_id = get_cat_id( $cat_name );
$id_ances=get_ancestors($cat_id, 'category');
$title_ances=get_cat_name($id_ances[0]);
?>
<?php get_header(); ?>
<section class="container">	
    
    
    <section class="contenido_izq">
    	<?php  $style_web->noticias(single_cat_title("",false)); ?>
    </section>
    
   <?php get_sidebar(); ?>

</section>


<?php get_footer(); ?>