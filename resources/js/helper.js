import { getQueryStringsFromUrl, empty, DisplayAsToast } from "mmuo"

function queryString(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function capitalLetters(s=null) {
    if(s){
        return s.trim().split(" ").map((i) => i[0].toUpperCase() + i.substr(1)).reduce((ac, i) => `${ac} ${i}`);
    }
}

  //This is the default storage location on the internet where files are saved
function storage(name, sub_folder='school'){
    return name ? `${document.querySelector('meta[name="base_url"]').content}storage/${sub_folder}/${name}` : null
}

async function submitWithGet(url, data=null, suppressError=false)
{
    try {
        const response = await axios.get(url, {
            params: data
          })
        return {'status':true, 'msg':response.data || null, 'status_code':response.status}
      } catch (error) {
        let message, status_code

        if(error.request){
          message = "Something went wrong. Please try again"
          status_code = 500
        }
        else{
          message = error.response.data.message || error.response.data
          status_code = error.response.status
        }
      
        if(!suppressError){
            showCanvass(message)
        }
        return {'status':false, 'message':message, 'status_code':status_code}
      }
}

export {queryString, capitalLetters, getQueryStringsFromUrl, storage, DisplayAsToast, empty, submitWithGet}