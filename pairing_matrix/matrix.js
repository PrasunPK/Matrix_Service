var names = ['A','B','C','D', 'E','F'];
var copy_names = names;

var renderMatrix= function(){
    $.get( "count", function( data ) {
        for(var y = 0; y <= data.count; y++) {
            var unit;
            if (y == 0) {
                unit = $("<div class='h-identifier'></div>");
            } else { 
                unit = $("<div class='h-identifier'> "+ names[y-1] +"</div>");
            }
            unit.appendTo('#horizontal-identifiers');
        }
        $("#matrix").css('width', ((data.count+1)*52));
        for(var x = 0; x < data.count; x++) {
            for(var y = 0; y <= data.count; y++) {
                var unit;
                if (y == 0) {
                    unit = $("<div class='unit'> "+ names[x] +"</div>");
                }else{
                    unit = $("<div class='unit'> "+ x + " " + y +"</div>");
                }
                unit.appendTo('#matrix');
            }
        }
    });

}

$(document).ready(function() {
    renderMatrix();
    $.get( "/all_member_names", function( data ) {
        var names = data;
        var copy_names = names;
        var left_side = copy_names.splice(0,data.length/2)
        for(var i = 0; i < left_side.length; i++){
            var unit = $("<li id="+ ('node'+(i+1)) +"> "+ left_side[i].name +"</li>");
            unit.appendTo('#allItems');
        }
        var right_side = copy_names;
        for(var i = 0; i < right_side.length; i++){
            var unit = $("<li id="+ ('Li'+(i+1)) +"> "+ right_side[i].name +"</li>");
            unit.appendTo('#Ul1');
        }
    });

});