import React, { useState } from "react";
import axios from "axios";

function App() {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [rfq, setRfq] = useState("");
  const [followup, setFollowup] = useState("");

  const generateRFQ = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/generate-rfq", {
        product,
        quantity: Number(quantity),
      });
      setRfq(response.data.rfq);
    } catch (error) {
      console.error(error);
      setRfq("Error generating RFQ");
    }
  };

  const generateFollowup = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/generate-followup",
        { product }
      );
      setFollowup(response.data.followup);
    } catch (error) {
      console.error(error);
      setFollowup("Error generating follow-up");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-5">AutoProcure AI - RFQ Generator</h1>

      <div className="mb-5">
        <input
          className="border p-2 mr-2"
          type="text"
          placeholder="Product"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />
        <input
          className="border p-2 mr-2 w-20"
          type="number"
          placeholder="Qty"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          onClick={generateRFQ}
        >
          Generate RFQ
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={generateFollowup}
        >
          Generate Follow-up
        </button>
      </div>

      {rfq && (
        <div className="bg-white p-5 rounded shadow mb-5">
          <h2 className="font-bold mb-2">Generated RFQ:</h2>
          <pre className="whitespace-pre-wrap">{rfq}</pre>
        </div>
      )}

      {followup && (
        <div className="bg-white p-5 rounded shadow">
          <h2 className="font-bold mb-2">Generated Follow-up:</h2>
          <pre className="whitespace-pre-wrap">{followup}</pre>
        </div>
      )}
    </div>
  );
}

export default App;