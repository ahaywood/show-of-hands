const Avatar = ({ src = '', alt, size=60 }: { src?: string, alt: string, size?: number }) => {
  if (!src) return (
    <div className="rounded-full bg-fair-pink w-12 h-12 center">
      <span className="text-han-purple text-2xl font-bold">{alt.slice(0, 2)}</span>
    </div>
  )

  return (
    <div>
      <img src={src} alt={alt} className="w-full h-full object-cover rounded-full" width={size} height={size} />
    </div>
  )
}

export { Avatar }