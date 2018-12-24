var CANVAS_MAP_HEIGHT = 50; // in tiles
var CANVAS_MAP_WIDTH = 50; // in tiles

var map_panel_manager = {

    display_map: function(map) {
        //draws the map
        map_panel.innerHTML = "";
        context.clearRect(0, 0, map_canvas.width, map_canvas.height);
		
		//offsets for scrolling
		var start_x = 0;
		var start_y = 0;
		
		var suggested_width = map.width;
		var suggested_height = map.height;
				
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
					Engine.log(get_key_by_value(MAP_TILES,tile));
					
					if (get_key_by_value(MAP_TILES,tile))
					{
						context.drawImage(IMAGE_TILES[get_key_by_value(MAP_TILES,tile)]
						,(current_x - start_x)*TILE_SIZE 
						,(current_y - start_y)*TILE_SIZE 
						,TILE_SIZE,TILE_SIZE);
					}
					else
					{
						context.drawImage(IMAGE_TILES[tile]
						,(current_x - start_x)*TILE_SIZE 
						,(current_y - start_y)*TILE_SIZE 
						,TILE_SIZE,TILE_SIZE);
					}
					
					
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
		
		//clear the map
		/*
        map_panel.innerHTML = "";

        var rows = map.stringify().split('\n');

        var rowsleft = 0;

        while (rowsleft < rows.length) {
            var line = document.createElement("P");
            var tiles = rows[rowsleft].split("");
            var tile;

            while (tiles.length > 0) {
                tile = tiles.shift(); //remove a tile

                //style landmarks
                if (tile == MAP_TILES.BLANK) {
                    line.innerHTML += "&#160;"
                } else if ((function(x, y, tile) {
                    if (tile == MAP_TILES.PLAYER) {
                        return true;
                    } else if (map.get_special_tile(x, y)) {
                        return true;
                    } else {
                        return false;
                    }
                })(rows[0].length - tiles.length - 1, rowsleft, tile)) {
                    line.innerHTML += "<span style='color:white; font-weight: bold;'>" + tile + "</span>";
                } else {
                    line.innerHTML += tile;
                }
            }

            var p_att = document.createAttribute("style");
            p_att.value = "margin: 0px; display: block;";
            line.setAttributeNode(p_att);

            map_panel.appendChild(line);
            rowsleft = rowsleft + 1;
        }
		*/
		
    },
}

function get_key_by_value(object, value) {
	return Object.keys(object).find(key => object[key] === value);
}
//alias
var MPM = map_panel_manager;
