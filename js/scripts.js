$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();

    const activity = $("input:radio[name=activity]:checked").val();
    const interest = $("input:radio[name=interest]:checked").val();
    const features = $("input:radio[name=features]:checked").val();
    const character = $("input:radio[name=character]:checked").val();
    const drawback = $("input:radio[name=drawback]:checked").val();

    if (activity === "videogames") {
      $("#csharp").show();
    } else if (activity === "musicandvisuals") {
      $("#python").show();
    } else {
      $("#rubyonrails").show();
    }

    if (interest === "AI") {
      $("#csharp").show();
    } else if (interest === "web-development") {
      $("#python").show();
    } else {
      $("#rubyonrails").show();
    }

    if (features === "easy-learn") {
      $("#csharp").show();
    } else if (features === "general-purpose") {
      $("#python").show();
    } else {
      $("#rubyonrails").show();
    }

    if (character === "Lisa-Simpson") {
      $("#csharp").show();
    } else if (character === "Mafalda") {
      $("#python").show();
    } else {
      $("#rubyonrails").show();
    }

    if (drawback === "few-platform") {
      $("#csharp").show();
    } else if (drawback === "debugging-task") {
      $("#python").show();
    } else {
      $("#rubyonrails").show();
    }
  });
});
