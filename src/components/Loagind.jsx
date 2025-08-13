import React from 'react'

export default function Loagind() {
  return (
    <div 
      className='flex justify-center h-full'
    role="status">
      <svg width="120" height="120" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#8A2BE2" />
          </linearGradient>
        </defs>

        {/* Círculo de fundo (cinza) */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#ccc"
          strokeWidth="8"
          fill="none"
        />

        {/* Círculo colorido */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="url(#grad)"
          strokeWidth="8"
          fill="none"
          strokeDasharray={2 * Math.PI * 45}
          strokeDashoffset={2 * Math.PI * 45}
          transform="rotate(-90 50 50)"
        >
          <animate
            attributeName="stroke-dashoffset"
            from={2 * Math.PI * 45}
            to="0"
            dur="2s"      // mais devagar
            begin="0s"
            fill="freeze"
          />
        </circle>

        {/* Círculo cinza animado no mesmo sentido */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#ccc"
          strokeWidth="8"
          fill="none"
          strokeDasharray={2 * Math.PI * 45}
          strokeDashoffset={2 * Math.PI * 45}
          transform="rotate(-90 50 50)"
        >
          <animate
            attributeName="stroke-dashoffset"
            from={2 * Math.PI * 45}
            to="0"
            dur="2s"      // mesma velocidade do colorido
            begin="2s"    // começa depois do colorido
            repeatCount="indefinite"
          />
        </circle>
      </svg>



      <span class="sr-only">Loading...</span>
    </div>
  )
}
