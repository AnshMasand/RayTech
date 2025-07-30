'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, TrendingUp, IndianRupee, Zap, Download, Building2, Factory, Warehouse } from 'lucide-react'
import { useThemeClasses } from '@/lib/ThemeContext'

const industryPresets = [
  { name: 'Office Building', wattage: 40, hours: 10, quantity: 100, icon: Building2 },
  { name: 'Manufacturing', wattage: 150, hours: 16, quantity: 200, icon: Factory },
  { name: 'Warehouse', wattage: 200, hours: 12, quantity: 150, icon: Warehouse },
]

export default function ROICalculator() {
  const [wattage, setWattage] = useState(100)
  const [hours, setHours] = useState(12)
  const [tariff, setTariff] = useState(8)
  const [quantity, setQuantity] = useState(50)
  const [showResults, setShowResults] = useState(false)
  const { styles, colors } = useThemeClasses()

  // Calculate savings with more realistic LED efficiency (60-70% savings)
  const currentConsumption = (wattage * hours * 365 * quantity) / 1000 // kWh per year
  const ledWattage = wattage * 0.35 // LED uses 65% less power
  const ledConsumption = (ledWattage * hours * 365 * quantity) / 1000
  const energySaved = currentConsumption - ledConsumption
  const moneySaved = energySaved * tariff
  const co2Saved = energySaved * 0.82 // kg CO2 per kWh
  const paybackPeriod = (quantity * wattage * 2.5) / moneySaved // Rough payback calculation

  const handleCalculate = () => {
    setShowResults(true)
  }

  const applyPreset = (preset: typeof industryPresets[0]) => {
    setWattage(preset.wattage)
    setHours(preset.hours)
    setQuantity(preset.quantity)
    setShowResults(false)
  }

  return (
    <section className="py-20" style={styles.bgDark}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={styles.textLight}>
            Business ROI Calculator
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={styles.textNeutral}>
            Calculate the financial impact of upgrading to professional LED lighting solutions. 
            Get detailed ROI analysis for your specific business requirements.
          </p>
        </motion.div>

        {/* Industry Presets */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold text-raytech-light text-center mb-6">
            Quick Industry Presets
          </h3>
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {industryPresets.map((preset) => (
              <button
                key={preset.name}
                onClick={() => applyPreset(preset)}
                className="flex items-center gap-3 p-4 bg-raytech-light/10 rounded-lg border border-raytech-neutral/20 hover:bg-raytech-light/20 transition-colors duration-300"
              >
                <preset.icon className="w-6 h-6 text-raytech-neutral" />
                <div className="text-left">
                  <div className="font-medium text-raytech-light">{preset.name}</div>
                  <div className="text-sm text-raytech-neutral/80">
                    {preset.wattage}W • {preset.hours}h • {preset.quantity} units
                  </div>
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-raytech-light/5 backdrop-blur-sm border border-raytech-neutral/20 rounded-2xl p-8"
          >
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Input Section */}
              <div className="space-y-8">
                <div className="flex items-center gap-3 mb-6">
                  <Calculator className="w-8 h-8 text-raytech-neutral" />
                  <h3 className="text-2xl font-bold text-raytech-light">Project Parameters</h3>
                </div>

                {/* Current Wattage */}
                <div>
                  <label className="block text-sm font-medium text-raytech-light mb-3">
                    Current Fixture Wattage
                  </label>
                  <div className="bg-raytech-light/10 rounded-lg p-4">
                    <input
                      type="range"
                      min="20"
                      max="500"
                      value={wattage}
                      onChange={(e) => setWattage(Number(e.target.value))}
                      className="w-full h-3 bg-raytech-dark rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-sm text-raytech-neutral mt-2">
                      <span>20W</span>
                      <span className="text-raytech-light font-bold text-lg">{wattage}W</span>
                      <span>500W</span>
                    </div>
                  </div>
                </div>

                {/* Operating Hours */}
                <div>
                  <label className="block text-sm font-medium text-raytech-light mb-3">
                    Daily Operating Hours
                  </label>
                  <div className="bg-raytech-light/10 rounded-lg p-4">
                    <input
                      type="range"
                      min="1"
                      max="24"
                      value={hours}
                      onChange={(e) => setHours(Number(e.target.value))}
                      className="w-full h-3 bg-raytech-dark rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-sm text-raytech-neutral mt-2">
                      <span>1h</span>
                      <span className="text-raytech-light font-bold text-lg">{hours}h</span>
                      <span>24h</span>
                    </div>
                  </div>
                </div>

                {/* Electricity Tariff */}
                <div>
                  <label className="block text-sm font-medium text-raytech-light mb-3">
                    Electricity Tariff (₹/kWh)
                  </label>
                  <div className="bg-raytech-light/10 rounded-lg p-4">
                    <input
                      type="range"
                      min="3"
                      max="15"
                      step="0.5"
                      value={tariff}
                      onChange={(e) => setTariff(Number(e.target.value))}
                      className="w-full h-3 bg-raytech-dark rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-sm text-raytech-neutral mt-2">
                      <span>₹3</span>
                      <span className="text-raytech-light font-bold text-lg">₹{tariff}</span>
                      <span>₹15</span>
                    </div>
                  </div>
                </div>

                {/* Number of Fixtures */}
                <div>
                  <label className="block text-sm font-medium text-raytech-light mb-3">
                    Number of Fixtures
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="10000"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-raytech-light/10 border border-raytech-neutral/30 rounded-lg text-raytech-light focus:border-raytech-neutral focus:outline-none text-lg"
                    placeholder="Enter number of fixtures"
                  />
                </div>

                <button
                  onClick={handleCalculate}
                  className="w-full px-8 py-4 bg-raytech-light text-raytech-dark font-semibold rounded-lg hover:bg-raytech-neutral transition-all duration-300 text-lg"
                >
                  Calculate Business Impact
                </button>
              </div>

              {/* Results Section */}
              <div className="bg-raytech-light/10 rounded-xl p-8 border border-raytech-neutral/20">
                <div className="flex items-center gap-3 mb-8">
                  <TrendingUp className="w-8 h-8 text-raytech-neutral" />
                  <h3 className="text-2xl font-bold text-raytech-light">Financial Analysis</h3>
                </div>

                {showResults ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    {/* Annual Savings */}
                    <div className="bg-raytech-dark/30 rounded-lg p-6 border border-raytech-neutral/10">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-raytech-neutral font-medium">Annual Cost Savings</span>
                        <IndianRupee className="w-6 h-6 text-raytech-neutral" />
                      </div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className="text-4xl font-bold text-raytech-light mb-2"
                      >
                        ₹{moneySaved.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                      </motion.div>
                      <p className="text-sm text-raytech-neutral/80">65% reduction in energy costs</p>
                    </div>

                    {/* Energy Savings */}
                    <div className="bg-raytech-dark/30 rounded-lg p-6 border border-raytech-neutral/10">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-raytech-neutral font-medium">Energy Reduction</span>
                        <Zap className="w-6 h-6 text-raytech-neutral" />
                      </div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.3 }}
                        className="text-4xl font-bold text-raytech-light mb-2"
                      >
                        {energySaved.toLocaleString('en-IN', { maximumFractionDigits: 0 })} kWh
                      </motion.div>
                      <p className="text-sm text-raytech-neutral/80">Annual consumption reduction</p>
                    </div>

                    {/* Payback Period */}
                    <div className="bg-raytech-dark/30 rounded-lg p-6 border border-raytech-neutral/10">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-raytech-neutral font-medium">Payback Period</span>
                        <Calculator className="w-6 h-6 text-raytech-neutral" />
                      </div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.4 }}
                        className="text-4xl font-bold text-raytech-light mb-2"
                      >
                        {paybackPeriod.toFixed(1)} years
                      </motion.div>
                      <p className="text-sm text-raytech-neutral/80">Return on investment timeline</p>
                    </div>

                    {/* Environmental Impact */}
                    <div className="bg-raytech-dark/30 rounded-lg p-6 border border-raytech-neutral/10">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-raytech-neutral font-medium">CO₂ Reduction</span>
                        <div className="w-6 h-6 bg-raytech-neutral/20 rounded-full flex items-center justify-center">
                          <span className="text-xs text-raytech-neutral">🌱</span>
                        </div>
                      </div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.5 }}
                        className="text-4xl font-bold text-raytech-light mb-2"
                      >
                        {(co2Saved / 1000).toFixed(1)} tons
                      </motion.div>
                      <p className="text-sm text-raytech-neutral/80">Annual carbon footprint reduction</p>
                    </div>

                    {/* Download Report */}
                    <button className="w-full px-6 py-4 bg-raytech-light text-raytech-dark font-semibold rounded-lg hover:bg-raytech-neutral transition-all duration-300 flex items-center justify-center gap-2">
                      <Download className="w-5 h-5" />
                      Download Detailed ROI Report
                    </button>
                  </motion.div>
                ) : (
                  <div className="flex items-center justify-center h-full min-h-[400px]">
                    <div className="text-center">
                      <Calculator className="w-16 h-16 text-raytech-neutral/50 mx-auto mb-4" />
                      <p className="text-raytech-neutral text-center">
                        Configure your project parameters and click "Calculate Business Impact" 
                        to see detailed financial analysis and ROI projections.
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
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          background: #AEB4B2;
          cursor: pointer;
          border-radius: 50%;
          box-shadow: 0 0 15px rgba(174, 180, 178, 0.6);
          border: 2px solid #354544;
        }
        
        .slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          background: #AEB4B2;
          cursor: pointer;
          border-radius: 50%;
          box-shadow: 0 0 15px rgba(174, 180, 178, 0.6);
          border: 2px solid #354544;
        }
      `}</style>
    </section>
  )
} 