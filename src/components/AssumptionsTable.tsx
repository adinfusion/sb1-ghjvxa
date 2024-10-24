import React from 'react';

function AssumptionsTable() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-8">
      <h2 className="text-2xl font-semibold p-8 pb-4">Package Assumptions</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Metric</th>
              <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900">Value</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 text-sm text-gray-900">Lead Conversion Rate</td>
              <td className="px-6 py-4 text-sm text-gray-900 text-right">3%</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-900">Average Assets per Lead</td>
              <td className="px-6 py-4 text-sm text-gray-900 text-right">$593,000</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-900">Leads per Month</td>
              <td className="px-6 py-4 text-sm text-gray-900 text-right">20-26</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-900">Cost per New Client</td>
              <td className="px-6 py-4 text-sm text-gray-900 text-right">$4,226</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-900">Payback Period</td>
              <td className="px-6 py-4 text-sm text-gray-900 text-right">7.8 months</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-900">Revenue per Client (Year 1)</td>
              <td className="px-6 py-4 text-sm text-gray-900 text-right">$6,529</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AssumptionsTable;