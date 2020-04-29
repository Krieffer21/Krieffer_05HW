
$(document).ready(function() {
    hours = ["9am", "10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"];
// var today = new date(moment().subtract(10, 'days').calendar());
//     $("#currentday").append(today);

    function timeBlocks() {
        for (let i = 0; i < 8; i++) {
            var timeBlock = $("<div>");
            $(".container").append(timeBlock);
            timeBlock.attr("class", "time-block");

            var hour = $("<div>");
            timeBlock.append(hour);
            hour.attr("class","hour");
            hour.text(hours[i]);
            
            var row = $("<div>");
            timeBlock.append(row);
            row.attr("class","row");
            
            var textArea = $("<textarea>");
            row.append(textArea);
            textArea.attr("id","text" + i);

            var saveBtn = $("<button>");
            timeBlock.append(saveBtn);
            saveBtn.attr("class",".saveBtn");
            saveBtn.attr("id", "save" + i); 
        }
    }

    timeBlocks();


});