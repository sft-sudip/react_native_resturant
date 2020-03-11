import { StyleSheet } from "react-native";

export default StyleSheet.create({
  // After Splash Screen Start //
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  homeLogo: {
    width: 150,
    height: 150
  },
  afterHomeLogo: {
    padding: 40,
    width: 400
  },
  afterHomeLogoText: {
    textAlign: "center",
    fontSize: 15
  },
  homeLoginBtn: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    borderRadius: 10,
    backgroundColor: "#74be1f",
    borderWidth: 2,
    borderColor: "#74be1f"
  },
  homeRegisterBtn: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#74be1f"
  },
  homeRegisterBtnText: {
    color: "#74be1f"
  },
  // After Splash Screen End //

  // Header Screen Start //
  headerContainer: {
    backgroundColor: "#74be1f"
  },
  // Header Screen End //

  // Footer Screen Start //
  footerContainer: {
    backgroundColor: "#ebfadc"
  },
  footerText: {
    color: "#74be1f",
    fontWeight: "bold",
    fontSize: 10
  },
  footerIcon: {
    color: "#000000"
  },
  // Footer Screen End //

  // Sidemenu Screen Start //
  safeDrawerContainer: {
    flex: 1,
    backgroundColor: "#ebfadc"
  },
  drawerProfile: {
    paddingTop: 50,
    paddingBottom: 50
  },
  drawerProfileText: {
    fontWeight: "bold"
  },
  // Sidemenu Screen End //

  // Login Screen Start //
  loginScreenBtn: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#74be1f",
    borderWidth: 2,
    borderColor: "#74be1f"
  },
  loginScreenInput: {
    marginBottom: 20,
    borderRadius: 10
  },
  loginForgotBtn: {
    alignItems: "center",
    justifyContent: "center"
  },
  loginForgotBtnText: {
    color: "#ea3800",
    marginTop: 20
  }
  // Login Screen End //
});
