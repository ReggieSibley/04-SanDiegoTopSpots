//1.Use the $.getJSON method to download the contents of topspots.json
//2.Iterate through the top spots and create rows for each spot.
//3.Create a link to the location using the longitude and latitude provided. 

$(document).ready(function() { 

 $.getJSON("topspots.json",
    function (json) {
        var tr;
        for (var i = 0; i < json.length; i++) {
            tr = $('<tr/>');
            tr.append("<td>" + json[i].name + "</td>");
            tr.append("<td>" + json[i].description + "</td>");
            tr.append("<td> <button class='btn'>" + "<a href=https://www.google.com/maps?q=" + json[i].location[0] + "," + json[i].location[1] + ">Get Directions</a></button></td>");
            $('table').append(tr);
        }
    });

});