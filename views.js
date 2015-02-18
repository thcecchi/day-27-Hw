// Model View

var PostView = Backbone.View.extend({
  template: _.template($('#postTmpl').html()),
  tagName: 'article class="large-4 columns"',
  initialize: function () {
    console.log(this.el)
  },
  events: {
    'click .deletePost': 'removePost',
    'click .editPost': 'showEdit',
    'click .sendEdit': 'editPost'
  },
  showEdit: function () {
    this.$el.find('.editPost').hide();
    // this.$el.find('#mainContent').hide();

    this.$el.find('.sendEdit').show();
    this.$el.find('#updatePost').show();
  },
  render: function () {
    console.log(this.el);
    var markup = this.template(this.model.toJSON())
    this.$el.html(markup)

    return this;
  },
  removePost: function () {
    this.model.destroy();
    this.$el.remove()
  },
  editPost: function (e) {
    e.preventDefault()
    this.model.set({
      title: this.$el.find('input[name="editTitle"]').val(),
      img: this.$el.find('input[name="editImg"]').val(),
      content: this.$el.find('textarea[name="editContent"]').val(),
      director: this.$el.find('input[name="editDirector"]').val()
    })
    this.model.save();

    $('.editPost').show();
    // $('#mainContent').show();

    $('.sendEdit').hide();
    $('#updatePost').hide();
  }
});

//Collection View

var AppView = Backbone.View.extend({
  el: $('section'),
  initialize: function () {
    console.log('app view initialized')
    this.addAllPost();
  },
  events: {
    'click .createPost': 'createPost',
    'click .showCreate': 'showCreate',
    'click .sendEdit': 'editPostCollection'
  },
  showCreate: function () {
    this.$el.find('#createPost').toggleClass('show')
  },
  createPost: function (e) {
    e.preventDefault();
    var newPost = {
      title: $('#createPost').find('input[name="newTitle"]').val(),
      img: $('#createPost').find('input[name="newImg"]').val(),
      content: $('#createPost').find('textarea[name="newContent"]').val(),
      director: $('#createPost').find('input[name="newDirector"]').val()
    };

    var newModelPost = new PostModel(newPost)
    newModelPost.save();
    this.collection.add(newModelPost)
    this.$el.find('article').remove();
    this.addAllPost();
    // this.addOnePost(newModelPost); // alternative method
    this.$el.find('#createPost').find('input', 'textarea').val('');
    this.showCreate();
  },
  editPostCollection: function() {
    this.$el.find('article').remove();
    this.addAllPost();
    console.log('reset')

  },
  addOnePost: function (post, idx, arr) {
    var postView = new PostView({model: post})
    this.$el.append(postView.render().el)
  },
  addAllPost: function () {
    _.each(this.collection.models, this.addOnePost, this)
  }
});
