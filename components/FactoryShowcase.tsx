'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, Maximize, SkipBack, SkipForward, Settings } from 'lucide-react'
import Image from 'next/image'

const manufacturingStats = [
  {
    value: '99.8%',
    unit: 'precision',
    label: 'Manufacturing Accuracy',
    color: 'text-theme-neutral'
  },
  {
    value: '46+',
    unit: 'machines',
    label: 'Advanced Equipment',
    color: 'text-theme-neutral'
  },
  {
    value: '100%',
    unit: 'tested',
    label: 'Quality Certified',
    color: 'text-theme-neutral'
  },
]


const factoryPhotos = [
  {
    id: 1,
    image: '/images/factory/prodline-1.jpeg',
    title: 'Production Line',
    description: 'Automated production with precision assembly and quality control.'
  },
  {
    id: 2,
    image: '/images/factory/assembly.jpeg',
    title: 'SMT Assembly',
    description: 'High-precision Surface Mount Technology with laser-guided placement.'
  },
  {
    id: 3,
    image: '/images/factory/qualitycheck.jpeg',
    title: 'Quality Control',
    description: 'Rigorous inspection protocols ensuring excellence standards.'
  },
  {
    id: 4,
    image: '/images/factory/pcb-cutting-1.jpeg',
    title: 'PCB Manufacturing',
    description: 'Precision cutting with automated handling and verification.'
  },
  {
    id: 5,
    image: '/images/factory/r&d.jpeg',
    title: 'R&D Lab',
    description: 'Innovation center for next-generation LED development.'
  },
  {
    id: 6,
    image: '/images/factory/ageing-rack-1.jpeg',
    title: 'Ageing Rack',
    description: 'Comprehensive burn-in testing for long-term reliability assurance.'
  },
  {
    id: 7,
    image: '/images/factory/bigmachine.jpeg',
    title: 'High-Capacity Production',
    description: 'Industrial-scale manufacturing equipment for mass production.'
  },
  {
    id: 8,
    image: '/images/factory/bigmachineother.jpeg',
    title: 'Advanced Manufacturing',
    description: 'State-of-the-art machinery for precision component assembly.'
  },
  {
    id: 9,
    image: '/images/factory/laser-1.jpeg',
    title: 'Laser Processing',
    description: 'High-precision laser cutting and marking technology.'
  },
  {
    id: 10,
    image: '/images/factory/ledprinter-1.jpeg',
    title: 'LED Printer',
    description: 'Specialized printing equipment for circuit board production.'
  },
  {
    id: 11,
    image: '/images/factory/longmachine-1.jpeg',
    title: 'Assembly Line',
    description: 'Extended production line for continuous manufacturing flow.'
  },
  {
    id: 12,
    image: '/images/factory/photometrytesting.jpeg',
    title: 'Photometry Testing',
    description: 'Advanced light measurement and calibration laboratory.'
  },
  {
    id: 13,
    image: '/images/factory/reception entry.jpeg',
    title: 'Facility Entrance',
    description: 'Modern reception area welcoming visitors to our facility.'
  },
  {
    id: 14,
    image: '/images/factory/storage.jpeg',
    title: 'Warehouse Storage',
    description: 'Organized inventory management and product storage systems.'
  },
  {
    id: 15,
    image: '/images/factory/storage2.jpeg',
    title: 'Component Storage',
    description: 'Climate-controlled storage for sensitive electronic components.'
  },
  {
    id: 16,
    image: '/images/factory/syskaled-storage.jpeg',
    title: 'Systematic Storage',
    description: 'Efficient warehouse management with systematic organization.'
  }
]

