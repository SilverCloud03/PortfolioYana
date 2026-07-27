import { useState, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const base = import.meta.env.BASE_URL || '/';

const navItems = [
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Контакты', href: '#contacts' },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);
  const videoRefs = useRef([]);

  const handleHover = (i) => {
    setActiveVideo(i);
    if (videoRefs.current[i]) {
      videoRefs.current[i].currentTime = 0;
      videoRefs.current[i].play().catch(() => {});
    }
  };

  const handleLeave = (i) => {
    setActiveVideo(null);
    if (videoRefs.current[i]) {
      videoRefs.current[i].pause();
      videoRefs.current[i].currentTime = 0;
    }
  };

  const handleClick = (i) => {
    if (activeVideo === i) {
      handleLeave(i);
    } else {
      if (activeVideo !== null) handleLeave(activeVideo);
      handleHover(i);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://db.onlinewebfonts.com/c/08e020de1811ec4489f82d1247a42c09?family=Helvetica+Now+Text');
        * { font-family: "Helvetica Now Text", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
        .liquid-glass {
          background: rgba(255, 255, 255, 0.01);
          background-blend-mode: luminosity;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: none;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }
        .liquid-glass::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1.4px;
          background: linear-gradient(180deg,
            rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
            rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
            rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
        @keyframes dropdown-in {
          from { opacity: 0; transform: translateY(-4px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-dropdown { animation: dropdown-in 0.2s ease-out; }
        .duration-400 { transition-duration: 400ms; }
        @keyframes float {
          0%, 100% { transform: translateY(-6px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>

      <section className="h-screen w-full overflow-hidden relative">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={base + "bg.mp4"} type="video/mp4" />
        </video>

        

        <div className="relative z-10 flex flex-col h-full">
          <nav className="w-full px-5 sm:px-6 md:px-12 lg:px-16 py-4 sm:py-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14 2L26 14L14 26L2 14L14 2Z" fill="#111827" fillOpacity="0.9" />
                </svg>
              </div>

              <div className="hidden md:flex items-center justify-between flex-1 max-w-md mx-auto">
                {navItems.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="text-[#111827] hover:text-[#4A1525] text-base font-medium"
                  >
                    {label}
                  </a>
                ))}
              </div>

              <div className="hidden md:flex items-center gap-4">
                <a
                  href="https://kwork.ru/user/yana-drzhv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-[#4A1525] rounded-full text-[#4A1525] text-sm font-semibold hover:bg-[#4A1525]/5"
                >
                  Заказать видеообложку
                </a>
              </div>

              <button
                className="md:hidden relative w-6 h-6 flex items-center justify-center"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu
                  size={20}
                  className={`text-[#111827] absolute transition-all duration-300 ${
                    mobileMenuOpen
                      ? 'opacity-0 rotate-90 scale-75'
                      : 'opacity-100 rotate-0 scale-100'
                  }`}
                />
                <X
                  size={20}
                  className={`text-[#111827] absolute transition-all duration-300 ${
                    mobileMenuOpen
                      ? 'opacity-100 rotate-0 scale-100'
                      : 'opacity-0 -rotate-90 scale-75'
                  }`}
                />
              </button>
            </div>

            <div
              className={`md:hidden absolute left-4 right-4 top-20 z-50 bg-white/20 backdrop-blur-xl rounded-2xl p-6 shadow-xl transition-all duration-400 ${
                mobileMenuOpen
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
              style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}
            >
                                          {navItems.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="block text-[#111827] hover:text-[#4A1525] text-sm py-2"
                >
                  {label}
                </a>
              ))}
              <div className="border-t border-black/10 pt-4 mt-4 flex flex-col items-center gap-3">
                <a
                  href="https://kwork.ru/user/yana-drzhv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 border-2 border-[#4A1525] rounded-full text-[#4A1525] text-sm font-semibold hover:bg-[#4A1525]/5"
                >
                  Заказать видеообложку
                </a>
              </div>
            </div>
          </nav>

          <div className="flex-1 flex items-start justify-center pt-16 sm:pt-20 md:pt-24 px-4">
            <div className="text-center max-w-3xl">
              <h1 className="text-[#4A1525] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-[-0.02em]">
                <span className="inline-flex items-center justify-center gap-3 sm:gap-4">
                  Яна
                  <img src={base + "avatar.png"} alt="" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover -translate-y-1.5 sm:-translate-y-2 ring-2 ring-white/50 animate-float" />
                </span>
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">AI‑креатор & Контент‑менеджер</span>
              </h1>
              <div className="px-5 sm:px-7 py-3 sm:py-4 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/30 shadow-lg max-w-lg mx-auto mt-6 sm:mt-8">
                <p className="text-[#4A1525] text-base sm:text-lg md:text-xl leading-relaxed text-center">
                  Опыт более 5 лет. Создаю продающий визуальный контент для маркетплейсов
                  (Wildberries, Ozon, Яндекс Маркет) и соцсетей (Reels, TikTok).
                </p>
              </div>
                            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
                <button className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white/15 backdrop-blur-xl border border-white/30 rounded-full text-[#4A1525] text-sm font-semibold shadow-lg hover:bg-white/25 transition-all">
                  Обсудить проект в Telegram
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-white relative py-16 md:py-24">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(234,179,8,0.6) 2px, transparent 2px)',
            backgroundSize: '36px 36px',
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="relative w-full min-h-[420px] sm:min-h-[500px] md:min-h-[800px] lg:min-h-[850px]">
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[240px] md:w-[340px] lg:w-[380px] aspect-[3/4] rounded-[24px] md:rounded-[32px] shadow-2xl overflow-hidden z-10 ring-1 ring-black/5 cursor-pointer"
              onMouseEnter={() => handleHover(0)}
              onMouseLeave={() => handleLeave(0)}
              onClick={() => handleClick(0)}
            >
              <div className="relative w-full h-full">
                <img src={base + "showergel.webp"} alt="" className={`w-full h-full object-cover transition-opacity duration-300 ${activeVideo === 0 ? 'opacity-0' : 'opacity-100'}`} />
                <video ref={el => videoRefs.current[0] = el} src={base + "showergel.mp4"} muted loop playsInline className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${activeVideo === 0 ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            </div>

            <div
              className="absolute left-[3%] top-[8%] w-[90px] sm:w-[130px] md:w-[180px] lg:w-[200px] aspect-[3/4] rounded-2xl shadow-lg overflow-hidden -rotate-[4deg] ring-1 ring-black/5 cursor-pointer"
              onMouseEnter={() => handleHover(1)}
              onMouseLeave={() => handleLeave(1)}
              onClick={() => handleClick(1)}
            >
              <div className="relative w-full h-full">
                <img src={base + "airhumidifier.webp"} alt="" className={`w-full h-full object-cover transition-opacity duration-300 ${activeVideo === 1 ? 'opacity-0' : 'opacity-100'}`} />
                <video ref={el => videoRefs.current[1] = el} src={base + "airhumidifier.mp4"} muted loop playsInline className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${activeVideo === 1 ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            </div>

            <div
              className="absolute right-[5%] top-[5%] w-[80px] sm:w-[110px] md:w-[160px] lg:w-[180px] aspect-[3/4] rounded-2xl shadow-lg overflow-hidden rotate-[3deg] ring-1 ring-black/5 cursor-pointer"
              onMouseEnter={() => handleHover(2)}
              onMouseLeave={() => handleLeave(2)}
              onClick={() => handleClick(2)}
            >
              <div className="relative w-full h-full">
                <img src={base + "cat.webp"} alt="" className={`w-full h-full object-cover transition-opacity duration-300 ${activeVideo === 2 ? 'opacity-0' : 'opacity-100'}`} />
                <video ref={el => videoRefs.current[2] = el} src={base + "cat.mp4"} muted loop playsInline className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${activeVideo === 2 ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            </div>

            <div
              className="absolute left-[8%] bottom-[8%] w-[85px] sm:w-[120px] md:w-[170px] lg:w-[190px] aspect-[3/4] rounded-2xl shadow-lg overflow-hidden rotate-[5deg] ring-1 ring-black/5 cursor-pointer"
              onMouseEnter={() => handleHover(3)}
              onMouseLeave={() => handleLeave(3)}
              onClick={() => handleClick(3)}
            >
              <div className="relative w-full h-full">
                <img src={base + "case.webp"} alt="" className={`w-full h-full object-cover transition-opacity duration-300 ${activeVideo === 3 ? 'opacity-0' : 'opacity-100'}`} />
                <video ref={el => videoRefs.current[3] = el} src={base + "case.mp4"} muted loop playsInline className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${activeVideo === 3 ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            </div>

            <div
              className="absolute right-[4%] bottom-[6%] w-[90px] sm:w-[125px] md:w-[175px] lg:w-[195px] aspect-[3/4] rounded-2xl shadow-lg overflow-hidden -rotate-[3deg] ring-1 ring-black/5 cursor-pointer"
              onMouseEnter={() => handleHover(4)}
              onMouseLeave={() => handleLeave(4)}
              onClick={() => handleClick(4)}
            >
              <div className="relative w-full h-full">
                <img src={base + "spange.webp"} alt="" className={`w-full h-full object-cover transition-opacity duration-300 ${activeVideo === 4 ? 'opacity-0' : 'opacity-100'}`} />
                <video ref={el => videoRefs.current[4] = el} src={base + "spange.mp4"} muted loop playsInline className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${activeVideo === 4 ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white py-16 md:py-24 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[#4A1525] text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-center mb-10 sm:mb-12">
            Частые вопросы
          </h2>
          <div className="space-y-3">
            {[
              {
                q: 'Какие сроки создания видеообложки?',
                a: 'Обычно 1–3 рабочих дня в зависимости от сложности. Срочные заказы выполняю за 24 часа.',
              },
              {
                q: 'Какие форматы вы отдаёте?',
                a: 'MP4. Под любой маркетплейс или соцсеть — подгоняю размер и соотношение сторон.',
              },
              {
                q: 'Нужно ли платить за правки?',
                a: 'Две правки — бесплатно. Если меняется концепция или добавляются новые элементы — обсуждаем отдельно.',
              },
              {
                q: 'Работаете с НДС?',
                a: 'Работаю через платформу Kwork как самозанятая.',
              },
              {
                q: 'Как начать сотрудничество?',
                a: 'Напишите в Telegram или на Kwork — присылаете ТЗ и референсы, я называю срок и стоимость, после согласования приступаю.',
              },
            ].map((item, i) => (
              <div key={i} className="border border-[#4A1525]/15 rounded-2xl overflow-hidden relative">
                <button
                  className="w-full flex items-center justify-between px-5 sm:px-6 py-4 text-left text-[#4A1525] text-base sm:text-lg font-medium hover:bg-[#4A1525]/[0.02] transition-all"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{item.q}</span>
                  <svg
                    className={`w-4 h-4 shrink-0 ml-4 transition-transform duration-300 ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden relative transition-all duration-300 ${
                    openFaq === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-5 sm:px-6 pb-4 text-[#4A1525]/70 text-base sm:text-lg leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contacts"
        className="relative overflow-hidden px-4 py-16 md:py-24"
        style={{
          background: 'radial-gradient(ellipse at 50% 30%, #6b2136 0%, #4A1525 50%, #2d0c16 100%)',
        }}
      >
        <div className="relative z-10 max-w-lg mx-auto text-center">
          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1]">
            Готовы начать?
          </h2>

          <div className="flex flex-col gap-4 mt-10 sm:mt-12">
            <a
              href="https://kwork.ru/user/yana-drzhv"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 sm:py-4 border-2 border-white rounded-full text-white text-base sm:text-lg font-semibold tracking-wide hover:bg-white/10 transition-all"
            >
              Связаться на Kwork
            </a>
            <a
              href="#"
              className="w-full py-3.5 sm:py-4 border-2 border-white rounded-full text-white text-base sm:text-lg font-semibold tracking-wide hover:bg-white/10 transition-all"
            >
              Обсудить проект в тг
            </a>
          </div>
        </div>
        <p className="absolute bottom-4 right-4 sm:right-6 md:right-8 text-white/30 text-[11px] sm:text-xs">
          разработка сайта{' '}
          <a
            href="https://t.me/stepandJob"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white/60 transition-colors"
          >
            @stepandJob
          </a>{' '}
          2026
        </p>
      </footer>
    </>
  );
}
