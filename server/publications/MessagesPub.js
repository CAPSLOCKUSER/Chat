Meteor.publish('Messages', function (roomId) {
  check(roomId, String);
  return Messages.find({roomId: roomId});
});
