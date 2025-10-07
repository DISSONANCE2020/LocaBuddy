export type Section = "default" | "places" | "friends" | "wallet" | "settings";

export interface PanelConfig {
    label: string;
    icon: any;
    Topper: React.ComponentType<any>;
    Body: React.ComponentType<any>;
    gatedByExpanded?: boolean;
}