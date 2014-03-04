Website.WikiController = Em.ObjectController.extend({
    editing: false,
    actions: {
        saveChanges: function() {
            this.set('editing',false);
            
            var model = this.get('model');
            
            /* Update modified date */
            model.set('modified', new Date());
            model.save();

            
        },
        edit: function() {
            this.set('editing',true);
        },
        cancel: function() {
            this.set('editing',false);
            this.get('model').rollback();
        }
    }
});