// // import { Link } from "react-router-dom";
// // import { useState } from "react";
// // import { createThirdwebClient } from "thirdweb";
// // import { ConnectButton } from "thirdweb/react";
// // import { WebIrys } from "@irys/sdk";
// // // import {Irys} from "@irys/sdk";
// // import { sepolia } from "thirdweb/chains";
// // import { ethers6Adapter } from "thirdweb/adapters/ethers6";
// // import { Database } from "@tableland/sdk";
// // import { useActiveAccount } from "thirdweb/react";
// // import { Signer } from "ethers";

// import { BrowserProvider,  Eip1193Provider   } from "ethers";
// import { WebIrys } from "@irys/sdk";

// declare global {
//     interface Window {
//         ethereum?: Eip1193Provider;
//     }
// }


// function HomePage() {
// // const client = createThirdwebClient({ clientId: "179874cf01f3ef6b1e707e5d2e07590e" });
// // // const [signer, setSigner] = useState<Signer>();
// // const [connectedAddress, setConnectedAddress] = useState<string>("");
// // const [database, setDatabase] = useState<Database>();
// // const [tableName, SetTableName] = useState("")

// // const chain  = sepolia
// // const account = useActiveAccount();


// // const getWebIrys = async () => {
// //     const provider = await ethers6Adapter.provider.toEthers({
// //         chain,
// //         client
// //       });
      
      
// //     // console.log("provider=", provider);
// //     console.log( provider._network)
// // 	const network = "devnet";
// // 	const token = "ethereum";
    
// // 	// Devnet RPC URLs change often, use a recent one from https://chainlist.org
// // 	const rpcUrl = "https://11155111.rpc.thirdweb.com/179874cf01f3ef6b1e707e5d2e07590e";    // const signer = await ethers6Adapter.signer.toEthers({ client, chain, account });
// // 	const wallet = { rpcUrl: rpcUrl, name: "ethersv6", provider: provider };


// //     // const wallet = { name: "ethersv6Adapter", provider: provider};
// //     console.log("wallet=", wallet);
// //     const webIrys = new WebIrys({ network, token, wallet });
// //     console.log("webirys=", webIrys);

// //     await webIrys.ready();
// //     console.log("webirys created")

// //     setConnectedAddress(webIrys.address!);
// //     console.log(connectedAddress)
// // };


// // const getIrys = async () => {
// // 	const network = "devnet";
// // 	const token = "matic";
// // 	// Devnet RPC URLs change often, use a recent one from https://chainlist.org/
// // 	const providerUrl = "https://rpc-mumbai.maticvigil.com";

// // 	const irys = new Irys({
// // 		network, // URL of the node you want to connect to
// // 		token, // Token used for payment
// // 		key: "eee78bc460e45b64ea3913db899f3ed14cdc4b0e32f968e02017169c4f7cfca8", // EVM private key
// // 		config: { providerUrl }, // Provider URL, only required when using devnet
// // 	});
// //     await Irys.ready()
// //     console.log(irys.address)

// // 	return irys;
// // };





// // ----------------------------------------------- Tableland ------------------------------------------

// // async function connectDatabase(signer: Signer) {
// //     // Establish a connection with the database

// //     interface TableSchema {
// //         id: number;
// //         val: string;
// //       }


// //     const db = new Database< TableSchema >({ signer });
// //     return db;
// // }


// // async function handleConnect() {
// //     // Connect a signer
// //     const signer = await ethers6Adapter.signer.toEthers({ client, chain, account });
// //     setSigner(signer)
// //     const db = await connectDatabase(signer);
// //     setDatabase(db);
// //     console.log("started")
// //     const prefix: string = "my_table";
// //     const { meta: create } = await db
// //     .prepare(`CREATE TABLE ${prefix} (id integer primary key, val text);`)
// //     .run();
// //     console.log("statement prepared")
// //     await create.txn?.wait();
// //     const tableName = create.txn?.names[0] ?? ""; // e.g., my_table_31337_2
// //      SetTableName(tableName) 
// //      console.log(tableName)
// //   }


