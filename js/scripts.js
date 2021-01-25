$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    
    $("#cSharp").hide();
    $("#python").hide();
    $("#rubyOnRails").hide();

    const activity = $("input:radio[name=activity]:checked").val();
    const interest = $("input:radio[name=interest]:checked").val();
    const features = $("input:radio[name=features]:checked").val();
    const character = $("input:radio[name=character]:checked").val();
    const drawback = $("input:radio[name=drawback]:checked").val();

    let cSharp = 0;
    let python = 0;
    let rubyOnRails = 0;
    
    if (activity === "videogames") {
      cSharp++;
    } else if (activity === "musicandvisuals") {
      python++;
    } else {
      rubyOnRails++;
    }

    if (interest === "ai") {
      cSharp++;
    } else if (interest === "web-development") {
      python++;
    } else {
      rubyOnRails++;
    }

    if (features === "easy-learn") {
      cSharp++;
    } else if (features === "general-purpose") {
      python++;
    } else {
      rubyOnRails++;
    }

    if (character === "lisa-simpson") {
      cSharp++;
    } else if (character === "Mafalda") {
      python++;
    } else {
      rubyOnRails++;
    }

    if (drawback === "few-platform") {
      cSharp++;
    } else if (drawback === "debugging-task") {
      python++;
    } else {
      rubyOnRails++;
    }
    
    const result = Math.max(cSharp, python, rubyOnRails);
    
    if (result === cSharp) {
      $("#cSharp").show();
    } else if (result === python) {
      $("#python").show();
    } else {
      $("#rubyOnRails").show();
    }

  });
});
