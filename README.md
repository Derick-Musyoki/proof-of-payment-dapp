# 💼 Proof of Payment DApp

A simple decentralized application (DApp) that allows users to record **real ETH payments on-chain** to create an immutable proof of freelance transactions.

This project demonstrates integration between **Solidity smart contracts** and a **modern Web3 frontend** built with HTML, CSS, and JavaScript.

---

## 🚀 Features

- Connect MetaMask wallet
- Send real ETH transactions
- Record payment description on blockchain
- Immutable on-chain payment proof
- Clean responsive landing page UI
- Human-readable smart contract ABI integration
- Ready for Sepolia testnet deployment

---

## 🧱 Tech Stack

**Frontend**
- HTML5
- CSS3
- Vanilla JavaScript
- Ethers.js

**Blockchain**
- Solidity
- Ethereum (Sepolia Testnet)

**Tools**
- Remix IDE
- MetaMask
- GitHub

---

## 📂 Project Structure
proof-of-payment-dapp/
│
├── index.html
├── script.js
├── ProofOfPayment.sol
└── README.md


---

## ⚙️ Smart Contract Logic

The contract:

- Accepts ETH payments
- Transfers ETH to receiver
- Stores:
  - payer address
  - receiver address
  - amount
  - description
  - timestamp
- Emits `PaymentRecorded` event for frontend tracking

---

## 🧪 Current Status

✅ Frontend wallet connection complete  
✅ Form interaction logic implemented  
✅ Contract interaction logic prepared  
⏳ Awaiting testnet ETH for live deployment  

---

## 🔮 Future Improvements

- Payment history dashboard
- Network auto-detection
- Transaction hash explorer links
- Escrow payment mode
- Dispute resolution logic
- UI loading animations
- Multi-network support

---

## 👨‍💻 Author

Built as a Web3 portfolio project to demonstrate practical smart contract integration and decentralized payment verification.

---

## Developer
- Derick Musyoki

## 📜 License

MIT
