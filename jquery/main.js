$(document).ready(function () {
  $("#down").click(function () {
    $("#block").slideDown(1000);
    return false;
  });
  $("#up").click(function () {
    $("#block").slideUp(1000);
    return false;
  });
});

$(document).ready(function () {
  $("#link1").click(function () {
    $("#block2").slideToggle(500, function () {
      if ($("#link1").html() == "свернуть") {
        $("#link1").html("развернуть");
      } else $("#link1").html("свернуть");
    });
    return false;
  });
});

$(document).ready(function () {
  $("#fadeIn").click(function () {
    $("#block3").fadeIn(500);
    return false;
  });
  $("#fadeOut").click(function () {
    $("#block3").fadeOut(500);
    return false;
  });
  $("#fadeToDown").click(function () {
    $("#block3").fadeTo(500, 0.5);
    return false;
  });
  $("#fadeToUp").click(function () {
    $("#block3").fadeTo(500, 1);
    return false;
  });
});

$(document).ready(function () {
  $("#link2").click(function () {
    $("#block4").fadeToggle(500, function () {
      if ($("#link2").html() == "спрятать") {
        $("#link2").html("показать");
      } else $("#link2").html("спрятать");
    });
    return false;
  });
});

$(document).ready(function () {
  $("#hide").click(function () {
    $("#block5").hide(500);
    return false;
  });
  $("#show").click(function () {
    $("#block5").show(500);
    return false;
  });
});

$(document).ready(function () {
  $("#block6").click(function () {
    $(this).animate({ width: "200px" }, 1000);
    return false;
  });
});

$(document).ready(function () {
  $("#block7").click(function () {
    $(this).animate({ width: "+=200px" }, 1000);
    return false;
  });
});

$(document).ready(function () {
  $("#block8").click(function () {
    $(this).animate({ width: "+=100px", height: "+=100px" }, 1000);
    return false;
  });
});

$(document).ready(function () {
  $("#block9").click(function () {
    $(this).animate({ marginLeft: "+=100px" }, 1000);
    return false;
  });
});
