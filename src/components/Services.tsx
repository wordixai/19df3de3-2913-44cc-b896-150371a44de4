import { BarChart3, Zap, Shield, Headphones, Globe, Briefcase } from 'lucide-react';
import { useState } from 'react';
import { ServiceModal } from './ServiceModal';

const services = [
  {
    icon: BarChart3,
    title: '战略咨询',
    description: '为企业提供全方位的战略规划和市场分析服务，助力企业制定科学的发展战略',
    color: 'from-blue-500 to-cyan-500',
    fullDescription: '我们的战略咨询服务致力于帮助企业在复杂多变的市场环境中找到正确的发展方向。通过深入的市场研究、竞争分析和内部评估，我们为企业制定切实可行的战略规划，确保企业在激烈的市场竞争中保持领先地位。',
    features: [
      '市场环境分析与行业趋势预测',
      '竞争对手研究与差异化定位',
      '企业核心竞争力评估',
      '战略目标制定与路径规划',
      '组织架构优化建议',
      '绩效管理体系设计',
    ],
    benefits: [
      '专业团队拥有15年以上行业经验，深入理解各行业特点',
      '采用国际先进的战略分析方法论，确保方案科学性',
      '提供全程跟踪服务，确保战略有效落地执行',
      '定期评估与调整，灵活应对市场变化',
    ],
    process: [
      '需求调研：深入了解企业现状、目标和面临的挑战',
      '数据收集：全面收集市场、竞争对手和内部运营数据',
      '分析诊断：运用专业工具进行多维度分析',
      '方案制定：制定具体可行的战略规划方案',
      '汇报讨论：与管理层深入探讨，完善方案细节',
      '实施辅导：提供落地指导，确保战略有效执行',
    ],
  },
  {
    icon: Zap,
    title: '数字化转型',
    description: '帮助传统企业实现数字化转型，提升运营效率和市场竞争力',
    color: 'from-purple-500 to-pink-500',
    fullDescription: '在数字经济时代，数字化转型已成为企业发展的必然选择。我们提供从战略规划到技术实施的全方位数字化转型服务，帮助企业构建数字化能力，实现业务模式创新，提升运营效率和客户体验。',
    features: [
      '数字化战略规划与路线图设计',
      '业务流程数字化改造',
      '数据中台与智能分析平台建设',
      '移动化与云端化解决方案',
      '人工智能与自动化应用',
      '数字化人才培养与组织变革',
    ],
    benefits: [
      '拥有200+成功转型案例，覆盖多个行业领域',
      '技术与业务深度融合，确保转型实效',
      '采用敏捷迭代方法，快速见效降低风险',
      '提供持续运营支持，保障长期成功',
    ],
    process: [
      '现状评估：评估企业数字化成熟度和转型基础',
      '战略设计：制定数字化转型战略和实施路线图',
      '技术选型：根据业务需求选择合适的技术方案',
      '试点实施：选择关键业务场景进行试点',
      '全面推广：在试点成功基础上全面推广应用',
      '持续优化：建立持续改进机制，不断提升效果',
    ],
  },
  {
    icon: Shield,
    title: '风险管理',
    description: '建立完善的风险管理体系，保障企业资产安全和业务稳定运行',
    color: 'from-green-500 to-emerald-500',
    fullDescription: '有效的风险管理是企业稳健发展的基石。我们帮助企业识别、评估和应对各类风险，建立全面的风险管理体系，确保企业在面对不确定性时能够保持稳定运营，实现可持续发展。',
    features: [
      '全面风险识别与评估',
      '风险管理体系设计',
      '内部控制制度建设',
      '应急预案制定与演练',
      '合规管理与审计支持',
      '风险监控预警系统',
    ],
    benefits: [
      '资深风控专家团队，具备丰富的实战经验',
      '结合行业最佳实践，提供定制化解决方案',
      '全流程风险管理，覆盖识别到应对全环节',
      '持续监控服务，及时发现和处理潜在风险',
    ],
    process: [
      '风险诊断：全面识别企业面临的各类风险',
      '风险评估：评估风险发生概率和潜在影响',
      '体系设计：设计适合企业的风险管理体系',
      '制度建设：建立完善的风险管理制度流程',
      '系统实施：部署风险监控预警系统',
      '培训赋能：提升员工风险意识和管理能力',
    ],
  },
  {
    icon: Headphones,
    title: '专业支持',
    description: '7×24小时专业技术支持团队，随时为您解决各类问题',
    color: 'from-orange-500 to-amber-500',
    fullDescription: '我们提供全天候专业技术支持服务，确保企业业务系统稳定运行。无论何时遇到问题，我们的专业团队都能快速响应，提供有效解决方案，最大限度降低对业务的影响。',
    features: [
      '7×24小时在线支持服务',
      '多渠道技术支持（电话/邮件/在线）',
      '远程技术支持与问题诊断',
      '定期系统巡检与优化',
      '紧急故障快速响应',
      '技术培训与知识转移',
    ],
    benefits: [
      '平均响应时间<2小时，紧急问题即刻响应',
      '经验丰富的技术专家团队，问题解决率>98%',
      '完善的知识库支持，快速定位问题',
      '主动式服务，预防性维护降低故障率',
    ],
    process: [
      '问题提交：通过多种渠道快速提交支持请求',
      '初步诊断：技术团队快速评估问题性质',
      '分级处理：根据紧急程度分配相应资源',
      '问题解决：专业团队提供解决方案并实施',
      '验证确认：确保问题彻底解决，系统正常运行',
      '总结归档：记录问题和解决方案，优化知识库',
    ],
  },
  {
    icon: Globe,
    title: '全球化服务',
    description: '覆盖全球主要市场，为企业国际化发展提供全方位支持',
    color: 'from-indigo-500 to-blue-500',
    fullDescription: '在全球化背景下，我们为企业提供国际化发展的全方位支持。依托全球服务网络和丰富的国际化经验，帮助企业成功进入海外市场，实现全球业务布局。',
    features: [
      '国际市场进入策略规划',
      '跨文化管理与团队建设',
      '全球供应链优化',
      '国际合规与风险管理',
      '海外并购与整合支持',
      '多语言多时区服务支持',
    ],
    benefits: [
      '覆盖全球50+国家和地区的服务网络',
      '深入了解各地市场特点和商业文化',
      '拥有丰富的跨国项目实施经验',
      '提供端到端的国际化解决方案',
    ],
    process: [
      '市场研究：深入研究目标市场的机会与挑战',
      '策略制定：制定国际化发展战略和实施计划',
      '本地化准备：进行产品、服务和运营的本地化',
      '市场进入：协助完成注册、合规等准入工作',
      '运营支持：提供持续的本地化运营支持',
      '业务拓展：支持业务规模化和市场深耕',
    ],
  },
  {
    icon: Briefcase,
    title: '行业解决方案',
    description: '针对不同行业特点，提供定制化的专业解决方案',
    color: 'from-rose-500 to-red-500',
    fullDescription: '每个行业都有其独特的业务特点和发展规律。我们基于对各行业的深入理解，为制造、金融、零售、医疗等多个行业提供定制化的专业解决方案，帮助企业解决行业特定的挑战。',
    features: [
      '制造业智能化升级方案',
      '金融科技创新解决方案',
      '零售业全渠道数字化',
      '医疗健康信息化建设',
      '教育行业数字化转型',
      '物流供应链优化方案',
    ],
    benefits: [
      '深耕各行业多年，积累丰富的行业know-how',
      '结合行业最佳实践，提供成熟可靠的方案',
      '灵活定制，充分满足企业个性化需求',
      '持续跟踪行业动态，方案不断升级优化',
    ],
    process: [
      '行业分析：分析行业趋势和企业所处位置',
      '需求挖掘：深入了解企业具体需求和痛点',
      '方案设计：设计符合行业特点的解决方案',
      '方案验证：通过试点验证方案可行性',
      '全面实施：分阶段推进方案全面实施',
      '效果评估：持续跟踪效果，优化改进方案',
    ],
  },
];

export function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service: typeof services[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 200);
  };
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
              className="group bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              onClick={() => handleServiceClick(service)}
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

      {/* Service Detail Modal */}
      <ServiceModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        service={selectedService}
      />
    </section>
  );
}
