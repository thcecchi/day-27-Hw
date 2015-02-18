//post model

var PostModel = Backbone.Model.extend({
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/tylerbb3',
  idAttribute: '_id',
  defaults: function () {
    return {

    };
  },
  initialize: function () {
    console.log('model was created');
  }
})
