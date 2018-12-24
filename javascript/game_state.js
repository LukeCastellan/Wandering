var game_state_manager = {
    //manages the state of the game;
    //not yet included in index.html.

    maps: {},  //holds the maps
    current_map: null,
    LIGHT_RADIUS: 2,
    quests: {},
    current_quest: null,

    initialize: function() {
		game_state_manager.start_game();
		
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
        //this.add_map(generate_natural_map(100, 100),'testing map');
		//MPM.display_map(this.maps['testing map']);
		//this.set_current_map('testing map');
		
		this.add_map(testmap1,'testing map2');
		MPM.display_map(this.maps['testing map2']);
		this.set_current_map('testing map2')
		this.current_map.place_player(1,1,'down');
		
		this.activate_map_handlers();
		
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
