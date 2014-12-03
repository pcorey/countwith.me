if (Meteor.isClient) {
    // // counter starts at 0
    // Session.setDefault("counter", 0);

    // Template.hello.helpers({
    //     counter: function () {
    //         return Session.get("counter");
    //     }
    // });

    // Template.hello.events({
    //     'click button': function () {
    //         // increment the counter when button is clicked
    //         Session.set("counter", Session.get("counter") + 1);
    //     }
    // });

    Template.body.helpers({
        counts: [
            {number: 123, timestamp: new Date()},
            {number: 124, timestamp: new Date()},
            {number: 125, timestamp: new Date()},
            {number: 126, timestamp: new Date()},
        ]
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}