const carinitialState = {
    car:[],
    isfetchingbrand: true,
    branderror: false,
    branderrormsg: '',
    brandsucess: false,
    };
  
    const carReducer = (state = carinitialState, action) => {
      // console.log("hello")
  
      switch (action.type) {
        case 'CAR_FETCH':
          return {
            ...state,
            isfetchingbrand: true,
          };
        case 'CAR_FETCH_SUCESS':
          console.log("cacacac",action.data)
            return {
            ...state,
            car:action.data,
            isfetchingbrand: false,
            brandsucess:true,
          };
    
        case 'CAR_FETCH_FAILURE':
          return {
            ...state,
            isfetchingbrand: false,
            branderror: true,
            branderrormsg: action.errormsg,
          };
       
    
        default:
          return state;
      }
    };
    export default carReducer;