Router.route('/boilerplate', {
  name: 'boilerplate',
  action: function () {
    this.render('boilerplate');
    SEO.set({ title: 'boilerplate - ' + Meteor.App.NAME });
  }
});
