var TILE_SIZE = 16;

var MAP_TILES = { //subject to change!
    BLANK: " ",
    PLAYER: "6",
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
	
	farm_house_outerwall_center: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/farm_house_outerwall_center.png"),
	farm_house_outerwall_left: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/farm_house_outerwall_left.png"),
	farm_house_outerwall_right: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/farm_house_outerwall_right.png"),
	farm_house_roof_bottom: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/farm_house_roof_bottom.png"),
	farm_house_roof_bottom_left: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/farm_house_roof_bottom_left.png"),
	farm_house_roof_edge_gable_left_bottom: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/farm_house_roof_edge_gable_left_bottom.png"),
	farm_house_roof_edge_gable_left_top: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/farm_house_roof_edge_gable_left_top.png"),
	farm_house_roof_edge_gable_right_bottom: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/farm_house_roof_edge_gable_right_bottom.png"),
	farm_house_roof_edge_gable_right_top: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/farm_house_roof_edge_gable_right_top.png"),
	farm_house_roof_edge_gable_top: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/farm_house_roof_edge_gable_top.png"),
	farm_house_roof_edge_left_bottom: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/farm_house_roof_edge_left_bottom.png"),
	farm_house_roof_edge_left_top: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/farm_house_roof_edge_left_top.png"),
	farm_house_roof_edge_right_bottom: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/farm_house_roof_edge_right_bottom.png"),
	farm_house_roof_edge_right_top: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/farm_house_roof_edge_right_top.png"),
	farm_house_roof_top: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/farm_house_roof_top.png"),
	field1_bottom: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/field1_bottom.png"),
	field1_bottom_left: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/field1_bottom_left.png"),
	field1_bottom_right: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/field1_bottom_right.png"),
	field1_center: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/field1_center.png"),
	field1_left: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/field1_left.png"),
	field1_right: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/field1_right.png"),
	field1_top: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/field1_top.png"),
	field1_top_left: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/field1_top_left.png"),
	field1_top_right: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/field1_top_right.png"),
	field2_bottom: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/field2_bottom.png"),
	field2_bottom_left: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/field2_bottom_left.png"),
	field2_bottom_right: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/field2_bottom_right.png"),
	field2_center: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/field2_center.png"),
	field2_left: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/field2_left.png"),
	field2_right: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/field2_right.png"),
	field2_top: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/field2_top.png"),
	field2_top_left: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/field2_top_left.png"),
	field2_top_right: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/field2_top_right.png"),
	grass1: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/grass1.png"),
	grass_dark1: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/grass_dark1.png"),
	grass_dark2: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/grass_dark2.png"),
	grass_dark3: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/grass_dark3.png"),
	grass_dark4: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/grass_dark4.png"),
	leaves: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/leaves.png"),
	ore: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/ore.png"),
	rock1: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/rock1.png"),
	tile_city_base: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/tile_city_base.png"),
	tile_grass_base: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/tile_grass_base.png"),
	tile_leaves_base: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/tile_leaves_base.png"),
	tile_mountainB: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/tile_mountainB.png"),
	tile_mountainB_S: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/tile_mountainB_S.png"),
	tile_mountainL: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/tile_mountainL.png"),
	tile_mountainO: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/tile_mountainO.png"),
	tile_mountainO_S: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/tile_mountainO_S.png"),
	tile_mountainR: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/tile_mountainR.png"),
	tile_mountainR_S: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/tile_mountainR_S.png"),
	tile_mountainT_S: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/tile_mountainT_S.png"),
	tile_moutainL_S: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/tile_moutainL_S.png"),
	tile_moutainT: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/tile_moutainT.png"),
	tile_path_base: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/tile_path_base.png"),
	tile_path_leaves: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/tile_path_leaves.png"),
	tile_pine1: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/tile_pine1.png"),
	tile_riverB: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/tile_riverB.png"),
	tile_riverL: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/tile_riverL.png"),
	tile_riverR: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/tile_riverR.png"),
	tile_riverT: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/tile_riverT.png"),
	tile_stump_base: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/tile_stump_base.png"),
	wooden_floor: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/wooden_floor.png"),
	wooden_wall_horizontal: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/wooden_wall_horizontal.png"),
	wooden_wall_horizontal2: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/wooden_wall_horizontal2.png"),
	wooden_wall_vertical: create_image(TILE_SIZE,TILE_SIZE,"images/tiles/wooden_wall_vertical.png"),
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