/**
 * View Base Class
 * 
 * @langversion JavaScript
 * 
 * @author Christopher Pappas
 * @since  Month 00, 2012
 */

require('helpers/ViewHelper');

module.exports = Backbone.View.extend({

  //--------------------------------------
  //+ PUBLIC PROPERTIES / CONSTANTS
  //--------------------------------------

  /*
   * @private
   */
  template: function() {},
  /*
   * @private
   */
  getRenderData: function() {},

  //--------------------------------------
  //+ INHERITED / OVERRIDES
  //--------------------------------------
  
  /*
   * @private
   */
  initialize: function() {
    this.render = _.bind(this.render, this);
  },

  /*
   * @private
   */
  render: function() {
    this.$el.html( this.template( this.getRenderData() ) );
    this.afterRender();
    
    return this;
  },

  /*
   * @private
   */
  afterRender: function() {}

  //--------------------------------------
  //+ PUBLIC METHODS / GETTERS / SETTERS
  //--------------------------------------

  //--------------------------------------
  //+ EVENT HANDLERS
  //--------------------------------------

  //--------------------------------------
  //+ PRIVATE AND PROTECTED METHODS
  //--------------------------------------

});
