var crafting_dictionary = (function() {
    var dict = {
        //give me recipes!
    };

    //uses mostly the same methods as the item dictionary
    return {
        register: function(name, recipe) {
            dict[name] = recipe;
        },

        remove: function(name) {
            var recipe = dict[name];

            delete dict[name];

            return recipe;
        },

        lookup: function(name) {
            return dic[name];
        }
    };
})();

var C_D = crafting_dictionary;

var recipe_template = {
    name: "recipe_template",
    ingredients: {
        'meat': 3,
        'wood': 95,
    },
    result: {
        'BBQ death trap': 2,
    },
},

function craft(name) {
    var recipe = crafting_dictionary[name];

    var ingredients_list = Object.getOwnPropertyNames(recipe);

    for (var i = 0; i < ingredients_list.length; i = i + 1) {
        if (Inventory.check_item(ingredients_list[0], recipe['ingredients'][ingredients_list])) {
            ingredients_list.shift();
            continue;
        } else {
            return;
        }
    }

    while (ingredients_list.length > 0) {
        Inventory.add_item(ingredients_list[0], (-1) * recipe['ingredients'][ingredients_list[0]]);
    }

    Inventory.add_item(Object.getOwnPropertyNames(recipe['result'])[0], recipe['result'][Object.getOwnPropertyNames(recipe['result'])][0]);
}
