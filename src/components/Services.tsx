import { BarChart3, Zap, Shield, Headphones, Globe, Briefcase } from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    title: '战略咨询',
    description: '为企业提供全方位的战略规划和市场分析服务，助力企业制定科学的发展战略',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Zap,
    title: '数字化转型',
    description: '帮助传统企业实现数字化转型，提升运营效率和市场竞争力',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Shield,
    title: '风险管理',
    description: '建立完善的风险管理体系，保障企业资产安全和业务稳定运行',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Headphones,
    title: '专业支持',
    description: '7×24小时专业技术支持团队，随时为您解决各类问题',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: Globe,
    title: '全球化服务',
    description: '覆盖全球主要市场，为企业国际化发展提供全方位支持',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Briefcase,
    title: '行业解决方案',
    description: '针对不同行业特点，提供定制化的专业解决方案',
    color: 'from-rose-500 to-red-500',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            我们的服务
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            专业服务助力企业成长
          </h2>
          <p className="text-lg text-muted-foreground">
            凭借多年行业经验和专业团队，为您提供全方位、高质量的企业服务
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="text-white" size={28} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover Arrow */}
              <div className="mt-6 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-semibold">了解更多</span>
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
