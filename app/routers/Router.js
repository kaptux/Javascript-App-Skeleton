/**
 * Backbone Primary Router
 * 
 * @langversion JavaScript
 * 
 * @author Christopher Pappas
 * @since  Month 00, 2012
 */

var application = require('Application');

module.exports = Backbone.Router.extend({

	//--------------------------------------
  	//+ Routes
  	//--------------------------------------
  	
  	routes: {
    	'': 'home'
  	},

  	//--------------------------------------
  	//+ Route Handlers
  	//--------------------------------------

  	home: function() {
    	$( 'body' ).html( application.homeView.render().el );
  	}
});
