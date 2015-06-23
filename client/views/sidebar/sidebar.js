Template['sidebar'].helpers({
  "appName": function() {
    return Meteor.App.NAME;
  },
  "rooms": function() {
    return Rooms.find();
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
    Rooms.insert({
      "name": "okokok",
      "description": "room about cats",
      "createdAt": new Date()
    });
  }
});
