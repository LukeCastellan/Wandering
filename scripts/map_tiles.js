var TILE_SIZE = 16;

var MAP_TILES = { //subject to change!
    BLANK: " ",
    PLAYER: "§",
    FARM: "A",
    OUTPOST: "#",
    PATH: "_",
    BRIDGE: "-",

    SPECIAL: "X", //to catch the player's attention. IMMEDIATELY!!!!!!!
    MYSTERY: "?", //in case you need it

    //various types of terrain
    FOREST: ";",
    MARSH: "m", //fill that in later
    WATER: "~",
    MOUNTAINS: "^",
    MOUNTAINS_LEFT: "/",
    MOUNTAINS_RIGHT: "\\", //I needed an escape sequence
    PLAINS: ".",

    //city and town tiles
    STREET: "#",
    SHOP: "S",
    HOUSE: "H",
    TRANSPORT_STATION: "T",
    CENTRAL_HALL: "C",
    CHURCH: "U", //soething will happen here
    CITY: "M", //city on the big map
    TOWN: "N", //town on the big map

    //furniture?
};

var SPECIAL_TILES = {
    CRAFTING_BENCH: new Special_tile("crafting bench", function() {
        //function for crafting scene
    }),
}

// image tiles
var IMAGE_TILES = {
	BLANK: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/black.png"),
    PLAYER: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/player.png"),
    FARM: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/farm_house_roof_edge_gable_top.png"),
    OUTPOST: "#",
    PATH: "_",
    BRIDGE: "-",

    SPECIAL: "X", //to catch the player's attention. IMMEDIATELY!!!!!!!
    MYSTERY: "?", //in case you need it

    //various types of terrain
    FOREST: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/tile_pine1.png"),
    MARSH: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/grass1.png"), 
    WATER: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/tile_riverL.png"),
    MOUNTAINS: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/tile_mountainB.png"),
    MOUNTAINS_LEFT: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/tile_mountainL.png"),
    MOUNTAINS_RIGHT: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/tile_mountainR.png"), 
    PLAINS: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/tile_grass_base.png"),

    //city and town tiles
    STREET: "#",
    SHOP: "S",
    HOUSE: "H",
    TRANSPORT_STATION: "T",
    CENTRAL_HALL: "C",
    CHURCH: "U", //soething will happen here
    CITY: "M", //city on the big map
    TOWN: "N", //town on the big map

};

function create_image(width,height,source)
{
	var image_element = new Image(width,height);
	image_element.src = source;
	return image_element;
}