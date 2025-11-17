import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const blogs = [
  {
    id: 1,
    title: '数字化转型：企业如何把握未来趋势',
    excerpt: '在数字经济时代，企业数字化转型已成为必然趋势。本文深入探讨企业如何制定有效的数字化战略，把握技术创新机遇...',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    category: '行业洞察',
    author: {
      name: '李明',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    },
    date: '2024年3月15日',
    readTime: '8分钟',
    tags: ['数字化', '转型', '战略'],
  },
  {
    id: 2,
    title: '人工智能赋能企业运营管理新模式',
    excerpt: 'AI技术正在重塑企业运营方式。从智能客服到供应链优化，了解如何利用人工智能技术提升企业运营效率...',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop',
    category: '技术趋势',
    author: {
      name: '王芳',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    },
    date: '2024年3月12日',
    readTime: '6分钟',
    tags: ['AI', '运营', '创新'],
  },
  {
    id: 3,
    title: '供应链管理的数字化升级之路',
    excerpt: '疫情加速了供应链数字化进程。探索如何通过数字技术构建敏捷、透明、高效的现代供应链体系...',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop',
    category: '案例分析',
    author: {
      name: '张伟',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
    date: '2024年3月10日',
    readTime: '10分钟',
    tags: ['供应链', '数字化', '管理'],
  },
  {
    id: 4,
    title: '企业文化建设与组织变革实践',
    excerpt: '成功的企业转型不仅需要技术支持，更需要文化先行。分享企业文化建设的最佳实践与组织变革策略...',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop',
    category: '企业管理',
    author: {
      name: '刘娜',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    date: '2024年3月8日',
    readTime: '7分钟',
    tags: ['企业文化', '变革', '管理'],
  },
  {
    id: 5,
    title: '数据驱动决策：构建企业智能分析体系',
    excerpt: '数据是新时代的石油。了解如何建立数据驱动的决策机制，通过智能分析系统为企业创造价值...',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    category: '数据分析',
    author: {
      name: '陈强',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    },
    date: '2024年3月5日',
    readTime: '9分钟',
    tags: ['数据', '分析', '决策'],
  },
  {
    id: 6,
    title: '可持续发展：企业ESG战略实施指南',
    excerpt: 'ESG已成为企业发展的重要考量。探讨如何将环境、社会和治理因素融入企业战略，实现可持续增长...',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=500&fit=crop',
    category: '可持续发展',
    author: {
      name: '赵敏',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop',
    },
    date: '2024年3月3日',
    readTime: '11分钟',
    tags: ['ESG', '可持续', '战略'],
  },
];

const categories = ['全部', '行业洞察', '技术趋势', '案例分析', '企业管理', '数据分析', '可持续发展'];

export function Blogs() {
  return (
    <section id="blogs" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            行业资讯
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            洞察行业趋势
            <br />
            分享专业见解
          </h2>
          <p className="text-lg text-muted-foreground">
            深度解析行业动态，分享前沿实践经验，助力企业把握发展机遇
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                category === '全部'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <div className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  src={blogs[0].image}
                  alt={blogs[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold shadow-lg">
                    精选推荐
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-primary font-semibold mb-4">
                  <Tag size={16} />
                  {blogs[0].category}
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {blogs[0].title}
                </h3>

                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {blogs[0].excerpt}
                </p>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <img
                      src={blogs[0].author.avatar}
                      alt={blogs[0].author.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="font-medium">{blogs[0].author.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {blogs[0].date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    {blogs[0].readTime}
                  </div>
                </div>

                {/* Read More */}
                <button className="inline-flex items-center gap-2 text-primary font-semibold group/btn">
                  阅读全文
                  <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(1).map((blog) => (
            <article
              key={blog.id}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-card/90 backdrop-blur-sm text-foreground rounded-full text-xs font-semibold">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Meta */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <img
                      src={blog.author.avatar}
                      alt={blog.author.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-sm font-medium text-foreground">
                      {blog.author.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock size={14} />
                    {blog.readTime}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-all inline-flex items-center gap-2 group">
            查看更多文章
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
