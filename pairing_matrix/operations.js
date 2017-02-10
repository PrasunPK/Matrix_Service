var addMember = function() {
	var name = $("#name").val();
	var url = "add_member/names/" + name;
	$.post( url , function( data ) {
	  	$( ".result" ).html( "Member saved !");
	});
}