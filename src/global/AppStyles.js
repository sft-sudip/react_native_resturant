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
    marginBottom: 15,
    borderRadius: 10,
    height: 40,
  },
  loginForgotBtn: {
    alignItems: "center",
    justifyContent: "center"
  },
  loginForgotBtnText: {
    color: "#ea3800",
    marginTop: 20
  },
  // Login Screen End //

  // Register Screen Start //
  registerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40
  },
  registerVerifyBtn: {
    borderRadius: 10,
    backgroundColor: "#f00",
    height: 30,
    marginRight: 4
  },
  // Register Screen End //

  // Cart Screen Start //
  cartView: {
    paddingBottom: 20,
    paddingRight: 20
  },
  cartListItem: {
    paddingTop: 5, 
    paddingBottom: 5,
    borderBottomColor: '#dcdcdc',
    borderBottomWidth: 1,
  },
  cartActionBtn: {
    height: 30,
    backgroundColor: "#ededed",
    borderColor: "#dcdcdc",
    borderWidth: 1
  },
  cartActionBtnText: {
    color: "#000000"
  },
  cartNumberBtn: {
    height: 30,
    backgroundColor: "#ffffff",
    borderColor: "#dcdcdc",
    borderWidth: 1
  },
  cartAmountText: {
    fontWeight: "bold",
    color: "#71c015",
    fontSize: 12
  },
  cartItemText: {
    fontWeight: "bold", 
    marginBottom: 10,
    fontSize: 12
  },
  cartItemBtn: {
    borderColor: "transparent"
  },
  cartTotalText: {
    fontWeight: "bold",
    fontSize: 12
  },
  cartNetTotalText: {
    fontWeight: "bold"
  },
  cartTotalAmountText: {
    fontWeight: "bold",
    color: "#71c015",
  },
  // Cart Screen End //

  // Checkout Screen Start //
  checkoutView: {
    padding: 20
  },
  // Checkout Screen End //
});
