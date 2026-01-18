const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Logo Icon */}
      <div className="relative">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_10px_rgba(0,255,0,0.5)]"
        >
          {/* Hexagon outer */}
          <path
            d="M20 2L36 11V29L20 38L4 29V11L20 2Z"
            stroke="hsl(120 100% 50%)"
            strokeWidth="2"
            fill="none"
          />
          {/* M shape inside */}
          <path
            d="M12 28V14L20 22L28 14V28"
            stroke="hsl(120 100% 50%)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Inner glow dot */}
          <circle cx="20" cy="20" r="2" fill="hsl(120 100% 50%)" />
        </svg>
      </div>
      
      {/* Logo Text */}
      <div className="flex flex-col leading-none">
        <span className="font-display font-bold text-lg tracking-wider text-foreground">
          MAVERICK
        </span>
        <span className="font-display text-xs tracking-[0.3em] text-neon">
          SYSTEMS<sup className="text-[8px] ml-0.5">™</sup>
        </span>
      </div>
    </div>
  );
};

export default Logo;
