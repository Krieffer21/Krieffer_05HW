
$(document).ready(function() {
    // Hours that need to be displayed
    hours = ["9am", "10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"];

    // Prints current date
    var today = moment().format("MMMM Do YYYY");
    $("#currentDay").append(today);

    // tracks what the hoir is in millitary time
    var time = moment().format("H");
        // logged to show it finds the current hour
        console.log(time);
    // Making the time into an integer
    var timeInt = parseInt(time) -9;

    //Appends the time blocks to the container.
    function timeBlocks() {
        // Appends for every hour in the hours array.
        for (let i = 0; i < 9; i++) {

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

            //Using the given css class color code the text area based on what time it is.  
            if (i < timeInt) { 
            textArea.attr("class", "description past");
            } else if (i > timeInt) {
                textArea.attr("class", "description future");
            } else {
                textArea.attr("class", "description present");
            };

            var saveBtn = $("<button>");
            timeBlock.append(saveBtn);
            saveBtn.attr("class","saveBtn far fa-save i:hover");
            saveBtn.attr("id", "save" + i); 
        }
    }
    timeBlocks();
    
    // Storing text that was saved to local storage
    for (let i = 0; i < 8; i++) {
        var store = localStorage.getItem("save" + i);
        $("#text" + i).text(store);
    }
    // Saving text when the save button is clicked
    $(".saveBtn").on("click",function(event) {
    var element = event.target.id;
    var match = element.charAt(element.length -1);
    var textContent = $("#text" + match).val();
    localStorage.setItem(element, textContent);
});

});