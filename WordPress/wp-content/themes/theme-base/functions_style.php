<?php
class style_web{
/************************************************************************/
function menu_header()
{
	wp_nav_menu(array('menu'=>'Header','menu_class'=> 'list-inline','container'=> false,));
}

/************************************************************************/
function noticias($cat_name)
{
		$cat_id = get_cat_id( $cat_name );
		global $paged;
		$cat_id1 = get_cat_id("esquema");
		$cat_id2 = get_cat_id("Once Ideal");
		if ( is_home() ) 
		$cat_id3 = get_cat_id("Slider");
		$arr_prensa=array( 
		'posts_per_page' => '20',
		'showposts' => '20',
		'post_type' => 'post',
		'order' => 'DESC',
		'category__and' => array( $cat_id ),
		'category__not_in' => array( $cat_id1, $cat_id2, $cat_id3 ),
		'orderby' => 'DATE',
		'paged' => $paged
		 );
			$wp_query_prensa= new WP_Query( $arr_prensa );
		 if ($wp_query_prensa->have_posts()) 
		 {
			 while ($wp_query_prensa->have_posts())
			 {
				 $wp_query_prensa->the_post();
				 if ( has_post_thumbnail() ) 
				 {
					 $imagen_id=get_post_thumbnail_id(); 
					 $img=wp_get_attachment_image_src($imagen_id,'noticias'); 
				 }
				  else
				  {
					  $post_id=get_the_ID();
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
				  $title=get_the_title();
				  $extracto1=get_the_excerpt();
				  $pos = strpos($extracto1, ".");
				  $extracto = substr($extracto1, 0,$pos); 
				  if($pos === false || $pos<15)
				  $extracto=excerpt(25);
				  $link=get_permalink();
				  $date=get_the_time('d-m-Y'); 
				  $cat=get_the_category();
				  $id=get_cat_id($idgrup[$i]);
			      $url[$i]=get_category_link($id);
				  $estadio[12]=esc_url(get_permalink( get_page_by_title( 'Arena de Sao Paulo ' ) ) );
				  $category_name=$cat[0]->name;
				  $category_id=$cat[0]->cat_ID;
				  $url1=esc_url( get_permalink( get_page_by_title( 'Iframe' ) ) );
				  $datav = get_post_meta(get_the_ID(), "video", true);
				  preg_match('/[\\?\\&]v=([^\\?\\&]+)/',$datav,$matches);
				  $params = array( 'id' => $matches[1] );
				  $urll2 = add_query_arg( $params, $url1 );
				  if($category_name=="Noticias")
				  {
					  	$category_name=$cat[1]->name;
				  		$category_id=$cat[1]->cat_ID;
				  }
				  $category_link=get_category_link($category_id);
				  echo '<article class="lista_noticias">
					<a href="'.$link.'" class="link_img"><img src="'.$img[0].'" alt="'.$title.'"></a>
					<div class="lista_texto">
						<h3><a href="'.$category_link.'">'.$category_name.'</a></h3>
						<h2><a href="'.$link.'">'.$title.'</a></h2>
						<p>'.$extracto.'</p>
					</div>
				</article>';
			 }
		 }
		 if( function_exists( 'wp_pagenavi' ) ){
 		 wp_pagenavi( array( 'query' => $wp_query_prensa ) );
			} 
			wp_reset_postdata();
}

/************************************************************************/
function iframe_video($id)
{
	$video=get_post_meta($id, "video", true);
	echo $this->embed_video($video,640,480);
}
//**********************************************************************
function embed_video($video,$width,$height)
{
	$a=explode('width="',$video);
	$b=explode('" ',$a[1]);
	$i=1;
	while($b[$i])
	{
	$b_r.='" '.$b[$i];
	$i++;
	}
	$c=$a[0].'width="'.$width.$b_r;
	$aa=explode('height="',$c);
	$bb=explode('" ',$aa[1]);
	$i=1;
	while($bb[$i])
	{
	$bb_r.='" '.$bb[$i];
	$i++;
	}
	$video_embed=$aa[0].'height="'.$height.$bb_r;
	$eliframe=explode('</iframe>',$video_embed);
	$video_embed=$eliframe[0].'</iframe>';
    return $video_embed;
}

/******************************************************************/
}
?>