var game_state_manager = {
    //manages the state of the game;
    //not yet included in index.html.

    maps: {},  //holds the maps
    current_map: null,
    LIGHT_RADIUS: 2,
    quests: {};
    current_quest = null,

    init: function() {

    },

    add_map: function(new_map, name) {
        this.maps[name] = new_map;
    },

    end_game: function(ending) {
        if (ending == "death") {
            Engine.notify("you slump onto the ground. the world fades.");
        }
    },

    set_current_map: function(name) {
        this.current_map = this.maps[name];
    },

    add_quest: function(quest) {
        this.quests[quest.name] = quest;
        Engine.log("added quest '" + quest.name + "'...");
    },

    set_current_quest: function(name) {
        Engine.log("setting current quest to '" + name + "...");
        this.current_quest = name;
    },

    get_current_quest: function() {
        return this.quests[current_quest];
    },

    start_game: function() {
        //finish
    },

    deactivate_map_handlers: function() {
        EH.disable_map();
    },

    activate_map_handlers: function() {
        EH.enable_map(function() {
            GSM.current_map.move_up();
            MPM.display_map(GSM.current_map);
        }, function() {
            GSM.current_map.move_down();
            MPM.display_map(GSM.current_map);
        }, function() {
            GSM.current_map.move_left();
            MPM.display_map(GSM.current_map);
        }, function() {
            GSM.current_map.move_right();
            MPM.display_map(GSM.current_map);
        });
    },
};

var GSM = game_state_manager;
