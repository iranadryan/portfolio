import { cn } from "../utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "bg-transparent border border-white text-white px-4 h-12 rounded-lg flex items-center justify-center gap-2 leading-0 font-semibold cursor-pointer hover:bg-white hover:text-dark-bg transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
