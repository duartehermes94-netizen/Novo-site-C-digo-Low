import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { Lock, CheckSquare, BadgeDollarSign, Smartphone, ArrowDown, Mail, ShieldCheck, CheckCircle2, AlertTriangle, Plus, Shield } from "lucide-react";

export function Button({ className = "", href, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement> & { href?: string }) {
  const combinedClassName = `bg-brand-green hover:bg-green-600 transition-colors text-white font-bold text-lg md:text-xl py-4 px-8 rounded-xl shadow-lg w-full max-w-md mx-auto flex justify-center items-center ${className}`;
  if (href) {
    return (
      <a href={href} className={combinedClassName} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}

export function SecurityBadges() {
  return (
    <div className="flex items-center justify-center gap-4 text-xs font-medium text-gray-500 mt-3 flex-wrap">
      <div className="flex items-center gap-1">
        <ShieldCheck className="w-4 h-4 text-gray-400" /> Compra Segura
      </div>
      <div className="flex items-center gap-1">
        <Lock className="w-4 h-4 text-gray-400" /> Privacidade Protegida
      </div>
      <div className="flex items-center gap-1">
        <CheckCircle2 className="w-4 h-4 text-gray-400" /> Satisfação Garantida
      </div>
    </div>
  );
}
