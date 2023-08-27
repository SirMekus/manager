import { api } from "./router.js";
import {showSpinner} from 'mmuo'

const auth = {
    //Normally if the user is logged in then coming to this page should redirect the user to the dashboard. This is usually the signup/login page
    redirectToDashboardIfAuthenticated: async function (to, from) {
        try {
            const response = await axios.get(api.auth.auth_confirm);
            return { name: "staff" };
        } catch (error) {
            if(error.response.status === 403){
                return { name: "verify_email" };
            }
            //user can stay on the page
        }
    },

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
