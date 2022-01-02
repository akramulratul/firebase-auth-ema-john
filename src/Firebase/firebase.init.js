import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuthentication;

/* steps for authentication
----------------------------------------------------------------
Initial Setup
1. firebase: create project 
2. create web app
3. get configuration
4.initialize firebase 
5. Enable auth method 
-------------------------------
Step-2
1. Create Login Component
2.create Register Component
3. Create Route for login and Registration

----------------------------
Setep 3:
1. set up signin method 
2. set up sign up method
3. userstate
4. special observer


*/
