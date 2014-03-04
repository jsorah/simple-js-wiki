Website.Wikientry = DS.Model.extend({
    author: DS.attr('string'),
    created: DS.attr('date', new Date()),
    modified: DS.attr('date', new Date()),
    wikiContent: DS.attr('string'),
    title: DS.attr('string')
});

Website.Wikientry.FIXTURES = [
    {
        id: "Meow",
        author: 'The Cat',
        wikiContent: 'Meow. Purr. Purr. Meow.',
        modified: new Date(),
        created: new Date(),
        title: 'Meow'
    },
    {
        id: "Ruff",
        author: 'The Dog',
        wikiContent: 'Ruff ruff ruff. Bark bark.',
        modified: new Date(),
        created: new Date(),
        title: 'Ruff'
    }
];