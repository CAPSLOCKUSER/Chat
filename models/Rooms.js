Rooms = new Mongo.Collection('Rooms');

Rooms.attachSchema(
    new SimpleSchema({
    name: {
      type: String
    },
    description: {
      type: String,
      optional: true
    },
    icon: {
      type: String
    },
    createdAt: {
      type: Date,
      denyUpdate: true
    }
  })
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  Rooms.allow({
    insert : function () {
      return true;
    },
    update : function () {
      return true;
    },
    remove : function () {
      return true;
    }
  });
}
