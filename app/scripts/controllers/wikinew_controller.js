Website.WikinewController = Em.ArrayController.extend({
    actions: {
        createWikientry: function () {
            
            /* Some minor validation happening here. */
            var title = this.get('newTitle');
            if(!title || !title.trim()) {return;}
            
            var author = this.get('newAuthor');
            if(!author || !author.trim()) {return;}
            
            var wikiContent = this.get('newWikiContent');
            
            /* Populate and create our wiki record! */
            var wiki = this.store.createRecord('wikientry', {
                title: title,
                author: author,
                wikiContent: wikiContent,
                modified: new Date(),
                created: new Date()
            });
            
            /* Save the object! */
            wiki.save();
            
            /* Clear our holding fields */
            this.set('newTitle','');
            this.set('newAuthor','');
            this.set('newWikiContent','');
            
            /* And transfer us to view the newly created "wiki" entry */
            this.get("target").transitionTo("/wikis/" + wiki.get("id"));
        }
    }
});