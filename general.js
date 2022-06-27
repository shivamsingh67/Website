$(document).ready(function () {

  if (window.location.search.split('?').length > 1) {
    var params = window.location.search.split('?')[1].split('&');
    var queryString = decodeURIComponent(params[0]);
    console.log(queryString);
    showUserName(queryString);
    //console.log(params[0]);
  } else {
    $("#userName").hide();
  }
  function showUserName(params) {
    console.log(params);
    $(".fi-rr-user").hide();
    $("#userName").show();
    $("#userName").text(params);
  }
  $('#myCarousel').carousel({
    interval: 5000
  })

});