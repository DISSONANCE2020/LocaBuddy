import { useState } from "react";
import type { Section } from "../types";

export function useSheetState() {
    const [section, setSection] = useState<Section>("default");

    const selectSection = (next: Section) => {
        setSection(next);
    };

    const goBack = () => {
        setSection("default");
    };

    return { section, selectSection, goBack }
}