<?php
$style_web=new style_web;
$cat_name=single_cat_title("",false);
$cat_id = get_cat_id( $cat_name );
$id_ances=get_ancestors($cat_id, 'category');
$title_ances=get_cat_name($id_ances[0]);

if (function_exists('dynamic_sidebar') && dynamic_sidebar('Encuesta Widgets')) 


?>    
<aside>
    </aside>