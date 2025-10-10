import { StyleSheet } from "react-native";

export default StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.7)",
  },
  info: {
    marginLeft: 14,
    flex: 1,
  },
  username: {
    fontSize: 24,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 2,
  },
  locationDetails: {
    gap: 0,
  },
  locationText: {
    fontSize: 12,
    color: "rgba(255,255,255,0.9)",
  },
});
