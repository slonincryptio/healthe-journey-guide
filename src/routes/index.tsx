import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Екатерина Шадеева — Врач · Нутрициолог · Health Coach" },
      { name: "description", content: "Врачебный подход к питанию, весу и энергии. Комплексное сопровождение от анализов до персонального плана." },
      { property: "og:title", content: "Екатерина Шадеева — Врач · Нутрициолог · Health Coach" },
      { property: "og:description", content: "Врачебный подход к питанию, весу и энергии. Комплексное сопровождение от анализов до персонального плана." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Tenor+Sans&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <style>{pageCss}</style>
      <nav className="es-nav">
        <a href="#top" className="es-nav-name">Екатерина Шадеева</a>
        <ul className="es-nav-links">
          <li><a href="#about">Обо мне</a></li>
          <li><a href="#programs">Программы</a></li>
          <li><a href="#approach">Подход</a></li>
        </ul>
        <a href="#contact" className="es-nav-cta">Записаться</a>
      </nav>

      {/* HERO */}
      <section className="es-hero" id="top">
        <div className="es-hero-left">
          <div className="es-hero-tag">Врач · Нутрициолог · Health Coach</div>
          <h1>
            Врачебный подход<br />к <em>питанию,</em> весу<br />и энергии
          </h1>
          <p className="es-hero-desc">
            Комплексное сопровождение от анализов до персонального плана.{" "}
            <mark>Для тех, кто хочет выстроить питание</mark> и сохранить энергию на долгие годы.
          </p>
          <div className="es-hero-btns">
            <a href="#programs" className="es-btn-primary">Посмотреть программы</a>
            <a href="#contact" className="es-btn-secondary">Записаться</a>
          </div>
        </div>
        <div className="es-hero-right">
          <img src={heroImg} alt="Екатерина Шадеева" className="es-hero-img" width={1024} height={1536} />
          <div className="es-hero-img-overlay" />
          <div className="es-hero-credentials">
            <div className="es-cred-item">Врач</div>
            <div className="es-cred-item">Нутрициология</div>
            <div className="es-cred-item">Health Coach</div>
          </div>
        </div>
      </section>

      {/* INTRO / BLOCK 2 */}
      <section className="es-section">
        <div className="es-section-inner">
          <div className="es-s-label">Подход</div>
          <p className="es-s-sub">
            Я помогаю выстроить питание, режим и нутрициологическую поддержку с учётом особенностей вашего организма: анализов, гормонального фона, образа жизни, сна и активности — и индивидуальных целей.
          </p>
          <ul className="es-intro-list">
            <li>Анализы</li>
            <li>Гормональный фон</li>
            <li>Образ жизни</li>
            <li>Сон и активность</li>
            <li>Индивидуальные цели</li>
          </ul>
        </div>
      </section>

      <div className="es-divider" />

      {/* ABOUT */}
      <section className="es-about" id="about">
        <div className="es-about-inner">
          <div className="es-about-photo-wrap">
            <div className="es-about-photo-frame" />
            <img src={aboutImg} alt="Шадеева Екатерина Юрьевна" className="es-about-photo" loading="lazy" width={1024} height={1280} />
          </div>
          <div>
            <div className="es-about-tag">Обо мне</div>
            <h2 className="es-about-title">Соединяю медицину,<br />нутрициологию<br />и диагностику</h2>
            <div className="es-about-name">Шадеева Екатерина Юрьевна</div>
            <div className="es-about-role">Врач · Нутрициолог · Health Coach</div>
            <div className="es-about-text">
              <p>Я врач по образованию и защитила профессиональную квалификацию по нутрициологии.</p>
              <p>В работе соединяю медицинскую базу, нутрициологию и современные инструменты диагностики состояния организма.</p>
              <p>Моя задача — помочь вам разобраться, что влияет на ваш вес, энергию, восстановление и пищевое поведение с учётом особенностей организма.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="es-programs" id="programs">
        <div className="es-programs-inner">
          <div className="es-s-label">Программы</div>
          <h2 className="es-s-title">Два направления работы</h2>
          <p className="es-s-sub">Выберите программу под свой запрос — здоровье и долголетие или снижение веса под контролем врача.</p>

          <div className="es-programs-grid">
            <article className="es-program-card">
              <div className="es-program-bg es-program-bg-gold">
                <div className="es-program-accent-gold" />
                <div className="es-program-number es-program-number-gold">01</div>
                <div className="es-program-content">
                  <div className="es-program-tag es-program-tag-gold">Здоровье и долголетие</div>
                  <h3 className="es-program-title">Здоровье, молодость и энергия на долгие годы</h3>
                  <p className="es-program-desc">
                    Для тех, кто хочет лучше понимать состояние организма и работать с образом жизни для профилактики возрастных изменений. Комплексное сопровождение: от лабораторной диагностики до подбора БАДов и системы питания.
                  </p>
                  <div className="es-program-actions">
                    <a href="/longlivety" className="es-program-link es-program-link-gold">Узнать подробнее</a>
                    <a href="#contact" className="es-program-link es-program-link-filled-gold">Записаться</a>
                  </div>
                </div>
              </div>
            </article>

            <article className="es-program-card">
              <div className="es-program-bg es-program-bg-green">
                <div className="es-program-accent-green" />
                <div className="es-program-number es-program-number-green">02</div>
                <div className="es-program-content">
                  <div className="es-program-tag es-program-tag-green">Снижение веса</div>
                  <h3 className="es-program-title">Снижение веса под контролем врача</h3>
                  <p className="es-program-desc">
                    Для тех, кто хочет снижать вес без жёстких диет, срывов и бесконечных откатов. Три исследования тела, подбор питания и физической нагрузки — персонально под ваш организм.
                  </p>
                  <div className="es-program-actions">
                    <a href="/weightlosing" className="es-program-link es-program-link-green">Узнать подробнее</a>
                    <a href="#contact" className="es-program-link es-program-link-filled-green">Записаться</a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="es-approach" id="approach">
        <div className="es-approach-inner">
          <div className="es-s-label">Мой подход</div>
          <h2 className="es-s-title">Почему комплексная работа<br />даёт результат</h2>
          <p className="es-s-sub">Системность вместо разрозненных рекомендаций. Каждый шаг опирается на данные вашего организма.</p>
          <div className="es-approach-grid">
            {[
              { n: "01", name: "Диагностика", text: "Анализы, антропометрия, исследования состава тела и образа жизни." },
              { n: "02", name: "Интерпретация", text: "Врачебное прочтение результатов с учётом анамнеза и целей." },
              { n: "03", name: "Персональный план", text: "Питание, режим, БАДы и активность — под ваш организм." },
              { n: "04", name: "Сопровождение", text: "Корректировка протокола, поддержка и работа с устойчивыми привычками." },
            ].map((s) => (
              <div className="es-approach-item" key={s.n}>
                <div className="es-approach-num">{s.n}</div>
                <div className="es-approach-name">{s.name}</div>
                <div className="es-approach-text">{s.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="es-cta" id="contact">
        <div className="es-cta-inner">
          <div className="es-cta-tag">Запись</div>
          <h2 className="es-cta-title">Готовы начать<br />работу над собой?</h2>
          <p className="es-cta-sub">Оставьте заявку, и я свяжусь с вами, чтобы обсудить программу и подобрать подходящий формат сопровождения.</p>
          <div className="es-cta-btns">
            <a href="https://wa.me/" className="es-btn-cta-gold">Написать в WhatsApp</a>
            <a href="https://t.me/" className="es-btn-cta-outline">Написать в Telegram</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="es-footer">
        <div className="es-footer-inner">
          <div className="es-footer-col">
            <div className="es-footer-name">Екатерина Шадеева</div>
            <div className="es-footer-role">Врач · Нутрициолог · Health Coach</div>
          </div>
          <div className="es-footer-col">
            <div className="es-footer-h">Контакты</div>
            <a href="https://wa.me/" className="es-footer-link">WhatsApp</a>
            <a href="https://t.me/" className="es-footer-link">Telegram</a>
            <a href="mailto:hello@example.com" className="es-footer-link">Email</a>
          </div>
          <div className="es-footer-col">
            <div className="es-footer-h">Образование</div>
            <div className="es-footer-line">Диплом о высшем образовании</div>
            <div className="es-footer-line">Квалификация «Нутрициология»</div>
          </div>
          <div className="es-footer-col">
            <div className="es-footer-h">Юридическая информация</div>
            <div className="es-footer-line">ИП Шадеева Екатерина Юрьевна</div>
            <div className="es-footer-line">ИНН —</div>
            <a href="#" className="es-footer-link">Публичная оферта</a>
          </div>
        </div>
        <div className="es-footer-bottom">© {new Date().getFullYear()} Екатерина Шадеева</div>
      </footer>

      {/* Sticky CTA — mobile */}
      <a href="#contact" className="es-sticky-cta">Записаться</a>
    </>
  );
}

const pageCss = `
:root{
  --cream:#FAF7F2; --warm:#F2EDE4; --dark:#1C1612;
  --gold:#B8935A; --gold-l:#E4CFA0; --gold-p:#F5EDD9;
  --green:#3D6B4A; --green-l:#C8DFD0; --green-p:#EBF3ED;
  --text:#2A231A; --muted:#7A6E62; --border:#E0D8CC;
}
html{scroll-behavior:smooth}
body{font-family:'Tenor Sans',sans-serif;background:var(--cream);color:var(--text);line-height:1.6;overflow-x:hidden;margin:0}

.es-nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:1rem 3rem;display:flex;align-items:center;justify-content:space-between;gap:1rem;backdrop-filter:blur(12px);background:rgba(250,247,242,0.88);border-bottom:0.5px solid var(--border)}
.es-nav-name{font-family:'Cormorant Garamond',serif;font-size:1.25rem;font-weight:300;color:var(--dark);letter-spacing:0.04em;text-decoration:none}
.es-nav-links{display:flex;gap:2rem;list-style:none;margin:0;padding:0}
.es-nav-links a{font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:var(--muted);text-decoration:none;transition:color .2s}
.es-nav-links a:hover{color:var(--gold)}
.es-nav-cta{padding:10px 22px;background:var(--gold);color:var(--dark);font-size:11px;letter-spacing:0.14em;text-transform:uppercase;text-decoration:none;font-family:'Tenor Sans',sans-serif;transition:background .2s;border:0.5px solid var(--gold)}
.es-nav-cta:hover{background:var(--gold-l);border-color:var(--gold-l)}

.es-hero{min-height:100vh;display:grid;grid-template-columns:1fr 1fr;align-items:center;padding-top:80px}
.es-hero-left{padding:5rem 4rem 5rem 5rem;position:relative;min-width:0}
.es-hero-left::after{content:'';position:absolute;right:0;top:10%;bottom:10%;width:0.5px;background:var(--border)}
.es-hero-tag{display:inline-flex;align-items:center;gap:8px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:var(--gold);margin-bottom:2rem}
.es-hero-tag::before{content:'';width:24px;height:0.5px;background:var(--gold)}
.es-hero h1{font-family:'Cormorant Garamond',serif;font-size:3.8rem;font-weight:300;line-height:1.1;color:var(--dark);margin:0 0 1.5rem}
.es-hero h1 em{font-style:italic;color:var(--gold)}
.es-hero-desc{font-size:15px;color:var(--muted);line-height:1.85;max-width:460px;margin-bottom:2.5rem;font-weight:300}
.es-hero-desc mark{background:none;color:var(--dark);font-weight:400}
.es-hero-btns{display:flex;gap:1rem;flex-wrap:wrap}
.es-btn-primary{padding:14px 32px;background:var(--dark);color:var(--gold-l);font-size:12px;letter-spacing:0.12em;text-transform:uppercase;text-decoration:none;border:none;cursor:pointer;font-family:'Tenor Sans',sans-serif;transition:background .2s}
.es-btn-primary:hover{background:#2C2416}
.es-btn-secondary{padding:14px 32px;background:transparent;color:var(--dark);font-size:12px;letter-spacing:0.12em;text-transform:uppercase;text-decoration:none;border:0.5px solid var(--border);cursor:pointer;font-family:'Tenor Sans',sans-serif;transition:border-color .2s,color .2s}
.es-btn-secondary:hover{border-color:var(--gold);color:var(--gold)}
.es-hero-right{position:relative;height:100vh;overflow:hidden}
.es-hero-img{width:100%;height:100%;object-fit:cover;object-position:center top;filter:grayscale(8%);display:block}
.es-hero-img-overlay{position:absolute;inset:0;background:linear-gradient(to right,var(--cream) 0%,transparent 15%),linear-gradient(to top,var(--cream) 0%,transparent 20%)}
.es-hero-credentials{position:absolute;bottom:2.5rem;right:2.5rem;display:flex;flex-direction:column;gap:8px}
.es-cred-item{background:rgba(250,247,242,0.92);backdrop-filter:blur(8px);padding:8px 16px;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:var(--dark);border-left:2px solid var(--gold)}

.es-section{padding:6rem 5rem}
.es-section-inner{max-width:1200px;margin:0 auto}
.es-s-label{font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold);margin-bottom:0.75rem}
.es-s-title{font-family:'Cormorant Garamond',serif;font-size:2.6rem;font-weight:300;color:var(--dark);line-height:1.15;margin:0 0 1.25rem}
.es-s-sub{font-size:15px;color:var(--muted);line-height:1.8;max-width:620px;font-weight:300;margin:0}
.es-intro-list{list-style:none;margin:2.5rem 0 0;padding:0;display:flex;flex-wrap:wrap;gap:8px}
.es-intro-list li{padding:8px 16px;border:0.5px solid var(--border);font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:var(--muted)}

.es-divider{height:0.5px;background:var(--border)}

.es-about{background:var(--dark);padding:6rem 5rem}
.es-about-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:6rem;align-items:center}
.es-about-photo-wrap{position:relative}
.es-about-photo{width:100%;aspect-ratio:3/4;object-fit:cover;object-position:center top;position:relative;z-index:1;display:block}
.es-about-photo-frame{position:absolute;top:-16px;left:-16px;right:16px;bottom:16px;border:0.5px solid rgba(184,147,90,0.3);pointer-events:none;z-index:0}
.es-about-tag{font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold);margin-bottom:1rem}
.es-about-title{font-family:'Cormorant Garamond',serif;font-size:2.6rem;font-weight:300;color:var(--gold-l);line-height:1.15;margin:0 0 1.5rem}
.es-about-name{font-family:'Cormorant Garamond',serif;font-size:1.8rem;font-weight:300;color:var(--gold);font-style:italic;margin-bottom:0.5rem}
.es-about-role{font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(228,207,160,0.5);margin-bottom:2rem}
.es-about-text{font-size:15px;color:rgba(228,207,160,0.78);line-height:1.9;font-weight:300}
.es-about-text p{margin:0 0 1rem}
.es-about-text p:last-child{margin-bottom:0}

.es-programs{padding:6rem 5rem;background:var(--warm)}
.es-programs-inner{max-width:1200px;margin:0 auto}
.es-programs-grid{display:grid;grid-template-columns:1fr 1fr;gap:2px;margin-top:3rem}
.es-program-card{position:relative;overflow:hidden}
.es-program-bg{width:100%;display:block;position:relative;min-height:520px}
.es-program-bg-gold{background:linear-gradient(135deg,#1C1612 0%,#2C2016 40%,#3A2A1A 100%)}
.es-program-bg-green{background:linear-gradient(135deg,#151C18 0%,#1E2B22 40%,#253320 100%)}
.es-program-accent-gold{position:absolute;inset:0;background:radial-gradient(ellipse at 70% 30%,rgba(184,147,90,0.15) 0%,transparent 60%)}
.es-program-accent-green{position:absolute;inset:0;background:radial-gradient(ellipse at 70% 30%,rgba(61,107,74,0.2) 0%,transparent 60%)}
.es-program-number{position:absolute;top:2rem;left:2rem;font-family:'Cormorant Garamond',serif;font-size:4rem;font-weight:300;opacity:0.18;line-height:1}
.es-program-number-gold{color:var(--gold)}
.es-program-number-green{color:var(--green-l)}
.es-program-content{position:absolute;bottom:0;left:0;right:0;padding:2rem;background:linear-gradient(to top,rgba(28,22,18,0.95) 0%,rgba(28,22,18,0.6) 60%,transparent 100%)}
.es-program-tag{font-size:10px;letter-spacing:0.18em;text-transform:uppercase;margin-bottom:0.5rem}
.es-program-tag-gold{color:var(--gold)}
.es-program-tag-green{color:var(--green-l)}
.es-program-title{font-family:'Cormorant Garamond',serif;font-size:1.6rem;font-weight:300;color:#FAF7F2;line-height:1.2;margin:0 0 0.75rem}
.es-program-desc{font-size:13px;color:rgba(250,247,242,0.7);line-height:1.7;font-weight:300;margin:0 0 1.25rem}
.es-program-actions{display:flex;flex-wrap:wrap;gap:8px}
.es-program-link{display:inline-flex;align-items:center;gap:8px;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;text-decoration:none;padding:10px 20px;border:0.5px solid rgba(250,247,242,0.2);color:rgba(250,247,242,0.8);transition:all .2s}
.es-program-link-gold:hover{border-color:var(--gold);color:var(--gold)}
.es-program-link-green:hover{border-color:var(--green-l);color:var(--green-l)}
.es-program-link-filled-gold{background:var(--gold);color:var(--dark);border-color:var(--gold)}
.es-program-link-filled-gold:hover{background:var(--gold-l);border-color:var(--gold-l);color:var(--dark)}
.es-program-link-filled-green{background:var(--green-l);color:var(--dark);border-color:var(--green-l)}
.es-program-link-filled-green:hover{background:#dbeae0;border-color:#dbeae0;color:var(--dark)}

.es-approach{padding:6rem 5rem}
.es-approach-inner{max-width:1200px;margin:0 auto}
.es-approach-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);margin-top:3rem;border:0.5px solid var(--border)}
.es-approach-item{background:var(--cream);padding:2rem 1.5rem}
.es-approach-num{font-family:'Cormorant Garamond',serif;font-size:3rem;font-weight:300;color:var(--border);line-height:1;margin-bottom:0.75rem}
.es-approach-name{font-size:14px;font-weight:400;color:var(--dark);margin-bottom:0.5rem;letter-spacing:0.02em}
.es-approach-text{font-size:13px;color:var(--muted);line-height:1.7;font-weight:300}

.es-cta{padding:8rem 5rem;background:var(--dark);text-align:center;position:relative;overflow:hidden}
.es-cta::before{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:600px;height:600px;border-radius:50%;border:0.5px solid rgba(184,147,90,0.08)}
.es-cta::after{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:400px;height:400px;border-radius:50%;border:0.5px solid rgba(184,147,90,0.12)}
.es-cta-inner{position:relative;z-index:1;max-width:640px;margin:0 auto}
.es-cta-tag{font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold);margin-bottom:1.5rem}
.es-cta-title{font-family:'Cormorant Garamond',serif;font-size:3.2rem;font-weight:300;color:var(--gold-l);line-height:1.15;margin:0 0 1.25rem}
.es-cta-sub{font-size:15px;color:rgba(228,207,160,0.6);line-height:1.8;margin:0 0 3rem;font-weight:300}
.es-cta-btns{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}
.es-btn-cta-gold{padding:16px 40px;background:var(--gold);color:var(--dark);font-size:12px;letter-spacing:0.12em;text-transform:uppercase;text-decoration:none;font-family:'Tenor Sans',sans-serif;font-weight:400;transition:background .2s}
.es-btn-cta-gold:hover{background:var(--gold-l)}
.es-btn-cta-outline{padding:16px 40px;background:transparent;color:var(--gold-l);font-size:12px;letter-spacing:0.12em;text-transform:uppercase;text-decoration:none;border:0.5px solid rgba(228,207,160,0.3);font-family:'Tenor Sans',sans-serif;transition:border-color .2s}
.es-btn-cta-outline:hover{border-color:var(--gold)}

.es-footer{padding:4rem 5rem 2rem;border-top:0.5px solid var(--border);background:var(--cream)}
.es-footer-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1.4fr 1fr 1.2fr 1.4fr;gap:3rem}
.es-footer-col{display:flex;flex-direction:column;gap:8px;min-width:0}
.es-footer-name{font-family:'Cormorant Garamond',serif;font-size:1.3rem;font-weight:300;color:var(--dark)}
.es-footer-role{font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:var(--muted)}
.es-footer-h{font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold);margin-bottom:4px}
.es-footer-link{font-size:14px;color:var(--text);text-decoration:none;transition:color .2s}
.es-footer-link:hover{color:var(--gold)}
.es-footer-line{font-size:14px;color:var(--muted);line-height:1.6}
.es-footer-bottom{max-width:1200px;margin:3rem auto 0;padding-top:1.5rem;border-top:0.5px solid var(--border);font-size:11px;letter-spacing:0.1em;color:var(--muted);text-transform:uppercase}

.es-sticky-cta{display:none}

@media(max-width:900px){
  .es-nav{padding:0.85rem 1.25rem;gap:0.5rem}
  .es-nav-links{display:none}
  .es-nav-name{font-size:1rem}
  .es-nav-cta{padding:9px 16px;font-size:10px;letter-spacing:0.12em}

  .es-hero{grid-template-columns:1fr;padding-top:72px}
  .es-hero-left{padding:2.5rem 1.5rem 2rem}
  .es-hero-left::after{display:none}
  .es-hero h1{font-size:2.4rem}
  .es-hero-right{height:80vw;min-height:320px}
  .es-hero-credentials{bottom:1rem;right:1rem;gap:6px}
  .es-cred-item{font-size:10px;padding:6px 12px}

  .es-section,.es-about,.es-programs,.es-approach,.es-cta{padding:4rem 1.5rem}
  .es-s-title,.es-about-title{font-size:2rem}
  .es-cta-title{font-size:2.2rem}

  .es-about-inner{grid-template-columns:1fr;gap:3rem}
  .es-programs-grid{grid-template-columns:1fr}
  .es-program-bg{min-height:460px}
  .es-approach-grid{grid-template-columns:1fr 1fr}

  .es-footer{padding:3rem 1.5rem 2rem}
  .es-footer-inner{grid-template-columns:1fr 1fr;gap:2rem}

  .es-sticky-cta{display:inline-flex;align-items:center;justify-content:center;position:fixed;left:1rem;right:1rem;bottom:1rem;z-index:99;padding:16px 24px;background:var(--gold);color:var(--dark);font-size:12px;letter-spacing:0.14em;text-transform:uppercase;text-decoration:none;font-family:'Tenor Sans',sans-serif;box-shadow:0 8px 24px rgba(28,22,18,0.18)}
  .es-sticky-cta:hover{background:var(--gold-l)}
}

@media(max-width:480px){
  .es-hero h1{font-size:2rem}
  .es-approach-grid{grid-template-columns:1fr}
  .es-footer-inner{grid-template-columns:1fr}
}
`;
