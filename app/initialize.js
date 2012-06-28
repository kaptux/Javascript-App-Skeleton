
/**
 * Application Initializer
 * 
 * @langversion JavaScript
 * 
 * @author Christopher Pappas
 * @since  Month 00, 2012
 */

var application = require('Application');

$(function() {

	// Initialize Application
	application.initialize();

	// Start Backbone router
  	Backbone.history.start();
});
