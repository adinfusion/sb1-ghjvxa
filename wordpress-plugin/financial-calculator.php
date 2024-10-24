<?php
/*
Plugin Name: Financial Advisor Calculator
Description: Embeddable ROI calculator for financial advisors
Version: 1.0
*/

function financial_calculator_shortcode($atts) {
    // Generate a unique ID for this instance
    $unique_id = 'financial-calculator-' . uniqid();
    
    // Enqueue React and ReactDOM from CDN
    wp_enqueue_script(
        'react',
        'https://unpkg.com/react@18/umd/react.production.min.js',
        [],
        '18.0.0',
        true
    );
    
    wp_enqueue_script(
        'react-dom',
        'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
        ['react'],
        '18.0.0',
        true
    );
    
    // Enqueue our calculator assets
    wp_enqueue_script(
        'financial-calculator',
        plugins_url('assets/financial-calculator.js', __FILE__),
        ['react', 'react-dom'],
        '1.0',
        true
    );
    
    wp_enqueue_style(
        'financial-calculator-styles',
        plugins_url('assets/financial-calculator.css', __FILE__),
        [],
        '1.0'
    );
    
    // Initialize the calculator
    wp_add_inline_script('financial-calculator', "
        document.addEventListener('DOMContentLoaded', function() {
            if (window.initFinancialCalculator) {
                window.initFinancialCalculator('$unique_id');
            }
        });
    ");
    
    // Return the container div with a wrapper for styling isolation
    return "<div class='financial-calculator-wrapper'><div id='$unique_id'></div></div>";
}

add_shortcode('financial_calculator', 'financial_calculator_shortcode');

// Add wrapper styles to isolate calculator styles from theme
function financial_calculator_wrapper_styles() {
    echo "
    <style>
        .financial-calculator-wrapper {
            all: initial;
            font-family: system-ui, -apple-system, sans-serif;
        }
        .financial-calculator-wrapper * {
            box-sizing: border-box;
        }
    </style>
    ";
}
add_action('wp_head', 'financial_calculator_wrapper_styles');