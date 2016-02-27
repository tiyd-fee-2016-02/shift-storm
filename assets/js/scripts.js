$(function () {
  'use strict';

  var queryString = window.location.search;
  console.log("queryString = " + queryString);


  var parameters = parseQueryString(queryString);
  console.log(parameters);

  function parseQueryString( queryString ) {
    var params = {} ;
    var queries = [];
    var temp = [];
    // remove "?" character
    queryString = queryString.substring(1);
    // Split into key/value pairs
    queries = queryString.split("&");
    // Convert the array of strings into an object
    $.each(queries, function(i) {
        temp = queries[i].split('=');
        params[temp[0]] = temp[1];  // tricky syntax params[] is the key
      });
    return params;
  };


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

var apiString = "http://api.openweathermap.org/data/2.5/forecast/daily?" +
                "id=4464368" +    // Durham, NC, US
                "&cnt=1" +        // 1 record from 5 Day, 3 Hour Forecast
                "&APPID=82f61d5df7730f4b96d58ed8e8aa6b63";

// $.getJSON(("apis/github/users/octocat.json"), function (value) {
$.getJSON((apiString), function (value) {

  console.log(apiString);
  console.log(value);

  var myUserTemp = _.template("<%- m.name %> "
                            + "<%- m.date %> "
                            + "<%- m.count %> "
                            + "<%- m.maxTemp %> "
                            + "<%- m.weatherType %> "
                            + "<%- m.description %> "
                            + "<%- m.iconCode %> ", {variable: "m"});

  console.log(myUserTemp({ name: value.city.name }));
  console.log(myUserTemp({ name: value.cnt }));
  console.log(myUserTemp({ name: value.list[0].dt }));
  console.log(myUserTemp({ name: value.list[0].temp.max }));
  console.log(myUserTemp({ name: value.list[0].weather[0].main }));
  console.log(myUserTemp({ name: value.list[0].weather[0].description }));
  console.log(myUserTemp({ name: value.list[0].weather[0].icon }));

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
});   // end JSON

});  // End of file.
