import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 gradient-corporate rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">E</span>
              </div>
              <span className="text-2xl font-bold text-foreground">企业名称</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              专注于为全球企业提供专业的战略咨询和数字化转型服务，助力企业实现可持续发展。
            </p>
            <div className="flex gap-3 pt-4">
              <a
                href="#"
                className="w-10 h-10 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground text-lg mb-6">快速链接</h3>
            <ul className="space-y-3">
              {['关于我们', '服务项目', '成功案例', '新闻资讯', '加入我们'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-foreground text-lg mb-6">服务范围</h3>
            <ul className="space-y-3">
              {['战略咨询', '数字化转型', '风险管理', '行业解决方案', '培训服务'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-foreground text-lg mb-6">联系我们</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary flex-shrink-0 mt-1" size={18} />
                <span className="text-muted-foreground">
                  北京市朝阳区建国路88号
                  <br />
                  SOHO现代城A座1001室
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary flex-shrink-0" size={18} />
                <a
                  href="tel:+86-10-8888-8888"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +86-10-8888-8888
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary flex-shrink-0" size={18} />
                <a
                  href="mailto:info@company.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@company.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} 企业名称. 保留所有权利.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                隐私政策
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                服务条款
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie政策
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
