var postHooks = {

	// On successful update, return to the main posts page

	onSuccess: function(formType, result) {
		console.log('MethodPostsUpdate > onSuccess');
		Router.go('/methods/');
	},

	// Capture error condition - should do something with it

	onError: function(formType, error) {
		console.log('MethodPostsUodate > onError');
	}
};

AutoForm.addHooks('updateMethodPostForm', postHooks);
