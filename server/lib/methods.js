Meteor.methods({
  "RegisterUser": function() {
    Accounts.createUser({
      email: "ads@werw.hu",
      password: "asd",
      profile: {
        name: "name"
      }
    });
  }
})
