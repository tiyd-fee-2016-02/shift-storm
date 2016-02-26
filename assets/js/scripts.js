$(function () {
  'use strict';

  function Appointment(title) {
    this.title = title;
    this.createDate = new Date();
    this.appointmentDate = null;
    // location data
    this.street = "";
    this.city = "";
    this.state = "";
    // weather data
    this.temperature = 0;
    this.desciption = "";
    this.weatherType = "";  // cloudy, rainy, sunny
    // methods
    // this.getInfo = function() {
    //     return "title = " + this.title + " \n" +
    //            "create date = " + this.createDate + " \n" +
    //            "appointment date = " + this.appointmentDate + "\n" +
    //            "street = " + this.street + "\n" +
    //            "city = " + this.city + "\n" +
    //            "state = " + this.state + "\n" +
    //            "temperature = " + this.temperature + "\n" +
    //            "description = " + this.desciption + "\n" +
    //            "weather type = " + this.weatherType + "\n";
    // };
}

var myAppt = new Appointment("app1");
myAppt.appointmentDate = new Date();
myAppt.street = "1212 Boogie Boogie Ave.";
myAppt.city = "Norfolk";
myAppt.state = "VA";
myAppt.temperature = 55;
myAppt.desciption = "Cold as ****!";
myAppt.weatherType = "rainy";
console.log(myAppt);

window.localStorage.setItem(myAppt.title, JSON.stringify(myAppt));
console.log("** localStorage.setItem **");

// var myOtherAppt = new Appointment();
var myOtherAppt = JSON.parse(localStorage.getItem(myAppt.title));
console.log("** localStorage.getItem **");
console.log(myOtherAppt);


// var myUser = "octocat";

// $.getJSON(("apis/github/users/octocat.json"), function (value) {
// $.getJSON(("http://api.github.com/users/" + myUser), function (value) {
//
//   var myUserTemp = _.template("<%- m.avatar_url %> "
//                             + "<%- m.name %> "
//                             + "<%- m.login %> "
//                             + "<%- m.company %> "
//                             + "<%- m.location %> "
//                             + "<%- m.email %> "
//                             + "<%- m.blog %> "
//                             + "<%- m.created_at %> "
//                             + "<%- m.followers %> "
//                             + "<%- m.following %>", {variable: "m"});
//
//   $("#profileImage").attr("src", myUserTemp({ name: value.avatar_url}));
//   $("#fullName").html(myUserTemp({ name: value.name}));
//   $("#loginId").html(myUserTemp({ name: value.login}));
//   $("#company").html(myUserTemp({ name: value.company}));
//   $("#userLocation").html(myUserTemp({ name: value.location}));
//   $("#emailAddress").html(myUserTemp({ name: value.email}));
//   $("#userURL").html(myUserTemp({ name: value.blog}));
//   $("#startDate").html(formatDate( myUserTemp({ name: value.created_at})));
//   $("#following").html(myUserTemp({ name: value.following}));
//   $("#followers").html(formatNumber( myUserTemp({ name: value.followers})));
// });
  //end JSON #1

});  // End of file.
