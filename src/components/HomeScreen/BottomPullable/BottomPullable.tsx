import React, { useRef, useState, useEffect, useMemo } from "react";
import { Dimensions, Animated, PanResponder } from "react-native";
import styles from "./BottomPullable.styles";
import SheetTopper from "./Components/SheetTopper/SheetTopper";
import { useSheetState } from "./Hooks/useSheetState";
import { Panels } from "./registry";
import { ActivePanelKey, Section } from "./types";

const { height } = Dimensions.get("window");
const COLLAPSED_HEIGHT = height * 0.36;
const EXPANDED_HEIGHT = height * 0.54;
const ACTIVE_PANEL_HEIGHT = height * 0.78;

interface BottomPullableProps {
  section: Section;
  visible: boolean;
  isExpanded: boolean;
  setSelected?: (s: Section) => void;
}

export default function BottomPullable({
  section,
  isExpanded,
}: BottomPullableProps) {
  const [internalIsExpanded, setInternalIsExpanded] = useState(isExpanded);

  const { selectSection, goBack } = useSheetState();

  const setSectionAndPanel = React.useCallback(
    (p: Section) => {
      selectSection(p);
      setActivePanel(p);
    },
    [selectSection]
  );

  const [activePanel, setActivePanel] = useState<ActivePanelKey>(section);

  const normalizedActive: ActivePanelKey = (Panels as any)[activePanel]
    ? activePanel
    : "default";

  const panelEntry = Panels[normalizedActive];
  const { Topper: SelectedTopper, Body: SelectedBody } = panelEntry;

  const isDefaultView = normalizedActive === "default";

  const animatedHeight = useRef(
    new Animated.Value(
      isDefaultView
        ? isExpanded
          ? EXPANDED_HEIGHT
          : COLLAPSED_HEIGHT
        : ACTIVE_PANEL_HEIGHT
    )
  ).current;

  const isDefaultViewRef = useRef(isDefaultView);
  const isExpandedRef = useRef(internalIsExpanded);

  useEffect(() => {
    isDefaultViewRef.current = isDefaultView;
  }, [isDefaultView]);
  useEffect(() => {
    isExpandedRef.current = internalIsExpanded;
  }, [internalIsExpanded]);

  useEffect(() => {
    setActivePanel(section);
  }, [section]);

  useEffect(() => {
    if (isDefaultView) {
      Animated.timing(animatedHeight, {
        toValue: internalIsExpanded ? EXPANDED_HEIGHT : COLLAPSED_HEIGHT,
        duration: 200,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animatedHeight, {
        toValue: ACTIVE_PANEL_HEIGHT,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  }, [isDefaultView, internalIsExpanded]);

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => false,
        onMoveShouldSetPanResponder: (_, g) =>
          isDefaultViewRef.current && Math.abs(g.dy) > 12,
        onPanResponderMove: (_, g) => {
          if (!isDefaultViewRef.current) return;
          const start = isExpandedRef.current
            ? EXPANDED_HEIGHT
            : COLLAPSED_HEIGHT;
          const next = Math.min(
            EXPANDED_HEIGHT,
            Math.max(COLLAPSED_HEIGHT, start - g.dy)
          );
          animatedHeight.setValue(next);
        },
        onPanResponderRelease: (_, g) => {
          if (!isDefaultViewRef.current) return;
          const shouldExpand = g.dy < -40;
          const toValue = shouldExpand ? EXPANDED_HEIGHT : COLLAPSED_HEIGHT;
          setInternalIsExpanded(shouldExpand);
          Animated.timing(animatedHeight, {
            toValue,
            duration: 200,
            useNativeDriver: false,
          }).start();
        },
      }),
    []
  );

  return (
    <Animated.View
      style={[styles.sheet, { height: animatedHeight }]}
      {...panResponder.panHandlers}
    >
      <SheetTopper>
        <SelectedTopper
          onBack={goBack}
          section={section}
          isExpanded={internalIsExpanded}
          setActivePanel={setActivePanel}
          setSelected={setSectionAndPanel}
        />
      </SheetTopper>
      <SelectedBody
        section={section}
        setSelected={setSectionAndPanel}
        isExpanded={internalIsExpanded}
        setActivePanel={setActivePanel}
      />
    </Animated.View>
  );
}
