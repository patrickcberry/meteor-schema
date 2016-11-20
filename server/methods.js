Meteor.methods({

	methodPostsInsert: function (doc) {

		// Processing before insert - repeats that done on the client side in this case
		if ( Meteor.user() ){
			doc.userId = Meteor.user()._id;
		} else {
			doc.userId = undefined;	
		}

		// check valid
		check(doc, Schemas.MethodPosts );		

		// check logged in
		if ( Meteor.user() ) {
			return MethodPosts.insert(doc);
		} else {
			return false;
		}
	},

	methodPostsUpdate: function (doc, id) {

		// check valid
		check(doc, Schemas.MethodPosts );			

		if ( Meteor.user() ){
			if ( MethodPosts.update({_id: id}, doc) > 0 ) {
				// Insert successful
				return true;
			} else {
				throw new Meteor.error(500, 'Failed to update MongoDB');
			}
		} else {
			throw new Meteor.error(500, 'Need to be a logged in user to update records');
		}
	}	
});