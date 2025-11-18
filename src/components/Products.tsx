import { Layers, Database, Cloud, Lock, Smartphone, Code } from 'lucide-react';
import { useState } from 'react';

const products = [
  {
    id: 1,
    icon: Layers,
    name: '企业管理平台',
    tagline: 'Enterprise Management System',
    description: '一体化企业管理解决方案，整合ERP、CRM、OA等核心功能',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    color: 'from-blue-500 to-cyan-500',
    features: ['流程自动化', '智能审批', '数据可视化', '移动办公'],
    stats: { users: '10万+', satisfaction: '98%', uptime: '99.9%' },
  },
  {
    id: 2,
    icon: Database,
    name: '数据分析引擎',
    tagline: 'Data Analytics Engine',
    description: '强大的数据处理与分析平台，帮助企业挖掘数据价值',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    color: 'from-purple-500 to-pink-500',
    features: ['实时分析', '智能预测', '可视化报表', '多维度分析'],
    stats: { users: '5万+', satisfaction: '97%', uptime: '99.8%' },
  },
  {
    id: 3,
    icon: Cloud,
    name: '云协作平台',
    tagline: 'Cloud Collaboration Platform',
    description: '高效的团队协作工具，让远程办公更简单、更高效',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
    color: 'from-green-500 to-emerald-500',
    features: ['在线协作', '文档共享', '视频会议', '项目管理'],
    stats: { users: '20万+', satisfaction: '99%', uptime: '99.9%' },
  },
  {
    id: 4,
    icon: Lock,
    name: '安全防护系统',
    tagline: 'Security Protection System',
    description: '企业级安全解决方案，全方位保护您的数据资产',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
    color: 'from-red-500 to-orange-500',
    features: ['威胁监测', '数据加密', '访问控制', '合规审计'],
    stats: { users: '3万+', satisfaction: '99%', uptime: '99.99%' },
  },
  {
    id: 5,
    icon: Smartphone,
    name: '移动应用套件',
    tagline: 'Mobile App Suite',
    description: '跨平台移动应用解决方案，随时随地掌控业务',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
    color: 'from-indigo-500 to-blue-500',
    features: ['跨平台', '离线使用', '消息推送', '智能同步'],
    stats: { users: '15万+', satisfaction: '96%', uptime: '99.7%' },
  },
  {
    id: 6,
    icon: Code,
    name: '开发者平台',
    tagline: 'Developer Platform',
    description: '开放API接口和开发工具，助力企业快速构建应用',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
    color: 'from-amber-500 to-yellow-500',
    features: ['API接口', 'SDK工具', '技术文档', '开发者社区'],
    stats: { users: '8万+', satisfaction: '98%', uptime: '99.9%' },
  },
];

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <section id="products" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            我们的产品
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            创新产品驱动业务增长
          </h2>
          <p className="text-lg text-muted-foreground">
            为企业提供全方位的数字化产品，助力业务转型升级
          </p>
        </div>

        {/* Featured Product */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-card rounded-2xl p-8 md:p-12 border border-border shadow-xl">
            {/* Image */}
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-96 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-xl"></div>

              {/* Overlay Stats */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-4">
                <div className="bg-card/90 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-primary">{selectedProduct.stats.users}</div>
                  <div className="text-xs text-muted-foreground mt-1">用户数</div>
                </div>
                <div className="bg-card/90 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-primary">{selectedProduct.stats.satisfaction}</div>
                  <div className="text-xs text-muted-foreground mt-1">满意度</div>
                </div>
                <div className="bg-card/90 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-primary">{selectedProduct.stats.uptime}</div>
                  <div className="text-xs text-muted-foreground mt-1">可用率</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${selectedProduct.color} rounded-xl`}>
                <selectedProduct.icon className="text-white" size={32} />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-foreground mb-2">
                  {selectedProduct.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {selectedProduct.tagline}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3">
                {selectedProduct.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 bg-secondary rounded-lg"
                  >
                    <div className={`w-2 h-2 bg-gradient-to-br ${selectedProduct.color} rounded-full`}></div>
                    <span className="text-sm font-medium text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-4">
                <button className="px-6 py-3 gradient-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg">
                  了解详情
                </button>
                <button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-all">
                  预约演示
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className={`group cursor-pointer bg-card rounded-xl p-6 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                selectedProduct.id === product.id
                  ? 'border-primary shadow-lg'
                  : 'border-border hover:border-primary/50'
              }`}
              onClick={() => setSelectedProduct(product)}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${product.color} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <product.icon className="text-white" size={24} />
              </div>

              {/* Content */}
              <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {product.name}
              </h4>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {product.description}
              </p>

              {/* Features Pills */}
              <div className="flex flex-wrap gap-2">
                {product.features.slice(0, 3).map((feature, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              需要定制化产品方案？
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              我们的专家团队随时准备为您提供专业的产品咨询和定制化方案
            </p>
            <button className="px-8 py-4 gradient-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all shadow-xl">
              联系产品专家
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
