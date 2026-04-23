interface LogoProps {
  showTagline?: boolean;
  className?: string;
}

const Logo = ({ showTagline = true, className = "" }: LogoProps) => {
  return (
    <div className={`flex flex-col items-start ${className}`}>
      <div className="flex items-center gap-3">
        {/* Three bars */}
        <div className="flex items-end gap-[3px] h-6">
          <span className="block w-[3px] h-3 bg-gold" />
          <span className="block w-[3px] h-4 bg-gold" />
          <span className="block w-[3px] h-6 bg-gold" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-ivory tracking-[0.35em] text-sm font-medium">CODE</span>
          <span className="block w-4 h-px bg-gold" />
          <span className="text-ivory tracking-[0.35em] text-sm font-medium">KAIZEN</span>
        </div>
      </div>
      {showTagline && (
        <span className="mt-2 ml-9 text-[9px] tracking-[0.4em] uppercase text-gold/70">
          Revenue, by system.
        </span>
      )}
    </div>
  );
};

export default Logo;
