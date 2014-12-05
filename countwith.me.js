Counts = new Mongo.Collection('counts');
var prompt = '???';

if (Meteor.isClient) {

    Meteor.subscribe('counts', function() {
        Session.set('ready', true);
    });

    function count(input) {
        if (input.innerHTML && input.innerHTML != prompt) {
            Meteor.call('count', parseInt(input.innerHTML));
        }
    }

    Template.body.events({
        'click .action': function() {
            var input = document.querySelector('.number[contenteditable]');
            count(input);
            input.innerHTML = prompt;
        },
        'focus .number[contenteditable]': function(e) {
            e.target.innerHTML = '';
        },
        'blur .number[contenteditable]': function(e) {
            if (!e.target.innerHTML) {
                e.target.innerHTML = prompt;
            }
        },
        'keypress .number[contenteditable]': function (e) {
            var code = e.keyCode || e.which;
            if (!_.contains([48, 49, 50, 51, 52, 53, 54, 55, 56, 57], code)) {
                if (code == 13) {
                    count(e.target);
                    e.target.innerHTML = '';
                }
                e.preventDefault();
                return false;
            }
        }
    });

    Template.body.helpers({
        notReady: function() {
            return !Session.get('ready');
        }
    });

    Template.numbers.helpers({
        counts: function() {
            if (!Session.get('ready')) {
                return [];
            }
            return Counts.find({}, {sort: {timestamp: -1}, limit: 30, reactive: true});
        },
    });

    Template.timestamps.helpers({
        counts: function() {
            if (!Session.get('ready')) {
                return [];
            }
            return Counts.find({}, {sort: {timestamp: -1}, limit: 30, reactive: true});
        },
    });
}

if (Meteor.isServer) {
    Meteor.publish('counts', function () {
        return Counts.find({}, {sort: {timestamp: -1}, limit: 30, reactive: true});
    });
}

Meteor.methods({
    count: function(number) {
        //this.unblock();
        var topCount = Counts.findOne({}, {sort: {timestamp: -1}});
        number = number || 0;

        if (topCount && number != topCount.number + 1) {
            Counts.insert({
                number: number,
                timestamp: new Date(),
                wrong: true
            });
            Counts.insert({
                number: 1,
                timestamp: new Date(),
                wrong: false
            });
            return;
        }
        Counts.insert({
            number: number,
            timestamp: new Date(),
            wrong: false
        });
    }
});