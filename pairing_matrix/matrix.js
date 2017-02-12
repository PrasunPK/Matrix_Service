$.get( "/matrix", function( data ) {
    var heading = Object.keys(data[0]);
    for(var y = 0; y < heading.length; y++) {
        var unit = $("<div class='h-identifier' id='identifier_"+ y +"'>"+ heading[y] +"</div>");
        unit.appendTo('#horizontal-identifiers');
    }
    $("#matrix").css('width', ((heading.length)*52));

    for (var i = 0; i < data.length; i++) {
        var keys = Object.keys(data[i]);
        for (var j = 0; j < keys.length; j++) {
            var value = data[i][keys[j]] == null ? 0 : data[i][keys[j]];
            var ele = $("<div class='unit'> "+  value +"</div>");
            ele.appendTo('#matrix');
        }        
    }
});
