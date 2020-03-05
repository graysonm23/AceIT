import axios from "axios";

export default {
  signUpRoute: function(res) {
    console.log(res);
    return axios.post("/api/auth/signup/", res);
  },

  signInRoute: function(res) {
    console.log(res);
    return axios.post("/api/auth/signin/", res);
  },

  boardEditorRoute: function(data) {
    console.log(data);
    return axios.post("/api/auth/board-editor/", data);
  }
};
