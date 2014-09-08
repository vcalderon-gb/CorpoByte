<?php get_header();
$cat_name=single_cat_title("",false);
$cat_id = get_cat_id( $cat_name );
$id_ances=get_ancestors($cat_id, 'category');
$title_ances=get_cat_name($id_ances[0]);
 ?>
<section class="container">
	
    
    <section class="contenido_izq">
    		<h2>Error 404 - Page Not Found</h2>
    </section>
    
   <?php get_sidebar(); ?>

</section>


<?php get_footer(); ?>