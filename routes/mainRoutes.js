Router.route('/', {
  name: 'home',
  action: function () {
    this.render('home');
    SEO.set({ title: 'Home - ' + Meteor.App.NAME });
  }
});

Router.route('/room/:_id', {
  name: 'room',
  subscriptions: function() {
    return Meteor.subscribe('Messages', this.params._id);
  },
  action: function() {

    this.render('room_header', {
      data: function() {
        return Rooms.findOne(this.params._id);
      },
      to: 'room_header'
    });

    this.render('room', {
      data: function() {
        return {
          _id: this.params._id
        };
      }
    });

    SEO.set({ title: 'Room - ' + Meteor.App.NAME });
  }
});
