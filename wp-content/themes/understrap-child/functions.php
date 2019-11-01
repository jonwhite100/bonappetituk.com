<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function understrap_remove_scripts() {
    wp_dequeue_style( 'understrap-styles' );
    wp_deregister_style( 'understrap-styles' );

    wp_dequeue_script( 'understrap-scripts' );
    wp_deregister_script( 'understrap-scripts' );

    // Removes the parent themes stylesheet and scripts from inc/enqueue.php
}
add_action( 'wp_enqueue_scripts', 'understrap_remove_scripts', 20 );

add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {

	// Get the theme data
	$the_theme = wp_get_theme();
    wp_enqueue_style( 'child-understrap-styles', get_stylesheet_directory_uri() . '/css/child-theme.min.css', array(), $the_theme->get( 'Version' ) );
    wp_enqueue_script( 'jquery');
	wp_enqueue_script( 'popper-scripts', get_template_directory_uri() . '/js/popper.min.js', array(), false);
    wp_enqueue_script( 'child-understrap-scripts', get_stylesheet_directory_uri() . '/js/child-theme.min.js', array(), $the_theme->get( 'Version' ), true );
    if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
        wp_enqueue_script( 'comment-reply' );
    }
}

function add_child_theme_textdomain() {
    load_child_theme_textdomain( 'understrap-child', get_stylesheet_directory() . '/languages' );
}
add_action( 'after_setup_theme', 'add_child_theme_textdomain' );

/**
* BPM  add an images directory
**/
define ( 'TEMPPATH', get_bloginfo ('stylesheet_directory')); define ( 'IMAGES', TEMPPATH . "/images");

/**
* BPM Add an addition menu location
**/
function register_my_menu() {
    register_nav_menu('footer-menu',__( 'Footer Menu' ));
}
add_action( 'init', 'register_my_menu' );

/**
* BPM add from Display Posts plugin

* Display Posts - current-list-item class
* @see https://displayposts.com/2019/08/20/add-class-to-current-post-for-styling/
*
* @param array $classes
* @param object $post
* @return array $classes
*/
function be_dps_current_class( $classes, $post ) {
	if( is_singular() && $post->ID === get_queried_object_id() ) {
		$classes[] = 'current-list-item-jonso100';
	}
	return $classes;
}
add_filter( 'display_posts_shortcode_post_class', 'be_dps_current_class', 10, 2 );


/**
* Overriding the function in understrap/inc/setup.php
*/
add_filter( 'wp_trim_excerpt', 'understrap_all_excerpts_get_more_link' );

if ( ! function_exists( 'understrap_all_excerpts_get_more_link' ) ) {
	/**
	 * Adds a custom read more link to all excerpts, manually or automatically generated
	 *
	 * @param string $post_excerpt Posts's excerpt.
	 *
	 * @return string
	 */
	function understrap_all_excerpts_get_more_link( $post_excerpt ) {
		if ( ! is_admin() ) {
			$post_excerpt = $post_excerpt . ' [...]<p><a class="btn circle border btn-sm" href="' . esc_url( get_permalink( get_the_ID() ) ) . '">' . __( 'Read More',
			'understrap' ) . '</a></p>';
		}
		return $post_excerpt;
	}
}
