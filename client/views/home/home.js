var ERRORS_KEY = 'joinErrors';

Template.home.onCreated(function() {
  Session.set(ERRORS_KEY, {});
});

Template.home.helpers({
  errorMessages: function() {
    return _.values(Session.get(ERRORS_KEY));
  },
  errorForm: function() {
    return _.isEmpty(Session.get(ERRORS_KEY)) ? "" : "error";
  },
  errorClass: function(key) {
    return Session.get(ERRORS_KEY)[key] && 'error';
  }
});

Template.home.events({
  "submit form.register": function(event, template) {
    event.preventDefault();
    var email = template.$('[name=field-email]').val();
    var name = template.$('[name=field-username]').val();
    var password = template.$('[name=field-password]').val();
    var pwd_again = template.$('[name=field-password_again]').val();

    var errors = {};

    if (!validateEmail(email)) {
      errors.email = "Email required";
    }

    if (!name) {
      errors.name = "Username required";
    }

    if (!password) {
      errors.password = "Password required";
    }

    if (!pwd_again || password !== pwd_again) {
      errors.pwd_again = "Please confirm your password";
    }

    Session.set(ERRORS_KEY, errors);

    if (_.keys(errors).length) {
      return;
    }

    Meteor.call("RegisterUser");
  }
});

function validateEmail(email) {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}
