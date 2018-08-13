//for documentation, please see the wiki (under Inventory)
function Item(name, count, type, weight) {
    this.name = name;
    /* 
        defaults: 
        type --> "misc"
        count --> 1
        weight --> 1

        'weight' is the weight of ONE INDIVIDUAL item.
        it will be multiplied by 'count'to produce the final weight
     */
    this.type = (type || "misc");
    this.count = (count || 1);
    this.weight = (weight || 1);
}

Item.prototype.add = function(add_item) {
    if (this.name == add_item.name && this.type == add_item.type) {
        this.count = this.count + add_item.count;
    } else {
        throw new Error("item name or item type doesn't match. check them both!");
    }
}

Item.prototype.minus = function(minus_item) {
    if (this.name == minus_item.name && this.type == minus_item.type) {
        this.count = this.count - minus_item.count;
    } else {
        throw new Error("item name or item type doesn't match. check them both!");
    }
}