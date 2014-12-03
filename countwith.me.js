Counts = new Mongo.Collection('counts');

if (Meteor.isClient) {

    Template.body.events({
        'click .action': function() {
            console.log('yo');
        },
        'focus .number[contenteditable]': function(e) {
            e.target.innerHTML = '';
        },
        'blur .number[contenteditable]': function(e) {
            e.target.innerHTML = '???';
        },
        'keypress .number[contenteditable]': function (e) {
            var code = e.keyCode || e.which;
            console.log(code);
            if (!_.contains([48, 49, 50, 51, 52, 53, 54, 55, 56, 57], code)) {
                console.log('!contains');
                if (code == 13) {
                    console.log('enter');
                }
                e.preventDefault();
                return false;
            }
        }
    });

    Template.body.helpers({
        counts: function() {
            return Counts.find({}, {sort: {timestamp: -1}, limit: 50});
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
