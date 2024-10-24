import React from 'react';

interface YearResults {
  clients: number;
  aum: number;
  revenue: number;
  cac: number;
  profit: number;
  roi: number;
}

interface ResultsTableProps {
  results: {
    year1: YearResults;
    year2: YearResults;
    year3: YearResults;
  };
}

function ResultsTable({ results }: ResultsTableProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatPercent = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <h2 className="text-2xl font-semibold p-8 pb-4">Estimated ROI Results</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Metric</th>
              <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900">Year 1</th>
              <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900">Year 2</th>
              <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900">Year 3</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 text-sm text-gray-900">Total Clients</td>
              <td className="px-6 py-4 text-sm text-gray-900 text-right">{results.year1.clients}</td>
              <td className="px-6 py-4 text-sm text-gray-900 text-right">{results.year2.clients}</td>
              <td className="px-6 py-4 text-sm text-gray-900 text-right">{results.year3.clients}</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-900">Total AUM</td>
              <td className="px-6 py-4 text-sm text-gray-900 text-right">{formatCurrency(results.year1.aum)}</td>
              <td className="px-6 py-4 text-sm text-gray-900 text-right">{formatCurrency(results.year2.aum)}</td>
              <td className="px-6 py-4 text-sm text-gray-900 text-right">{formatCurrency(results.year3.aum)}</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-900">Annual Revenue</td>
              <td className="px-6 py-4 text-sm text-gray-900 text-right">{formatCurrency(results.year1.revenue)}</td>
              <td className="px-6 py-4 text-sm text-gray-900 text-right">{formatCurrency(results.year2.revenue)}</td>
              <td className="px-6 py-4 text-sm text-gray-900 text-right">{formatCurrency(results.year3.revenue)}</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-900">Client Acquisition Cost (CAC)</td>
              <td className="px-6 py-4 text-sm text-gray-900 text-right">{formatCurrency(results.year1.cac)}</td>
              <td className="px-6 py-4 text-sm text-gray-900 text-right">{formatCurrency(results.year2.cac)}</td>
              <td className="px-6 py-4 text-sm text-gray-900 text-right">{formatCurrency(results.year3.cac)}</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-900">Profit</td>
              <td className="px-6 py-4 text-sm text-gray-900 text-right">{formatCurrency(results.year1.profit)}</td>
              <td className="px-6 py-4 text-sm text-gray-900 text-right">{formatCurrency(results.year2.profit)}</td>
              <td className="px-6 py-4 text-sm text-gray-900 text-right">{formatCurrency(results.year3.profit)}</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-900">ROI on Marketing Investment</td>
              <td className="px-6 py-4 text-sm text-gray-900 text-right">{formatPercent(results.year1.roi)}</td>
              <td className="px-6 py-4 text-sm text-gray-900 text-right">{formatPercent(results.year2.roi)}</td>
              <td className="px-6 py-4 text-sm text-gray-900 text-right">{formatPercent(results.year3.roi)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ResultsTable;