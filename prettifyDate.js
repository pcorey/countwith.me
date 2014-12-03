Handlebars.registerHelper('prettifyDate', function(date) {
    return moment(date).fromNow();
});