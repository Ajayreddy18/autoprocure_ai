import React from "react";

export default function FollowupTable({ followups }) {
  return (
    <div className="mt-6 overflow-x-auto">
      <h2 className="text-xl font-bold mb-2">Pending Follow-ups</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left">Product</th>
            <th className="px-6 py-3 text-left">Follow-up Email</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {followups.map((f, idx) => (
            <tr key={idx}>
              <td className="px-6 py-4">{f.product}</td>
              <td className="px-6 py-4 whitespace-pre-wrap">{f.followup}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}