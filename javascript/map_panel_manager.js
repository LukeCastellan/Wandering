var CANVAS_MAP_HEIGHT = 50;
var CANVAS_MAP_WIDTH = 50;

var map_panel_manager = {

    init: function() {
        this.map = new Map();
    },

    display_map: function(map) {
        //draws the map
        map_panel.innerHTML = "";
        context.clearRect(0, 0, map_canvas.width, map_canvas.height);
		
		//offsets for scrolling
		var start_x = 0;
		var start_y = 0;
		
		var suggested_width = map.width;
		var suggested_height = map.height;
		
		console.log(suggested_width);
		
		if (map.width > CANVAS_MAP_WIDTH)
		{
			suggested_width = CANVAS_MAP_WIDTH;
		}
		
		if (map.height > CANVAS_MAP_HEIGHT)
		{
			suggested_height = CANVAS_MAP_HEIGHT;
		}
		
		//scrolling guide
		if (map.player_x >= start_x + CANVAS_MAP_WIDTH)
		{
			start_x = map.player_x - CANVAS_MAP_WIDTH + 1;
		}
		if (map.player_y >= start_y + CANVAS_MAP_HEIGHT)
		{
			start_y = map.player_y - CANVAS_MAP_HEIGHT + 1;
		}
		
		
		for (let current_y = start_y; current_y < start_y + suggested_height; current_y++)
		{
			for (let current_x = start_x; current_x < start_x + suggested_width; current_x++)
			{
				
				try {
					var tile = map.get_tile(current_x,current_y);
					context.drawImage(IMAGE_TILES[get_key_by_value(MAP_TILES,tile)]
						,(current_x - start_x)*TILE_SIZE 
						,(current_y - start_y)*TILE_SIZE 
						,TILE_SIZE,TILE_SIZE);
					
					// render special tiles over
					if (current_y === map.player_y && current_x === map.player_x)
					{
						context.drawImage(IMAGE_TILES["PLAYER"]
							,(current_x - start_x)*TILE_SIZE 
							,(current_y - start_y)*TILE_SIZE 
							,TILE_SIZE,TILE_SIZE);	
					}
				}
				catch(error) {
					Engine.log(error);
				}

			} // end for
		} // end for

		
    },
    
    is_landmark: function(tile) {
        if (tile == MAP_TILES.PLAYER) {
            return true;
        }
        
        if (tile == MAP_TILES.MYSTERY) {
            return true;
        }
        
        if (tile == MAP_TILES.MARSH) {
            return false;
        }
        
        return /\w/.test(tile);
    },
}

//alias
var MPM = map_panel_manager;
