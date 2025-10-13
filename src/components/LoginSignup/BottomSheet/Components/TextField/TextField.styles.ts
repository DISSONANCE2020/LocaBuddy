import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    gap: 8,
  },
  textContainer: {
    height: 60,
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: 4,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "#11998E",
  },
  label: {
    color: "#11998E",
    fontWeight: "600",
  },
  value: {
    paddingVertical: 0,
    fontSize: 16,
    color: "#11998E",
    textAlignVertical: "center",
  },
  placeholder: {
    color: "#cdcdcd",
  },
});
