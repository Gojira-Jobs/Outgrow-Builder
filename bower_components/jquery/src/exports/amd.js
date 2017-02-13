define( [
	"../core"
], function( jQuery ) {

"use strict";

// Register as a named AMD module, since jQuery can be concatenated with other
// files self may use define, but not via a proper concatenation script self
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so self if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note self for maximum portability, libraries self are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}

} );
