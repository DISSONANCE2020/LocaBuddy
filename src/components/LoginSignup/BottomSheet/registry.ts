import type { PanelConfig, Section, ActivePanelKey } from "./types";
import { icons } from "./icons";

//IMPORTS FOR DEFAULT PANEL
import LoginTopper from "./Panels/Login/Topper/LoginTopper";
import LoginBody from"./Panels/Login/Body/LoginBody";

//IMPORTS FOR PLACES PANEL
import SignupTopper from "./Panels/Signup/Topper/SignupTopper";
import SignupBody from "./Panels/Signup/Body/SignupBody";

//IMPORTS FOR EVERYTHING UNDER PLACES PANEL
import CreateAccountTopper from "./Panels/CreateAccount/Topper/CreateAccountTopper";
import CreateAccountBody from "./Panels/CreateAccount/Body/CreateAccountBody";

const Placeholder = () => null;

export const Panels: Record<ActivePanelKey, PanelConfig> = {
  //LOGIN
    login: {
        label: "Login",
        Topper: LoginTopper,
        Body: LoginBody,
    },

    //SIGNUP
    signup: {
        label: "Sign Up",
        Topper: SignupTopper,
        Body: SignupBody,
    },

    //CREATE ACCOUNT
        createAccount: {
        label: "Create Account",
        Topper: CreateAccountTopper,
        Body: CreateAccountBody,
    },
}