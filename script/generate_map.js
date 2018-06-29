function generate_natural_map(width, height) {
    if (isNaN(width)) {
        width = 75; //default value for width is 75
    }

    if (isNaN(height)) {
        height = 75; //default value for height is 75
    }

    //create a string
    var string = "";
    for (var i = 0; i < height * width; i = i + 1) {
        string = string + MAP_TILES.PLAINS; //for the natural map, I start with all plains
    }

    var map = new Map(string, width, height); //make the map!

    //manipulate the map
    //remember the failsafe to make sure the co-ordinates are not negative
    var num_of_areas = random_number(3, 11); //between 3 and 11 types of terrain

    while (num_of_areas > -1) {

        (function() {
            var radius = random_number(5, 15);
            var center = {
                x: random_number(0, width),
                y: random_number(0, height),
            };
            var terrain_type = (function() {
                switch (random_number(0, 3)) {
                    case 0:
                        return MAP_TILES.FOREST;
                        break;
                    case 1:
                        return MAP_TILES.MARSH;
                        break;
                    case 2:
                        return MAP_TILES.MOUNTAINS;
                        break;
                    default:
                        //hopefully this won't execute
                        console.log("something went wrong when picking a terrain type.");
                }
            })(); //an IIFE in an IIFE: IIFE-ception!

            //start filling it in
            map.set_tile(center.x, center.y, terrain_type); //set the center to the terrain type

        })(); //I'm using an IIFE here because I want to confuse you, ha ha

        num_of_areas = num_of_areas - 1; //one area down!
    }

    return map;
}

//for generating random number
function random_number(start, end) {
    var multiplier = Math.abs((start - end));
    var adder = Math.min(start, end);

    return Math.floor(Math.random() * multiplier + adder);
}