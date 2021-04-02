var GivenDate = '2021-02-16';
var CurrentDate = new Date();
GivenDate = new Date(GivenDate);
alert (GivenDate);
alert(CurrentDate);
if (GivenDate > CurrentDate) {

} else {
  setTimeout(function(){
    window.location.href = "https://www.google.com/";
  }, 3000);
}
