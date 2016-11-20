Router.configure({
	layoutTemplate: 'main'
});

Router.route('/', 'posts');

Router.route('/posts/:_id', function () {
	  var item = Posts.findOne({_id: this.params._id});
	  this.render('post', {data: item});
	}, {
	  name: 'post.show'
	}
);

Router.route('/methods/', 'methodPosts');

Router.route('/methods/posts/:_id', function () {
	  var item = MethodPosts.findOne({_id: this.params._id});
	  this.render('mpost', {data: item});
	}, {
	  name: 'mpost.show'
	}
);