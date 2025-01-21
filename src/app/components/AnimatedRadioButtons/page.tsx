"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface Option {
  id: string
  label: string
  icon: React.ReactNode
}

const options: Option[] = [
  { 
    id: 'option1', 
    label: 'Light', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  { 
    id: 'option2', 
    label: 'Dark', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    )
  },
  { 
    id: 'option3', 
    label: 'Auto', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
]

const AnimatedRadioButtons: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('option2')

  const handleOptionChange = (optionId: string) => {
    setSelectedOption(optionId)
  }

  return (
    <div className="flex flex-col space-y-4 p-6 bg-gray-800 rounded-lg shadow-xl">
      <h2 className="text-xl font-semibold text-gray-100 mb-4">Choose Your Theme</h2>
      <div className="flex space-x-4">
        {options.map((option) => (
          <div
            key={option.id}
            className={`
              relative flex flex-col items-center justify-center w-24 h-24 rounded-lg cursor-pointer
              transition-all duration-300 ease-in-out
              ${selectedOption === option.id ? 'bg-blue-500 shadow-lg' : 'bg-gray-700 hover:bg-gray-600'}
            `}
            onClick={() => handleOptionChange(option.id)}
          >
            <input
              type="radio"
              name="theme"
              id={option.id}
              value={option.id}
              checked={selectedOption === option.id}
              onChange={() => handleOptionChange(option.id)}
              className="sr-only"
            />
            <motion.div
              initial={false}
              animate={{
                scale: selectedOption === option.id ? 1.1 : 1,
                rotate: selectedOption === option.id ? 360 : 0,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`
                text-2xl mb-2 transition-colors duration-300
                ${selectedOption === option.id ? 'text-white' : 'text-gray-400'}
              `}
            >
              {option.icon}
            </motion.div>
            <span className={`
              text-sm font-medium transition-colors duration-300
              ${selectedOption === option.id ? 'text-white' : 'text-gray-400'}
            `}>
              {option.label}
            </span>
            {selectedOption === option.id && (
              <motion.div
                className="absolute inset-0 rounded-lg"
                layoutId="outline"
                initial={false}
                animate={{ borderColor: "rgba(59, 130, 246, 0.5)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                  border: "2px solid rgba(59, 130, 246, 0.5)",
                  boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnimatedRadioButtons

