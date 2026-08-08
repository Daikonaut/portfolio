type ImageItem = {
  src: string;
  alt: string;
  index: string;
  title: string;
};

const visualWorks: ImageItem[] = [
  { index: "01", title: "定制丸安巡演海报", src: "/visual-01.webp", alt: "定制丸安巡演海报" },
  { index: "02", title: "天草巡演海报", src: "/visual-02.webp", alt: "天草巡演海报" },
  { index: "03", title: "黄霄云 2025 巡演海报", src: "/visual-03.webp", alt: "黄霄云 2025 巡演海报之一" },
  { index: "04", title: "黄霄云 2025 巡演海报", src: "/visual-04.webp", alt: "黄霄云 2025 巡演海报之二" },
  { index: "05", title: "入戏见面会海报", src: "/visual-05.webp", alt: "入戏见面会海报" },
  { index: "06", title: "Fanmade 自制海报", src: "/visual-06.webp", alt: "Fanmade 自制海报之一" },
  { index: "07", title: "Fanmade 自制海报", src: "/visual-07.webp", alt: "Fanmade 自制海报之二" },
  { index: "08", title: "Fanmade 自制海报", src: "/visual-08.webp", alt: "Fanmade 自制海报之三" },
  { index: "09", title: "Fanmade 自制海报", src: "/visual-09.webp", alt: "Fanmade 自制海报之四" },
  { index: "10", title: "Fanmade 自制海报", src: "/visual-10.webp", alt: "Fanmade 自制海报之五" },
];

const brandImages: ImageItem[] = [
  { index: "01", title: "霸王茶姬活动广告 KV 合成", src: "/brand-11.webp", alt: "霸王茶姬活动广告 KV 竖版" },
  { index: "02", title: "霸王茶姬活动广告 KV 合成", src: "/brand-12.webp", alt: "霸王茶姬活动广告 KV 横版" },
];

const cultureWorks: ImageItem[] = [
  { index: "01", title: "黄霄云官方周边设计", src: "/culture-13.webp", alt: "黄霄云官方周边设计" },
  { index: "02", title: "Fanmade", src: "/culture-14.webp", alt: "Fanmade 文创设计之一" },
  { index: "03", title: "Fanmade", src: "/culture-15.webp", alt: "Fanmade 文创设计之二" },
];

function WorkCaption({ index, title }: { index: string; title: string }) {
  return (
    <div className="work-caption">
      <span>{index}</span>
      <h3>{title}</h3>
    </div>
  );
}

function ImageWorkGrid({ works }: { works: ImageItem[] }) {
  return (
    <div className="asset-grid">
      {works.map((work) => (
        <article className="media-work-card" key={work.src}>
          <figure className="asset-card">
            <img src={work.src} alt={work.alt} loading="eager" decoding="async" />
          </figure>
          <WorkCaption index={work.index} title={work.title} />
        </article>
      ))}
    </div>
  );
}

