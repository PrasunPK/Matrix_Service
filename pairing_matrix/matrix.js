var dimension = 10;
$(document).ready(function() {
	$("#matrix").css('width', (dimension*52));
    for(var x = 0; x < dimension; x++) {
        for(var y = 0; y < dimension; y++) {
            var unit = $("<div class='unit'> "+ x + " " + y +"</div>");
            unit.appendTo('#matrix');
        }
    }
});