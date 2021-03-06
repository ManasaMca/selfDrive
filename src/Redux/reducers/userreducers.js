const userinitialState = {
  pcode: '',
  fname: '',
  lname: '',
  mobile: '',
  email: '',
  location: '',
  city: '',
  state: '',
  logitude: '',
  latitude: '',
  profilepic: '',
  error: false,
  errormsg: "",
  issignup_sucess: false,
  sucess: false,
};

const userReducer = (state = userinitialState, action) => {
  console.log('user update action',action)
  switch (action.type) {

    case 'USERS_FETCH_SUCESS':

      console.log("redusers", action.userDetails.pcode)
      return {
        ...state,
        pcode: action.userDetails.pcode,
        fname: action.userDetails.fname,
        lname: action.userDetails.lname,
        mobile: action.userDetails.mobile,
        email: action.userDetails.email,
        location: action.userDetails.location,
        city: action.userDetails.city,
        state: action.userDetails.state,
        logitude: action.userDetails.logitude,
        latitude: action.userDetails.latitude,
        profilepic: action.userDetails.profilepic,
        isfetching_login: true,
        sucess: true
      };


    case 'USER_UPDATE_FETCHING':
      return {
        ...state,
        isfetching_login: true,
        errormsg: "",
        error: false,

      }
    case 'USER_UPDATE_SUCESS':
      return {
        ...state,
        ...action.data
      };

    case 'USER_UPDATE_FAILURE':
      return {
        ...state,
        isfetching_login: false,
        error: true,
        errormsg: action.errormsg
      };

    default:
      return state;
  }
};
export default userReducer;
