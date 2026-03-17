const contractAddress = "0x0000000000000000000000000000000000000000"; // placeholder

const contractABI = [
  "function recordPayment(address payable _receiver, string memory _description) public payable",
  "event PaymentRecorded(address indexed payer,address indexed receiver,uint256 amount,string description,uint256 timestamp)"
];

const connectBtn = document.getElementById("connectBtn");
const walletAddressDisplay = document.getElementById("walletAddress");
const payerInput = document.getElementById("payerAddress");
const form = document.getElementById("proofForm");

let provider;
let signer;
let connectedAddress;

// CONNECT WALLET
contract = new ethers.Contract(contractAddress, contractABI, signer);
connectBtn.addEventListener("click", async () => {

    if (!window.ethereum) {
        alert("MetaMask not detected!");
        return;
    }

    try {
        await window.ethereum.request({ method: "eth_requestAccounts" });

        provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();

        connectedAddress = await signer.getAddress();

        // Display shortened version
        walletAddressDisplay.textContent =
            "Connected: " +
            connectedAddress.substring(0, 6) +
            "..." +
            connectedAddress.substring(connectedAddress.length - 4);

        // Auto-fill payer field
        payerInput.value = connectedAddress;

        console.log("Wallet connected:", connectedAddress);

    } catch (error) {
        console.error("Error:", error);
        alert("Connection failed. Check console.");
    }
});


// HANDLE FORM SUBMISSION
form.addEventListener("submit", async function (e) {
    e.preventDefault();

    if (!contract) {
        alert("Connect wallet first");
        return;
    }

    const receiver = document.getElementById("receiverAddress").value;
    const amount = document.getElementById("amount").value;
    const description = document.getElementById("description").value;

    try {

        const valueInWei = ethers.utils.parseEther(amount);

        const tx = await contract.recordPayment(
            receiver,
            description,
            {
                value: valueInWei
            }
        );

        alert("Transaction sent. Waiting confirmation...");

        await tx.wait();

        alert("✅ Payment recorded on blockchain!");

        form.reset();

    } catch (err) {
        console.error(err);
        alert("Transaction failed");
    }
});

