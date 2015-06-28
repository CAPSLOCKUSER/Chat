Template['room'].helpers({
  "messages": function() {
    return Messages.find({roomId: this._id}, {sort: {createdAt: 1}});
  }
});

Template['room'].events({
  "submit .send-message": function(event, template) {
    event.preventDefault();
    var text = template.$(".message-text").val();
    if (!text.length) {
      return;
    }
    var msg = {
      name: Meteor.user().profile.name,
      text: text,
      roomId: this._id,
      createdAt: new Date()
    };
    Messages.insert(msg);
    template.$(".message-text").val("")
  }
});
