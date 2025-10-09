//GENERAL
export type Section = "login" | "signup" | "createAccount";

//EVERYTHING ACCESSED IN BOTTOM SHEET
export type ActivePanelKey = Section;

export interface PanelConfig {
    label: string;
    Topper: React.ComponentType<any>;
    Body: React.ComponentType<any>;
    gatedByExpanded?: boolean;
}