export default function FactoryShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  // Video state
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [videoProgress, setVideoProgress] = useState(0)
  const [volume, setVolume] = useState(50)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [playbackSpeed, setPlaybackSpeed] = useState(1)
  const [showSpeedMenu, setShowSpeedMenu] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const [controlsTimeout, setControlsTimeout] = useState<NodeJS.Timeout | null>(null)
  
  // Slideshow state
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance slideshow
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % factoryPhotos.length)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % factoryPhotos.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + factoryPhotos.length) % factoryPhotos.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Video controls
  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      if (isMuted) {
        videoRef.current.volume = volume / 100
        videoRef.current.muted = false
        setIsMuted(false)
      } else {
        videoRef.current.muted = true
        setIsMuted(true)
      }
    }
  }

  const handleVideoTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime
      const total = videoRef.current.duration
      const progress = (current / total) * 100
      setVideoProgress(progress)
      setCurrentTime(current)
      if (total && duration !== total) {
        setDuration(total)
      }
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const skipTime = (seconds: number) => {
    if (videoRef.current) {
      const newTime = Math.max(0, Math.min(videoRef.current.currentTime + seconds, videoRef.current.duration))
      videoRef.current.currentTime = newTime
    }
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const percentage = clickX / rect.width
      const newTime = percentage * videoRef.current.duration
      videoRef.current.currentTime = newTime
    }
  }

  const handleVolumeChange = (newVolume: number) => {
    if (videoRef.current) {
      setVolume(newVolume)
      videoRef.current.volume = newVolume / 100
      setIsMuted(newVolume === 0)
      videoRef.current.muted = newVolume === 0
    }
  }

  const changePlaybackSpeed = (speed: number) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed
      setPlaybackSpeed(speed)
      setShowSpeedMenu(false)
    }
  }

  const showControlsHandler = () => {
    setShowControls(true)
    if (controlsTimeout) {
      clearTimeout(controlsTimeout)
    }
    const timeout = setTimeout(() => {
      if (isVideoPlaying) {
        setShowControls(false)
      }
    }, 3000)
    setControlsTimeout(timeout)
  }

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!videoRef.current) return
      
      switch (e.code) {
        case 'Space':
          e.preventDefault()
          toggleVideo()
          break
        case 'ArrowLeft':
          e.preventDefault()
          skipTime(-10)
          break
        case 'ArrowRight':
          e.preventDefault()
          skipTime(10)
          break
        case 'KeyM':
          e.preventDefault()
          toggleMute()
          break
        case 'KeyF':
          e.preventDefault()
          if (videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen()
          }
          break
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [isVideoPlaying])

  // Initialize volume
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume / 100
    }
  }, [])

  const handleVideoEnded = () => {
    setIsVideoPlaying(false)
    setVideoProgress(0)
  }

  return (
    <section id="factory" ref={ref} className="py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-theme-primary to-theme-secondary">
      <div className="container mx-auto px-4">
        
        {/* Manufacturing Excellence Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            <span className="text-white drop-shadow-lg">Precision</span>
            <span className="gradient-text"> Manufacturing</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            State-of-the-art production facilities engineered for excellence
          </p>
        </motion.div>


        {/* Manufacturing Stats */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 px-4 max-w-4xl mx-auto">
          {manufacturingStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 drop-shadow-lg">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-white/90 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Factory Video Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8 sm:mb-10"
        >
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3">
              Factory Tour
            </h3>
            <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto px-4">
              Experience our manufacturing excellence in action
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto mb-6">
            {/* Video Container */}
            <div className="relative bg-black/20 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/20">
              <div className="relative aspect-video">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  onTimeUpdate={handleVideoTimeUpdate}
                  onEnded={handleVideoEnded}
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                  onLoadedMetadata={() => {
                    if (videoRef.current) {
                      setDuration(videoRef.current.duration)
                      videoRef.current.volume = volume / 100
                    }
                  }}
                  muted={isMuted}
                  playsInline
                  onMouseEnter={showControlsHandler}
                  onMouseMove={showControlsHandler}
                >
                  <source src="/video/WhatsApp Video 2025-07-18 at 12.08.20 AM.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Video Overlay Controls */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
                    showControls || !isVideoPlaying ? 'opacity-100' : 'opacity-0'
                  }`}
                  onMouseEnter={showControlsHandler}
                  onMouseMove={showControlsHandler}
                >
                  {/* Play/Pause Button */}
                  <button
                    onClick={toggleVideo}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
                    aria-label={isVideoPlaying ? "Pause video" : "Play video"}
                  >
                    {isVideoPlaying ? (
                      <Pause className="w-8 h-8 sm:w-10 sm:h-10 text-white group-hover:scale-110 transition-transform" />
                    ) : (
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1 group-hover:scale-110 transition-transform" />
                    )}
                  </button>

                  {/* Video Controls Bar */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div 
                        className="bg-white/20 rounded-full h-2 cursor-pointer hover:h-3 transition-all duration-200"
                        onClick={handleProgressClick}
                      >
                        <motion.div
                          className="bg-gradient-accent h-full rounded-full relative"
                          style={{ width: `${videoProgress}%` }}
                        >
                          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg opacity-0 hover:opacity-100 transition-opacity" />
                        </motion.div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-4">
                      {/* Play/Pause */}
                      <button
                        onClick={toggleVideo}
                        className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                        aria-label={isVideoPlaying ? "Pause" : "Play"}
                      >
                        {isVideoPlaying ? (
                          <Pause className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        ) : (
                          <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white ml-0.5" />
                        )}
                      </button>

                      {/* Rewind 10s */}
                      <button
                        onClick={() => skipTime(-10)}
                        className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                        aria-label="Rewind 10 seconds"
                      >
                        <SkipBack className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </button>

                      {/* Fast Forward 10s */}
                      <button
                        onClick={() => skipTime(10)}
                        className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                        aria-label="Fast forward 10 seconds"
                      >
                        <SkipForward className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </button>

                      {/* Volume Control */}
                      <div className="flex items-center gap-2 group">
                        <button
                          onClick={toggleMute}
                          className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                          aria-label={isMuted ? "Unmute" : "Mute"}
                        >
                          {isMuted ? (
                            <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          ) : (
                            <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          )}
                        </button>
                        
                        {/* Volume Slider */}
                        <div className="hidden sm:flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={isMuted ? 0 : volume}
                            onChange={(e) => handleVolumeChange(parseInt(e.target.value))}
                            className="w-16 h-1 bg-white/20 rounded-full outline-none slider"
                          />
                        </div>
                      </div>

                      {/* Time Display */}
                      <div className="text-white text-xs sm:text-sm font-mono">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </div>

                      <div className="flex-1" />

                      {/* Playback Speed */}
                      <div className="relative">
                        <button
                          onClick={() => setShowSpeedMenu(!showSpeedMenu)}
                          className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                          aria-label="Playback speed"
                        >
                          <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </button>
                        
                        {showSpeedMenu && (
                          <div className="absolute bottom-12 right-0 bg-black/80 backdrop-blur-sm rounded-lg p-2 min-w-[80px]">
                            {[0.5, 0.75, 1, 1.25, 1.5, 2].map((speed) => (
                              <button
                                key={speed}
                                onClick={() => changePlaybackSpeed(speed)}
                                className={`block w-full text-left px-3 py-2 text-sm rounded transition-colors ${
                                  playbackSpeed === speed 
                                    ? 'bg-white/20 text-white' 
                                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                                }`}
                              >
                                {speed}x
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Fullscreen Button */}
                      <button
                        onClick={() => {
                          if (videoRef.current) {
                            if (videoRef.current.requestFullscreen) {
                              videoRef.current.requestFullscreen()
                            }
                          }
                        }}
                        className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                        aria-label="Fullscreen"
                      >
                        <Maximize className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Video Title Overlay */}
                <div className="absolute top-4 left-4 right-4">
                  <div className="bg-black/40 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                    <h4 className="text-white font-bold text-sm sm:text-base">
                      RayTech Manufacturing Facility Tour
                    </h4>
                    <p className="text-white/80 text-xs sm:text-sm">
                      State-of-the-art LED production line in action
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Factory Photo Slideshow */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8 sm:mb-10"
        >
          <div className="text-center mb-6">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3">
              Production Gallery
            </h3>
            <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto px-4">
              Key areas of our manufacturing facility
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Main Slideshow Container */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/20">
              {/* Image Container */}
              <div className="relative h-48 sm:h-64 lg:h-80 overflow-hidden">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={factoryPhotos[currentSlide].image}
                    alt={factoryPhotos[currentSlide].title}
                    fill
                    className="object-cover"
                    priority={currentSlide === 0}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </motion.div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
                </button>

                {/* Auto-play Toggle with Indicator */}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  {isAutoPlaying && (
                    <div className="bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-2">
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse animation-delay-200"></div>
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse animation-delay-400"></div>
                      </div>
                      <span className="text-white text-xs font-medium">AUTO</span>
                    </div>
                  )}
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className={`w-8 h-8 sm:w-10 sm:h-10 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${
                      isAutoPlaying 
                        ? 'bg-gradient-accent shadow-lg shadow-theme-accent/50 hover:shadow-xl' 
                        : 'bg-white/20 hover:bg-white/30'
                    }`}
                    aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
                  >
                    {isAutoPlaying ? (
                      <Pause className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    ) : (
                      <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white ml-0.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h4 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">
                  {factoryPhotos[currentSlide].title}
                </h4>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                  {factoryPhotos[currentSlide].description}
                </p>
              </div>
            </div>

            {/* Thumbnail Dots */}
            <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
              {factoryPhotos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-white shadow-lg scale-125'
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Progress Bar with Enhanced Counter */}
            <div className="mt-3 sm:mt-4 max-w-xs mx-auto">
              <div className="w-full bg-white/20 rounded-full h-1">
                <motion.div
                  className="bg-gradient-accent h-full rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentSlide + 1) / factoryPhotos.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="text-center mt-2 flex items-center justify-center gap-2">
                <span className="text-xs text-white/70">
                  {currentSlide + 1} of {factoryPhotos.length}
                </span>
                {factoryPhotos.length > 10 && (
                  <span className="px-2 py-0.5 bg-gradient-accent rounded-full text-[10px] font-semibold text-white">
                    FULL GALLERY
                  </span>
                )}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}