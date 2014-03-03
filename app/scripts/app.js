var Website = window.Website = Em.Application.create();

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');

Website.IndexView = Em.View.extend({
    didInsertElement: function() {
        this.$().foundation();
    }
});


Em.Handlebars.helper('markdown', function (text) {
    if(!text) 
        return "";
    
    return  new Handlebars.SafeString(markdown.toHTML(text));
});

Em.Handlebars.helper('dateFormat', function(context, block) {
    var format = block.hash.format || "MMM Do, YYYY";
    return moment(Date(context)).format(format);
});
