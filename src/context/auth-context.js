import React, { useState, useEffect } from "react";
import abi from "../utils/escrow.abi.json";
import { ethers } from "ethers";

const contractAddress = "0x5Ad0Ef3392188a156091b63EE1aCdbF9Fcb9817c";
const AuthContext = React.createContext({
  isConnected: false,
  account: "",
  // onLogout: () => {},
  connectWallet: () => {},
  sendCrypto: (addr, amount) => {},
  fetchPaymentDetails: (_payId) => {},
});

export const AuthContextProvider = (props) => {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState("");

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };
  async function sendCrypto(addr, amt) {
    if (account) {
      if (ethereum) {
        const provider = new ethers.BrowserProvider(ethereum, "any", {
          chainId: 80001, // Mumbai testnet chain ID
          name: "Mumbai Testnet",
          // Add other necessary network configurations if required
        });
        const signer = await provider.getSigner();
        console.log("signer is _____", signer);
        const escrow = new ethers.Contract(contractAddress, abi, signer);

        console.log("sending token... ");
        const sendTxn = await escrow.createPayment(addr, {
          value: ethers.parseEther(amt),
        });

        console.log("Transaction sent! Waiting for confirmation...", sendTxn);

        const receipt = await sendTxn.wait();

        console.log("Transaction confirmed! Transaction hash:", sendTxn.hash);

        console.log("Listening to events...", receipt);
        let paymentId;
        const paymentCreatedEvents = receipt.events.filter(
          (event) => event.event === "PaymentCreated"
        );

        if (paymentCreatedEvents.length > 0) {
          console.log("PaymentCreated event emitted!");
          console.log("Event details:", paymentCreatedEvents[0].args);
          paymentId = paymentCreatedEvents[0].args;
        }

        return paymentId.toString();
      }
    } else {
      connectWallet();
      return false;
    }
  }
  async function fetchPaymentDetails(_payId) {
    if (account) {
      if (ethereum) {
        const provider = new ethers.BrowserProvider(ethereum, "any", {
          chainId: 80001, // Mumbai testnet chain ID
          name: "Mumbai Testnet",
          // Add other necessary network configurations if required
        });
        const signer = await provider.getSigner();
        console.log("signer is _____", signer);
        const escrow = new ethers.Contract(contractAddress, abi, signer);

        console.log("fetching payment details ");
        const fetchTxn = await escrow.payments(_payId);

        console.log("fetched payment details__--", fetchTxn);
      }
    } else {
      connectWallet();
      return false;
    }
  }
  async function connectWallet() {
    // Connect to Metamask
    if (window.ethereum) {
      try {
        // Request account access
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
          params: [
            {
              eth_chainId: "0x13881", // Mumbai testnet chain ID
            },
          ],
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
        sendCrypto: sendCrypto,
        fetchPaymentDetails: fetchPaymentDetails,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
