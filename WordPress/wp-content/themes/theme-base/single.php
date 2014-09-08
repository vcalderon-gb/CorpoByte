<?php get_header(); ?>
<?php if (have_posts()) : while (have_posts()) : the_post();
$post_id=get_the_ID();
$datav = get_post_meta($post_id, "video", true);
 if ( has_post_thumbnail() ) 
 {
	 $imagen_id=get_post_thumbnail_id(); 
	 $img=wp_get_attachment_image_src($imagen_id,'single'); 
 }
else
{

   $args = array(
   'post_type' => 'attachment',
   'numberposts' => 1,
   'post_status' => null,
   'post_parent' => $post_id
  );
$attachments = get_posts( $args );
 if ( $attachments ) {
	foreach ( $attachments as $attachment ) {
	   $img=wp_get_attachment_image_src($attachment->ID,'noticias'); 
	  }
 }
}
 $style_web=new style_web;
 ?>
<section class="container">
    <section class="contenido_izq">
    	<article class="noticias_internas">
            <div class="noticias_redes">
				<?php 
					if(function_exists('dd_digg_generate'))
					{
						dd_google1_generate('Compact (24px)');
						dd_twitter_generate('Compact','liderendeportes');
						dd_fbshare_generate('Compact');			
					}
			     ?>
             </div>
            <h1><?php the_title(); ?></h1>
            <h2 class="fe_single"><?php the_date(); ?></h2>

            <img src="<?php echo $img[0] ?>" width="656" height="370" />

            <div class="texto_noticia"><?php the_content(); ?></div>
         </article>
    </section>
<?php endwhile; endif; ?>
   <?php get_sidebar(); ?>
</section>

<?php get_footer(); ?>