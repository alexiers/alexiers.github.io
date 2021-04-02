var GivenDate = '2022-06-18';
var CurrentDate = new Date();
GivenDate = new Date(GivenDate);

if (GivenDate > CurrentDate) {

} else {
  setTimeout(function(){
    window.location.href = "https://www.google.com/";
  }, 3000);
}
