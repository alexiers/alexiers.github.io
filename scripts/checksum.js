const GivenDate = new Date('2030-09-11');
const CurrentDate = new Date();

function redirectToDestination() {
  window.location.href = "https://www.google.com/";
}

if (CurrentDate >= GivenDate) {
  // Wait for 3 seconds before redirecting
  setTimeout(redirectToDestination, 3000);
}
