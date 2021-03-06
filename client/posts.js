Template.posts.helpers({
	posts: function(){
		return Posts.find();
	}
});

var postHooks = {
	before: {

		// The userId field in the posts record is used to store the 
		// author of the post. UserId in the schema is given a default 
		// value so that it dosn't fail validation on the form. In this
		// method UserId is set to undefined if no user is logged in


		insert: function(doc){
			if ( Meteor.userId() ){
				doc.userId = Meteor.userId();
			} else {
				doc.userId = undefined;	
			}
			return doc;
		}
	},

	// Two functions below are used to pack and unpack the tags field. Tags on the 
	// form are a comma seperated string, while tags are stored as an array of strings
	// in the database


	docToForm: function(doc){
		if (_.isArray(doc.tags)){
			doc.tags = doc.tags.join(", ");
		}
		return doc;
	},
	formToDoc: function(doc){
		if (typeof doc.tags === "string") {
			doc.tags = doc.tags.split(",");
		}
		return doc;
	}
};

AutoForm.addHooks('insertPostForm', postHooks);