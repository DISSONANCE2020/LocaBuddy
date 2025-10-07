import type { PanelConfig, Section, PlacesSubSection } from "./types";
import { icons } from "./icons";

import DefaultTopper from "./Panels/Default/Topper/Topper";
import DefaultBody from"./Panels/Default/Body/Body";
import PlacesTopper from "./Panels/Places/Topper/Topper";
import PlacesBody from "./Panels/Places/Body/Body";

const Placeholder = () => null;

export const PANELS: Record<Section, PanelConfig> = {
    default: {
        label: "Home",
        icon: icons.places,
        Topper: DefaultTopper,
        Body: DefaultBody,
    },
    places: {
        label: "Places",
        icon: icons.places,
        Topper: PlacesTopper,
        Body: PlacesBody,
    },
    friends : {
        label: "Friends",
        icon: icons.friends,
        Topper: Placeholder,
        Body: Placeholder,
    },
    wallet : {
        label: "Wallet",
        icon: icons.wallet,
        Topper: Placeholder,
        Body: Placeholder,
    },
    settings : {
        label: "Settings",
        icon: icons.settings,
        Topper: Placeholder,
        Body: Placeholder,
    }
}