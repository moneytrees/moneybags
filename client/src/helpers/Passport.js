"use strict";
const AuthClass = ( () => {

    function AuthClass() {
    //function AuthClass(config) {

        this.user = null;
        //this.configure(config);
        this.currentUserCredentials = this.currentUserCredentials.bind(this);
    }

    AuthClass.prototype.configure = (config) => {
        //custom configuration goes here
        const _config = config;
        return this._config;
    };
    /**
     * Register email, password, email, etc...
     * @param { String | Object }
     * @return Promise
     */
    AuthClass.prototype.registerUser = (params)  => {
        return fetch.post("/api/register", params
        ).then(response  => {
            if (!response.data.errmsg) {
                console.log("successful registration");
                return true;
            } else {
                console.log(
                    "There is already a user registered with this email. Proceed to login."
                );
                return false;
            }
        }).catch(errors => {
            console.log(`Registration error: ${errors}`);
        });
    };


    /**
     * Login in
     * @param {String} email
     * @param {String} password
     * @return Promise
     */
    AuthClass.prototype.signIn = (email, password) => {

        return fetch.post("/api/login", { email: email, password: password
        }).then( res => {
                // Save token to local storage

                /*const { token } = res.data;
                 // Set token to local storage
                 localStorage.setItem("jwtToken", token);
                 // Set token to auth header
                 setAuthToken(token);
                 // Decode token to get user data
                 const decoded = jwt_decode(token);
                 // Set current user
                 dispatch(setCurrentUser(decoded));*/

                if (!res.data.errmsg) {
                    return true;
                } else {
                    console.log("Email or Password incorrect, please try again.");
                    return false;
                }
            })
            .catch(errors => {
                console.log(`Login error: ${errors}`);
            });
    };

    /**
     * Sign in with a password
     * @param {String} email - The user to be logged in
     * @param {String} password - The password of the user
     * @return Promise for encrypted data (?)
     */
    AuthClass.prototype.signInWithPassword = (email, password) => {

        let authDetails = "something";
        return new Promise(function (resolve, reject) {
            //some code here
        });
    };

    /**
     * Sign in without a password
     * @param {String} email - The user to be logged in
     * @return Promise for encrypted data (?)
     */
    AuthClass.prototype.signInWithoutPassword = (email) => {

        let authDetails = "something";
        return new Promise(function (resolve, reject) {
            //some code here
        });
    };

    /**
     * Get current logged-in user
     * @return Promise with current authenticated user info
     */
    AuthClass.prototype.currentLoggedInUser = async () => {
        return await 'somefunctionWithBusinessLogic';
    };
    /**
     * Get user's current session
     * @return Promise with session object
     */
    AuthClass.prototype.currentSession = () => {
        let user;
        console.log('Getting current session');
        //some logic with user variable here
        return "this.userSession(user)";
    };


    AuthClass.prototype.cleanUserCache = async () => {
        return await "some Promise logic to clean cache on logout or some other action";
    };

    /**
     * Initiate password request
     * @param {String} email - the user email to send the password to
     * @return Promise
     */
    AuthClass.prototype.forgotPassword = async (email) => {
       return await "some Promise logic about password request";
    };

    return AuthClass;
})();

export default AuthClass;