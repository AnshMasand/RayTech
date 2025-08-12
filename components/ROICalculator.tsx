'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calculator, TrendingUp, IndianRupee, Zap, Info, Download, Lightbulb, Leaf, Clock, FileText } from 'lucide-react'
import Link from 'next/link'

export default function ROICalculator() {
  const [wattage, setWattage] = useState(100)
  const [hours, setHours] = useState(12)
  const [tariff, setTariff] = useState(8)
  const [quantity, setQuantity] = useState(10)

  // Calculate savings with realistic LED efficiency (65% savings)
  const currentConsumption = (wattage * hours * 365 * quantity) / 1000 // kWh per year
  const ledWattage = wattage * 0.35 // LED uses 65% less power
  const ledConsumption = (ledWattage * hours * 365 * quantity) / 1000
  const energySaved = currentConsumption - ledConsumption
  const moneySaved = energySaved * tariff
  const percentageSaved = ((energySaved / currentConsumption) * 100)

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-theme-primary to-theme-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Calculate </span>
            <span className="text-white/90">Your </span>
            <span className="gradient-text drop-shadow-xl">Savings</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-4xl mx-auto px-4">
            See how much you can save by switching to Raytech LED solutions
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-theme-background/95 p-6 sm:p-8 lg:p-12 rounded-2xl border shadow-2xl"
            style={{ borderColor: 'var(--theme-border)' }}
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
              
              {/* Input Section */}
              <div className="space-y-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <Calculator className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-theme-text-primary">Enter Your Details</h3>
                </div>

                {/* Current Light Wattage */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-sm font-semibold text-theme-text-primary">
                      Current Light Wattage (W)
                    </label>
                    <button 
                      className="group p-1.5 rounded-lg hover:bg-theme-accent/10 transition-colors"
                      title="Learn about wattage and energy consumption"
                    >
                      <Info className="w-4 h-4 text-theme-accent group-hover:text-theme-primary" />
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="20"
                      max="500"
                      value={wattage}
                      onChange={(e) => setWattage(Number(e.target.value))}
                      className="w-full h-2 bg-gradient-to-r from-theme-accent/20 to-theme-accent/40 rounded-lg appearance-none cursor-pointer slider-accent"
                    />
                    <div className="flex justify-between text-xs sm:text-sm text-theme-text-secondary mt-3">
                      <span>20W</span>
                      <span className="text-theme-primary font-bold text-base sm:text-lg bg-theme-accent/10 px-3 py-1 rounded-lg">{wattage}W</span>
                      <span>500W</span>
                    </div>
                  </div>
                </div>

                {/* Daily Operating Hours */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-sm font-semibold text-theme-text-primary">
                      Daily Operating Hours
                    </label>
                    <button 
                      className="group p-1.5 rounded-lg hover:bg-theme-accent/10 transition-colors"
                      title="Typical usage: Office 10h, Warehouse 24h, Home 6h"
                    >
                      <Clock className="w-4 h-4 text-theme-accent group-hover:text-theme-primary" />
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="1"
                      max="24"
                      value={hours}
                      onChange={(e) => setHours(Number(e.target.value))}
                      className="w-full h-2 bg-gradient-to-r from-theme-accent/20 to-theme-accent/40 rounded-lg appearance-none cursor-pointer slider-accent"
                    />
                    <div className="flex justify-between text-xs sm:text-sm text-theme-text-secondary mt-3">
                      <span>1h</span>
                      <span className="text-theme-primary font-bold text-base sm:text-lg bg-theme-accent/10 px-3 py-1 rounded-lg">{hours}h</span>
                      <span>24h</span>
                    </div>
                  </div>
                </div>

                {/* Electricity Tariff */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-sm font-semibold text-theme-text-primary">
                      Electricity Tariff (₹/kWh)
                    </label>
                    <button 
                      className="group p-1.5 rounded-lg hover:bg-theme-accent/10 transition-colors"
                      title="Average commercial rate: ₹7-9/kWh"
                    >
                      <IndianRupee className="w-4 h-4 text-theme-accent group-hover:text-theme-primary" />
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="3"
                      max="15"
                      step="0.5"
                      value={tariff}
                      onChange={(e) => setTariff(Number(e.target.value))}
                      className="w-full h-2 bg-gradient-to-r from-theme-accent/20 to-theme-accent/40 rounded-lg appearance-none cursor-pointer slider-accent"
                    />
                    <div className="flex justify-between text-xs sm:text-sm text-theme-text-secondary mt-3">
                      <span>₹3</span>
                      <span className="text-theme-primary font-bold text-base sm:text-lg bg-theme-accent/10 px-3 py-1 rounded-lg">₹{tariff}</span>
                      <span>₹15</span>
                    </div>
                  </div>
                </div>

                {/* Number of Lights */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-sm font-semibold text-theme-text-primary">
                      Number of Lights
                    </label>
                    <button 
                      className="group p-1.5 rounded-lg hover:bg-theme-accent/10 transition-colors"
                      title="Enter total lights to be replaced"
                    >
                      <Lightbulb className="w-4 h-4 text-theme-accent group-hover:text-theme-primary" />
                    </button>
                  </div>
                  <input
                    type="number"
                    min="1"
                    max="10000"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value) || 1)}
                    className="w-full px-4 py-3 bg-white border-2 rounded-xl text-theme-text-primary text-base sm:text-lg font-semibold focus:outline-none focus:border-theme-accent transition-colors"
                    style={{ borderColor: 'var(--theme-border)' }}
                    placeholder="10"
                  />
                </div>
              </div>

              {/* Results Section */}
              <div className="bg-gradient-to-br from-theme-accent/5 to-theme-primary/5 rounded-2xl p-6 sm:p-8 border-2 border-theme-accent/20">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-accent flex items-center justify-center animate-pulse">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-theme-text-primary">Your Annual Savings</h3>
                  </div>
                  <Link 
                    href="/app/assets/MACHINE LIST.pdf"
                    className="group p-2 rounded-xl hover:bg-theme-accent/10 transition-all"
                    title="Download detailed machine specifications"
                  >
                    <Download className="w-5 h-5 text-theme-accent group-hover:text-theme-primary" />
                  </Link>
                </div>

                {moneySaved > 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                  >
                    {/* Annual Savings - Large Display */}
                    <div className="text-center py-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.1 }}
                      >
                        <div className="text-5xl sm:text-6xl font-bold gradient-text mb-4 drop-shadow-lg">
                          ₹{moneySaved.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                        </div>
                        <p className="text-lg sm:text-xl text-theme-text-secondary font-medium">Annual Cost Savings</p>
                      </motion.div>
                    </div>

                    {/* Additional Metrics */}
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center p-4 rounded-xl bg-gradient-to-br from-white to-theme-accent/10 border border-theme-accent/20 hover:shadow-lg transition-all cursor-pointer group">
                        <div className="text-2xl sm:text-3xl font-bold text-theme-primary mb-2 group-hover:scale-105 transition-transform">
                          {percentageSaved.toFixed(0)}%
                        </div>
                        <p className="text-xs sm:text-sm text-theme-text-secondary font-medium">Energy Reduction</p>
                      </div>
                      
                      <div className="text-center p-4 rounded-xl bg-gradient-to-br from-white to-theme-primary/10 border border-theme-primary/20 hover:shadow-lg transition-all cursor-pointer group">
                        <div className="text-2xl sm:text-3xl font-bold text-theme-accent mb-2 group-hover:scale-105 transition-transform">
                          {energySaved.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                        </div>
                        <p className="text-xs sm:text-sm text-theme-text-secondary font-medium">kWh Saved</p>
                      </div>
                    </div>

                    {/* Payback Period */}
                    <Link 
                      href="/app/assets/ASSETS AUDIT  2025.xlsx"
                      className="block text-center p-6 rounded-xl bg-gradient-to-r from-theme-primary/10 to-theme-accent/10 border border-theme-border hover:shadow-xl transition-all group cursor-pointer"
                      title="View detailed asset audit report"
                    >
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Clock className="w-5 h-5 text-theme-accent" />
                        <div className="text-xl sm:text-2xl font-bold text-theme-text-primary group-hover:text-theme-accent transition-colors">
                          {((quantity * wattage * 2.5) / moneySaved).toFixed(1)} years
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-theme-text-secondary font-medium">Estimated Payback Period</p>
                      <p className="text-xs text-theme-accent mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Click to view asset audit →</p>
                    </Link>

                    {/* Environmental Impact */}
                    <Link 
                      href="/app/assets/FULL PLANT MACHINE LIST SECTION WISE.xlsx"
                      className="block text-center p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-emerald-200 hover:shadow-xl transition-all group cursor-pointer"
                      title="View full plant efficiency report"
                    >
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Leaf className="w-5 h-5 text-emerald-600 animate-pulse" />
                        <div className="text-lg sm:text-xl font-bold text-emerald-700 group-hover:scale-105 transition-transform">
                          {((energySaved * 0.82) / 1000).toFixed(1)} tons CO₂ saved
                        </div>
                      </div>
                      <p className="text-xs text-emerald-600 font-medium">Annual carbon footprint reduction</p>
                      <p className="text-xs text-emerald-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Click for plant efficiency data →</p>
                    </Link>

                  </motion.div>
                ) : (
                  <div className="flex items-center justify-center h-full min-h-[400px]">
                    <div className="text-center">
                      <Calculator className="w-16 h-16 text-theme-accent/30 mx-auto mb-4" />
                      <p className="text-theme-text-secondary text-center">
                        Adjust the values to see your
                        <br />
                        <span className="font-semibold text-theme-text-primary">potential savings with Raytech LED</span>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quick Links Bar */}
      <div className="container mx-auto px-4 mt-8">
        <div className="bg-white/10 backdrop-blur rounded-2xl p-4 sm:p-6">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            <Link 
              href="/app/assets/MACHINE LIST.pdf"
              className="flex items-center gap-2 px-4 py-2 bg-white/90 rounded-xl hover:bg-white transition-all group"
            >
              <FileText className="w-4 h-4 text-theme-primary" />
              <span className="text-sm font-semibold text-theme-text-primary">Machine Specs</span>
            </Link>
            <Link 
              href="/app/assets/ASSETS AUDIT  2025.xlsx"
              className="flex items-center gap-2 px-4 py-2 bg-white/90 rounded-xl hover:bg-white transition-all group"
            >
              <Download className="w-4 h-4 text-theme-primary" />
              <span className="text-sm font-semibold text-theme-text-primary">Asset Audit</span>
            </Link>
            <Link 
              href="/app/assets/FULL PLANT MACHINE LIST SECTION WISE.xlsx"
              className="flex items-center gap-2 px-4 py-2 bg-white/90 rounded-xl hover:bg-white transition-all group"
            >
              <Info className="w-4 h-4 text-theme-primary" />
              <span className="text-sm font-semibold text-theme-text-primary">Plant Data</span>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider-accent::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: var(--theme-accent);
          cursor: pointer;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(49, 130, 206, 0.5);
          border: none;
        }
        
        .slider-accent::-webkit-slider-thumb:hover {
          background: var(--theme-primary);
          box-shadow: 0 0 15px rgba(49, 130, 206, 0.8);
        }
        
        .slider-accent::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: var(--theme-accent);
          cursor: pointer;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(49, 130, 206, 0.5);
          border: none;
        }
        
        .slider-accent::-moz-range-thumb:hover {
          background: var(--theme-primary);
          box-shadow: 0 0 15px rgba(49, 130, 206, 0.8);
        }
      `}</style>
    </section>
  )
}