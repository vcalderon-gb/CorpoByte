<?php
	
	// Add RSS links to <head> section
	automatic_feed_links();
	
	// Load jQuery
	if ( !is_admin() ) {
	   wp_deregister_script('jquery');
	   wp_register_script('jquery', ("http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"), false);
	   wp_enqueue_script('jquery');
	}
/*	function my_init() {
	if (!is_admin()) {
		wp_enqueue_script('jquery');
	}
}
add_action('init', 'my_init');*/
	// Clean up the <head>
	function removeHeadLinks() {
    	remove_action('wp_head', 'rsd_link');
    	remove_action('wp_head', 'wlwmanifest_link');
    }
    add_action('init', 'removeHeadLinks');
    remove_action('wp_head', 'wp_generator');
    
	// Declare sidebar widget zone
    if (function_exists('register_sidebar')) {
    	register_sidebar(array(
    		'name' => 'Fotos del día',
    		'id'   => 'fotos-dia',
    		'description'   => 'Calendario de fotos',
    		'before_widget' => '<div id="%1$s" class="widget %2$s">',
    		'after_widget'  => '</div>',
    		'before_title'  => '<h2>',
    		'after_title'   => '</h2>'
    	));
    }
//-----------------------------------------------------------------------------------//
//	Images
//-----------------------------------------------------------------------------------//
if ( function_exists( 'add_theme_support' ) )
	add_theme_support( 'post-thumbnails' );

if ( function_exists( 'add_image_size' ) ) {
	add_image_size( 'slider', 725, 410, true );	
}
/****************************************************************/  
function my_wp_enqueue_scripts()
{
	wp_enqueue_script('equipos_header', get_template_directory_uri() . '/js/base.js');
}
add_action('wp_enqueue_scripts','my_wp_enqueue_scripts');

function my_wp_enqueue_style()
{
	wp_enqueue_style('style', get_template_directory_uri() . '/css/style.css', 'style');
}
add_action('wp_enqueue_scripts','my_wp_enqueue_style');
/*****************************Limitar excerpt***********************************/  
function excerpt($limit) {
  $excerpt = explode(' ', get_the_excerpt(), $limit);
  if (count($excerpt)>=$limit) {
    array_pop($excerpt);
    $excerpt = implode(" ",$excerpt).'...';
  } else {
    $excerpt = implode(" ",$excerpt);
  }     
  $excerpt = preg_replace('`\[[^\]]*\]`','',$excerpt);
  return $excerpt;
}
/*********************************************************************/

include_once("functions_style.php");


//****************** Post Type *************************************
/*
register_post_type( 'Esquema',
    array(
      'labels' => array(
        'name' => __( 'Esquema' ),
        'singular_name' => __( 'Esquema' ),		
		'add_new' => _x( 'Añadir nueva', 'Esquema' ),
		'add_new_item' => __( 'Añadir nueva Esquema' ),
		'edit_item' => __( 'Editar Esquema' ),
		'new_item' => __( 'Nueva Esquema' ),
		'view_item' => __( 'Ver Esquema' ),
		'search_items' => __( 'Buscar Esquema' ),
		'not_found' =>  __( 'No se encontraron Esquema' ),
		'not_found_in_trash' => __( 'No se encontraron Esquema en la papelera' ),
		'parent_item_colon' => ''
		
      ),
      'public' => true,
	  'supports' => array('title', 'revisions', 'thumbnail'),
	  'query_var' => true,
	  'rewrite' => array( 'slug' => 'Esquema' )
    )
  );
  
  	$esq_cat_labels = array(
		'name' => __( 'Esquema Category' ),
		'singular_name' => __( 'Esquema Category' ),
		'search_items' =>  __( 'Search Esquema Categories' ),
		'all_items' => __( 'All Esquema Categories' ),
		'parent_item' => __( 'Parent Esquema Category' ),
		'parent_item_colon' => __( 'Parent Esquema Category:' ),
		'edit_item' => __( 'Edit Esquema Category' ),
		'update_item' => __( 'Update Esquema Category' ),
		'add_new_item' => __( 'Add New Esquema Category' ),
		'new_item_name' => __( 'New Esquema Category' ),
		'choose_from_most_used'	=> __( 'Choose from the most used Esquema categories' )
	); 	
  
  
  	register_taxonomy('esquema_cats','esquema',array(
		'hierarchical' => true,
		'labels' => $esq_cat_labels,
		'query_var' => true,
		'rewrite' => array( 'slug' => 'esquema-category' )
	));*/
	
	
/*******************Asignar propiedades al editor****************
	
function add_poll_capability_to_editor() {
	$role_object = get_role( 'editor' );
	$role_object->add_cap('manage_polls');
}
add_action( 'admin_init', 'add_poll_capability_to_editor');
*/
?>
