import decode from "jwt-decode";
import axios from "axios";

export default class Decode {
  // Initializing important variables
  constructor(domain) {
    this.domain = domain || "http://localhost:3001"; // API server domain
    // this.fetch = this.fetch.bind(this); // React binding stuff
    this.login = this.login.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  login(user) {
    console.log("login function fired");
    axios.post("/api/login", { user }).then(res => {
      console.log(res);

      this.setToken(res.data.token); // Setting the token in localStorage
      return Promise.resolve(res);
      // }
    });
  }

  loggedIn() {
    console.log("loggedIn function fired");
    // Checks if there is a saved token and it's still valid
    const token = this.getToken(); // GEtting token from localstorage
    return !!token && !this.isTokenExpired(token); // handwaiving here
  }

  isTokenExpired(token) {
    console.log("Token aint expired");
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        // Checking if token is expired. N
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  setToken(idToken) {
    // Saves user token to localStorage
    localStorage.setItem("id_token", idToken);
  }

  getToken() {
    console.log("Token got");
    // Retrieves the user token from localStorage
    return localStorage.getItem("id_token");
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem("id_token");
  }

  getProfile() {
    // Using jwt-decode npm package to decode the token
    return decode(this.getToken());
  }}