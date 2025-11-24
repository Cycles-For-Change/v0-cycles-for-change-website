"use client"

export function MovingBanner({ text }: { text: string }) {
  return (
    <div className="w-full overflow-hidden bg-pink-800 text-white py-3">
      <div className="marquee-container">
        <div className="marquee-content">
          <span className="text-lg font-medium px-4">{text}</span>
          <span className="text-lg font-medium px-4">{text}</span>
          <span className="text-lg font-medium px-4">{text}</span>
          <span className="text-lg font-medium px-4">{text}</span>
          <span className="text-lg font-medium px-4">{text}</span>
          <span className="text-lg font-medium px-4">{text}</span>
        </div>
      </div>
    </div>
  )
}
