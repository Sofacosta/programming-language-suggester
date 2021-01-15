$(document).ready(function () {
  $("form#formOne").submit(function() {
  const activity = $("input:radio[name=activity]:checked").val();
  //const activity = $("input:radio[name=activity]:checked").val();  
  //const activity = $("input:radio[name=activity]:checked").val(); 
  //const activity = $("input:radio[name=activity]:checked").val(); 
  //const activity = $("input:radio[name=activity]:checked").val(); 
event.preventDefault();

if (activity === videogames) {
 $(#python).show();
} else {
  $("#rubyonrails").show();
  }


    
});


