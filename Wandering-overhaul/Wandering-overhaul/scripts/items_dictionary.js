var items_dictionary = (function() {
    dictionary = {
        //add in items later
    };

    return {
        register: function(name, item) {
            dictionary[name] = item;
        },

        remove: function(name) {
            var item = dictionary[name];
            delete dictionary[name];
            return item;
        },

        lookup: function(name) {
            if (!dictionary[name]) {
                throw new Error("item doesn't exist in the item dictionary!");
            }

            return dictionary[name];
        }
    };
})();

var I_D = items_dictionary;

//use these for the item dictionary
var item_template = {
    name: "item_template",
    type: "misc",

    //optional
    use: function() {
        Engine.log('item_template.use() has been called.');
    },
};

var food_template = {
    name: 'food_template',
    type: 'food',
    saturation: 1,
};

var weapon_template = {
    name: 'weapon_template',
    type: 'weapon',
    num_of_uses: 40,
    damage: 15,
};

var tool_template = {
    name: 'tool_template',
    type: 'tool',
    num_of_uses: 40,
    use: function(args /* if any */) {
        Engine.log(args);
    },
};

var material_template = {
    name: 'material_template',
    type: 'material',
};

var machine_template = {
    name: 'machine_template',
    type: 'machine',
    num_of_uses: 40, //optional
    use: function(args /* if any */) {
        Engine.log(args);
    }
};