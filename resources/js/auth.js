import { api } from "./router.js";
import {showSpinner} from 'mmuo'

const auth = {
    logout: function(user){
        const endpoint = api.auth.logout
    
        const redirect = api.auth.login
    
        showSpinner()
        axios.post(endpoint).then((response) => {
            user.data = null;
            location.href = redirect
        }).catch((error) => {
                    //
            }).then(() => {
    
        })
    }
};

export { auth };
