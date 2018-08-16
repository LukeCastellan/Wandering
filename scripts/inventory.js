var Inventory = (function() {
    var items = {};
    var INVENTORY_LIMIT = 35;
    var panel = inventory_panel;

    return {
        add_item: function(name, count) {
            if (items[name]) { //item already exists in inventory
                //use a negative number if you want to subtract items
                items[name] += count;

                //remove the element for the item if count reaches zero
                panel.removeChild(document.getElementById('item_' + name));
                delete items[name];

            } else { //item isn't in inventory
                items[name] = count;
                
                //create a new element for the new item
                var class_att = document.createAttribute('class');
                class_att.value = 'inventory_item';

                var id_att = document.createAttribute('id');
                id_att.value = 'item_' + name;

                var item_element = document.createElement('div');
                item_element.setAttributeNode(class_att);
                item_element.setAttributeNode('id_att');

                inventory.appendChild(item_element);
            }

            return count;
        },

        check_item: function(name, count) {
            if (count) { //count is specified
                if (count <= items[name]) {
                    return true;
                } else {
                    return false;
                }
            } else {
                if (items[name]) {
                    return true;
                } else {
                    return false;
                }
            }
        },

        get_count: function(name) {
            if (items[name] == undefined) {
                return 0;
            } else {
                return items[name];
            }
        },

        remove_all: function(name) {
            delete items[name];
        },

        clear_inventory: function() {
            Engine.log('clearing inventory');
            items = {};
        },

        get_item_obj
    };
})();