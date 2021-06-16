

function city(){
    var city=document.getElementById("tem").value;   
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" +city + "&units=imperial&appid=d23df87776c612a91a5d28398e4d232c",function(data){
console.log(data);
var icon="https://openweathermap.org/img/w/" + data.weather[0].icon +".png";
var temp=(data.main.temp);
var temp1=Math.floor(5*(temp-32)/9);
var humid=(data.main.humidity);
var weather=data.weather[0].main;

$('.tem').html(city);
$('.icon').attr('src',icon);
$('.weather').html(weather);
$('.temp').html("The temperature is "+temp1+"° C");
$('.humid').html("Humidity is "+humid+"%");
$('.city').html(city);
});

}
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 1000);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }