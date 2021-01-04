// import axios from 'axios';
import {users_fetch_sucess,users_update_sucess,users_update_failure,users_update_fetch} from "./actioncontants"

export const users_fetch_action = ({userdata}) => { 
    return {
        type: users_fetch_sucess,
        userdata,
    }
  };

//   export const users_update = ({rsa_code,c_id,username,email,mobile,address1,city2,pincode}) => {
    
//     return  function (dispatch) {
//       dispatch(onposting())
//       const body = {
//             grs_code:rsa_code,
//             ccode:c_id,
//             email: email,
//             username: username,
//             mobileno: mobile,
//             address:address1,
//             city:city2,
//             pincode:pincode,
//             gst:gst,

        
//       };
//       const config = apiconfig('update_customer.php', body, 'POST');
//       // console.log(config)
//       axios(config)
//         .then((response) => {
//           console.log('response   update profile', response);
//           return(dispatch(onsucessign(response.data.content)))
  
//         })
//         .catch((error) => {
//             console.log('error', error);
//           dispatch(onerrorsign(error))
//         });
//     };

//     function onposting(){
//       return {
//         type: users_update_fetch,
//     }
//   }
//     function onsucessign(data){
//       return {
//           type: users_update_sucess,
//           data
//       }
//   }
  
//   function onerrorsign(errormsg){
//       return {
//           type: users_update_failure,
//           errormsg
//       }
  
//   }
//   };