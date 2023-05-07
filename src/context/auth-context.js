import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isConnected: false,
  account: "",
  // onLogout: () => {},
  connectWallet: () => {},
});

export const AuthContextProvider = (props) => {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState("");

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };
  async function connectWallet() {
    // Connect to Metamask
    if (window.ethereum) {
      try {
        // Request account access
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        if (accounts) {
          console.log("Connected to wallet!", accounts);
          setAccount(accounts[0]);
          setIsConnected(true);
          return true;
        } else {
          console.log("Not connected");
          return false;
        }
      } catch (error) {
        console.log("Failed to connect to wallet:", error);
        return false;
      }
    }
    return false;
  }
  const connectWalletHandler = async () => {
    try {
      await connectWallet();
    } catch (err) {
      console.log(err);
    }
  };
  // const loginHandler = () => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem("isLoggedIn", "1");
  //   setIsLoggedIn(true);
  // };
  useEffect(() => {
    if (!isConnected) {
      connectWallet();
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isConnected: isConnected,
        account: account,
        connectWallet: connectWalletHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
