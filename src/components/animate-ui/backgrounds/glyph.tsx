"use client"

const COLORS = {
  text: "",
  white: "#ffffff",
  blue: "#3b9eff",
  violet: "#a78bfa",
  emerald: "#34d399",
  amber: "#fbbf24",
  rose: "#fb7185",
}

function GlyphBackgroundEffect({
  className,
  glowColor,
  shapeColor,
  fontSize,
  interactive,
}: {
  className: string
  glowColor?: string
  shapeColor?: string
  fontSize: number
  interactive: boolean
}) {
  const glyphs = "01アイウエオカキクケコサシスセソ"

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none overflow-hidden ${className}`}
      data-interactive={interactive}
      style={{ color: shapeColor ?? COLORS.blue, fontSize }}
    >
      <div className="grid h-full grid-cols-[repeat(auto-fill,minmax(1em,1fr))] opacity-20">
        {Array.from({ length: 120 }, (_, index) => (
          <span
            key={index}
            className="text-center"
            style={{ textShadow: glowColor ? `0 0 10px ${glowColor}` : undefined }}
          >
            {glyphs[index % glyphs.length]}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function GlyphBackground({
  glowColor = "",
  shapeColor = "",
  fontSize = 10,
  interactive = true,
}: {
  glowColor?: string
  shapeColor?: string
  fontSize?: number
  interactive?: boolean | string
}) {
  return (
    <GlyphBackgroundEffect
      className="absolute inset-0 bg-white text-neutral-900 dark:bg-[#121212] dark:text-white"
      glowColor={glowColor || undefined}
      shapeColor={shapeColor || undefined}
      fontSize={Number(fontSize)}
      interactive={interactive === true || interactive === "true"}
    />
  )
}