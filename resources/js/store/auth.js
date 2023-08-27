import { defineStore } from "pinia";
import { api } from '@/router';

export const useAuthStore = defineStore("auth", {
    state: () => {
        return {
            data: null,
        };
    },
    getters: {},
    actions: {
        //This is called whenever Vue route is loaded for the first time, or whenever navigation is triggered
        async updateProfile() {
          try {
            const response = await axios.get(api.auth.auth_confirm);
            this.data = response.data
          } catch (error) {
              //console.log("There was an error in checking authentication");
          }
        },

        //We require users to verify their emails. If email is not verified the features should be limited at least. 
        verified(to, from) {
          if(this.userData != null){
            console.log("user has data")
          }
          else {
            console.log("user does not have data")
            //return { name: 'login' }
            
          }
        }
    },
});
