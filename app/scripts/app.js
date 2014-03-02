var Website = window.Website = Ember.Application.create();

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');

Website.IndexView = Ember.View.extend({
    didInsertElement: function() {
        this.$().foundation();
    }
});