// $.get( "/pairs", function( data ) {
//     var pairs = data;
//     for(var i = 0; i < pairs.length; i++){
//         var left = $("<li id="+ ('node'+(i+1)) +" class='ui-draggable ui-droppable'> Item "+ pairs[i].first_pair +"</li>");
//         left.appendTo('#allItems');
//         var right = $("<li id="+ ('Li'+(i+1)) +" class='ui-draggable ui-droppable'>Item "+ pairs[i].second_pair +"</li>");
//         right.appendTo('#Ul1');
//     }

//     $(function() {
//         console.log('Initialized');
//         $("#dragdiv li,#dropdiv li").draggable({
//             appendTo: "body",
//             helper: "clone",
//             cursor: "move",
//             revert: "invalid"
//         });

//         initDroppable($("#dropdiv li,#dragdiv li"));
//         function initDroppable($elements) {
//             $elements.droppable({
//                 activeClass: "ui-state-default",
//                 hoverClass: "ui-drop-hover",
//                 accept: ":not(.ui-sortable-helper)",

//                 over: function(event, ui) {
//                     var $this = $(this);
//                 },
//                 drop: function(event, ui) {
//                     var $this = $(this);
//                     var li1 = $('<li>' + ui.draggable.text() + '</li>')
//                     var linew1 = $(this).after(li1);

//                     var li2 = $('<li>' + $(this).text() + '</li>')
//                     var linew2 = $(ui.draggable).after(li2);

//                     $(ui.draggable).remove();
//                     $(this).remove();

//                     initDroppable($("#dropdiv li,#dragdiv li"));
//                     $("#dragdiv li,#dropdiv li").draggable({
//                         appendTo: "body",
//                         helper: "clone",
//                         cursor: "move",
//                         revert: "invalid"
//                     });
//                 }
//             });
//         }
//     });
// });
