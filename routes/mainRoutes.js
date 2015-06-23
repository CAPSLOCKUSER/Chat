// Home Route
Router.route('/', {
  name: 'home',
  action: function () {
    this.render('home');
    SEO.set({ title: 'Home - ' + Meteor.App.NAME });
  }
});

Router.route('/room/:_id?', {
  name: 'room',
  subscriptions: function() {
    return Meteor.subscribe('Rooms');
  },
  action: function () {
    this.render('room');
    SEO.set({ title: 'Room - ' + Meteor.App.NAME });
  }
});