// // async function writeData() {
// //     const { meta: insert } = await database
// //   .prepare(`INSERT INTO ${tableName} (id, val) VALUES (?, ?);`)
// //   .bind(5, "Bobby Tables")
// //   .run();
// // console.log("statement prepared")
// // // Wait for transaction finality
// // await insert.txn?.wait();
// // console.log("data written")




// // }

// // async function readData() {
// //     const { results } = await database.prepare(`SELECT * FROM ${tableName};`).all();
// // console.log(results);
// // }

// async function handleConnect() {

//     if (typeof window === 'undefined' || !window.ethereum) {
//         throw new Error("Ethereum object not found. Make sure you have a wallet extension installed.");
//     }

//     try {
//         // Request access to the user's accounts
//         await window.ethereum.request({ method: 'eth_requestAccounts' });

//         // Create a new BrowserProvider instance
//         const provider = new BrowserProvider(window.ethereum);
//         console.log(provider)
//         // Create a wallet object
//         const wallet = { name: "ethersv6", provider: provider };
//         console.log(wallet)

//         // Set up WebIrys configuration
//         const network = "mainnet"; // Or "devnet"
//         const token = "ethereum";

//         // Create and initialize WebIrys instance
//         const webIrys = new WebIrys({ network, token, wallet });
//         console.log(webIrys)
//         await webIrys.ready();

//         return webIrys;
//     } catch (error) {
//         console.error("Error setting up WebIrys:", error);
//         throw error;
//     }

//     }

  

// 	return (
// // 		<div>   
// // 			Welcome to the Permaweb!
// //             <br />
// // 			<Link to={"/about/"}>
// // 				<div>About</div>
// // 			</Link>

// //             <ConnectButton client={client} chain={sepolia}/>
// // 			<button onClick={getWebIrys}>Connect To Irys Node</button>
// // 			<button onClick={getIrys}>Connect To Irys Node private key</button>
// // <br />
//             <button onClick={async () => handleConnect()}>Connect</button>
// // <br />
// //             <button onClick={async () => writeData()}>Write data</button>
// // <br />
// //             <button onClick={async () => readData()}>Read Data</button>

// // 		</div>
// 	);
// }

// export default HomePage;

import React, { useState } from "react";
import { WebIrys } from "@irys/sdk";
import { TaggedFile } from "@irys/sdk/web/upload";

interface FolderUploadProps {
  irys: WebIrys | null;
}

const FolderUpload: React.FC<FolderUploadProps> = ({ irys }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadStatus, setUploadStatus] = useState<string>("");
  

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files);
      setSelectedFiles(fileArray);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    const files: File[] = [];
    const tags: { name: string; value: string }[][] = []
    event.preventDefault();
    if (selectedFiles.length > 0 && irys) {
      try {
        // Convert files to TaggedFile objects
        const taggedFiles = files.map((f: TaggedFile, i: number) => {
            f.tags = tags[i];
            return f;
        });

        // Optional parameters
        const uploadOptions = {
          indexFileRelPath: "", // Path to the index file, if applicable
          manifestTags: '', // Example manifest tags
          throwawayKey: "", // Example key
          seperateManifestTx: true, // Separate manifest transaction
        };

        const response = await irys.uploadFolder(taggedFiles, uploadOptions);


        console.log(`Files uploaded ==> https://gateway.irys.xyz/${response.id}`);
        setUploadStatus("Files uploaded successfully");
      } catch (e) {
        setUploadStatus(`Error uploading files: ${e}`);
        console.log("Error uploading files", e);
      }
    } else {
      setUploadStatus("No files selected or WebIrys instance not initialized");
    }
  };

  return (
    <div>
      <h2>Folder Upload</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={handleFileChange}
          multiple
          // Use type assertion to add webkitdirectory attribute
          // This is necessary because webkitdirectory is not recognized by TypeScript
          {...({ webkitdirectory: "true" } as React.InputHTMLAttributes<HTMLInputElement>)}
        />
        <button type="submit" disabled={selectedFiles.length === 0 || !irys}>
          Upload
        </button>
      </form>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
};

export default FolderUpload;
