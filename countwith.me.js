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

    var counts = [];
    var offset = 0;
    for (var i = 0; i < 100; i++, offset++) {
        counts.push({
            number: 100 - i,
            timestamp: moment().subtract(offset, 'minutes').toDate()
        });
    }

    Template.body.helpers({
        counts: counts
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}