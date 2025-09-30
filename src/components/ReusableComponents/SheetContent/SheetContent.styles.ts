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

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 100,
    backgroundColor: "#11998E",
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
  locationDetails: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  locationText: {
    fontSize: 12,
    fontWeight: "500",
    marginRight: 8,
    color: "#ffffffff",
  },
  expBarBackground: {
    flex: 1,
    height: 6,
    backgroundColor: "#ddd",
    borderRadius: 3,
    overflow: "hidden",
  },
  expBarFill: {
    width: "50%",
    height: "100%",
    backgroundColor: "#ffc400ff",
  },
});
