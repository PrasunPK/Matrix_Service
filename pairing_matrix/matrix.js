$.get( "/all_member_names", function( data ) {
    var names = data;

    for(var y = 0; y <= data.length; y++) {
        var unit;
        if (y == 0) {
            unit = $("<div class='h-identifier'></div>");
        } else { 
            unit = $("<div class='h-identifier'> "+ names[y-1].name +"</div>");
        }
        unit.appendTo('#horizontal-identifiers');
    }
    $.get( "/pairs", function( pairs ) {
        console.log(pairs);
        $("#matrix").css('width', ((data.length+1)*52));
        for(var x = 0; x < data.length; x++) {
            for(var y = 0; y <= data.length; y++) {
                var unit;
                if (y == 0) {
                    unit = $("<div class='unit'> "+ names[x].name +"</div>");
                }else{
                    unit = $("<div class='unit'> "+ x + " " + y +"</div>");
                }
                unit.appendTo('#matrix');
            }
        }
    });
});
