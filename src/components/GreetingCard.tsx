'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'

interface GreetingData {
  greeting: string
  message: string
  emoji: string
}

export default function GreetingCard() {
  const [currentGreeting, setCurrentGreeting] = useState<GreetingData>({
    greeting: 'Good Morning',
    message: 'Start your day with positive energy',
    emoji: '🌅'
  })

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours()
      
      setCurrentGreeting({
        greeting: 'Hi, how are you?',
        message: 'Hope you\'re having a wonderful day!',
        emoji: '👋'
      })
    }

    updateGreeting()
    const interval = setInterval(updateGreeting, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 text-center">
      <div className="space-y-6">
        <div className="text-6xl mb-4">
          {currentGreeting.emoji}
        </div>
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
          {currentGreeting.greeting}
        </h1>
        <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto">
          {currentGreeting.message}
        </p>
      </div>
    </Card>
  )
}