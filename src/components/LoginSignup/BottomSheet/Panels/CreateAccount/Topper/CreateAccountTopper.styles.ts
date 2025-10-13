import { StyleSheet } from "react-native";

export default StyleSheet.create({
  content: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  avatarWrapper: {
    width: 132,
    height: 132,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#CDCDCD",
    backgroundColor: "#CDCDCD",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    marginBottom: 8,
  },
  addIcon: {
    width: 96,
    height: 96,
  },
  avatarImage: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 24,
    fontWeight: "600",
    color: "#11998E",
  },
});