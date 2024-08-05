import { useState } from "react";
import { AptosConnectButton, useAptosWallet } from "@razorlabs/wallet-kit";
import MessageDisplay from "./components/MessageDisplay";
import "@razorlabs/wallet-kit/style.css";
import "./App.css";
import MessageCreate from "./components/MesageCreate";

function App() {
  const [message, setMessage] = useState<string>("");
  const { connected } = useAptosWallet();

  return (
    <>
      <h1>Razor Wallet Movement Labs Demo</h1>
      <div className="card">
        <AptosConnectButton />
      </div>
      {connected ? (
        <>
          <MessageDisplay message={message} setMessage={setMessage} />
          <MessageCreate message={message} setMessage={setMessage} />
        </>
      ) : null}
      <a href="" className="read-the-docs">
        Click here to learn more about
      </a>
    </>
  );
}

export default App;
