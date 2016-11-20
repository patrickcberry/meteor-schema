Posts = new Mongo.Collection('posts');
MethodPosts = new Mongo.Collection('methodPosts');

Schemas = {};

Posts.attachSchema(new SimpleSchema({
	title: {
		type: 		String,
		label: 		"Title",
		max: 		200
	},
	content: {
		type: 		String, 
		label: 		"Content"
	},
	category: {
		type: 		String,
		label: 		"Category",
		allowedValues: ['business', 'health', 'finance'],
	    autoform: {
	      options: [
	        {label: "Business", value: "business"},
	        {label: "Health", value: "health"},
	        {label: "Finance", value: "finance"}
	      ]
	    }
	},
	userId: {
		type: 			String,
		label: 			"Title",
		defaultValue: 	"default-value" 
	},
	tags: {
		type: 			[String],
		label: 			"Tags",
		optional: 		true
	}
}));

Schemas.MethodPosts = new SimpleSchema({
	title: {
		type: 		String,
		label: 		"Title",
		max: 		200
	},
	content: {
		type: 		String, 
		label: 		"Content"
	},
	category: {
		type: 		String,
		label: 		"Category",
		allowedValues: ['business', 'health', 'finance'],
	    autoform: {
	      options: [
	        {label: "Business", value: "business"},
	        {label: "Health", value: "health"},
	        {label: "Finance", value: "finance"}
	      ]
	    }
	},
	userId: {
		type: 			String,
		label: 			"User ID",
		defaultValue: 	"default-value" 
	},
	tags: {
		type: 			[String],
		label: 			"Tags",
		optional: 		true
	}
});

MethodPosts.attachSchema( Schemas.MethodPosts );

if (Meteor.isServer){
	Meteor.publish('posts', function() {
		return Posts.find({});
	});
	Meteor.publish('methodPosts', function() {
		return MethodPosts.find({});
	});	
}


if (Meteor.isClient){
	Meteor.subscribe('posts');
	Meteor.subscribe('methodPosts');
}

Posts.allow({
	update: function( userId, doc ) {
		return doc && doc.userId === userId;
	},
	insert: function( userId, doc ) {
		return doc && doc.userId === userId;
	}	
});


MethodPosts.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

