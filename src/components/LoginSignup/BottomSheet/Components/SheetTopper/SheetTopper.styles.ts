import { StyleSheet } from "react-native";

export default StyleSheet.create({
  sheetTopper: {
    flexDirection: "column",
    borderRadius: 32,
    minHeight: 120,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffffff",
  },
  content: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
