/* global $ */

function capitalizeString(string) {
    var parts = string.split(/([\.?!][\s])/);
    for(var i = 0; i < parts.length; i++) {
        console.log(parts[i]+ "\n");
        parts[i] = parts[i].replace(/^\w/g, function(a) { return a.toUpperCase(); });
    }
    console.log(parts);
    return parts.join("");
}