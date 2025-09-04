import React from 'react'

const ChatIllustration = ({ className = "" }) => {
  return (
    <div className="flex items-center justify-center pt-30 pr-20">
        <div
      className={`relative w-full max-w-[420px] md:max-w-[520px] lg:max-w-[560px] ${className}`}
      aria-hidden="true"
        >
      {/* Abstract floating shapes */}
      <div className="absolute -left-6 -top-6 transform rotate-12">
        <div className="w-14 h-14 rounded-2xl bg-yellow-400/90 shadow-xl animate-pulse" />
      </div>

      <div className="absolute right-4 -top-6">
        <div className="w-10 h-10 rounded-full bg-green-400/95 shadow-md" />
      </div>

      <div className="absolute -right-4 bottom-6">
        <div className="w-24 h-12 rounded-lg bg-red-400/85 shadow-lg transform rotate-6" />
      </div>

      {/* Main mascot / chat bubble - SVG */}
      <div className="flex items-center justify-center">
        <svg
          viewBox="0 0 380 320"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* background rounded panel */}
          <rect
            x="6"
            y="6"
            rx="28"
            ry="28"
            width="368"
            height="308"
            fill="white"
            stroke="rgba(0,0,0,0.04)"
            strokeWidth="2"
            className="shadow-lg"
          />

          {/* Large chat bubble */}
          <g transform="translate(36,30)">
            <path
              d="M260 120c0 44.183-44.776 80-100 80-16.21 0-31.36-3.12-44.8-8.66L82 220l12.6-45.66C76.7 158.84 44 136 44 102 44 63.76 88.42 32 144 32s116 31.76 116 88z"
              fill="#3B82F6"
              className="transform transition-transform duration-700 ease-in-out group-hover:translate-y-[-4px]"
            />
            {/* small shine */}
            <ellipse cx="210" cy="80" rx="30" ry="16" fill="#60A5FA" opacity="0.18" />
          </g>

          {/* Face: eyes + smile */}
          <g transform="translate(120,120)">
            {/* eyes */}
            <circle cx="-14" cy="-10" r="8" fill="#0F172A" opacity="0.95" />
            <circle cx="18" cy="-10" r="8" fill="#0F172A" opacity="0.95" />

            {/* blushing cheeks */}
            <ellipse cx="-40" cy="-2" rx="8" ry="5" fill="#FCA5A5" opacity="0.9" />
            <ellipse cx="46" cy="-2" rx="8" ry="5" fill="#FCA5A5" opacity="0.9" />

            {/* smile (animated subtle) */}
            <path
              d="M -26 10 Q 0 36 26 10"
              fill="transparent"
              stroke="#071133"
              strokeWidth="4"
              strokeLinecap="round"
              className="transition-all duration-700 ease-in-out"
            />
          </g>

          {/* Little people/chat icons to hint 'forum' */}
          <g transform="translate(40,200)" className="opacity-95">
            {/* person 1 */}
            <g transform="translate(0,0)">
              <circle cx="12" cy="-6" r="8" fill="#111827" opacity="0.9" />
              <rect x="4" y="6" rx="3" ry="3" width="16" height="12" fill="#111827" opacity="0.12" />
            </g>

            {/* person 2 */}
            <g transform="translate(48,0)">
              <circle cx="12" cy="-10" r="7" fill="#0EA5A4" />
              <rect x="6" y="6" rx="3" ry="3" width="12" height="12" fill="#0EA5A4" opacity="0.12" />
            </g>

            {/* mini chat bubble */}
            <g transform="translate(110,-6)">
              <path d="M0 0 h36 a8 8 0 0 1 8 8 v24 a8 8 0 0 1 -8 8 h-20 l-12 10 v-10 h-4 a8 8 0 0 1 -8 -8 v-24 a8 8 0 0 1 8 -8 z"
                fill="#FACC15" opacity="0.95" />
            </g>
          </g>

        </svg>
      </div>

      {/* decorative bottom caption */}
      <div className="mt-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
          <span className="text-xs text-slate-600 font-medium">Community-first • Secure • Playful</span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ChatIllustration