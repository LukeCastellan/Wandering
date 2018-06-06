var Inventory = {
    items: [],
    
    add_item: function(item) {
        this.items.push(item);
    },
    
    remove_item: function(index) {
        
    },
    
    find_item: function(item) {
        return indexOf(item);
    },
};

Array.prototype.remove = function(element) {
    if (this.indexOf(element) == -1) {
        throw new Error("what you're trying to remove isn't in this array in the first place!");
    }
    
    //finish
};

//I'm using pascalCase here, to make it clear that it's now part of Array.prototype,
//something already part of the default Javascript library
Array.prototype.swapElements = function(first, second) {
    var temp = this[first];
    this[first] = this[second];
    this[second] = temp;
    
    //this function has successfully passed my tests. --Clocks-in-a-cooler
};
