Website.WikiController = Em.ObjectController.extend({
    editing: false,
    actions: {
        saveChanges: function() {
            alert("Saved!");
            this.set('editing',false);
        },
        edit: function() {
            this.set('editing',true);
        }
    }
});