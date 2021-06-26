import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    width: '100%',
    height: 170,
    bottom: 0,
  },
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay,
  },
  signOutContainer: {
    flex: 1,
  },
  signOutText: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.heading,
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 30,
    fontWeight: 'bold',
  },
  playText: {
    color: theme.colors.primary,
  },
  signOutButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 28,
  },
  signOutButton: {
    width: 160,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signOutButtonText: {
    fontFamily: theme.fonts.text500,
    color: theme.colors.heading,
    fontSize: 15,
    fontWeight: "500",
  },
  cancel: {
    borderWidth: 1,
    borderColor: theme.colors.secondary30,
    marginRight: 8,
    borderRadius: 8,
  },
  ok: {
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
  }
});