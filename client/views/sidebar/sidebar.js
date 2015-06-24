Template['sidebar'].helpers({
  "appName": function() {
    return Meteor.App.NAME;
  },
  "rooms": function() {
    return Rooms.find();
  },
  "active": function(event, template) {
    return "active";
  }
});

Template['sidebar'].events({
  "click .sign-out": function(event, template) {
    event.preventDefault();
    Meteor.logout(function(error) {
      if (error) {
        return console.log(error);
      }
      Router.go("home");
    });
  },
  "click .new-room": function(event, template) {
    event.preventDefault();
    var name = template.$(".new-room-name").val();
    Rooms.insert({
      "name": name,
      "icon": "apple",
      "createdAt": new Date()
    }, function(error, _id) {
      if (error) {
        return console.log(error);
      }
      template.$(".new-room-name").val("");
      Router.go("room", {_id: _id});
    });
  }
});
