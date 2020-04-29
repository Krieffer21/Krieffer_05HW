
$(document).ready(function() {
    
// var today = new date(moment().subtract(10, 'days').calendar());
//     $("#currentday").append(today);

function timeBlocks() {
for (let i = 0; i < 8; i++) {
    var timeBlock = $("<div>");
    $(".container").append(timeBlock);
    timeBlock.attr("class", "time-block");
}
    }
    timeBlocks();

// function textBox() {
//     var textarea = "";
//     var tasks = document.createElement("article");
//     $("textarea").on("click", function() {
//         // append text, empty array to that article
//         $("tasks").text(textarea);

//     });
// }

// var saveBtn = document.createElement(".saveBtn");
//     $(".saveBtn").append(body);


});