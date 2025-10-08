//GENERAL
export type Section = "default" | "places" | "friends" | "wallet" | "settings";

//PLACES SUBSECTIONS
export type PlacesSubSection = "placesAdd";
export type Place = { id: string, name: string }

//EVERYTHING ACCESSED IN BOTTOM SHEET
export type ActivePanelKey = Section | PlacesSubSection;

export interface PanelConfig {
    label: string;
    icon: any;
    Topper: React.ComponentType<any>;
    Body: React.ComponentType<any>;
    gatedByExpanded?: boolean;
}