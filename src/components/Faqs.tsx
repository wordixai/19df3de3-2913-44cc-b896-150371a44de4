import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "你们的服务覆盖哪些领域？",
    answer: "我们提供全方位的企业服务，包括战略咨询、数字化转型、业务流程优化、人力资源管理、财务咨询等。我们的专业团队能够根据您的具体需求，提供定制化的解决方案。"
  },
  {
    question: "合作流程是怎样的？",
    answer: "我们的合作流程分为四个阶段：1) 需求分析与评估 - 深入了解您的业务需求；2) 方案设计 - 制定详细的解决方案；3) 实施与执行 - 专业团队执行方案；4) 跟踪与优化 - 持续监控并优化效果。"
  },
  {
    question: "项目实施需要多长时间？",
    answer: "项目时间因具体需求而异。小型项目通常需要2-4周，中型项目需要1-3个月，大型项目可能需要3-6个月或更长。我们会在初期评估后提供详细的时间规划，并确保按时交付。"
  },
  {
    question: "如何保证服务质量？",
    answer: "我们采用严格的质量管理体系，包括：专业认证团队、定期进度汇报、阶段性成果验收、客户满意度调查等。同时，我们为每个项目配备专属项目经理，确保服务质量和沟通效率。"
  },
  {
    question: "费用是如何计算的？",
    answer: "我们的收费模式灵活多样，包括固定项目费用、按时计费、成果付费等。具体费用取决于项目规模、复杂度和服务周期。我们会在项目开始前提供详细的报价方案，确保透明公正。"
  },
  {
    question: "是否提供售后支持？",
    answer: "我们提供全面的售后支持服务。项目完成后，我们会提供一定期限的免费技术支持和咨询服务。同时，您也可以选择我们的长期维护服务，确保方案持续有效运行。"
  }
];

export const Faqs = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              常见问题
            </h2>
            <p className="text-lg text-muted-foreground">
              快速了解我们的服务和合作方式
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card mb-4 border border-border rounded-lg px-6 hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              还有其他问题？
            </p>
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium">
              联系我们
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
