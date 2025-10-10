import { useState } from "react";
import type { Section } from "../types";
import type { PlacesSubSection } from "../types";

export function useSheetState() {
    const [section, setSection] = useState<Section>("default");
    const [ subSection, setSubSection ] = useState<PlacesSubSection>("placesAdd");

    const selectSection = (next: Section) => {
        setSection(next);
    };

    const goBack = () => {
        setSection("default");
    };

    return { section, selectSection, goBack }
}