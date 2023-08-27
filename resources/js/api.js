const appUrl = '/'

//These routes are called within components and they get data from server which they use in populating the component or submitting a form action
const api = {
    auth:{
        auth_confirm: `${appUrl}api/dashboard/user`,
        login: `${appUrl}login`,
        logout: `${appUrl}logout`,
        signup: `${appUrl}register`,
    },
}

export {api}