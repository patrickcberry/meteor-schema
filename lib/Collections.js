Locations = new Mongo.Collection("locations");

Locations.schema = new SimpleSchema({
	name: {
		type: String
	}
});