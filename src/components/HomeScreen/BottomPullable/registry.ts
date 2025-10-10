import type { PanelConfig, Section, PlacesSubSection, Place, ActivePanelKey } from "./types";
import { icons } from "./icons";

//IMPORTS FOR DEFAULT PANEL
import DefaultTopper from "./Panels/Default/Topper/DefaultTopper";
import DefaultBody from"./Panels/Default/Body/DefaultBody";

//IMPORTS FOR PLACES PANEL
import PlacesTopper from "./Panels/Places/Topper/PlacesTopper";
import PlacesBody from "./Panels/Places/Body/PlacesBody";

//IMPORTS FOR EVERYTHING UNDER PLACES PANEL
import PlacesAddBody from "./Panels/PlacesAdd/Body/PlacesAddBody";
import PlacesAddTopper from "./Panels/PlacesAdd/Topper/PlacesAddTopper";

const Placeholder = () => null;

export const Panels: Record<ActivePanelKey, PanelConfig> = {
  //DEFAULT
    default: {
        label: "Home",
        icon: icons.places,
        Topper: DefaultTopper,
        Body: DefaultBody,
    },

    //PLACES
    places: {
        label: "Places",
        icon: icons.places,
        Topper: PlacesTopper,
        Body: PlacesBody,
    },
    placesAdd: {
      label: "Add Place",
      icon: icons.add,
      Topper: PlacesAddTopper,
      Body: PlacesAddBody,
    },

    //FRIENDS
    friends : {
        label: "Friends",
        icon: icons.friends,
        Topper: Placeholder,
        Body: Placeholder,
    },

    //WALLET
    wallet : {
        label: "Wallet",
        icon: icons.wallet,
        Topper: Placeholder,
        Body: Placeholder,
    },

    //SETTINGS
    settings : {
        label: "Settings",
        icon: icons.settings,
        Topper: Placeholder,
        Body: Placeholder,
    }
}

// Example data for user's added places, will be replaced with real data later
export const PlacesUser: Place[] = [
    { id: "1", name: "Home" },
    { id: "2", name: "Work" },
    { id: "3", name: "Gym" },
    { id: "4", name: "Supermarket" },
];


// Example data for places near user, will be replaced with real data later
export const PlacesNear: Place[] = [
    { id: "1", name: "Mug & Magic" },
    { id: "2", name: "Robinsons Angeles" },
    { id: "3", name: "Mitsubishi Angeles" },
    { id: "4", name: "Jollibee Sta. Maria" },
];