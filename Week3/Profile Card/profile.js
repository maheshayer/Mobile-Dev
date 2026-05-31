$(document).ready(function(){


  // 1. GET & SET

  $("#show-name").click(function(){

    let name = $("#student-name").text();

    $("#output").text(name);

  });


  $("#change-name").click(function(){

    $("#student-name").text("Mahesh Ayer");

  });


  $("#show-bio").click(function(){

    let bio = $("#student-bio").html();

    $("#output").text(bio);

  });


  $("#get-input").click(function(){

    let inputValue = $("#nickname-input").val();

    $("#output").text(inputValue);

  });


  $("#set-input").click(function(){

    $("#nickname-input").val("kinnamari");

  });

  // 2. CSS CLASSES
  $("#highlight-card").click(function(){

    $("#profile-card").addClass("highlighted");

  });

  $("#remove-highlight").click(function(){

    $("#profile-card").removeClass("highlighted");

  });

  $("#toggle-dark").click(function(){

    if($("#profile-card").hasClass("dark-mode")){

      $("#profile-card").removeClass("dark-mode");

      $("#profile-card").css({
        "background-color": "white",
        "color": "black"
      });

    }

    else{

      $("#profile-card").css({
        "background-color": "#2c3e50",
        "color": "white"
      });

      $("#profile-card").addClass("dark-mode");

    }

  });

  $("#toggle-rounded").click(function(){

    $("#profile-photo").toggleClass("rounded");
  });



  // 3. CSS METHOD

  $("#red-bg").click(function(){

    $("#profile-card").removeClass("dark-mode");

    $("#profile-card").css("background-color", "#e74c3c");

  });


  $("#reset-bg").click(function(){

    $("#profile-card").removeClass("dark-mode");

    $("#profile-card").css("background-color", "white");

  });



  // 4. HIDE & SHOW

  $("#hide-photo").click(function(){

    $("#profile-photo").hide("slow");

  });


  $("#show-photo").click(function(){

    $("#profile-photo").show("slow");

  });


  $("#toggle-bio").click(function(){

    $("#student-bio").toggle();

  });



  // 5. FADE

  $("#fade-out").click(function(){

    $("#profile-card").fadeOut();

  });


  $("#fade-in").click(function(){

    $("#profile-card").fadeIn();

  });


  $("#fade-half").click(function(){

    $("#profile-card").fadeTo("slow", 0.5);

  });


  $("#fade-normal").click(function(){

    $("#profile-card").fadeTo("slow", 1);

  });



  // 6. SLIDE

  $("#slide-up").click(function(){

    $("#skills-list").slideUp();

  });


  $("#slide-down").click(function(){

    $("#skills-list").slideDown();

  });


  $("#slide-toggle").click(function(){

    $("#skills-list").slideToggle();

  });



  // 7. ANIMATE

  $("#animate-card").click(function(){

    $("#profile-card")

    .animate({
      left: "200px"
    }, 1000)

    .animate({
      left: "0px"
    }, 1000);

  });



  // 8. EVENTS

  $("#profile-photo").mouseenter(function(){

    $("#profile-photo").addClass("shadow");

    $("#output").text("Mouse entered profile photo");

  });


  $("#profile-photo").mouseleave(function(){

    $("#profile-photo").removeClass("shadow");

    $("#output").text("Mouse left profile photo");

  });


  $("#nickname-input").keypress(function(event){

    $("#output").text("Pressed Key: " + event.key);

  });


});