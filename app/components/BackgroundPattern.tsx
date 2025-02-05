'use client';

export default function BackgroundPattern() {
  // Create a deterministic grid of dots
  const dots = Array.from({ length: 50 }, (_, i) => ({
    top: `${(i % 10) * 10}%`,
    left: `${Math.floor(i / 10) * 20}%`,
    delay: `${(i * 0.1).toFixed(2)}s`
  }));

  return (
    <div className="fixed inset-0 -z-50">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-purple-50" />
      
      {/* Horizontal lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            className="absolute w-full h-[1px] bg-orange-100/50"
            style={{
              top: `${(i + 1) * 3}rem`,
              opacity: 0,
              animation: `fadeIn 0.5s ease-out ${i * 0.1}s forwards`
            }}
          />
        ))}
      </div>
      
      {/* Vertical line */}
      <div className="absolute left-[4rem] top-0 bottom-0 w-[1px] bg-orange-200/30" />
      
      {/* Decorative dots in a grid pattern */}
      <div className="absolute inset-0">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-orange-300/40 to-purple-300/40"
            style={{
              top: dot.top,
              left: dot.left,
              animation: `twinkle 3s ease-in-out ${dot.delay} infinite`
            }}
          />
        ))}
      </div>

      {/* Additional decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-cyan-200/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-orange-200/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-200/10 rounded-full blur-3xl" />
    </div>
  );
} 