jQuery(function($) {

  $(".food .food-thumb").click(function() {

    $(this).next(".ingredients").removeClass("slideOutDown");
    $(this).next(".ingredients").css("display", "block");
    $(this).next(".ingredients").addClass("slideInUp");

  });

  $(".food-container .food .ingredients .header a").click(function() {

    $(this).parent().parent().removeClass("slideInUp");
    $(this).parent().parent().addClass("slideOutDown");

    setTimeout(function() {

      $(this).next(".ingredients").css("display", "none");

    }, 500);

  });

  $(".food-container .food .ingredients .ingredients-list .guess button").click(function() {

    if($(this).parent().find("input").val() == $(this).parent().next(".sugarcubes").attr("cubes")) {

      $(this).parent().parent().find(".sugar").html("Ügyes 😊!");

    }else {

      $(this).parent().parent().find(".sugar").html("Nem talált 😞.");

    }

    $(this).parent().fadeOut();
    $(this).parent().parent().find(".sugarcubes").fadeIn();

  });

});
