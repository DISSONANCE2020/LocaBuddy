//GENERAL
export type Section = "default" | "places" | "friends" | "wallet" | "settings";

//PLACES SUBSECTIONS
export type PlacesSubSection = "placesList" | "addPlace";
export type Place = { id: string, name: string }

export interface PanelConfig {
    label: string;
    icon: any;
    Topper: React.ComponentType<any>;
    Body: React.ComponentType<any>;
    gatedByExpanded?: boolean;
}