'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calculator, TrendingUp, IndianRupee, Zap } from 'lucide-react'

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
    <section className="py-12 bg-theme-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="text-theme-neutral">Calculate </span>
            <span className="text-theme-light">Your </span>
            <span className="gradient-text">Savings</span>
          </h2>
          <p className="text-xl text-theme-muted max-w-4xl mx-auto">
            See how much you can save by switching to Raytech LED solutions
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-theme-card p-8 lg:p-12 rounded-2xl border"
            style={{ borderColor: 'var(--theme-border)' }}
          >
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Input Section */}
              <div className="space-y-8">
                <div className="flex items-center gap-3 mb-8">
                  <Calculator className="w-8 h-8 text-theme-neutral" />
                  <h3 className="text-2xl font-bold text-theme-light">Enter Your Details</h3>
                </div>

                {/* Current Light Wattage */}
                <div>
                  <label className="block text-sm font-medium text-theme-light mb-4">
                    Current Light Wattage (W)
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="20"
                      max="500"
                      value={wattage}
                      onChange={(e) => setWattage(Number(e.target.value))}
                      className="w-full h-2 bg-theme-card rounded-lg appearance-none cursor-pointer slider-orange"
                    />
                    <div className="flex justify-between text-sm text-theme-muted mt-3">
                      <span>20W</span>
                      <span className="text-theme-neutral font-bold text-lg">{wattage}W</span>
                      <span>500W</span>
                    </div>
                  </div>
                </div>

                {/* Daily Operating Hours */}
                <div>
                  <label className="block text-sm font-medium text-theme-light mb-4">
                    Daily Operating Hours
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="1"
                      max="24"
                      value={hours}
                      onChange={(e) => setHours(Number(e.target.value))}
                      className="w-full h-2 bg-theme-card rounded-lg appearance-none cursor-pointer slider-orange"
                    />
                    <div className="flex justify-between text-sm text-theme-muted mt-3">
                      <span>1h</span>
                      <span className="text-theme-neutral font-bold text-lg">{hours}h</span>
                      <span>24h</span>
                    </div>
                  </div>
                </div>

                {/* Electricity Tariff */}
                <div>
                  <label className="block text-sm font-medium text-theme-light mb-4">
                    Electricity Tariff (₹/kWh)
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="3"
                      max="15"
                      step="0.5"
                      value={tariff}
                      onChange={(e) => setTariff(Number(e.target.value))}
                      className="w-full h-2 bg-theme-card rounded-lg appearance-none cursor-pointer slider-orange"
                    />
                    <div className="flex justify-between text-sm text-theme-muted mt-3">
                      <span>₹3</span>
                      <span className="text-theme-neutral font-bold text-lg">₹{tariff}</span>
                      <span>₹15</span>
                    </div>
                  </div>
                </div>

                {/* Number of Lights */}
                <div>
                  <label className="block text-sm font-medium text-theme-light mb-4">
                    Number of Lights
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="10000"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value) || 1)}
                    className="w-full px-4 py-3 bg-theme-card border rounded-lg text-theme-light text-lg focus:outline-none"
                    style={{ borderColor: 'var(--theme-border)' }}
                    placeholder="10"
                  />
                </div>
              </div>

              {/* Results Section */}
              <div className="bg-theme-card rounded-xl p-8 border" style={{ borderColor: 'var(--theme-border)', opacity: 0.8 }}>
                <div className="flex items-center gap-3 mb-8">
                  <Zap className="w-8 h-8" style={{ color: 'var(--theme-accent)' }} />
                  <h3 className="text-2xl font-bold text-theme-light">Your Annual Savings</h3>
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
                        <div className="text-6xl font-bold gradient-text mb-4">
                          ₹{moneySaved.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                        </div>
                        <p className="text-xl text-theme-muted">Annual Cost Savings</p>
                      </motion.div>
                    </div>

                    {/* Additional Metrics */}
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center p-4 rounded-lg" style={{ backgroundColor: `var(--theme-card)40` }}>
                        <div className="text-3xl font-bold text-theme-neutral mb-2">
                          {percentageSaved.toFixed(0)}%
                        </div>
                        <p className="text-sm text-theme-muted">Energy Reduction</p>
                      </div>
                      
                      <div className="text-center p-4 rounded-lg" style={{ backgroundColor: `var(--theme-card)40` }}>
                        <div className="text-3xl font-bold mb-2" style={{ color: 'var(--theme-accent)' }}>
                          {energySaved.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                        </div>
                        <p className="text-sm text-theme-muted">kWh Saved</p>
                      </div>
                    </div>

                    {/* Payback Period */}
                    <div className="text-center p-6 rounded-lg" style={{ backgroundColor: `var(--theme-card)40` }}>
                      <div className="text-2xl font-bold text-theme-light mb-2">
                        {((quantity * wattage * 2.5) / moneySaved).toFixed(1)} years
                      </div>
                      <p className="text-sm text-theme-muted">Estimated Payback Period</p>
                    </div>

                    {/* Environmental Impact */}
                    <div className="text-center p-4 rounded-lg" style={{ background: `linear-gradient(to right, var(--theme-card), var(--theme-accent)20)` }}>
                      <div className="text-xl font-bold text-theme-light mb-2">
                        🌱 {((energySaved * 0.82) / 1000).toFixed(1)} tons CO₂ saved
                      </div>
                      <p className="text-xs text-theme-muted">Annual carbon footprint reduction</p>
                    </div>

                  </motion.div>
                ) : (
                  <div className="flex items-center justify-center h-full min-h-[400px]">
                    <div className="text-center">
                      <Calculator className="w-16 h-16 text-theme-muted mx-auto mb-4" style={{ opacity: 0.5 }} />
                      <p className="text-theme-muted text-center">
                        Click "Calculate Savings" to see your potential
                        <br />
                        savings with Raytech LED
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .slider-orange::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: #FD8100;
          cursor: pointer;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(253, 129, 0, 0.5);
          border: none;
        }
        
        .slider-orange::-webkit-slider-thumb:hover {
          background: #E0730E;
          box-shadow: 0 0 15px rgba(253, 129, 0, 0.8);
        }
        
        .slider-orange::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #FD8100;
          cursor: pointer;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(253, 129, 0, 0.5);
          border: none;
        }
        
        .slider-orange::-moz-range-thumb:hover {
          background: #E0730E;
          box-shadow: 0 0 15px rgba(253, 129, 0, 0.8);
        }
      `}</style>
    </section>
  )
}