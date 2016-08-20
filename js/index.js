$(document).ready(function() {

// INPUTS
  var counter = 0;
  var player;
  function turn() {
    if(counter%2 == 0) {
      player = "X";
      counter++;
    } else {
      player = "O";
      counter++;
    }
  }

  $("#topLeft").click(function() {
    turn();
    $(this).html(player);
    check();
  });
  $("#topCenter").click(function() {
    turn();
    $(this).html(player);
    check();
  });
  $("#topRight").click(function() {
    turn();
    $(this).html(player);
    check();
  });
  $("#middleLeft").click(function() {
    turn();
    $(this).html(player);
    check();
  });
  $("#middleCenter").click(function() {
    turn();
    $(this).html(player);
    check();
  });
  $("#middleRight").click(function() {
    turn();
    $(this).html(player);
    check();
  });
  $("#bottomLeft").click(function() {
    turn();
    $(this).html(player);
    check();
  });
  $("#bottomCenter").click(function() {
    turn();
    $(this).html(player);
    check();
  });
  $("#bottomRight").click(function() {
    turn();
    $(this).html(player);
    check();
  });

// OUTCOMES
  function check() {
    var topLeft = document.getElementById("topLeft").textContent;
    var topCenter = document.getElementById("topCenter").textContent;
    var topRight = document.getElementById("topRight").textContent;

    var middleLeft = document.getElementById("middleLeft").textContent;
    var middleCenter = document.getElementById("middleCenter").textContent;
    var middleRight = document.getElementById("middleRight").textContent;

    var bottomLeft = document.getElementById("bottomLeft").textContent;
    var bottomCenter = document.getElementById("bottomCenter").textContent;
    var bottomRight = document.getElementById("bottomRight").textContent;

  // HORIZONTAL
    if(topLeft == "X" && topCenter == "X" && topRight == "X") {
      $("button.top.left").css({"background-color": "red", "color": "white"});
      $("button.top.center").css({"background-color": "red", "color": "white"});
      $("button.top.right").css({"background-color": "red", "color": "white"});
      $("#outcome").html("X Wins!");
    } else if(topLeft == "O" && topCenter == "O" && topRight == "O") {
      $("button.top.left").css({"background-color": "blue", "color": "white"});
      $("button.top.center").css({"background-color": "blue", "color": "white"});
      $("button.top.right").css({"background-color": "blue", "color": "white"});
      $("#outcome").html("O Wins!");
    }
    if(middleLeft == "X" && middleCenter == "X" && middleRight == "X") {
      $("button.middle.left").css({"background-color": "red", "color": "white"});
      $("button.middle.center").css({"background-color": "red", "color": "white"});
      $("button.middle.right").css({"background-color": "red", "color": "white"});
      $("#outcome").html("X Wins!");
    } else if(middleLeft == "O" && middleCenter == "O" && middleRight == "O") {
      $("button.middle.left").css({"background-color": "blue", "color": "white"});
      $("button.middle.center").css({"background-color": "blue", "color": "white"});
      $("button.middle.right").css({"background-color": "blue", "color": "white"});
      $("#outcome").html("O Wins!");
    } if(bottomLeft == "X" && bottomCenter == "X" && bottomRight == "X") {
      $("button.bottom.left").css({"background-color": "red", "color": "white"});
      $("button.bottom.center").css({"background-color": "red", "color": "white"});
      $("button.bottom.right").css({"background-color": "red", "color": "white"});
      $("#outcome").html("X Wins!");
    } else if(bottomLeft == "O" && bottomCenter == "O" && bottomRight == "X") {
      $("button.bottom.left").css({"background-color": "blue", "color": "white"});
      $("button.bottom.center").css({"background-color": "blue", "color": "white"});
      $("button.bottom.right").css({"background-color": "blue", "color": "white"});
      $("#outcome").html("O Wins!");
    }

  // VERTICAL
    if(topLeft == "X" && middleLeft == "X" && bottomLeft == "X") {
      $("button.top.left").css({"background-color": "red", "color": "white"});
      $("button.middle.left").css({"background-color": "red", "color": "white"});
      $("button.bottom.left").css({"background-color": "red", "color": "white"});
      $("#outcome").html("X Wins!");
    } else if(topLeft == "O" && middleLeft == "O" && bottomLeft == "O") {
      $("button.top.left").css({"background-color": "blue", "color": "white"});
      $("button.middle.left").css({"background-color": "blue", "color": "white"});
      $("button.bottom.left").css({"background-color": "blue", "color": "white"});
      $("#outcome").html("O Wins!");
    }
    if(topCenter == "X" && middleCenter == "X" && bottomCenter == "X") {
      $("button.top.center").css({"background-color": "red", "color": "white"});
      $("button.middle.center").css({"background-color": "red", "color": "white"});
      $("button.bottom.center").css({"background-color": "red", "color": "white"});
      $("#outcome").html("X Wins!");
    } else if(topCenter == "O" && middleCenter == "O" && bottomCenter == "O") {
      $("button.top.center").css({"background-color": "blue", "color": "white"});
      $("button.middle.center").css({"background-color": "blue", "color": "white"});
      $("button.bottom.center").css({"background-color": "blue", "color": "white"});
      $("#outcome").html("O Wins!");
    }
    if(topRight == "X" && middleRight == "X" && bottomRight == "X") {
      $("button.top.right").css({"background-color": "red", "color": "white"});
      $("button.middle.right").css({"background-color": "red", "color": "white"});
      $("button.bottom.right").css({"background-color": "red", "color": "white"});
      $("#outcome").html("X Wins!");
    } else if(topRight == "O" && middleRight == "O" && bottomRight == "O") {
      $("button.top.right").css({"background-color": "blue", "color": "white"});
      $("button.middle.right").css({"background-color": "blue", "color": "white"});
      $("button.bottom.right").css({"background-color": "blue", "color": "white"});
      $("#outcome").html("O Wins!");
    }

  // DIAGONAL
    if(topLeft == "X" && middleCenter == "X" && bottomRight == "X") {
      $("button.top.left").css({"background-color": "red", "color": "white"});
      $("button.middle.center").css({"background-color": "red", "color": "white"});
      $("button.bottom.right").css({"background-color": "red", "color": "white"});
      $("#outcome").html("X Wins!");
    } else if(topLeft == "O" && middleCenter == "O" && bottomRight == "O") {
      $("button.top.left").css({"background-color": "blue", "color": "white"});
      $("button.middle.center").css({"background-color": "blue", "color": "white"});
      $("button.bottom.right").css({"background-color": "blue", "color": "white"});
      $("#outcome").html("O Wins!");
    }
    if(bottomLeft == "X" && middleCenter == "X" && topRight == "X") {
      $("button.top.right").css({"background-color": "red", "color": "white"});
      $("button.middle.center").css({"background-color": "red", "color": "white"});
      $("button.bottom.left").css({"background-color": "red", "color": "white"});
      $("#outcome").html("X Wins!");
    } else if(bottomLeft == "O" && middleCenter == "O" && topRight == "O") {
      $("button.top.right").css({"background-color": "blue", "color": "white"});
      $("button.middle.center").css({"background-color": "blue", "color": "white"});
      $("button.bottom.left").css({"background-color": "blue", "color": "white"});
      $("#outcome").html("O Wins!");
    }
  }

// RESET BUTTON
  $("#reset").click(function() {
    $(".left, .center, .right, #outcome").empty().css({"background-color": "white", "color": "black"});
  });

});
