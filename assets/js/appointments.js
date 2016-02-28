$(function () {
  'use strict';

  var appts = Object.keys(localStorage);
  console.log(appts);


  var apptHTML = "";

  $.each(appts, function(index, value) {
    var tempAppt = JSON.parse(localStorage.getItem(value));
    // console.log(tempAppt);
    apptHTML =
      "<div class ='container'>" +
      "  <a href='./confirm.html?apptId=" + tempAppt.apptId + "'>" +
      "   <ul class ='app1'>" +
      "     <div class ='blockLeft'>" +
      "     <li class ='box left' id='a1'>" + tempAppt.appointmentDate + "</li>" +
      "     <li class ='box left' id='a2'>" + tempAppt.weatherType + "</li>" +
      "     </div>" +
      "     <div class ='blockRight'>" +
      "     <li class ='box right' id='a3'>" + tempAppt.apptTitle + "</li>" +
      "     <li class ='box right' id='a4'>" + tempAppt.city + "</li>" +
      "     </div>" +
      "   </ul>" +
      "  </a>" +
      "</div>";
      $("#appt-container").append(apptHTML);

      apptHTML = "";

        if (index % 2 !== 0) {
          apptHTML =

        "<div class='dateWrap'>" +
        "    <div class='dateLine'>" +
        "    </div>" +
        "    <div class='dateDay'>hello</div>" +
        "</div>";

        $("#appt-container").append(apptHTML);
        apptHTML = "";
      }


// console.log(apptHTML);
});
console.log(apptHTML);
  // $("#appt-container").html(apptHTML);



  // var myOtherAppt = JSON.parse(localStorage.getItem("appt01"));
  // console.log("** localStorage.getItem **");
  // console.log(myOtherAppt);


});  // End of file.
