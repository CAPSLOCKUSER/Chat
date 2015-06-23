Meteor.methods({
  "RegisterUser": function(name, email, password) {
    check(name, String);
    check(email, String);
    check(password, String);

    Accounts.createUser({
      email: email,
      password: password,
      profile: {
        name: name
      }
    });
  }
})
