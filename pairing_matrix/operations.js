var addMember = function() {
	var name = $("#name").val();
	var url = "add_member/names/" + name;
	$.post( url , function( data ) {
	  	$( ".result" ).html( "Member saved !");
	});
}

var saveState = function() {
	var left_group = document.getElementById("allItems").querySelectorAll("li"); 
	var right_group = document.getElementById("Ul1").querySelectorAll("li"); 

	var size = left_group.length > right_group.length ? left_group.length : right_group.length;

	var pair = {};
	for (var i = 0; i < size; i++) {
		pair[i] = [left_group[i].textContent, right_group[i].textContent];
	}
	
	console.log(pair);

	var url = "state/save";
	$.post( url , pair)
	.done(function(data){
	  	$( ".status" ).html( "State saved !");
	});
}