<?php
/**
 * Underscore.js template.
 *
 * @since 2.0
 * @package fusion-library
 */

?>
<#
var fieldId  = 'undefined' === typeof param.param_name ? param.id : param.param_name,
	location = ( param.location ) ? param.location : '';
#>
<input
	id="{{ fieldId }}"
	name="{{ fieldId }}"
	class="fusion-builder-color-picker-hex color-picker"
	type="text"
	value="{{ option_value }}"
	data-alpha="true"
	data-location="{{ location }}"
	<# if ( param.default ) { #>
		data-default="{{ param.default }}"
	<# } #>
/>
