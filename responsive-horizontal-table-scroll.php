<?php

/**
 * Plugin Name: Responsive Horizontal Table Scroll
 * Description: Automatically wraps all WordPress tables in a scrollable container and adds an animated arrow to indicate horizontal scrolling on mobile.
 * Version: 1.0
 * Author: Peyman Farahani
 * Author URI: https://peymanfarahani.com
 * License: GPLv2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: responsive-horizontal-table-scroll
 */

if (! defined('ABSPATH')) exit;

function rhts_enqueue_scripts()
{
    wp_enqueue_style(
        'rhts-style',
        plugin_dir_url(__FILE__) . 'assets/css/style.css',
        array(),
        '1.0'
    );

    wp_enqueue_script(
        'rhts-script',
        plugin_dir_url(__FILE__) . 'assets/js/script.js',
        array(),
        '1.0',
        true
    );
}
add_action('wp_enqueue_scripts', 'rhts_enqueue_scripts');
