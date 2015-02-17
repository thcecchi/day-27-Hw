$(function () {
  var postCollection = new PostCollection();

  postCollection.fetch().then(function() {
    var appView = new AppView({collection: postCollection})
  });

});
