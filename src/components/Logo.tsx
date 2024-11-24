export default function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <svg className={className} width="100" height="24" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Nut Icon */}
      <g transform="translate(-4, -8) scale(1.6)">
        <path d="M12 8.5L15 10.25L15 13.75L12 15.5L9 13.75L9 10.25L12 8.5Z" stroke="currentColor" strokeWidth="1" fill="none"/>
        <circle cx="12" cy="12" r="1.5" stroke="currentColor" strokeWidth="1" fill="none"/>
      </g>
      
      {/* Text "utilhq" */}
      <g transform="translate(24, 16)">
        <text fontFamily="system-ui, -apple-system" fontSize="16" fontWeight="600" fill="currentColor">
          utilhq
        </text>
      </g>
    </svg>
  )
}
