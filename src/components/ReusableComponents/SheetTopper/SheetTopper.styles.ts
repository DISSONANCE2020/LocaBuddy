import { StyleSheet } from "react-native";

export default StyleSheet.create({
  sheetTopper: {
    borderRadius: 32,
    height: 120,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  handle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#ffffffff",
    alignSelf: "center",
    marginBottom: 8,
  },
  sheetTopperContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 100,
    backgroundColor: "#ffffffff",
  },
  info: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    marginLeft: 12,
    flex: 1,
  },
  username: {
    fontSize: 24,
    fontWeight: "600",
    color: "#ffffffff",
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
});
