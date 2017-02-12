$.get( "/pairs", function( data ) {
    var pairs = data;
    for(var i = 0; i < pairs.length; i++){
        var left = $("<li id="+ ('node'+(i+1)) +" class='ui-draggable ui-droppable'>"+ (pairs[i].first == null ? 'SOLO' : pairs[i].first)+"</li>");
        left.appendTo('#allItems');
        var right = $("<li id="+ ('Li'+(i+1)) +" class='ui-draggable ui-droppable'>"+ (pairs[i].second == null ? 'SOLO' : pairs[i].second) +"</li>");
        right.appendTo('#Ul1');
    }

    $(function() {
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
