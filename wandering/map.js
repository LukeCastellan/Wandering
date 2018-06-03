function Map(string, width, height) {

    if (string.length == width * height) {
        this.map_array = string.split("");
        this.width = width;
        this.height = height;
    } else {
        throw new Error("map size doesn't match the string length");
    }
}

//returns a printable string of the map, complete with \n characters
Map.prototype.stringify = function() {
    var stringified_map = "";

    for (var a = 0; a < this.height; a = a + 1) {

        for (var b = 0; b < this.width; b = b + 1) {
            stringified_map = stringified_map + this.get_tile(b, a);
        }

        stringified_map = stringified_map + "\n";
    }

    return stringified_map;
}

//returns a tile from the map
Map.prototype.get_tile = function(width, height) {
    var tile_pos = width + height * this.width;
    return this.map_array[tile_pos];
}