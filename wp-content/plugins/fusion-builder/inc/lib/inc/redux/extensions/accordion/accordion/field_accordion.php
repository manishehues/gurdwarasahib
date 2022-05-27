<?php

	/**
	 * @package     FusionRedux Framework
	 * @subpackage  Accordion field
	 * @author      Kevin Provance (kprovance)
	 * @version     1.0.1
	 */

// Exit if accessed directly
	if ( ! defined( 'ABSPATH' ) ) {
		exit;
	}

// Don't duplicate me!
	if ( ! class_exists( 'FusionReduxFramework_accordion' ) ) {

		/**
		 * Main FusionReduxFramework_multi_media class
		 *
		 * @since       1.0.0
		 */
		class FusionReduxFramework_accordion {

			private $parent;
			private $field;
			private $value;
			private $extension_dir = '';
			private $extension_url = '';

			/**
			 * Class Constructor. Defines the args for the extions class
			 *
			 * @since       1.0.0
			 * @access      public
			 *
			 * @param       array $field  Field sections.
			 * @param       array $value  Values.
			 * @param       array $parent Parent object.
			 *
			 * @return      void
			 */
			public function __construct( $field = array(), $value = '', $parent = null ) {

				// Set required variables
				$this->parent = $parent;
				$this->field  = $field;
				$this->value  = $value;

				// Set extension dir & url
				if ( empty( $this->extension_dir ) ) {
					$this->extension_dir = trailingslashit( str_replace( '\\', '/', dirname( __FILE__ ) ) );
					$this->extension_url = trailingslashit( FUSION_LIBRARY_URL ) . 'inc/redux/extensions/accordion/accordion/';
					// $this->extension_url = site_url( str_replace( trailingslashit( str_replace( '\\', '/', ABSPATH ) ), '', $this->extension_dir ) );
				}
			}

			/**
			 * Field Render Function.
			 * Takes the vars and outputs the HTML for the field in the settings
			 *
			 * @since       1.0.0
			 * @access      public
			 * @return      void
			 */
			public function render() {
				$defaults    = array(
					'position'  => '',
					'style'     => '',
					'class'     => '',
					'title'     => '',
					'subtitle'  => '',
					'open'      => '',
					'open-icon' => 'el-plus',
					'close-icon' => 'el-minus'
				);
				$this->field = wp_parse_args( $this->field, $defaults );

				$guid = uniqid();

				$field_id = $this->field['id'];
				$dev_mode = $this->parent->args['dev_mode'];
				$opt_name = $this->parent->args['opt_name'];
				$dev_tag  = '';

				// Set dev_mode data, if active.
				if ( true == $dev_mode ) {
					$dev_tag = ' data-dev-mode="' . $this->parent->args['dev_mode'] . '"
							data-version="' . FusionReduxFramework_extension_accordion::$version . '"';
				}

				// primary container
				$add_class = '';
				$add_class = " hide";
				$field_pos = 'end';
				if ( isset( $this->field['position'] ) && 'start' === $this->field['position'] ) {
					$add_class = ' form-table-accordion';
					$field_pos = 'start';
				}

				echo '<input type="hidden" id="accordion-' . $this->field['id'] . '-marker" data-open-icon="' . $this->field['open-icon'] . '" data-close-icon="' . $this->field['close-icon'] . '"></td></tr></table>';

				$is_open = false;
				if (isset($this->field['open']) && $this->field['open'] == true) {
					$is_open = true;
				}

				echo '<div ' . $dev_tag . ' data-state="' . $is_open . '" data-position="' . $field_pos . '" id="' . $this->field['id'] . '" class="fusionredux-accordion-field fusionredux-field ' . $this->field['style'] . $this->field['class'] . '">';
				echo '<div class="control">';
				echo '<div class="fusionredux-accordion-info' . $add_class . '">';

				if ( ! empty( $this->field['title'] ) ) {
					echo '<h3>' . $this->field['title'] . '</h3>';
				}

				$icon_class = '';
				if ( ! empty( $this->field['subtitle'] ) ) {
					echo '<div class="fusionredux-accordion-desc">' . $this->field['subtitle'] . '</div>';
					$icon_class = ' subtitled';
				}
				if ( ! empty( $this->field['highlight'] ) ) {
					echo '<div class="fusionredux-element-highlight">' . $this->field['highlight'] . '</div>';
				}

				echo '<span class="el el-plus' . $icon_class . '"></span>';
				echo '</div>';
				echo '</div>';
				echo '</div>';
				echo '<table id="accordion-table-' . $this->field['id'] . '" data-id="' . $this->field['id'] . '" class="form-table form-table-accordion no-border' . $add_class . '"><tbody><tr class="hide"><th></th><td id="' . $guid . '">';

			}

			/**
			 * Enqueue Function.
			 * If this field requires any scripts, or css define this function and register/enqueue the scripts/css
			 *
			 * @since       1.0.0
			 * @access      public
			 * @return      void
			 */
			public function enqueue() {
				$extension = FusionReduxFramework_extension_accordion::getInstance();

				// Set up min files for dev_mode = false.
				$min = FusionRedux_Functions::isMin();

				// Field dependent JS
				wp_enqueue_script(
					'fusionredux-field-accordion-js',
					$this->extension_url . 'field_accordion' . $min . '.js',
					array( 'jquery' ),
					time(),
					true
				);

				// Field CSS
				wp_enqueue_style(
					'fusionredux-field-accordion-css',
					$this->extension_url . 'field_accordion.css',
					time(),
					true
				);
			}
		}
	}
