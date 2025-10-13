import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 28,
    marginBottom: 28,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  topContainer: {
    alignItems: "center",
    gap: 12,
  },
  buttonContainer: {
    width: "100%",
  },
  bottomRowContainer: {
    alignItems: "center",
  },
  bottomRow: {
    flexDirection: "row",
  },
  topText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#11998E",
  },
  bottomText: {
    fontSize: 16,
  },
  linkText: {
    fontSize: 16,
    color: "#25A2FC",
  },
});
