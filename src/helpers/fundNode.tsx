import { WebIrys } from "@irys/sdk";

export const fundNode = async (webIrys: WebIrys) => {
    try {
        const fundTx = await webIrys.fund(webIrys.utils.toAtomic(0.05));
        console.log(`Successfully funded ${webIrys.utils.fromAtomic(fundTx.quantity)} ${webIrys.token}`);
    } catch (e) {
        console.log("Error uploading data", e);
    }
};
