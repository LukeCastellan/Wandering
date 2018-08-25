function Growable_plant(name, harvest, stages, min_grow_time, max_grow_time) {
    this.name = name;
    this.harvest = harvest; //harvest being an item

    //min_grow_time and max_grow_time in seconds
    this.stages = stages || 9;
    this.min_grow_time = min_grow_time || 120;
    this.max_grow_time = max_grow_time || 240;

    this.current_stage = 0;
}

Growable_plant.prototype.grow = function() {
    this.current_stage = Math.min(current_stage + 1, stages);

    if (this.current_stage == this.stages) {
        return;
    } else {
        setTimeout(this.grow(), random_number(this.min_grow_time, this.max_grow_time) * 1000);
    }
}

Growable_plant.prototype.collect = function() {
    var h_names = Object.getOwnPropertyNames(this.harvest);

    while (h_names.length > 0) {
        Inventory.add_item(h_names[0], this.harvest[h_names[0]]);

        h_names.shift();
    }
}

var GROWABLES = {
    CUCUMBER = new Growable_plant("cucumber", {'cucumber': 3, 'cucumber seeds': 3}, 4, 30, 45);
    TOMATO = new Growable_plant("tomato", {'tomato': 15, 'tomato seeds': 7}, 7, 60, 66);
}
