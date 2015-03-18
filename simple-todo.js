if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  Session.setDefault('fettheit', "dünn");

  // hello template
  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });
  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });

  // mass
  Template.mass.helpers({
    fettheit: function () {
      return Session.get('fettheit');
    }
  });
  Template.mass.events({
    'click span': function () {
      // increment the counter when button is clicked
      Session.set('fettheit', "FETT");
      console.log(Session.get('fettheit'));
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
