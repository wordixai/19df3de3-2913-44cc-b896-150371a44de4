import { X, CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';
import type { LucideIcon } from 'lucide-react';

interface ServiceDetail {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  process: string[];
}

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceDetail | null;
}

export function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  const Icon = service.icon;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-card rounded-2xl shadow-2xl border border-border animate-in zoom-in-95 duration-200 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-lg z-10"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="p-8 border-b border-border">
          <div className="flex items-center gap-6">
            <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
              <Icon className="text-white" size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                {service.title}
              </h2>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 max-h-[60vh] overflow-y-auto">
          {/* Full Description */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-foreground mb-4">服务介绍</h3>
            <p className="text-muted-foreground leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-foreground mb-4">核心功能</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg"
                >
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-foreground mb-4">服务优势</h3>
            <div className="space-y-3">
              {service.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20"
                >
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-sm font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">服务流程</h3>
            <div className="relative">
              {service.process.map((step, index) => (
                <div key={index} className="flex gap-4 mb-6 last:mb-0">
                  <div className="relative flex flex-col items-center">
                    <div className={`w-10 h-10 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold z-10`}>
                      {index + 1}
                    </div>
                    {index < service.process.length - 1 && (
                      <div className="w-0.5 h-full bg-border absolute top-10"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-6">
                    <p className="text-foreground leading-relaxed">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 border-t border-border bg-secondary/30">
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 px-6 py-3 gradient-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all">
              立即咨询
            </button>
            <button className="flex-1 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-all">
              下载资料
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
