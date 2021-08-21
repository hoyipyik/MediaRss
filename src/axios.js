import axios from "axios";

const instance = axios.create({
    baseURL:"https://mediarssdemo-default-rtdb.europe-west1.firebasedatabase.app/",
    // headers:{
    //     common:{
    //     'Authorization':'application/json'
    //     },
    //     post:{
    //         'Content-Type':'application/json'
    //     }
    // },

})

export default instance