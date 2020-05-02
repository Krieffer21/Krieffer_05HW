# Krieffer_05HW_WorkDayScheduler

## Work Day Scheduler
 This assignment was to create a daily planner application using moment.js that saves events for each hour of the day. Every hour is color coded indicating past, present, and future events. When a saved button is clicked it saves associated text input to local storage so the user can refresh the page and retain their text input.   

### Date & Time
  Using moment.js I was able to get the current date and time, and format them as I desired. I used military time to get just the current hour so I could easily make the current hour an integer to match the index of the hours array. 

![alt text](https://github.com/Krieffer21/Krieffer_05HW/blob/master/Assets/images/DateTime.png)

### Color Coding 
 The if statment below determines which class to attribute to the text area depending on what the current time is. The color's are for the past present and future.

![alt text](https://github.com/Krieffer21/Krieffer_05HW/blob/master/Assets/images/ColorCoding.png)

### Planner in Action
  The gif below shows text being entered into different text areas, then being saved and not saved. When the page is refreshed the text that was saved remained, but the text that was not saved is no longer there. I show the console to see that it prints the current hour of the time.
  
![](https://github.com/Krieffer21/Krieffer_05HW/blob/master/Assets/images/DayScheduler.gif)
