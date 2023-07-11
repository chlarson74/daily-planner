// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save buttons. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //jquery selectors that select all the elements that hafe the saveBtn class
  $(".saveBtn").on("click" , function() {
    console.log($(this))
    //when any save function is clicked run this function
    //select the text area that is next to this save button
      // use .siblings()
    //create a variable that gets the value of the text area 
    //save the text input to localStorages
      // localStorage.setItem("key for the hour block we are in check the ID for the textarea" , value of what you want saved)
  } )

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  // we need to know the current hour
  var currentHour = dayjs().format("HH") // check day js for hour format - military time / 24 hour format -- change currentHour to an integer not a string
  // compare each hour block with the current hour
  // change the class depending on the hour
  //for loop that loops over each timeblock and runs our if/else statements
  for (var i = 9; i < 18; i++) {
      // inside the for loop - select the one time block we are focussing on
      // example: the 9AM time block will be first selected
      var timeBlockEl = $("#hour-" + i)

      if // if  currentHour is greater than i - use jquery methods when you add the past class to div

      else if // if  currentHour is equals i - use jquery methods when you add present class to div
    
      else // if currentHour is less than i - use jquery methods when you add future class to the div

  }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  // one option: for loop -- go through each hour block -- fetch data?
  // manually do something nine times -- get item from local storage - create a var to use localStorage get item
  // highlight the key of what you want like a P.O. Box --
  // retrieve things
  var nineAm = localStorage.getItem("9") //repeat this for each hour block
  $("#9").val(nineAm) //repeat this for each hour block needs to be jquery

  var tenAm = localStorage.getItem("10") //repeat this for each hour block
  $("#10").val(tenAm) //repeat this for each hour block needs to be jquery

  var elevenAm = localStorage.getItem("11") //repeat this for each hour block
  $("#11").val(elevenAm) //repeat this for each hour block needs to be jquery / $ is taking the place of document.getElementById

  // TODO: Add code to display the current date in the header of the page.
  // what is the current date - use day.js
  var currentDate = dayjs().format("") // check day js for date format
  // select the element that we want to change - 
  // change the elment's text content
  document.getElementById("currentDay").textContent=currentDate // convert to jquery selectors and jquery textContent
});