Router.configure({
  layoutTemplate: 'basicLayout',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return [
      Meteor.subscribe('Rooms')
    ];
  }
});
