import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: "#f8f8f8",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  info: {
    marginLeft: 12,
    flex: 1,
  },
  username: {
    fontSize: 18,
    fontWeight: "600",
  },
  levelRow: {
    marginTop: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  levelText: {
    fontSize: 14,
    fontWeight: "500",
    marginRight: 8,
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
    backgroundColor: "#4caf50",
  },
});
