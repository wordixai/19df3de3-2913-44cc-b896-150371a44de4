import { ArrowRight, Play } from 'lucide-react';
import { useState } from 'react';
import { VideoModal } from './VideoModal';

export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // 使用 YouTube 或其他视频平台的嵌入链接
  // 示例: https://www.youtube.com/embed/VIDEO_ID
  const videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ';

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-corporate opacity-5"></div>

      {/* Decorative elements */}
      <div className="absolute top-40 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                值得信赖的企业合作伙伴
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              引领行业
              <br />
              <span className="text-gradient">创新未来</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              我们致力于为全球企业提供专业、高效的解决方案，助力您的业务实现跨越式发展
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 gradient-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 group">
                开始咨询
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>

              <button
                onClick={() => setIsVideoOpen(true)}
                className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-all flex items-center justify-center gap-2 group"
              >
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Play size={16} className="text-primary fill-primary ml-0.5" />
                </div>
                观看介绍
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground mt-1">合作企业</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">15年</div>
                <div className="text-sm text-muted-foreground mt-1">行业经验</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground mt-1">客户满意度</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="absolute inset-0 gradient-primary opacity-20 blur-3xl rounded-full"></div>
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop"
              alt="企业团队"
              className="relative rounded-2xl shadow-2xl w-full object-cover"
            />

            {/* Floating card */}
            <div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-xl shadow-2xl border border-border max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">认证企业</div>
                  <div className="text-sm text-muted-foreground">ISO 9001 质量认证</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl={videoUrl}
      />
    </section>
  );
}
