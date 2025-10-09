import { useState } from "react";
import type { Section } from "../types";

export function useSheetState() {
    const [section, setSection] = useState<Section>("login");

    const selectSection = (next: Section) => {
        setSection(next);
    };

    const goBack = () => {
        setSection("login");
    };

    return { section, selectSection, goBack }
}