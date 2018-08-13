var items_d = (function() {
    item_dictionary = {
        //add in items later
    };

    return {
        add: function(name, item) {
            item_dictionary[name] = item;
        },

        remove: function(name) {
            var item = item_dictionary[name];
            delete item_dictionary[name];
            return item;
        },

        lookup: function(name) {
            if (!item_dictionary[name]) {
                throw new Error("item doesn't exist in the item dictionary!");
            }

            return item_dictionary[name];
        }
    };
})();