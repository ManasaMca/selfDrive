const userinitialState = {
    pcode: '',
    fname: '',
    lname: '',
    mobile:'',
    email:'',
    location:'',
    city:'',
    state:'',
    logitude:'',
    latitude:'',
    profilepic:'',
    error:false,
    errormsg:"",
    issignup_sucess:false,
    sucess:false,
  };
  
  const userReducer = (state = userinitialState, action) => {
    switch (action.type) {
      
      case 'USERS_FETCH_SUCESS':

      console.log("redusers",action.userdata.pcode)
        return {
         ...state,
          pcode: action.userdata.pcode,
          fname: action.userdata.fname,
          lname: action.userdata.lname,
          mobile: action.userdata.mobile,
          email:action.userdata.email,
          location:action.userdata.location,
          city:action.userdata.city,
          state:action.userdata.state,
          logitude:action.userdata.logitude,
          latitude:action.userdata.latitude,
          profilepic:action.userdata.profilepic,
          isfetching_login:true,
          sucess:true 
        };
  
  
        case 'USER_UPDATE_FETCHING':
          return{
            ...state,
            isfetching_login:true,
            errormsg:"",
            error:false,
    
          }
        case 'USER_UPDATE_SUCESS':
          return {
            ...state,
            userid: action.data.ccode,
            email: action.data.email_id,
            username: action.data.name,
            mobileno: action.data.mobileno,
            pincode:action.data.opincode,
            shipping_add:action.data.shipping_address,
            city:action.data.cityid,
            pincode:action.data.pincode,
            gst:action.data.gst,
            isfetching_login:true,
            sucess:true
          };
    
        case 'USER_UPDATE_FAILURE':
          return {
            ...state,
            isfetching_login:false,
        error:true,
        errormsg:action.errormsg
          };
  
      default:
        return state;
    }
  };
  export default userReducer;
  