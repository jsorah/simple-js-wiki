Website.WikinewController = Ember.ObjectController.extend({
    actions: {
        save: function () {
            this.get("model").save();
            this.get("target").transitionTo("/wikis/" + this.get("model").get("id"));
        }
    }
});