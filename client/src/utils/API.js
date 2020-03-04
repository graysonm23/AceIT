import axios from "axios";
// const BaseUrl = process.env.REACT_APP_API;
export default {
  signUpRoute: function(res) {
    console.log(res);
    return axios.post("/api/auth/signup/", res);
  },

  signInRoute: function(res) {
    console.log(res);
    return axios.post("/api/auth/signin/", res);
  }


};
