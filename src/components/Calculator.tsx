import React from 'react';

interface CalculatorProps {
  inputs: {
    targetClients: number;
    assetValue: number;
    feePercentage: number;
    retentionRate: number;
    leadsPerMonth: number;
    conversionRate: number;
  };
  setInputs: React.Dispatch<React.SetStateAction<{
    targetClients: number;
    assetValue: number;
    feePercentage: number;
    retentionRate: number;
    leadsPerMonth: number;
    conversionRate: number;
  }>>;
}

function Calculator({ inputs, setInputs }: CalculatorProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <h2 className="text-2xl font-semibold mb-6">Calculate Your Growth Potential</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Target number of new clients per year
          </label>
          <input
            type="number"
            value={inputs.targetClients}
            onChange={(e) => setInputs(prev => ({ ...prev, targetClients: Number(e.target.value) }))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Average asset value per client ($)
          </label>
          <input
            type="number"
            value={inputs.assetValue}
            onChange={(e) => setInputs(prev => ({ ...prev, assetValue: Number(e.target.value) }))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Advisor fee percentage (%)
          </label>
          <input
            type="number"
            step="0.1"
            value={inputs.feePercentage}
            onChange={(e) => setInputs(prev => ({ ...prev, feePercentage: Number(e.target.value) }))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Client retention rate (%)
          </label>
          <input
            type="number"
            value={inputs.retentionRate}
            onChange={(e) => setInputs(prev => ({ ...prev, retentionRate: Number(e.target.value) }))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
}

export default Calculator;