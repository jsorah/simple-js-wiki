Website.Router.map(function () {
  
    
    this.resource('wikis');
    
    this.resource('wikinew',{path: "/wikis/new"});
    this.resource("wiki", {path: "/wikis/:wikientry_id"});
});

Website.WikisRoute = Em.Route.extend({
    model: function() {
        return this.store.find("wikientry");
    }
});

Website.WikiRoute = Em.Route.extend({
    model: function(params) {
        return this.store.find("wikientry", params.wikientry_id);
    }
});

Website.WikinewRoute = Em.Route.extend({
    model: function() {
        return this.store.createRecord("wikientry");
    }
});