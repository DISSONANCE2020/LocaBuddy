import { StyleSheet } from "react-native";

export default StyleSheet.create({
  search: {
    height: 80,
    paddingVertical: 16,
    marginHorizontal: 28,
    backgroundColor: "transparent",
    borderBottomWidth: 1,
    borderColor: "#11998E",
    flexDirection: "row",
  },
  icon: {
    width: 48,
    height: 48,
    borderRadius: 100,
    backgroundColor: "#ffffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  iconImage: {
    width: "60%",
    height: "60%",
    resizeMode: "contain",
  },
  inputContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    marginLeft: 8,
    flex: 1,
  },
  input: {
    fontSize: 16,
    fontWeight: "400",
    color: "#000000ff",
  },
});
