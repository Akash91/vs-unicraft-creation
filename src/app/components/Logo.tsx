export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* VSUC Logo Text */}
      <div className="flex items-center">
        <div className="relative">
          {/* VS text in gold */}
          <span className="text-brand-gold font-bold text-4xl tracking-tight">VS</span>
          {/* UC text in white */}
          <span className="text-white font-bold text-4xl tracking-tight">UC</span>
          {/* Star accent */}
          <span className="text-brand-gold text-xl absolute -top-1 -right-3">✦</span>
        </div>
      </div>
      {/* Underline swoosh */}
      <div className="w-full h-1 bg-gradient-to-r from-brand-gold via-yellow-300 to-brand-gold rounded-full mt-1"></div>
    </div>
  );
}

export function LogoWithText({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col ${className}`}>
      <Logo />
      <div className="mt-2">
        <h1 className="text-brand-gold text-xl md:text-2xl font-bold tracking-wide">
          VS Unicraft Creation
        </h1>
        <p className="text-white text-xs md:text-sm text-center mt-1">
          Uniforms • Trophies • Printing Solutions
        </p>
        <p className="text-white text-xs text-center italic opacity-90">
          (A Complete School Supplies)
        </p>
      </div>
    </div>
  );
}
