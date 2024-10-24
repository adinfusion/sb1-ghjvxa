import React, { useState, useEffect } from 'react';
import { Sprout, Rocket, Trophy } from 'lucide-react';
import PricingTier from './components/PricingTier';
import Calculator from './components/Calculator';
import ResultsTable from './components/ResultsTable';

function App() {
  const [inputs, setInputs] = useState({
    targetClients: 7,
    assetValue: 593000, // $593K average assets
    feePercentage: 1.1, // 1.1% advisor fee
    retentionRate: 90,
    leadsPerMonth: 23, // 20-26 leads per month average
    conversionRate: 3, // 3% lead conversion rate
  });

  const [results, setResults] = useState({
    year1: { clients: 0, aum: 0, revenue: 0, cac: 0, profit: 0, roi: 0, paybackPeriod: 0 },
    year2: { clients: 0, aum: 0, revenue: 0, cac: 0, profit: 0, roi: 0, paybackPeriod: 0 },
    year3: { clients: 0, aum: 0, revenue: 0, cac: 0, profit: 0, roi: 0, paybackPeriod: 0 }
  });

  useEffect(() => {
    calculateResults();
  }, [inputs]);

  const calculateResults = () => {
    const cacPerClient = 4226; // Cost per new client from image
    const marketingCost = inputs.targetClients * cacPerClient;
    
    let currentResults = {
      year1: { clients: 0, aum: 0, revenue: 0, cac: 0, profit: 0, roi: 0, paybackPeriod: 7.8 },
      year2: { clients: 0, aum: 0, revenue: 0, cac: 0, profit: 0, roi: 0, paybackPeriod: 7.8 },
      year3: { clients: 0, aum: 0, revenue: 0, cac: 0, profit: 0, roi: 0, paybackPeriod: 7.8 }
    };

    let cumulativeClients = 0;
    
    for (let year = 1; year <= 3; year++) {
      const retainedClients = cumulativeClients * (inputs.retentionRate / 100);
      cumulativeClients = retainedClients + inputs.targetClients;
      const yearAum = cumulativeClients * inputs.assetValue;
      const yearRevenue = yearAum * (inputs.feePercentage / 100);
      const yearCac = inputs.targetClients * cacPerClient;
      const yearProfit = yearRevenue - yearCac;
      const yearRoi = (yearProfit / marketingCost) * 100;

      currentResults[`year${year}`] = {
        clients: Math.round(cumulativeClients),
        aum: yearAum,
        revenue: yearRevenue,
        cac: yearCac,
        profit: yearProfit,
        roi: yearRoi,
        paybackPeriod: 7.8 // 7.8 months from image
      };
    }

    setResults(currentResults);
  };

  const handleTierClick = (minClients: number) => {
    setInputs(prev => ({ ...prev, targetClients: minClients }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Financial Advisor Growth Calculator
          </h1>
          <p className="text-xl text-gray-600">
            Calculate your potential ROI across different growth tiers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <PricingTier
            icon={<Sprout className="w-8 h-8 text-green-500" />}
            title="Discover"
            description="Target 3+ new clients per year"
            isSelected={inputs.targetClients <= 5}
            onClick={() => handleTierClick(3)}
          />
          <PricingTier
            icon={<Rocket className="w-8 h-8 text-blue-500" />}
            title="Accelerate"
            description="Target 7+ new clients per year"
            isSelected={inputs.targetClients > 5 && inputs.targetClients <= 10}
            onClick={() => handleTierClick(7)}
          />
          <PricingTier
            icon={<Trophy className="w-8 h-8 text-yellow-500" />}
            title="Scale"
            description="Target 15+ new clients per year"
            isSelected={inputs.targetClients > 10}
            onClick={() => handleTierClick(15)}
          />
        </div>

        <Calculator inputs={inputs} setInputs={setInputs} />
        <ResultsTable results={results} />

        <div className="mt-12 text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Schedule a Demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;