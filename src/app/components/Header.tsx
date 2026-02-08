import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from './ui/sheet';

export function Header() {
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/terms', label: 'Terms & Conditions' },
    { to: '/policy', label: 'Website Policy' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#0A1B7F] backdrop-blur">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          {/* VSUC Logo */}
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="text-[#FFD700] font-bold text-3xl md:text-4xl tracking-tight">VS</span>
              <span className="text-white font-bold text-3xl md:text-4xl tracking-tight">UC</span>
              <span className="text-[#FFD700] text-lg ml-1">✦</span>
            </div>
            <div className="h-[3px] bg-gradient-to-r from-[#FFD700] via-yellow-300 to-[#FFD700] rounded-full"></div>
          </div>
          <div className="hidden md:flex flex-col">
            <span className="text-[#FFD700] font-bold tracking-wide">VS Unicraft Creation</span>
            <span className="text-white text-xs">A Complete School Supplies</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-white hover:text-[#FFD700] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:text-[#FFD700] hover:bg-white/10">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}