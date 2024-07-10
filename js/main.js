/*leftmenu*/

$(".openNav").click(function () {
     $("#leftMenu").animate({ width: '250px' }, 50)
     $("#home-content").animate({ marginLeft: '250px' }, 50)
})

$(".closebtn").click(function () {
     $("#leftMenu").animate({ width: '0px' }, 50)
     $("#home-content").animate({ marginLeft: '0px' }, 50)
})
$("#leftMenu a").click(function () {

     var sectionId = $(this).attr("href");

     var positionOfSection = $(sectionId).offset().top;

     $("html , body").animate({ scrollTop: positionOfSection }, 2000);

})

$('.single-singer').click(function () {
     $('.single-singer-info').not($(this).next()).slideUp(500);
     $(this).next().slideToggle(500);
});
window.onload = function () {

     countDownToTime("29 september 2024 10:00:00");
}

function countDownToTime(EventDate) {

     let futureDate = new Date(EventDate);
     futureDate = (futureDate.getTime() / 1000);

     let now = new Date();
     now = (now.getTime() / 1000);

     timeDifference = (futureDate - now);

     let days = Math.floor(timeDifference / (24 * 60 * 60));
     let hours = Math.floor((timeDifference - (days * (24 * 60 * 60))) / 3600);
     let mins = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600)) / 60);
     let secs = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600) - (mins * 60)))


     $(".dd").html(`${days} D`);
     $(".hh").html(`${hours} h`);
     $(".min").html(`${mins} m`);
     $('.sec').html(`${secs} s`)


     setInterval(function () { countDownToTime(EventDate); }, 1000);
}

var maxLength = 100;
$('textarea').keyup(function () {
     var length = $(this).val().length;
     var AmountLeft = maxLength - length;
     if (AmountLeft < 0) {
          $(this).val($(this).val().substring(0, maxLength));
          AmountLeft = 0;
      }
  
      $("#chars").text(AmountLeft <= 0 ? "Your available characters have finished" : AmountLeft);
});