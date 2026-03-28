import React from "react";

export default function RFQTable({ rfqs, onMarkReplied }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left">Product</th>
            <th className="px-6 py-3 text-left">Quantity</th>
            <th className="px-6 py-3 text-left">Status</th>
            <th className="px-6 py-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {rfqs.map((rfq, idx) => (
            <tr key={idx}>
              <td className="px-6 py-4">{rfq.product}</td>
              <td className="px-6 py-4">{rfq.quantity}</td>
              <td className="px-6 py-4">{rfq.replied ? "Replied" : "Pending"}</td>
              <td className="px-6 py-4">
                {!rfq.replied && (
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                    onClick={() => onMarkReplied(rfq.product)}
                  >
                    Mark as Replied
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}