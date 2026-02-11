
import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const FooterCTA: React.FC = () => {
  return (
    <section className="relative py-24 border-t border-oath-border overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-oath-crimson/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        <div className="flex flex-col items-center space-y-6">
          <div className="w-16 h-16 flex items-center justify-center bg-oath-crimson/20 rounded-full border border-oath-crimson/40">
            <ShieldCheck className="w-8 h-8 text-oath-crimson" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-serif text-oath-gold tracking-widest uppercase">
            Take the Oath
          </h2>
        </div>

        <p className="text-xl lg:text-2xl font-serif italic text-oath-text/90 leading-relaxed px-4">
          "The Kingdom is fractured, and the truth is buried in blood. Will you stand with the lineage of iron or fall to the shadows of the throne?"
        </p>

        <div className="flex flex-col items-center space-y-6 pt-4">
          <a 
            href="https://amzn.to/4kC2HpC"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-oath-crimson hover:bg-oath-crimson-bright text-white px-12 py-5 rounded-md font-bold uppercase tracking-widest text-lg transition-all flex items-center gap-4 crimson-glow group"
          >
            Claim Your Copy
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </a>
          <span className="text-oath-text/50 text-[10px] tracking-[0.3em] font-bold uppercase">
            Available now on Amazon
          </span>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
