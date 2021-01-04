export const apiconfig = (endpoint, body, service) => {
    // const [status, setstatus] = useState()
    const config = {
      method: service,
      url: 'http://udrive.b2bmart.org.in/api/' + endpoint,
      data: body,
      // headers: { 'User-Agent': 'Console app' }
    };
  
    return config;
  };
  



export const BASE_URL = 'http://api.inatrip.in/api/';
export const bookRideEndPoint = 'bookride.php';
export const offerRideEndPoint = 'rideoffer.php';
export const getCarsEndPoint = 'getcars.php';
export const getAvailableRidesEndPoint = 'available-cars.php';
export const profileOtpEndPoint = 'profile-otp.php';
export const profileEndPoint = 'add-profile.php';
export const updateEndPoint = 'update-profile.php';

export const driverProfileEndPoint = 'add-driver.php';
export const driverProfileEndPoint2 = 'add-driver2.php';
export const addCarEndPoint = 'add-car.php';
export const getDriverEndPoint = 'getdrivers.php'
export const listRidesEndPoint = 'list-rides.php'
export const ratingsEndPoint = 'custrating.php'
export const startRideEndPoint = 'start-ride.php'
export const endRideEndPoint = 'end-ride.php'
export const updateScratchEndPoint = 'update-scratch.php'
export const confirmRideEndPoint = 'confirm-ride-otp.php'
export const requestRideEndPoint = 'request-ride.php'
export const rewardsEndPoint = 'scratch-details.php'
export const registerDevice = 'register-device.php';
export const getProfileEndPoint = 'get-profile.php';
export const cancelBookride = "cancel-book-ride.php";
export const cancelOfferride = "cancel-offer-ride.php";
export const custRating = "custrating.php";
export const updateDriver = "update-driver.php";
export const updateCar = "update-car.php";
export const socailLogin = "social-connect.php";
export const getNotificationsEnd = "get-notifications.php";
export const AUTO_SUGGESTION_API_KEY = 'Tj6wS42-DsQfgU988GUuvFG8rIRFcukBU4H_KoofoyA';
export const API_KEY = 'AIzaSyDFrl_WzEA9GKKtFCk52ealyMPoS9akd4U';
export const AUTO_COMPLETE_URL = "https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?apiKey=Tj6wS42-DsQfgU988GUuvFG8rIRFcukBU4H_KoofoyA&query="
export const appVersionInfoUrl = "http://api.inatrip.in/api/get_app_info.php"

