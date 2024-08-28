import { useState } from "react";
import { ethers , Eip1193Provider} from "ethers";
import { WebIrys } from "@irys/sdk";
import FileUpload from "./components/FileUpload";
import { fundNode } from "./helpers/fundNode";
import FolderUpload from "./components/FolderUpload";
 
// Extend the Window interface to include ethereum
declare global {
    interface Window {
        ethereum?: Eip1193Provider;
    }
}

function HomePage() {
	const [connectedAddress, setConnectedAddress] = useState<string>("");
	const [webIrysInstance, setWebIrysInstance] = useState<WebIrys | null>(null);

	const getWebIrys = async () => {
		let provider;
		if (window.ethereum == null) {
			console.log("MetaMask not installed; using read-only defaults");
			provider = ethers.getDefaultProvider();
		} else {
			provider = new ethers.BrowserProvider(window.ethereum);
		}
		console.log("provider=", provider);
		const network = "devnet";
		const token = "ethereum";
		const rpcURL = "https://eth-sepolia.g.alchemy.com/v2/1op69Jv9sNHqgEj019xkt1n6-72zCJgE"
		const wallet = { rpcURL, name: "ethersv6", provider: provider };
		const webIrys = new WebIrys({ network, token, wallet });
		await webIrys.ready();
        setWebIrysInstance(webIrys);  
		setConnectedAddress(webIrys.address!);
	};
 

	const handleFundNode = async () => {
        if (webIrysInstance) {
            await fundNode(webIrysInstance);
        } else {
            console.log("WebIrys instance not initialized");
        }
    };


	return (
		<>
			<h1>Vite + React + Irys</h1>
			{connectedAddress && connectedAddress.length > 0 && <h3>Connected from: {connectedAddress}</h3>}
			<div className="card">
				<button onClick={getWebIrys}>Connect To Irys Node</button>
			</div>

			<div className="card">
				<button onClick={handleFundNode}>Fund Irys Node</button>
			</div>

			{webIrysInstance && <FileUpload irys={webIrysInstance} />}

			<br />
			{webIrysInstance && <FolderUpload irys={webIrysInstance} />}
			</>
	);
}
 
export default HomePage;