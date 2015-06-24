Messages = new Mongo.Collection('Messages');

Messages.attachSchema(
    new SimpleSchema({
    name: {
      type: String
    },
    text: {
      type: String
    },
    roomId: {
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
  Messages.allow({
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