function SectionTitle({ id, index, title, english }: { id: string; index: string; title: string; english: string }) {
  return (
    <div className="section-title" id={id}>
      <span>{index}</span>
      <h2>{title}</h2>
      <p>{english}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="返回首页">DAIKONAUT DESIGN</a>
        <nav aria-label="主导航">
          <a href="#selected">精选</a>
          <a href="#visual">作品</a>
          <a href="#contact">联系</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <video className="hero-video" autoPlay muted loop playsInline preload="auto" aria-hidden="true">
          <source src="/daikonaut-hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-scrim" aria-hidden="true" />
        <div className="hero-meta">
          <p>INDEPENDENT DESIGN PRACTICE</p>
          <p>CARTOON</p>
        </div>
        <div className="hero-title-block">
          <h1 className="hero-title">
            <span>DAIKONAUT</span>
            <span>DESIGN</span>
          </h1>
          <p className="hero-subtitle">视觉设计 | AIGC | 创意策划 | 品牌广告 | 文创设计</p>
        </div>
        <div className="hero-bottom">
          <p>以策划与审美为起点，塑造个性体验。</p>
          <a className="circle-link" href="#selected" aria-label="查看精选作品">↓</a>
        </div>
      </section>

      <section className="selected section-shell" id="selected" aria-labelledby="selected-title">
        <div className="eyebrow-row">
          <p id="selected-title">SELECTED WORK / 精选作品</p>
          <p>2025—2026</p>
        </div>
        <div className="selected-grid">
          <article className="selected-card selected-card--wide">
            <video autoPlay muted loop playsInline preload="auto">
              <source src="/project-projection.mp4" type="video/mp4" />
            </video>
            <div><span>01</span><h2>投影交互设计</h2><p>AIGC / INTERACTION</p></div>
          </article>
          <article className="selected-card">
            <img src="/visual-04.webp" alt="2025 黄霄云演唱会主视觉设计" />
            <div><span>02</span><h2>黄霄云 2025 巡演</h2><p>VISUAL DESIGN</p></div>
          </article>
          <article className="selected-card">
            <img src="/visual-01.webp" alt="定制丸安巡演海报" />
            <div><span>03</span><h2>定制丸安巡演</h2><p>VISUAL DESIGN</p></div>
          </article>
        </div>
      </section>

      <section className="portfolio-section section-shell" aria-labelledby="visual">
        <SectionTitle id="visual" index="01" title="视觉设计" english="VISUAL DESIGN" />
        <ImageWorkGrid works={visualWorks} />
      </section>

      <section className="portfolio-section section-shell" aria-labelledby="aigc">
        <SectionTitle id="aigc" index="02" title="AIGC" english="AI-GENERATED CONTENT" />
        <div className="video-grid">
          <article className="video-card">
            <video controls playsInline preload="auto">
              <source src="/project-projection.mp4" type="video/mp4" />
            </video>
            <div><span>01</span><h3>交互设计</h3></div>
          </article>
          <article className="video-card">
            <video controls playsInline preload="auto">
              <source src="/aigc-robo-neo.mp4" type="video/mp4" />
            </video>
            <div><span>02</span><h3>美图旗下产品 RoboNeo 宣传视频</h3></div>
          </article>
        </div>
      </section>

      <section className="portfolio-section section-shell" aria-labelledby="planning">
        <SectionTitle id="planning" index="03" title="创意策划" english="CREATIVE PLANNING" />
        <article className="planning-card">
          <p>01 / VISUAL PLANNING</p>
          <h3>黄霄云 2025 巡演视觉策划</h3>
          <p>黄霄云 2025 年视觉策划与文创周边开发。</p>
        </article>
      </section>

      <section className="portfolio-section section-shell" aria-labelledby="advertising">
        <SectionTitle id="advertising" index="04" title="品牌广告" english="BRAND ADVERTISING" />
        <div className="asset-grid asset-grid--mixed">
          {brandImages.map((work) => (
            <article className="media-work-card" key={work.src}>
              <figure className="asset-card"><img src={work.src} alt={work.alt} loading="eager" decoding="async" /></figure>
              <WorkCaption index={work.index} title={work.title} />
            </article>
          ))}
          <article className="media-work-card">
            <video className="mixed-video" controls playsInline preload="auto">
              <source src="/brand-jewelry-concept.mp4" type="video/mp4" />
            </video>
            <WorkCaption index="03" title="珠宝类视觉概念设计" />
          </article>
        </div>
      </section>

      <section className="portfolio-section section-shell" aria-labelledby="culture">
        <SectionTitle id="culture" index="05" title="文创设计" english="CULTURAL &amp; CREATIVE DESIGN" />
        <ImageWorkGrid works={cultureWorks} />
      </section>

      <footer id="contact">
        <p className="footer-label">CONTACT / 联系方式</p>
        <div className="contact-title">
          <p>DAIKONAUT</p>
          <a href="mailto:3220387464@qq.com">3220387464@qq.com</a>
        </div>
        <div className="footer-meta">
          <a href="https://xhslink.cn/m/9jXDDjeisOy" target="_blank" rel="noreferrer">小红书 / REDNOTE ↗</a>
          <p>CARTOON</p>
          <p>© 2026 DAIKONAUT DESIGN</p>
        </div>
      </footer>
    </main>
  );
}
