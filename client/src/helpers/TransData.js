import axios from "axios";

export default class TransData {
  // Initializing important variables
  constructor() {
    this.login = this.login.bind(this);
  }

  grabInst(data) {
    console.log("pull Inst fired");
    fetch("/api/get_inst", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user_id: localStorage.getItem("user_id") })
    })
      .then(data => data.json())
      .then(response => console.log(response))
      .catch(err => console.log(err.message));
    console.log("LOLLLLLL");
  }



}