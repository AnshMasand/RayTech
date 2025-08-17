'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Users, Upload, Mail, Phone, FileText, Send, CheckCircle } from 'lucide-react'
import Navbar from '@/components/Navbar'

export default function CareersPage() {
  const headerRef = useRef(null)
  const formRef = useRef(null)
  
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 })
  const formInView = useInView(formRef, { once: true, amount: 0.3 })

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    resume: null as File | null
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('Resume file must be under 5MB')
        return
      }
      if (!['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)) {
        setError('Resume must be a PDF or Word document')
        return
      }
      setError('')
      setFormData({ ...formData, resume: file })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('fullName', formData.fullName)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('position', formData.position)
      formDataToSend.append('message', formData.message)
      if (formData.resume) {
        formDataToSend.append('resume', formData.resume)
      }

      const response = await fetch('/api/careers', {
        method: 'POST',
        body: formDataToSend,
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          position: '',
          message: '',
          resume: null
        })
      } else {
        const errorData = await response.json()
        setError(errorData.error || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-theme-background to-white">
        <Navbar />
        <div className="pt-32 pb-16 px-6">
          <div className="container mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-theme-text-primary mb-4">
                Application Submitted!
              </h1>
              <p className="text-lg text-theme-text-secondary mb-8">
                Thank you for your interest in joining RayTech. We've received your application and will review it shortly. You should receive a confirmation email within the next few minutes.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-theme-primary text-white rounded-full font-semibold hover:bg-theme-secondary transition-colors"
              >
                Submit Another Application
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-theme-background to-white">
      <Navbar />

      {/* Hero Section */}
      <section ref={headerRef} className="py-16 sm:py-20 lg:py-24 mt-20 sm:mt-24 bg-gradient-to-b from-theme-background to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 premium-pattern opacity-20"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-primary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-theme-accent/10 text-theme-accent font-semibold text-sm tracking-wide mb-8">
              <Users className="w-4 h-4" />
              JOIN OUR TEAM
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-theme-text-primary mb-8 leading-tight">
              Build the Future of
              <span className="block gradient-text">LED Technology</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-theme-text-secondary max-w-3xl mx-auto mb-12">
              Join India's largest LED manufacturing facility and be part of a team that's illuminating the world with innovative lighting solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-theme-primary to-theme-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose RayTech?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Be part of a company that values innovation, excellence, and growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Growth Opportunities</h3>
              <p className="text-white/80 text-sm">Advance your career in a rapidly expanding industry with clear growth paths</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Innovation Focus</h3>
              <p className="text-white/80 text-sm">Work with cutting-edge technology and contribute to industry-leading innovations</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Competitive Benefits</h3>
              <p className="text-white/80 text-sm">Comprehensive benefits package with competitive compensation and growth incentives</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section ref={formRef} className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-theme-text-primary mb-4">
                Apply Now
              </h2>
              <p className="text-lg text-theme-text-secondary">
                Ready to join our team? Submit your application below and we'll get back to you soon.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-theme-background rounded-2xl p-8 border border-theme-border">
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                  {error}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-theme-text-primary mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-theme-border rounded-lg focus:ring-2 focus:ring-theme-accent focus:border-theme-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-theme-text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-theme-border rounded-lg focus:ring-2 focus:ring-theme-accent focus:border-theme-accent transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-theme-text-primary mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-theme-border rounded-lg focus:ring-2 focus:ring-theme-accent focus:border-theme-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-theme-text-primary mb-2">
                    Position of Interest *
                  </label>
                  <select
                    id="position"
                    name="position"
                    required
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-theme-border rounded-lg focus:ring-2 focus:ring-theme-accent focus:border-theme-accent transition-colors"
                  >
                    <option value="">Select a position</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Quality Control">Quality Control</option>
                    <option value="Sales & Marketing">Sales & Marketing</option>
                    <option value="Administration">Administration</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="resume" className="block text-sm font-medium text-theme-text-primary mb-2">
                  Resume Upload * (PDF or Word, max 5MB)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="resume"
                    className="flex items-center justify-center w-full px-4 py-6 border-2 border-dashed border-theme-border rounded-lg cursor-pointer hover:border-theme-accent transition-colors"
                  >
                    <div className="text-center">
                      <Upload className="w-8 h-8 text-theme-text-secondary mx-auto mb-2" />
                      <p className="text-sm font-medium text-theme-text-primary">
                        {formData.resume ? formData.resume.name : 'Click to upload your resume'}
                      </p>
                      <p className="text-xs text-theme-text-secondary mt-1">
                        PDF or Word document, max 5MB
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-theme-text-primary mb-2">
                  Brief Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us why you'd like to join RayTech..."
                  className="w-full px-4 py-3 border border-theme-border rounded-lg focus:ring-2 focus:ring-theme-accent focus:border-theme-accent transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-theme-primary text-white rounded-full font-bold hover:bg-theme-secondary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Application
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}