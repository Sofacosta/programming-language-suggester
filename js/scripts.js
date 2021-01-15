$(document).ready(function () {
  $("#formOne").submit(function () {
    event.preventDefault();
    const activity = $(".activity").find("input[type=radio]:checked").val();
    if (activity === "videogames") {
      $("#python").show();
    } else {
      $("#rubyonrails").show();
    }
  });
});

//const activity = $("input:radio[name=activity]:checked").val();
//const activity = $("input:radio[name=activity]:checked").val();
//const activity = $("input:radio[name=activity]:checked").val();
//const activity = $("input:radio[name=activity]:checked").val();
