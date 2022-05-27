<?php

function theme_enqueue_styles() {
    wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css'  );
    wp_enqueue_style( 'fontawesome-style', 'https://cdn.staticaly.com/gh/hung1001/font-awesome-pro/4cac1a6/css/all.css', array( 'fusion-dynamic-css' )  );
    wp_enqueue_style( 'slick-style', get_stylesheet_directory_uri() . '/assets/css/slick.css', array( 'fusion-dynamic-css' ) );
    wp_enqueue_style( 'custom-style', get_stylesheet_directory_uri() . '/assets/css/custom.css', array( 'fusion-dynamic-css' ) );
    wp_enqueue_style( 'responisve-style', get_stylesheet_directory_uri() . '/assets/css/responsive.css', array( 'fusion-dynamic-css' ) );

    wp_enqueue_script( 'slick-slider-script',get_stylesheet_directory_uri() . '/assets/js/slick.min.js', array('jquery'));    
    wp_enqueue_script( 'global-script',get_stylesheet_directory_uri() . '/assets/js/global.js', array('jquery'));    
}
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles', 20 );

function avada_lang_setup() {
	$lang = get_stylesheet_directory() . '/languages';
	load_child_theme_textdomain( 'Avada', $lang );
}
add_action( 'after_setup_theme', 'avada_lang_setup' );



