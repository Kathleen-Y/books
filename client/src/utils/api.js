import axios from "axios"

export default {
    getGoogleBooks: function(title){
        return axios.get("/api/google/" + title)
    }
}