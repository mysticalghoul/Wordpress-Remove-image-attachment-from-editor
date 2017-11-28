<?php
/**
 * @package Remove Images from Editor
 * @version 0.1
 */
/*
Plugin Name: Remove Images from Editor
Plugin URI: N/A
Description: Remove Images from Editor's remove image button
Author: mysticalghoul
Version: 0.1
Author URI: https://github.com/mysticalghoul
*/
function custom_remove_atts() {  
    wp_enqueue_script( 'get_admin_script', get_site_url() . '/wp-content/plugins/Wordpress-Remove-image-attachment-from-editor-master/admin-remove-lib.js', array('jquery'), '1.0' );
    wp_register_script('get_admin_script');
}
add_action('admin_init', 'custom_remove_atts');
function remove_for_good_att($post){
    global $wpdb;
    $att_id = $_POST['attid'];
    if( current_user_can('administrator') ) {
            wp_delete_attachment( $att_id, true );
            print $att_id;
        }
    die();
}
add_action('wp_ajax_remove_for_good_att', 'remove_for_good_att');
