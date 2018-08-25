function Quest(name, desc, steps, action, metadata) {
    this.name = name;
    this.desc = desc;
    this.steps = steps || 5;
    this.progress = 0;
    this.completed = false;
    this.action = action;
    this.metadata = metadata;
}

Quest.prototype.add_progress = function(action, metadata) {
    if (this.action == action && this.metadata == metadata) {
        this.progress++;
    }

    if (this.progress == this.steps) {
        this.completed = true;
    }
};
