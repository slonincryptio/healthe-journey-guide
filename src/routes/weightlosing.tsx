import { createFileRoute } from "@tanstack/react-router";
import aboutImg from "@/assets/about.jpg";
import heroAsset from "@/assets/program-weight.png.asset.json";
import forWhomAsset from "@/assets/weightlosing-forwhom.jpg.asset.json";
import { useScrollReveal } from "@/lib/useScrollReveal";

export const Route = createFileRoute("/weightlosing")({
  head: () => ({
    meta: [
      { title: "Снижение веса под контролем врача — программа · Екатерина Шадеева" },
      { name: "description", content: "12 недель персонального сопровождения врача-нутрициолога: снижение веса физиологично, на основе данных вашего организма. Без срывов и откатов." },
      { property: "og:title", content: "Снижение веса под контролем врача — программа · Екатерина Шадеева" },
      { property: "og:description", content: "12 недель персонального сопровождения. Снижение веса на основе данных вашего организма — без срывов и откатов." },
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
  component: WeightLosingPage,
});

const Biast = () => (
  <span className="ll-biast" tabIndex={0}>
    БИАСТ
    <span className="ll-biast-tip" role="tooltip">
      <strong>Из чего состоит вес:</strong>
      <span>• сколько % жира и мышц</span>
      <span>• сколько воды</span>
      <span>• есть ли задержка жидкости</span>
      <span>• как меняется тело в динамике</span>
      <span>• уходит ли именно жир, а не мышцы</span>
    </span>
  </span>
);

function WeightLosingPage() {
  useScrollReveal();
  return (
    <>
      <style>{pageCss}</style>
      <nav className="es-nav">
        <a href="/" className="es-nav-name">Екатерина Шадеева</a>
        <ul className="es-nav-links">
          <li><a href="/#about">Обо мне</a></li>
          <li><a href="/#programs">Программы</a></li>
          <li><a href="/#approach">Подход</a></li>
        </ul>
        <a href="#pricing" className="es-nav-cta">Записаться</a>
      </nav>

      {/* BLOCK 1 — HERO */}
      <section className="ll-hero" id="top">
        <div className="ll-hero-inner">
          <div className="ll-hero-text">
            <div className="es-hero-tag">Программа снижения веса</div>
            <h1 className="ll-hero-title">
              Снижение веса под&nbsp;<em>контролем врача</em>
            </h1>
            <p className="ll-hero-lead">Без стресса и&nbsp;надолго</p>
            <p className="ll-hero-desc">
              Стратегия на&nbsp;основе ваших показателей здоровья — для&nbsp;улучшения качества жизни. Результат надолго, без срывов и&nbsp;откатов.
            </p>
            <div className="wl-hero-pills">
              <span>Результат надолго</span>
              <span>Без срывов</span>
              <span>Без откатов</span>
            </div>
            <div className="es-hero-btns">
              <a href="#pricing" className="es-btn-primary">Записаться на консультацию</a>
            </div>
          </div>
          <div className="ll-hero-photo-wrap">
            <div className="ll-hero-photo-frame" />
            <img src={heroAsset.url} alt="Программа снижения веса" className="ll-hero-photo" />
          </div>
        </div>
      </section>

      {/* BLOCK 2 — Для кого */}
      <section className="es-section">
        <div className="es-section-inner ll-forwhom-inner">
          <div className="ll-forwhom-text">
            <h2 className="es-s-title">Для кого эта программа</h2>
            <p className="wl-lead">
              Программа создана для&nbsp;тех, кто хочет снизить вес физиологично — без&nbsp;жёстких диет, срывов и&nbsp;откатов:
            </p>
            <ul className="ll-check-list">
              {[
                "Хотите снизить вес на основе реакций своего организма",
                "Готовы работать с данными: анализами, гаджетами и датчиком глюкозы",
                "Пробовали разные подходы и хотите системный медицинский результат",
                "Рассчитываете на долгосрочный результат и новый стиль жизни",
              ].map((t) => (
                <li key={t}><span className="ll-check">✓</span><span>{t}</span></li>
              ))}
            </ul>
          </div>
          <div className="ll-forwhom-photo">
            <img src={forWhomAsset.url} alt="Екатерина Шадеева с овощами и фруктами" />
          </div>
        </div>
      </section>

      <div className="es-divider" />

      {/* BLOCK 3 — Что вы получаете */}
      <section className="ll-results">
        <div className="es-section-inner">
          <h2 className="es-s-title">Что вы получаете в&nbsp;итоге</h2>
          <div className="ll-results-grid">
            <div className="ll-result-card">
              <div className="ll-result-num">01</div>
              <div className="ll-result-title">Снижение веса без срывов</div>
              <div className="ll-result-desc">Физиологично выстроенный режим питания на&nbsp;основе реакций вашего организма.</div>
            </div>
            <div className="ll-result-card">
              <div className="ll-result-num">02</div>
              <div className="ll-result-title">Понимание своего организма</div>
              <div className="ll-result-desc">14 дней с&nbsp;сенсором глюкозы показывают индивидуальные реакции организма на&nbsp;питание, нагрузку, сон и&nbsp;стресс — решения на&nbsp;основе объективных данных.</div>
            </div>
            <div className="ll-result-card">
              <div className="ll-result-num">03</div>
              <div className="ll-result-title">Динамика состава тела × 3</div>
              <div className="ll-result-desc">
                Три исследования <Biast /> за&nbsp;программу показывают изменение жировой и&nbsp;мышечной массы — вы&nbsp;видите реальный прогресс в&nbsp;цифрах.
              </div>
            </div>
            <div className="ll-result-card">
              <div className="ll-result-num">04</div>
              <div className="ll-result-title">Протокол на&nbsp;основе данных</div>
              <div className="ll-result-desc">
                Схема БАДов, режим питания, нагрузок и&nbsp;сна — персонально подобранные и&nbsp;подтверждённые двумя раундами анализов и&nbsp;тремя <Biast />.
              </div>
            </div>
          </div>
          <div className="ll-center-cta">
            <a href="#pricing" className="es-btn-primary">Записаться</a>
          </div>
        </div>
      </section>

      {/* BLOCK 4 — Инструменты работы */}
      <section className="ll-scheme">
        <div className="es-section-inner">
          <h2 className="es-s-title">Инструменты работы</h2>
          <ol className="ll-steps">
            <li>
              <div className="ll-step-num">1</div>
              <div className="ll-step-body">
                <div className="ll-step-title">Вводная сессия и&nbsp;анкетирование</div>
                <p>Данные позволят подобрать индивидуальный перечень исследований и&nbsp;анализов для&nbsp;оценки состояния здоровья и&nbsp;выявления конкретных дефицитов. Не&nbsp;переплачивая за&nbsp;лишние исследования.</p>
              </div>
            </li>
            <li>
              <div className="ll-step-num">2</div>
              <div className="ll-step-body">
                <div className="ll-step-title">Лабораторная диагностика</div>
                <p>Анализы сдаются дважды: в&nbsp;начале программы и&nbsp;на&nbsp;завершающей неделе. По&nbsp;результатам формируется индивидуальная схема приёма БАДов, витаминов и&nbsp;пептидов.</p>
              </div>
            </li>
            <li>
              <div className="ll-step-num">3</div>
              <div className="ll-step-body">
                <div className="ll-step-title">Работа с&nbsp;датчиком глюкозы</div>
                <p>В&nbsp;течение 2&nbsp;недель наблюдаем реакцию организма на&nbsp;разную еду и&nbsp;физические нагрузки — и&nbsp;выстраиваем оптимальный физиологичный режим питания и&nbsp;активности.</p>
              </div>
            </li>
            <li>
              <div className="ll-step-num">4</div>
              <div className="ll-step-body">
                <div className="ll-step-title">Работа с&nbsp;питанием</div>
                <p>На&nbsp;начальном этапе проводится анализ фактического рациона. На&nbsp;его основе формируются рекомендации, которые в&nbsp;течение трёх месяцев развиваются в&nbsp;полноценную систему питания под&nbsp;цели клиента.</p>
              </div>
            </li>
            <li>
              <div className="ll-step-num">5</div>
              <div className="ll-step-body">
                <div className="ll-step-title">Исследование состава тела <Biast /></div>
                <p>Проводится трижды: на&nbsp;второй неделе, в&nbsp;середине и&nbsp;в&nbsp;финале программы. Даёт точную картину изменений состава тела и&nbsp;служит основой для&nbsp;рекомендаций по&nbsp;физической нагрузке и&nbsp;питанию.</p>
              </div>
            </li>
            <li>
              <div className="ll-step-num">6</div>
              <div className="ll-step-body">
                <div className="ll-step-title">Анализ данных носимых устройств</div>
                <p>Еженедельная профессиональная расшифровка показателей WHOOP, Garmin, Oura и&nbsp;других гаджетов. На&nbsp;основе этих данных выстраивается оптимальный режим нагрузок, сна и&nbsp;восстановления.</p>
              </div>
            </li>
          </ol>

          {/* CGM highlight */}
          <div className="wl-cgm">
            <div className="wl-cgm-num">14<span>дней</span></div>
            <div className="wl-cgm-body">
              <div className="wl-cgm-title">Датчик непрерывного мониторинга глюкозы — главная фишка программы</div>
              <p>Большинство людей не&nbsp;знают, как организм реагирует на&nbsp;конкретные продукты и&nbsp;нагрузки. За&nbsp;14&nbsp;дней мы&nbsp;получаем реальную картину — и&nbsp;на&nbsp;её&nbsp;основе выстраиваем физиологично точный план питания и&nbsp;активности.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 5 — Программа 12 недель */}
      <section className="ll-stages">
        <div className="es-section-inner">
          <h2 className="es-s-title">Программа · 12&nbsp;недель</h2>
          <div className="ll-stages-grid">
            {[
              {
                n: "01", m: "Первый месяц", sub: "Диагностика и старт",
                items: [
                  "Вводная сессия и анкетирование",
                  "Лабораторная диагностика",
                  "Подключение датчика глюкозы (14 дней)",
                  "Анализ рациона питания",
                  "Исследование состава тела (БИАСТ)",
                  "Подключение биометрии (WHOOP, Garmin, Oura)",
                ],
              },
              {
                n: "02", m: "Второй месяц", sub: "Настройка и&nbsp;наблюдение",
                items: [
                  "Физиологичный режим питания на основе данных CGM",
                  "Еженедельный анализ данных гаджетов",
                  "Корректировка нагрузок и режима сна",
                  "Промежуточное БИАСТ-исследование",
                  "Оптимизация схемы БАДов",
                ],
              },
              {
                n: "03", m: "Третий месяц", sub: "Закрепление результата",
                items: [
                  "Финальная лабораторная диагностика",
                  "Финальное исследование состава тела",
                  "Закрепление системы питания",
                  "Итоговый анализ систем биометрии",
                  "Финальная сессия и протокол на будущее",
                ],
              },
            ].map((s) => (
              <div className="ll-stage" key={s.n}>
                <div className="ll-stage-num">{s.n}</div>
                <div className="ll-stage-month">{s.m}</div>
                <div className="ll-stage-sub" dangerouslySetInnerHTML={{ __html: s.sub }} />
                <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCK 6 — Стоимость */}
      <section className="ll-pricing" id="pricing">
        <div className="es-section-inner">
          <h2 className="ll-pricing-title">Стоимость программы</h2>
          <div className="ll-pricing-grid">
            <div className="ll-pricing-included">
              <div className="ll-pricing-h">В&nbsp;программу включено</div>
              <ul>
                {[
                  "Персональные онлайн-сессии с врачом на протяжении 12 недель",
                  "Лабораторная диагностика и расшифровка (2 раза)",
                  "Датчик непрерывного мониторинга глюкозы (14 дней)",
                  "Индивидуальная схема БАДов, витаминов и пептидов",
                  "Три исследования состава тела (БИАСТ) с рекомендациями",
                  "Еженедельный анализ данных биометрии (WHOOP, Garmin, Oura)",
                  "Сопровождение питания на протяжении 3 месяцев",
                  "Персональный итоговый протокол",
                  "Постоянная обратная связь в мессенджере",
                ].map((i) => (
                  <li key={i}><span className="ll-check">✓</span><span>{i}</span></li>
                ))}
              </ul>
              <p className="ll-pricing-note">Запись на&nbsp;консультацию открыта. По&nbsp;всем вопросам пишите в&nbsp;мессенджере.</p>
            </div>
            <div className="ll-pricing-price">
              <div className="ll-price-main">250&nbsp;EUR</div>
              <div className="ll-price-rub">/ 25&nbsp;000&nbsp;руб.</div>
              <div className="ll-price-period">в&nbsp;месяц</div>
              <div className="ll-price-sep" />
              <div className="ll-price-full-label">Полный курс (3&nbsp;месяца):</div>
              <div className="ll-price-full">750&nbsp;EUR&nbsp;/&nbsp;75&nbsp;000&nbsp;руб.</div>
              <div className="ll-price-btns">
                <a href="https://wa.me/" className="es-btn-cta-gold">Написать в&nbsp;WhatsApp</a>
                <a href="https://t.me/" className="es-btn-cta-outline">Написать в&nbsp;Telegram</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 7 — Обо мне */}
      <section className="es-about" id="about">
        <div className="es-about-inner">
          <div className="es-about-photo-wrap">
            <div className="es-about-photo-frame" />
            <img src={aboutImg} alt="Шадеева Екатерина Юрьевна" className="es-about-photo" loading="lazy" width={1024} height={1280} />
          </div>
          <div>
            <div className="es-about-tag">Обо&nbsp;мне</div>
            <h2 className="es-about-title">Соединяю медицину,<br />нутрициологию<br />и&nbsp;диагностику</h2>
            <div className="es-about-name">Шадеева Екатерина Юрьевна</div>
            <div className="es-about-role">Врач · Нутрициолог · Health Coach</div>
            <div className="es-about-text">
              <p>Я&nbsp;врач по&nbsp;образованию и&nbsp;защитила профессиональную квалификацию по&nbsp;нутрициологии.</p>
              <p>В&nbsp;работе соединяю медицинскую базу, нутрициологию и&nbsp;современные инструменты диагностики состояния организма.</p>
              <p>Моя задача — помочь вам разобраться, что влияет на&nbsp;ваш вес, энергию, восстановление и&nbsp;пищевое поведение с&nbsp;учётом особенностей организма.</p>
            </div>
            <a href="/" className="ll-about-more">Подробнее обо&nbsp;мне →</a>
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
            <div className="es-footer-line">Диплом о&nbsp;высшем образовании</div>
            <div className="es-footer-line">Квалификация «Нутрициология»</div>
          </div>
          <div className="es-footer-col">
            <div className="es-footer-h">Юридическая информация</div>
            <div className="es-footer-line">ИП Шадеева Екатерина Юрьевна</div>
            <div className="es-footer-line">ИНН&nbsp;—</div>
            <a href="#" className="es-footer-link">Публичная оферта</a>
          </div>
        </div>
        <div className="es-footer-bottom">© {new Date().getFullYear()} Екатерина Шадеева</div>
      </footer>

      <a href="#pricing" className="es-sticky-cta">Записаться</a>
    </>
  );
}

const pageCss = `
:root{
  --cream:#F6F8F3; --warm:#E9EFE3; --dark:#1B2A1F;
  --gold:#4A7A56; --gold-l:#B8D4BC; --gold-p:#E4EFE2;
  --green:#3D6B4A; --green-l:#C8DFD0;
  --text:#1F2A22; --muted:#67756A; --border:#D6DED1;
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

.es-hero-tag{display:inline-flex;align-items:center;gap:8px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:var(--gold);margin-bottom:2rem}
.es-hero-tag::before{content:'';width:24px;height:0.5px;background:var(--gold)}
.es-hero-btns{display:flex;gap:1rem;flex-wrap:wrap}
.es-btn-primary{display:inline-block;padding:14px 32px;background:var(--dark);color:var(--gold-l);font-size:12px;letter-spacing:0.12em;text-transform:uppercase;text-decoration:none;border:none;cursor:pointer;font-family:'Tenor Sans',sans-serif;transition:background .2s}
.es-btn-primary:hover{background:#2C2416}

.ll-hero{padding:10rem 5rem 6rem;background:linear-gradient(180deg,var(--warm) 0%,var(--cream) 100%);position:relative;overflow:hidden}
.ll-hero::after{content:'';position:absolute;right:-200px;top:-200px;width:600px;height:600px;border-radius:50%;border:0.5px solid rgba(184,147,90,0.12)}
.ll-hero-inner{max-width:1200px;margin:0 auto;position:relative;z-index:1;display:grid;grid-template-columns:1.1fr 1fr;gap:4rem;align-items:center}
.ll-hero-photo-wrap{position:relative}
.ll-hero-photo{width:100%;aspect-ratio:3/4;object-fit:cover;object-position:62% center;display:block;position:relative;z-index:1}
.ll-hero-photo-frame{position:absolute;top:-16px;right:-16px;left:16px;bottom:16px;border:0.5px solid rgba(184,147,90,0.4);z-index:0;pointer-events:none}
.ll-hero-title{font-family:'Cormorant Garamond',serif;font-size:4.2rem;font-weight:300;line-height:1.05;color:var(--dark);margin:0 0 1.5rem}
.ll-hero-title em{font-style:italic;color:var(--gold)}
.ll-hero-lead{font-family:'Cormorant Garamond',serif;font-size:1.5rem;font-style:italic;color:var(--gold);margin:0 0 1.25rem;font-weight:300}
.ll-hero-desc{font-size:16px;color:var(--muted);line-height:1.85;max-width:640px;margin:0 0 2rem;font-weight:300}

.wl-hero-pills{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 2.5rem}
.wl-hero-pills span{display:inline-flex;align-items:center;padding:8px 18px;border:0.5px solid var(--gold);color:var(--gold);border-radius:999px;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;background:rgba(184,147,90,0.05)}

.es-section{padding:6rem 5rem}
.es-section-inner{max-width:1100px;margin:0 auto}
.es-s-title{font-family:'Cormorant Garamond',serif;font-size:2.6rem;font-weight:300;color:var(--dark);line-height:1.15;margin:0 0 2rem}
.wl-lead{font-size:17px;color:var(--text);line-height:1.8;font-weight:300;max-width:780px;margin:0 0 2rem;font-style:italic;font-family:'Cormorant Garamond',serif}

.ll-check-list{list-style:none;margin:0;padding:0;display:grid;gap:1rem;max-width:880px}
.ll-check-list li{display:flex;gap:1rem;font-size:16px;color:var(--text);line-height:1.7;font-weight:300;padding:1rem 0;border-bottom:0.5px solid var(--border)}
.ll-check{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;width:28px;height:28px;border-radius:50%;background:var(--gold-p);color:var(--gold);font-size:14px;font-weight:400}

.es-divider{height:0.5px;background:var(--border)}

.ll-results{padding:6rem 5rem;background:var(--warm)}
.ll-results-grid{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-top:1rem}
.ll-result-card{background:var(--cream);padding:2.5rem;border:0.5px solid var(--border);position:relative}
.ll-result-num{font-family:'Cormorant Garamond',serif;font-size:2.5rem;font-weight:300;color:var(--gold);line-height:1;margin-bottom:1rem}
.ll-result-title{font-family:'Cormorant Garamond',serif;font-size:1.5rem;font-weight:400;color:var(--dark);margin-bottom:0.75rem;line-height:1.25}
.ll-result-desc{font-size:14px;color:var(--muted);line-height:1.7;font-weight:300}
.ll-center-cta{margin-top:3rem;text-align:center}

.ll-scheme{padding:6rem 5rem}
.ll-steps{list-style:none;margin:0;padding:0;display:grid;gap:1rem}
.ll-steps li{display:grid;grid-template-columns:80px 1fr;gap:2rem;align-items:start;padding:2rem;background:var(--cream);border:0.5px solid var(--border)}
.ll-step-num{font-family:'Cormorant Garamond',serif;font-size:3rem;font-weight:300;color:var(--gold);line-height:1}
.ll-step-title{font-family:'Cormorant Garamond',serif;font-size:1.5rem;font-weight:400;color:var(--dark);margin-bottom:0.75rem;line-height:1.25;display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap}
.ll-step-body p{margin:0;font-size:15px;color:var(--muted);line-height:1.8;font-weight:300}

.ll-biast{display:inline-flex;align-items:center;padding:6px 18px;background:var(--gold);color:var(--cream);font-family:'Tenor Sans',sans-serif;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;border-radius:999px;cursor:pointer;position:relative;outline:none;transition:background .2s}
.ll-biast:hover,.ll-biast:focus{background:var(--dark);color:var(--gold-l)}
.ll-biast-tip{position:absolute;top:calc(100% + 12px);left:50%;transform:translateX(-50%);min-width:280px;max-width:320px;background:var(--dark);color:var(--gold-l);padding:1rem 1.25rem;font-family:'Tenor Sans',sans-serif;font-size:13px;line-height:1.7;letter-spacing:0.02em;text-transform:none;border-radius:6px;box-shadow:0 12px 30px rgba(28,22,18,0.25);opacity:0;visibility:hidden;transition:opacity .2s,visibility .2s;z-index:50;display:flex;flex-direction:column;gap:4px;text-align:left}
.ll-biast-tip strong{color:var(--gold);font-weight:400;margin-bottom:6px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase}
.ll-biast-tip::before{content:'';position:absolute;top:-6px;left:50%;transform:translateX(-50%) rotate(45deg);width:12px;height:12px;background:var(--dark)}
.ll-biast:hover .ll-biast-tip,.ll-biast:focus .ll-biast-tip{opacity:1;visibility:visible}

.wl-cgm{margin-top:3rem;display:grid;grid-template-columns:200px 1fr;gap:2.5rem;align-items:center;padding:2.5rem;background:linear-gradient(135deg,var(--dark),#2C2416);color:var(--gold-l);border:0.5px solid var(--gold)}
.wl-cgm-num{font-family:'Cormorant Garamond',serif;font-size:5.5rem;font-weight:300;color:var(--gold);line-height:0.9;text-align:center;display:flex;flex-direction:column;align-items:center}
.wl-cgm-num span{font-size:1rem;letter-spacing:0.2em;text-transform:uppercase;color:rgba(228,207,160,0.7);margin-top:8px}
.wl-cgm-title{font-family:'Cormorant Garamond',serif;font-size:1.6rem;color:var(--gold-l);margin-bottom:0.75rem;line-height:1.25}
.wl-cgm-body p{margin:0;font-size:15px;color:rgba(228,207,160,0.85);line-height:1.8;font-weight:300}

.ll-stages{padding:6rem 5rem;background:var(--dark);color:var(--gold-l)}
.ll-stages .es-s-title{color:var(--gold-l)}
.ll-stages-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:1rem}
.ll-stage{background:rgba(255,255,255,0.03);border:0.5px solid rgba(184,147,90,0.25);padding:2rem;display:flex;flex-direction:column}
.ll-stage-num{font-family:'Cormorant Garamond',serif;font-size:3rem;font-weight:300;color:var(--gold);line-height:1;margin-bottom:0.75rem}
.ll-stage-month{font-family:'Cormorant Garamond',serif;font-size:1.5rem;color:var(--gold-l);margin-bottom:0.25rem}
.ll-stage-sub{font-style:italic;font-family:'Cormorant Garamond',serif;color:rgba(228,207,160,0.65);margin-bottom:1.5rem;font-size:1rem}
.ll-stage ul{list-style:none;padding:0;margin:0;display:grid;gap:8px}
.ll-stage li{font-size:14px;color:rgba(228,207,160,0.85);line-height:1.6;padding-left:18px;position:relative;font-weight:300}
.ll-stage li::before{content:'—';position:absolute;left:0;color:var(--gold)}

.ll-pricing{padding:6rem 5rem;background:var(--dark)}
.ll-pricing-title{font-family:'Cormorant Garamond',serif;font-size:2.6rem;font-weight:300;color:var(--gold-l);line-height:1.15;margin:0 0 2rem}
.ll-pricing-grid{display:grid;grid-template-columns:1.3fr 1fr;gap:0;border:0.5px solid rgba(184,147,90,0.3)}
.ll-pricing-included{padding:2.5rem;background:rgba(255,255,255,0.02);border-right:0.5px solid rgba(184,147,90,0.3)}
.ll-pricing-h{font-family:'Cormorant Garamond',serif;font-size:1.4rem;color:var(--gold);margin-bottom:1.25rem}
.ll-pricing-included ul{list-style:none;padding:0;margin:0 0 1.5rem;display:grid;gap:10px}
.ll-pricing-included li{display:flex;gap:12px;font-size:14px;color:rgba(228,207,160,0.88);line-height:1.55;font-weight:300}
.ll-pricing-included .ll-check{background:rgba(184,147,90,0.18);color:var(--gold);width:22px;height:22px;font-size:12px;margin-top:2px}
.ll-pricing-note{font-style:italic;font-size:13px;color:rgba(228,207,160,0.6);margin:0;line-height:1.7}
.ll-pricing-price{padding:2.5rem;background:linear-gradient(135deg,rgba(184,147,90,0.12),rgba(184,147,90,0.04));display:flex;flex-direction:column;justify-content:center;text-align:center}
.ll-price-main{font-family:'Cormorant Garamond',serif;font-size:3.6rem;color:var(--gold);font-weight:300;line-height:1;display:inline-flex;align-items:baseline;justify-content:center}
.ll-price-period{font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(228,207,160,0.5);margin-bottom:8px}
.ll-price-sep{height:0.5px;background:rgba(184,147,90,0.25);margin:1.5rem auto;width:60%}
.ll-price-full-label{font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(228,207,160,0.55);margin-bottom:1rem}
.ll-price-btns{display:flex;flex-direction:column;gap:10px}
.es-btn-cta-gold{padding:14px 28px;background:var(--gold);color:var(--dark);font-size:11px;letter-spacing:0.14em;text-transform:uppercase;text-decoration:none;font-family:'Tenor Sans',sans-serif;transition:background .2s;text-align:center}
.es-btn-cta-gold:hover{background:var(--gold-l)}
.es-btn-cta-outline{padding:14px 28px;background:transparent;color:var(--gold-l);font-size:11px;letter-spacing:0.14em;text-transform:uppercase;text-decoration:none;border:0.5px solid rgba(228,207,160,0.3);font-family:'Tenor Sans',sans-serif;transition:border-color .2s;text-align:center}
.es-btn-cta-outline:hover{border-color:var(--gold)}

.es-about{background:var(--cream);padding:6rem 5rem;border-top:0.5px solid var(--border)}
.es-about-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:6rem;align-items:center}
.es-about-photo-wrap{position:relative}
.es-about-photo{width:100%;aspect-ratio:3/4;object-fit:cover;object-position:center top;position:relative;z-index:1;display:block}
.es-about-photo-frame{position:absolute;top:-16px;left:-16px;right:16px;bottom:16px;border:0.5px solid rgba(184,147,90,0.4);pointer-events:none;z-index:0}

.ll-forwhom-inner{display:grid;grid-template-columns:1.1fr 0.9fr;gap:5rem;align-items:center}
.ll-forwhom-photo{position:relative;height:560px;overflow:hidden}
.ll-forwhom-photo img{width:100%;height:100%;object-fit:cover;object-position:center;filter:grayscale(6%);display:block}
.ll-forwhom-photo::after{content:'';position:absolute;inset:0;background:linear-gradient(to left,var(--cream) 0%,transparent 18%),linear-gradient(to right,var(--cream) 0%,transparent 18%),linear-gradient(to bottom,var(--cream) 0%,transparent 15%),linear-gradient(to top,var(--cream) 0%,transparent 15%);pointer-events:none}
@media (max-width:900px){.ll-forwhom-inner{grid-template-columns:1fr;gap:2rem}.ll-forwhom-photo{display:none}}
.es-about-tag{font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold);margin-bottom:1rem}
.es-about-title{font-family:'Cormorant Garamond',serif;font-size:2.6rem;font-weight:300;color:var(--dark);line-height:1.15;margin:0 0 1.5rem}
.es-about-name{font-family:'Cormorant Garamond',serif;font-size:1.8rem;font-weight:300;color:var(--gold);font-style:italic;margin-bottom:0.5rem}
.es-about-role{font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:var(--muted);margin-bottom:2rem}
.es-about-text{font-size:15px;color:var(--text);line-height:1.9;font-weight:300}
.es-about-text p{margin:0 0 1rem}
.ll-about-more{display:inline-block;margin-top:1.5rem;padding:12px 26px;border:0.5px solid var(--gold);color:var(--gold);font-size:11px;letter-spacing:0.14em;text-transform:uppercase;text-decoration:none;transition:background .2s,color .2s}
.ll-about-more:hover{background:var(--gold);color:var(--cream)}

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

  .ll-hero{padding:6rem 1.5rem 3.5rem}
  .ll-hero-inner{grid-template-columns:1fr;gap:2.5rem}
  .ll-hero-title{font-size:2.5rem}
  .ll-hero-lead{font-size:1.15rem}

  .es-section,.ll-results,.ll-scheme,.ll-stages,.ll-pricing,.es-about{padding:4rem 1.25rem}
  .es-s-title,.ll-pricing-title{font-size:1.9rem}

  .ll-results-grid{grid-template-columns:1fr}
  .ll-steps li{grid-template-columns:50px 1fr;gap:1rem;padding:1.5rem}
  .ll-step-num{font-size:2.2rem}
  .ll-step-title{font-size:1.25rem}

  .wl-cgm{grid-template-columns:1fr;gap:1.5rem;padding:2rem 1.5rem;text-align:center}
  .wl-cgm-num{font-size:4rem}

  .ll-stages-grid{grid-template-columns:1fr}
  .ll-pricing-grid{grid-template-columns:1fr}
  .ll-pricing-included{border-right:none;border-bottom:0.5px solid rgba(184,147,90,0.3)}
  .ll-pricing-included,.ll-pricing-price{padding:2rem 1.5rem}
  .ll-price-main{font-size:2.8rem}

  .es-about-inner{grid-template-columns:1fr;gap:2.5rem}

  .ll-biast-tip{min-width:240px;max-width:90vw;left:0;transform:none}
  .ll-biast-tip::before{left:24px;transform:rotate(45deg)}

  .es-footer{padding:3rem 1.5rem 2rem}
  .es-footer-inner{grid-template-columns:1fr 1fr;gap:2rem}

  .es-sticky-cta{display:inline-flex;align-items:center;justify-content:center;position:fixed;left:1rem;right:1rem;bottom:1rem;z-index:99;padding:16px 24px;background:var(--gold);color:var(--dark);font-size:12px;letter-spacing:0.14em;text-transform:uppercase;text-decoration:none;font-family:'Tenor Sans',sans-serif;box-shadow:0 8px 24px rgba(28,22,18,0.18)}
}

@media(max-width:480px){
  .ll-hero-title{font-size:2rem}
  .es-footer-inner{grid-template-columns:1fr}
}
`;