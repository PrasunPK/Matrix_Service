$.get( "/all_member_names", function( data ) {
    var names = data;
    var copy_names = names;

    for(var y = 0; y <= data.length; y++) {
        var unit;
        if (y == 0) {
            unit = $("<div class='h-identifier'></div>");
        } else { 
            unit = $("<div class='h-identifier'> "+ names[y-1].name +"</div>");
        }
        unit.appendTo('#horizontal-identifiers');
    }

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

    var left_side = copy_names.splice(0,data.length/2)
    for(var i = 0; i < left_side.length; i++){
        var unit = $("<li id="+ ('node'+(i+1)) +" class='ui-draggable ui-droppable'> Item "+ left_side[i].name +"</li>");
        unit.appendTo('#allItems');
    }
    var right_side = copy_names;
    for(var i = 0; i < right_side.length; i++){
        var unit = $("<li id="+ ('Li'+(i+1)) +" class='ui-draggable ui-droppable'>Item "+ right_side[i].name +"</li>");
        unit.appendTo('#Ul1');
    }

    $(function() {
        console.log('Initialized');
        $("#dragdiv li,#dropdiv li").draggable({
            appendTo: "body",
            helper: "clone",
            cursor: "move",
            revert: "invalid"
        });

        initDroppable($("#dropdiv li,#dragdiv li"));
        function initDroppable($elements) {
            $elements.droppable({
                activeClass: "ui-state-default",
                hoverClass: "ui-drop-hover",
                accept: ":not(.ui-sortable-helper)",

                over: function(event, ui) {
                    var $this = $(this);
                },
                drop: function(event, ui) {
                    var $this = $(this);
                    var li1 = $('<li>' + ui.draggable.text() + '</li>')
                    var linew1 = $(this).after(li1);

                    var li2 = $('<li>' + $(this).text() + '</li>')
                    var linew2 = $(ui.draggable).after(li2);

                    $(ui.draggable).remove();
                    $(this).remove();

                    initDroppable($("#dropdiv li,#dragdiv li"));
                    $("#dragdiv li,#dropdiv li").draggable({
                        appendTo: "body",
                        helper: "clone",
                        cursor: "move",
                        revert: "invalid"
                    });
                }
            });
        }
    });
});
