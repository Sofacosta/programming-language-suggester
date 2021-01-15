$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();
    const activity = $("input:radio[name=activity]:checked").val();
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
