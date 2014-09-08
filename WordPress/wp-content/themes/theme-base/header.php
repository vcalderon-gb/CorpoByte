<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>" />
	
	<?php if (is_search()) { ?>
	   <meta name="robots" content="noindex, nofollow" /> 
	<?php } ?>

	<title>
		   <?php
		      if (function_exists('is_tag') && is_tag()) {
		         single_tag_title("Tag Archive for &quot;"); echo '&quot; - '; }
		      elseif (is_search()) {
		         echo 'B&uacute;squeda para &quot;'.wp_specialchars($s).'&quot; - '; }
		      elseif (!(is_404()) && (is_single()) || (is_page())) {
		         wp_title('');
				   }
		      elseif (is_404()) {
		         echo 'Not Found - '; }
		      if (is_home()) {
		         bloginfo('name'); echo ' - '; bloginfo('description'); }
		      else {
				  if(is_page_template('page-home.php')) 
				  {
		          bloginfo('name'); echo " - "; bloginfo('description');
				  }
				  else
		          {echo ' - '; bloginfo('name'); }
			  }
		      if ($paged>1) {
		         echo ' - page '. $paged; }
		   ?>
	</title>
	
	<link rel="shortcut icon" href="<?php bloginfo('template_url'); ?>/favicon.ico">
	<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
	
	<?php wp_head(); ?>

</head>

<body>
<?php 
echo get_option('home'); 
bloginfo('template_url'); 
$style_web=new style_web; 
$style_web->menu_header(); 
?>