import { Award, Users, TrendingUp, Clock } from 'lucide-react';

const advantages = [
  {
    icon: Award,
    title: '行业领先',
    description: '多项行业认证和资质，树立行业标杆',
    stats: '50+',
    statsLabel: '行业认证',
  },
  {
    icon: Users,
    title: '专业团队',
    description: '汇聚行业精英，提供专业服务',
    stats: '200+',
    statsLabel: '专业顾问',
  },
  {
    icon: TrendingUp,
    title: '持续增长',
    description: '业务持续增长，客户高度认可',
    stats: '150%',
    statsLabel: '年增长率',
  },
  {
    icon: Clock,
    title: '快速响应',
    description: '高效服务流程，快速响应需求',
    stats: '< 2h',
    statsLabel: '响应时间',
  },
];

export function Advantages() {
  return (
    <section id="advantages" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="absolute inset-0 gradient-primary opacity-20 blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=800&fit=crop"
              alt="企业优势"
              className="relative rounded-2xl shadow-2xl w-full object-cover"
            />

            {/* Overlay Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-card p-8 rounded-xl shadow-2xl border border-border">
              <div className="text-center">
                <div className="text-5xl font-bold text-gradient mb-2">15+</div>
                <div className="text-muted-foreground font-medium">年行业经验</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                为什么选择我们
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
                专业实力
                <br />
                值得信赖
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                我们始终坚持以客户为中心，凭借强大的专业实力和丰富的行业经验，为客户创造最大价值
              </p>
            </div>

            {/* Advantages List */}
            <div className="space-y-6">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex-shrink-0 w-12 h-12 gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <advantage.icon className="text-primary-foreground" size={24} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {advantage.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {advantage.description}
                    </p>
                  </div>

                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">
                      {advantage.stats}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {advantage.statsLabel}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
