var names = ['A','B','C','D', 'E'];
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
});