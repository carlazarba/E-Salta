export default function Logo() {
  return (
    <a href="#" className="flex items-center gap-2 group">
      <svg
        width="36"
        height="36"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="group-hover:scale-105 transition-transform duration-200"
      >
        <path
          d="M20 2C14.5 2 10 6.5 10 12C10 20 20 34 20 34C20 34 30 20 30 12C30 6.5 25.5 2 20 2Z"
          fill="#0C3C84"
          stroke="#0C3C84"
          strokeWidth="1.5"
        />
        <circle cx="20" cy="12" r="6" fill="white" />
        <text
          x="20"
          y="16"
          textAnchor="middle"
          fill="#9A003F"
          fontSize="12"
          fontWeight="800"
          fontFamily="Inter, sans-serif"
        >
          E
        </text>
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-bordo font-bold text-lg tracking-wide">SALTA</span>
        <span className="text-gris-texto text-[10px] font-medium tracking-widest">
          ESTACIONAMIENTO
        </span>
      </div>
      <div className="hidden sm:block w-8 h-[2px] bg-bordo ml-1" />
    </a>
  );
}