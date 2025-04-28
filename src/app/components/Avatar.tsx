const Avatar = ({ src = '', alt, size = 60, shape = 'circle', border = false }:
  { src?: string, alt: string, size?: number, shape?: 'circle' | 'square', border?: boolean }) => {
  if (!src) return (
    <div className={`bg-tiffany-blue w-12 h-12 center
      ${shape === 'square' ? 'rounded-[6px]' : 'rounded-full '}
      ${border ? 'border-1 border-white' : ''}`}
      style={{ width: size, height: size }}
    >
      <span className="text-white text-2xl font-bold">{alt.slice(0, 2)}</span>
    </div>
  )

  return (
    <div>
      <img src={src} alt={alt} className={`w-full h-full object-cover
        ${shape === 'square' ? 'rounded-[6px]' : 'rounded-full '}
        ${border ? 'border-1 border-white' : ''}`}
        style={{ width: size, height: size }}
      />
    </div>
  )
}

export { Avatar }