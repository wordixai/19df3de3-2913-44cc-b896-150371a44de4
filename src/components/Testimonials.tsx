import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const testimonials = [
  {
    name: '张伟',
    position: 'CEO',
    company: '科技有限公司',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    content: '与该公司的合作让我们的业务效率提升了300%，他们的专业服务和快速响应让我们非常满意。强烈推荐！',
    rating: 5,
  },
  {
    name: '李娜',
    position: '运营总监',
    company: '创新集团',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    content: '专业的团队，高效的服务，完善的解决方案。合作一年来，我们的市场份额持续增长，感谢他们的支持。',
    rating: 5,
  },
  {
    name: '王强',
    position: 'CTO',
    company: '智能科技',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    content: '从战略规划到落地执行，全程提供了专业的指导和支持。他们的专业能力和服务态度都让人印象深刻。',
    rating: 5,
  },
  {
    name: '刘芳',
    position: '市场总监',
    company: '国际贸易',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    content: '选择他们是我们做的最正确的决定。专业、高效、负责，帮助我们成功开拓了海外市场。',
    rating: 5,
  },
  {
    name: '陈明',
    position: '总经理',
    company: '制造企业',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    content: '数字化转型项目进展顺利，团队非常专业，沟通高效。我们的生产效率显著提升，成本大幅降低。',
    rating: 5,
  },
  {
    name: '赵敏',
    position: '项目经理',
    company: '咨询公司',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop',
    content: '优秀的合作伙伴！无论是服务质量还是响应速度都超出预期。期待更深入的长期合作。',
    rating: 5,
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect();

    // Auto-play
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      clearInterval(autoplay);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  const scrollTo = (index: number) => emblaApi?.scrollTo(index);

  return (
    <section id="testimonials" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            客户评价
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            客户的认可是我们前进的动力
          </h2>
          <p className="text-lg text-muted-foreground">
            来自全球500+企业客户的真实评价
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6"
                >
                  <div className="group bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl h-full">
                    {/* Quote Icon */}
                    <div className="mb-6">
                      <Quote className="text-primary/20 w-12 h-12" />
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="text-amber-400 fill-amber-400"
                          size={18}
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-6 border-t border-border">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                      />
                      <div>
                        <div className="font-semibold text-foreground">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.position} · {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === selectedIndex
                    ? 'bg-primary w-8'
                    : 'bg-border hover:bg-primary/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-card rounded-2xl p-12 border border-border shadow-xl">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              准备好开始了吗？
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              立即联系我们，让专业团队为您的企业量身定制解决方案
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 gradient-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg">
                免费咨询
              </button>
              <button className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-all">
                了解更多
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
