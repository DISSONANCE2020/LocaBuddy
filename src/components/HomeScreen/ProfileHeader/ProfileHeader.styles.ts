import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 132,
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: 16,
    paddingBottom: 12,
    backgroundColor: "transparent",
    zIndex: 10,
  },
  content: {
    height: 72,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    flex: 1,
    borderWidth: 2,
    borderRadius: 100,
    borderColor: "#ffffffff",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 25,
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
    fontSize: 18,
    fontWeight: "600",
    color: "#ffffffff",
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
