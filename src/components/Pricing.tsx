import { Check, X, Sparkles, Crown, Zap } from 'lucide-react';
import { useState } from 'react';

const pricingPlans = [
  {
    id: 'starter',
    name: '基础版',
    icon: Zap,
    tagline: '适合初创企业',
    price: {
      monthly: 999,
      yearly: 9990,
    },
    description: '满足小型团队的基本需求',
    color: 'from-blue-500 to-cyan-500',
    features: [
      { name: '最多10个用户', included: true },
      { name: '10GB 存储空间', included: true },
      { name: '基础数据分析', included: true },
      { name: '邮件支持', included: true },
      { name: '移动端应用', included: true },
      { name: '高级分析报表', included: false },
      { name: '优先技术支持', included: false },
      { name: 'API访问权限', included: false },
      { name: '定制化开发', included: false },
    ],
    popular: false,
  },
  {
    id: 'professional',
    name: '专业版',
    icon: Sparkles,
    tagline: '适合成长型企业',
    price: {
      monthly: 2999,
      yearly: 29990,
    },
    description: '功能全面，满足大多数企业需求',
    color: 'from-purple-500 to-pink-500',
    features: [
      { name: '最多50个用户', included: true },
      { name: '100GB 存储空间', included: true },
      { name: '高级数据分析', included: true },
      { name: '7×24小时支持', included: true },
      { name: '移动端应用', included: true },
      { name: '高级分析报表', included: true },
      { name: '优先技术支持', included: true },
      { name: 'API访问权限', included: true },
      { name: '定制化开发', included: false },
    ],
    popular: true,
    badge: '最受欢迎',
  },
  {
    id: 'enterprise',
    name: '企业版',
    icon: Crown,
    tagline: '适合大型企业',
    price: {
      monthly: 9999,
      yearly: 99990,
    },
    description: '无限制使用，专属服务支持',
    color: 'from-amber-500 to-orange-500',
    features: [
      { name: '无限用户数', included: true },
      { name: '无限存储空间', included: true },
      { name: '企业级数据分析', included: true },
      { name: '专属客户经理', included: true },
      { name: '移动端应用', included: true },
      { name: '高级分析报表', included: true },
      { name: '优先技术支持', included: true },
      { name: 'API访问权限', included: true },
      { name: '定制化开发', included: true },
    ],
    popular: false,
  },
];

const addons = [
  {
    name: '额外存储空间',
    description: '每100GB',
    price: 199,
    unit: '月',
  },
  {
    name: '额外用户席位',
    description: '每10个用户',
    price: 299,
    unit: '月',
  },
  {
    name: '专业培训服务',
    description: '一次性服务',
    price: 4999,
    unit: '次',
  },
  {
    name: '定制化开发',
    description: '按需报价',
    price: null,
    unit: null,
  },
];

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="pricing" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            产品定价
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            灵活的价格方案
            <br />
            满足不同需求
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            选择适合您企业的方案，随时可升级或降级
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 p-2 bg-card rounded-xl border border-border">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              按月付费
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all ${
                billingCycle === 'yearly'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              按年付费
              <span className="ml-2 px-2 py-0.5 bg-green-500/20 text-green-600 rounded text-xs">
                省17%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan) => {
            const Icon = plan.icon;
            const price = billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly;

            return (
              <div
                key={plan.id}
                className={`relative bg-card rounded-2xl p-8 border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                  plan.popular
                    ? 'border-primary shadow-xl scale-105'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 gradient-primary text-primary-foreground rounded-full text-sm font-semibold shadow-lg">
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${plan.color} rounded-xl mb-6`}>
                  <Icon className="text-white" size={28} />
                </div>

                {/* Plan Info */}
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-1">
                  {plan.tagline}
                </p>
                <p className="text-muted-foreground mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-foreground">
                      ¥{price.toLocaleString()}
                    </span>
                    <span className="text-muted-foreground">
                      /{billingCycle === 'monthly' ? '月' : '年'}
                    </span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <p className="text-sm text-muted-foreground mt-2">
                      相当于 ¥{Math.round(price / 12).toLocaleString()}/月
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all mb-8 ${
                    plan.popular
                      ? 'gradient-primary text-primary-foreground hover:opacity-90 shadow-lg'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  立即购买
                </button>

                {/* Features */}
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-foreground mb-4">功能特性：</p>
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      {feature.included ? (
                        <div className="flex-shrink-0 w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="text-green-600" size={14} />
                        </div>
                      ) : (
                        <div className="flex-shrink-0 w-5 h-5 bg-muted rounded-full flex items-center justify-center mt-0.5">
                          <X className="text-muted-foreground" size={14} />
                        </div>
                      )}
                      <span
                        className={
                          feature.included
                            ? 'text-foreground'
                            : 'text-muted-foreground line-through'
                        }
                      >
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Add-ons Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              增值服务
            </h3>
            <p className="text-muted-foreground">
              根据业务需求，灵活添加额外服务
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {addons.map((addon, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-foreground mb-1">
                      {addon.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      {addon.description}
                    </p>
                  </div>
                  <div className="text-right">
                    {addon.price ? (
                      <>
                        <div className="text-2xl font-bold text-primary">
                          ¥{addon.price.toLocaleString()}
                        </div>
                        {addon.unit && (
                          <div className="text-xs text-muted-foreground">
                            /{addon.unit}
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="text-lg font-semibold text-primary">
                        咨询报价
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Link */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-2">
              还有疑问？
            </h3>
            <p className="text-muted-foreground mb-6">
              查看常见问题或联系我们的销售团队
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-all">
                查看FAQ
              </button>
              <button className="px-6 py-3 gradient-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg">
                联系销售
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">30天</div>
              <div className="text-sm text-muted-foreground">无理由退款</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">服务可用性</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">7×24</div>
              <div className="text-sm text-muted-foreground">技术支持</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">SSL</div>
              <div className="text-sm text-muted-foreground">数据加密</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
