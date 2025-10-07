import { StyleSheet } from "react-native";

export default StyleSheet.create({
  sheetContent: {
    height: 80,
    paddingVertical: 16,
    marginHorizontal: 28,
    backgroundColor: "transparent",
    borderBottomWidth: 1,
    borderColor: "#CDCDCD",
  },

  rowContent: {
    flexDirection: "row",
  },

  icon: {
    width: 48,
    height: 48,
    borderRadius: 100,
    backgroundColor: "#11998E",
    alignItems: "center",
    justifyContent: "center",
  },
  iconImage: {
    width: "60%",
    height: "60%",
    resizeMode: "contain",
  },
  info: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    marginLeft: 12,
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: "400",
    color: "#000000ff",
  },
});
