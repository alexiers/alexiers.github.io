var GivenDate = '2021-01-29';
var CurrentDate = new Date();
GivenDate = new Date(GivenDate);

if (GivenDate > CurrentDate) {

} else {
  setTimeout(function(){
    window.location.href = "https://www.google.com/";
  }, 3000);
}
