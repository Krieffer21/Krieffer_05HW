
$(document).ready(function() {
    hours = ["9am", "10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"];

    // var today = todate(moment().format("MMM Do YY"));
    // today.attr("id","currentDay");

    function timeBlocks() {
        for (let i = 0; i < 8; i++) {
            var timeBlock = $("<div>");
            $(".container").append(timeBlock);
            timeBlock.attr("class", "row time-block");

            var hour = $("<div>");
            timeBlock.append(hour);
            hour.attr("class","hour");
            hour.text(hours[i]);
            
            var textArea = $("<textarea>");
            timeBlock.append(textArea);
            textArea.attr("id","text" + i);
            textArea.attr("class","description");

            var saveBtn = $("<button>");
            timeBlock.append(saveBtn);
            saveBtn.attr("class","saveBtn");
            saveBtn.attr("id", "save" + i); 
        }
    }

    timeBlocks();

    for (let i = 0; i < 8; i++) {
        var store = localStorage.getItem("save" + i);
        $("#text" + i).text(store);
    }

    $(".saveBtn").on("click",function(event) {
    var element = event.target.id;
    var match = element.charAt(element.length -1);
    var textContent = $("#text" + match).val();
    localStorage.setItem(element, textContent);
});

});