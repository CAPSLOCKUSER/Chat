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
    return Meteor.subscribe('Messages', this.params._id);
  },
  data: function() {
    return Messages.find();
  },
  action: function () {

    this.render('roomHeader', {
      data: function() {
        console.log(Rooms.findOne(this.params._id));
        return Rooms.findOne(this.params._id);
      }
    });

    this.render('room');

    SEO.set({ title: 'Room - ' + Meteor.App.NAME });
  }
});
