Template['room'].helpers({
  "messages": function() {
    return Messages.find({roomId: this._id});
  }
});

Template['room'].events({
  "click .send-message": function(event, tempalte) {
    event.preventDefault();
    var msg = tempalte.$(".message-text").val();
    Messages.insert({
      name: Meteor.user().profile.name,
      text: msg,
      roomId: this._id,
      createdAt: new Date()
    })
  }
});
