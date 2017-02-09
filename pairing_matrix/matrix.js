var names = ['A','B','C','D', 'E'];
var copy_names = names;
var dimension = names.length;

$(document).ready(function() {
	for(var y = 0; y <= dimension; y++) {
		var unit;
		if (y == 0) {
        	unit = $("<div class='h-identifier'></div>");
        }else { 
        	unit = $("<div class='h-identifier'> "+ names[y-1] +"</div>");
        }
        unit.appendTo('#horizontal-identifiers');
    }

	$("#matrix").css('width', ((dimension+1)*52));
    for(var x = 0; x < dimension; x++) {
        for(var y = 0; y <= dimension; y++) {
        	var unit;
        	if (y == 0) {
            	unit = $("<div class='unit'> "+ names[x] +"</div>");
        	}else{
        		unit = $("<div class='unit'> "+ x + " " + y +"</div>");
        	}
            unit.appendTo('#matrix');
        }
    }

    var left_side = copy_names.splice(0,dimension/2)
    for(var i = 0; i < left_side.length; i++){
        var unit = $("<li id="+ ('node'+(i+1)) +"> "+ left_side[i] +"</li>");
        unit.appendTo('#allItems');
    }
    var right_side = copy_names;
    for(var i = 0; i < right_side.length; i++){
        var unit = $("<li id="+ ('Li'+(i+1)) +"> "+ right_side[i] +"</li>");
        unit.appendTo('#Ul1');
    }
});