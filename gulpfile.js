var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

var paths = {
	'jquery': 'vendor/bower_components/jquery',
	'bootstrap': 'vendor/bower_components/bootstrap-sass-official',
	'fontawesome': 'vendor/bower_components/fontawesome'
};

elixir(function (mix) {
	mix.sass('main.scss');

	// Merge vendor scripts
	mix.scripts([
		paths.jquery    + '/dist/jquery.js',
		paths.bootstrap + '/assets/javascripts/bootstrap.js'
	], 'public/js/vendor.js', __dirname + '/');

	mix.scripts([
		'assets/js/*'
	], 'public/js/app.js', __dirname + '/resources/');

	// Copying fonts
	mix.copy(paths.bootstrap   + '/assets/fonts/bootstrap/**',  'public/fonts')
	   .copy(paths.fontawesome + '/fonts/**',                   'public/fonts');
});
