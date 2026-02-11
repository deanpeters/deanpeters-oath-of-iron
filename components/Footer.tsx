
import React from 'react';
import { Share2, Mail, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-oath-surface border-t border-oath-border py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Brand */}
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-oath-crimson" />
            <span className="font-serif text-sm tracking-widest text-oath-gold uppercase font-bold">
              Oath of Iron
            </span>
          </div>

          {/* Center: Copyright */}
          <p className="text-oath-text/40 text-[10px] tracking-widest uppercase text-center">
            © 1387 - 2025 Oath of Iron. All Rights Reserved.
          </p>

          {/* Right: Social/Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-oath-text/60 hover:text-oath-crimson transition-colors">
              <Share2 className="w-5 h-5" />
            </a>
            <a href="#" className="text-oath-text/60 hover:text-oath-gold transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
