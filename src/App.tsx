import React, { useState, useEffect, useRef } from 'react';
import { 
  Zap, 
  ArrowRight, 
  Smartphone, 
  ShieldCheck, 
  CheckCircle2, 
  MessageCircle, 
  Layers, 
  Terminal, 
  Cpu, 
  Menu, 
  X, 
  Star, 
  Sparkles, 
  ArrowUpRight, 
  Laptop, 
  Search, 
  ShoppingBag, 
  Calendar, 
  Utensils, 
  Stethoscope, 
  Briefcase, 
  Plus, 
  Clock, 
  MapPin, 
  Phone, 
  Heart,
  AlertCircle,
  Globe,
  ChevronDown
} from 'lucide-react';

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

// Configuración de Países e Idiomas / Monedas
type CountryCode = 'ES' | 'AR' | 'US' | 'MX';

interface CountryConfig {
  code: CountryCode;
  name: string;
  flag: string;
  currency: string;
  lang: 'es' | 'en';
  phonePrefix: string;
  rateToEUR: number; // Factor de conversión respecto al Euro base
  defaultTicket: number;
  minTicket: number;
  maxTicket: number;
  stepTicket: number;
  defaultVisits: number;
}

const COUNTRIES: Record<CountryCode, CountryConfig> = {
  ES: {
    code: 'ES',
    name: 'España (Alicante)',
    flag: '🇪🇸',
    currency: '€',
    lang: 'es',
    phonePrefix: '+34',
    rateToEUR: 1,
    defaultTicket: 30,
    minTicket: 10,
    maxTicket: 120,
    stepTicket: 5,
    defaultVisits: 450
  },
  AR: {
    code: 'AR',
    name: 'Argentina',
    flag: '🇦🇷',
    currency: '$',
    lang: 'es',
    phonePrefix: '+54',
    rateToEUR: 1400,
    defaultTicket: 25000,
    minTicket: 5000,
    maxTicket: 70000,
    stepTicket: 2000,
    defaultVisits: 600
  },
  US: {
    code: 'US',
    name: 'United States',
    flag: '🇺🇸',
    currency: '$',
    lang: 'en',
    phonePrefix: '+1',
    rateToEUR: 1.08,
    defaultTicket: 35,
    minTicket: 15,
    maxTicket: 150,
    stepTicket: 5,
    defaultVisits: 500
  },
  MX: {
    code: 'MX',
    name: 'México',
    flag: '🇲🇽',
    currency: '$',
    lang: 'es',
    phonePrefix: '+52',
    rateToEUR: 22,
    defaultTicket: 500,
    minTicket: 150,
    maxTicket: 2000,
    stepTicket: 50,
    defaultVisits: 500
  }
};

export default function App() {
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>('ES');
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const country = COUNTRIES[selectedCountry];

  // Showroom
  const [activeDemoTab, setActiveDemoTab] = useState<'gastro' | 'health' | 'fashion' | 'legal'>('gastro');
  const [demoDeviceView, setDemoDeviceView] = useState<'desktop' | 'mobile'>('desktop');

  // Demos States
  // 1. Gastronomía
  const [gastroCategory, setGastroCategory] = useState<'principales' | 'entradas' | 'postres'>('principales');
  const [reserveGuests, setReserveGuests] = useState('2 personas');
  const [reserveTime, setReserveTime] = useState('21:30 hs');
  const [reserveDate, setReserveDate] = useState('Hoy');

  // 2. Salud
  const [dentalTreatment, setDentalTreatment] = useState('Ortodoncia Invisible');
  const [dentalDoctor, setDentalDoctor] = useState('Dra. Valentina Ortiz');

  // 3. Moda
  const [selectedSize, setSelectedSize] = useState('M');
  const [cartCount, setCartCount] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // 4. Legal
  const [legalArea, setLegalArea] = useState('Constitución Societaria & Mercantil');

  // Escáner Instagram
  const [instaInput, setInstaInput] = useState('');
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'done'>('idle');
  const [scanProgress, setScanProgress] = useState(0);
  const [scannedData, setScannedData] = useState<{
    handle: string;
    followers: string;
    bounceRate: string;
    lostClients: number;
    wastedRevenue: string;
  } | null>(null);

  // Calculadora ROI adaptada por país
  const [monthlyVisits, setMonthlyVisits] = useState(country.defaultVisits);
  const [averageTicket, setAverageTicket] = useState(country.defaultTicket);

  // Cuando cambia el país, actualizamos los valores de los sliders al rango de esa moneda
  useEffect(() => {
    setMonthlyVisits(country.defaultVisits);
    setAverageTicket(country.defaultTicket);
  }, [selectedCountry]);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Formateador de moneda según país
  const formatMoney = (baseEur: number) => {
    const value = Math.round(baseEur * country.rateToEUR);
    if (country.code === 'ES') return `${value} €`;
    if (country.code === 'US') return `$${value}`;
    return `$${value.toLocaleString()}`;
  };

  const whatsappUrl = `https://wa.me/34600000000?text=${encodeURIComponent(
    country.lang === 'en'
      ? "Hello Célere! I would like to inquire about a custom website with monthly maintenance."
      : "¡Hola Célere! Quiero consultar por un proyecto web a medida con servicio de mantenimiento mensual."
  )}`;

  // =========================================================================
  // SISTEMA DE CÓDIGO CAYENDO AL CLIC + PERSONITAS 3D EXPLOSIVAS
  // =========================================================================
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const codeSymbols = ['</>', '{}', '=>', '01', '//', 'div', 'px', 'git', '&&', '[]', 'const', 'fn()', 'npm', '€', '$'];
    const colors = ['#9ca3af', '#18181b', '#ef4444', '#22c55e', '#6b7280', '#10b981'];

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      symbol: string;
      color: string;
      size: number;
      opacity: number;
      rotation: number;
      rotSpeed: number;
    }

    interface Shard {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }

    interface Walker {
      id: number;
      x: number;
      y: number;
      speed: number;
      direction: number;
      legAngle: number;
      isExploded: boolean;
      respawnTimer: number;
    }

    let particles: Particle[] = [];
    let shards: Shard[] = [];

    const walkers: Walker[] = [
      { id: 1, x: 100, y: height - 25, speed: 1.2, direction: 1, legAngle: 0, isExploded: false, respawnTimer: 0 },
      { id: 2, x: width * 0.4, y: height - 25, speed: 0.9, direction: -1, legAngle: 1.5, isExploded: false, respawnTimer: 0 },
      { id: 3, x: width * 0.7, y: height - 25, speed: 1.4, direction: 1, legAngle: 3, isExploded: false, respawnTimer: 0 },
      { id: 4, x: width - 80, y: height - 25, speed: 1.1, direction: -1, legAngle: 4.5, isExploded: false, respawnTimer: 0 },
    ];

    const handleClick = (e: MouseEvent) => {
      const count = Math.floor(Math.random() * 3) + 3;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20,
          vx: (Math.random() - 0.5) * 4,
          vy: Math.random() * 2 + 1.5,
          symbol: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.floor(Math.random() * 6) + 12,
          opacity: 1,
          rotation: (Math.random() - 0.5) * 0.5,
          rotSpeed: (Math.random() - 0.5) * 0.08
        });
      }

      walkers.forEach(w => {
        if (!w.isExploded && Math.abs(e.clientX - w.x) < 25 && Math.abs(e.clientY - (height - 30)) < 35) {
          triggerExplosion(w);
        }
      });
    };

    const triggerExplosion = (w: Walker) => {
      w.isExploded = true;
      w.respawnTimer = 180;
      for (let i = 0; i < 22; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 6 + 2;
        shards.push({
          x: w.x,
          y: height - 30,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 2,
          size: Math.random() * 4 + 2,
          opacity: 1
        });
      }
    };

    window.addEventListener('click', handleClick);

    let animationFrameId: number;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const groundY = height - 16;

      walkers.forEach(w => {
        if (w.isExploded) {
          w.respawnTimer--;
          if (w.respawnTimer <= 0) {
            w.isExploded = false;
            w.x = w.direction === 1 ? -30 : width + 30;
          }
          return;
        }

        w.x += w.speed * w.direction;
        w.legAngle += 0.12 * w.speed;

        if (w.direction === 1 && w.x > width + 40) {
          w.x = -30;
        } else if (w.direction === -1 && w.x < -40) {
          w.x = width + 30;
        }

        const px = w.x;
        const py = groundY;
        const legSwing = Math.sin(w.legAngle) * 8;
        const armSwing = Math.cos(w.legAngle) * 6;

        ctx.save();
        ctx.strokeStyle = '#ffffff';
        ctx.fillStyle = '#052e16';
        ctx.lineWidth = 1.8;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        const headY = py - 32;
        ctx.beginPath();
        ctx.arc(px, headY, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(px + (w.direction * 3), headY - 1, 1.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(px, headY + 6);
        ctx.lineTo(px, py - 14);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(px, headY + 10);
        ctx.lineTo(px - armSwing * w.direction, py - 18);
        ctx.moveTo(px, headY + 10);
        ctx.lineTo(px + armSwing * w.direction, py - 18);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(px, py - 14);
        ctx.lineTo(px - legSwing, py);
        ctx.moveTo(px, py - 14);
        ctx.lineTo(px + legSwing, py);
        ctx.stroke();

        ctx.restore();
      });

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.22;
        p.rotation += p.rotSpeed;
        p.opacity -= 0.007;

        walkers.forEach(w => {
          if (!w.isExploded) {
            const dx = Math.abs(p.x - w.x);
            const dy = Math.abs(p.y - (groundY - 18));
            if (dx < 20 && dy < 25) {
              triggerExplosion(w);
              p.opacity = 0;
            }
          }
        });

        if (p.opacity <= 0 || p.y > height + 20) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.font = `bold ${p.size}px monospace`;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 4;
        ctx.fillText(p.symbol, 0, 0);
        ctx.restore();
      }

      for (let i = shards.length - 1; i >= 0; i--) {
        const s = shards[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.25;
        s.opacity -= 0.02;

        if (s.opacity <= 0 || s.y > height) {
          shards.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.fillStyle = '#ffffff';
        ctx.globalAlpha = Math.max(0, s.opacity);
        ctx.fillRect(s.x, s.y, s.size, s.size);
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Escaneo realista según Instagram
  const handleStartScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!instaInput.trim()) return;
    
    const cleanHandle = instaInput.replace(/@/g, '').trim();
    setScanState('scanning');
    setScanProgress(20);

    setTimeout(() => setScanProgress(55), 400);
    setTimeout(() => setScanProgress(85), 900);
    setTimeout(() => {
      setScanProgress(100);
      setScanState('done');
      
      const wasted = country.code === 'ES' 
        ? '350 € a 780 €' 
        : country.code === 'US' 
        ? '$400 to $850' 
        : '$350.000 a $650.000';

      setScannedData({
        handle: `@${cleanHandle}`,
        followers: cleanHandle.length > 7 ? '3.850 seguidores estimados' : '5.900 seguidores estimados',
        bounceRate: '78% de visitantes abandonan la bio',
        lostClients: Math.floor(Math.random() * 6) + 12,
        wastedRevenue: wasted
      });
    }, 1400);
  };

  // Cálculos ROI
  const conversionsTraditional = Math.max(1, Math.round(monthlyVisits * 0.008));
  const conversionsCelere = Math.round(monthlyVisits * 0.034);
  const revenueTraditional = conversionsTraditional * averageTicket;
  const revenueCelere = conversionsCelere * averageTicket;
  const extraRevenue = revenueCelere - revenueTraditional;

  // Textos bilingües según país (ES vs EN)
  const isEn = country.lang === 'en';

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black relative">
      
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 pointer-events-none z-50 w-full h-full"
      />

      <div 
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-zinc-500 via-white to-zinc-400 z-[70] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* =========================================================================
          FONDO DE CÓDIGO ANIMADO (DESDE EL HERO HASTA LAS MUESTRAS PERSONALES)
         ========================================================================= */}
      <div className="absolute top-0 left-0 right-0 h-[1900px] pointer-events-none overflow-hidden select-none z-0 opacity-[0.14]">
        
        {/* Haz de luz de ingeniería */}
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-purple-800/25 via-emerald-800/10 to-transparent blur-[160px]" />
        
        {/* Terminales y líneas de código animadas en scroll */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 pt-24 font-mono text-[11px] leading-relaxed">
          
          {/* Columna de Código 1: Arquitectura & Servidor */}
          <div className="space-y-1 text-zinc-400">
            <div className="text-emerald-400 font-bold">// 01: CELERE_CORE_ENGINE.ts</div>
            <div>import &#123; createEngine, CloudflareEdge &#125; from '@celere/kernel';</div>
            <div className="text-zinc-600">/* Location: Alicante, Comunidad Valenciana, ES */</div>
            <div>const studio = createEngine(&#123;</div>
            <div className="pl-4 text-purple-300">region: 'eu-west-spain',</div>
            <div className="pl-4 text-emerald-300">latency: '0.38ms',</div>
            <div className="pl-4 text-amber-300">zeroBloat: true,</div>
            <div className="pl-4 text-sky-300">autoDeploy: 'edge-v2'</div>
            <div>&#125;);</div>
            <div className="pt-2 text-zinc-500">// Benchmarking PageSpeed</div>
            <div className="text-emerald-400">await studio.verifyLighthouseScores(&#123;</div>
            <div className="pl-4">performance: 99,</div>
            <div className="pl-4">accessibility: 100,</div>
            <div className="pl-4">seo: 100</div>
            <div>&#125;);</div>
            <div className="pt-2 text-purple-400">export default studio.compile();</div>
          </div>

          {/* Columna de Código 2: Flujo de Clientes & WhatsApp Smart */}
          <div className="space-y-1 text-zinc-400 hidden md:block">
            <div className="text-sky-400 font-bold">// 02: WHATSAPP_ROUTER.tsx</div>
            <div>interface ClientSession &#123;</div>
            <div className="pl-4 text-zinc-300">source: 'Instagram_Bio_Click';</div>
            <div className="pl-4 text-zinc-300">conversionTime: '&lt; 10s';</div>
            <div className="pl-4 text-zinc-300">cartStatus: 'Prepared';</div>
            <div>&#125;</div>
            <div className="pt-2">export function dispatchDirectOrder(cart: Order) &#123;</div>
            <div className="pl-4 text-emerald-400">const url = `https://wa.me/$&#123;phone&#125;?text=$&#123;cart.encoded&#125;`;</div>
            <div className="pl-4 text-zinc-500">// 0% pérdida de carritos por registro</div>
            <div className="pl-4 text-purple-300">return window.open(url, '_blank');</div>
            <div>&#125;</div>
            <div className="pt-2 text-zinc-600">// Build Status: SUCCESS (7.5ms)</div>
          </div>

          {/* Columna de Código 3: Base de Datos & Mantenimiento */}
          <div className="space-y-1 text-zinc-400 hidden md:block">
            <div className="text-purple-400 font-bold">// 03: MONTHLY_MAINTENANCE.sh</div>
            <div className="text-zinc-500">#!/bin/bash</div>
            <div>echo "[CELERE] Running weekly automated backups..."</div>
            <div className="text-emerald-300">ssl_cert_status="VALID (Let's Encrypt)"</div>
            <div className="text-emerald-300">uptime_status="99.98% OK"</div>
            <div className="text-zinc-400">optimize_images --webp-lossless --avif</div>
            <div>sync_prices_to_cdn --instant</div>
            <div className="pt-2 text-amber-300">echo "Client server running at 100% capacity"</div>
          </div>

        </div>
      </div>

      {/* =========================================================================
          NAVBAR CON SELECTOR DE PAÍS / MONEDA / IDIOMA (ALICANTE / ESPAÑA)
         ========================================================================= */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-2xl border-b border-white/15 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/25 flex items-center justify-center font-mono text-sm font-bold text-white group-hover:border-white transition-colors duration-300 relative overflow-hidden shadow-inner">
              <span className="text-white tracking-tighter">C<span className="text-zinc-400 font-black">//</span></span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-xl tracking-[0.22em] text-white">
                  CÉLERE
                </span>
                <span className="px-1.5 py-0.5 rounded bg-zinc-800 border border-white/20 text-[9px] font-mono text-zinc-300 font-semibold">
                  v2.6
                </span>
              </div>
              <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase -mt-0.5 font-medium">
                Digital Engineering Studio
              </span>
            </div>
          </a>

          {/* Menú limpio sin puntos */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-950 p-1.5 rounded-xl border border-white/15 shadow-inner">
            <a 
              href="#demos" 
              className="px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider text-zinc-300 hover:text-white hover:bg-white/10 transition-all"
            >
              {isEn ? 'LIVE DEMOS' : 'DEMOS EN VIVO'}
            </a>
            <a 
              href="#scanner" 
              className="px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider text-zinc-300 hover:text-white hover:bg-white/10 transition-all"
            >
              {isEn ? 'INSTAGRAM AUDIT' : 'AUDITORÍA INSTAGRAM'}
            </a>
            <a 
              href="#roi" 
              className="px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider text-zinc-300 hover:text-white hover:bg-white/10 transition-all"
            >
              {isEn ? 'ROI CALCULATOR' : 'CALCULADORA'}
            </a>
            <a 
              href="#servicios" 
              className="px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider text-zinc-300 hover:text-white hover:bg-white/10 transition-all"
            >
              {isEn ? 'SERVICES' : 'SERVICIOS'}
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            
            {/* SELECTOR DE PAÍS / MONEDA / IDIOMA */}
            <div className="relative">
              <button
                onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900 border border-white/20 hover:border-white/50 text-xs font-mono font-bold text-white transition-all shadow-sm"
              >
                <span>{country.flag}</span>
                <span>{country.code} ({country.currency})</span>
                <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
              </button>

              {countryDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-zinc-950 border border-white/20 shadow-2xl py-2 z-50 font-mono text-xs">
                  {(Object.keys(COUNTRIES) as CountryCode[]).map((cCode) => {
                    const c = COUNTRIES[cCode];
                    return (
                      <button
                        key={cCode}
                        onClick={() => {
                          setSelectedCountry(cCode);
                          setCountryDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-2 text-left flex items-center justify-between hover:bg-white/10 transition-colors ${
                          selectedCountry === cCode ? 'text-emerald-400 font-bold bg-white/5' : 'text-zinc-300'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>{c.flag}</span>
                          <span>{c.name}</span>
                        </span>
                        <span className="text-[10px] text-zinc-500 font-bold">{c.currency}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider font-bold bg-white text-black hover:bg-zinc-200 transition-all duration-200 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:scale-105"
            >
              <span>{isEn ? 'Start Project' : 'Vender mi Proyecto'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-300 hover:text-white bg-zinc-900 rounded-lg border border-white/10"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-zinc-950 border-b border-white/15 px-6 py-6 flex flex-col gap-3 font-mono">
            
            {/* Selector de País en Mobile */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900 border border-white/20 mb-2">
              <span className="text-xs text-zinc-400">País / Moneda:</span>
              <div className="flex gap-2">
                {(Object.keys(COUNTRIES) as CountryCode[]).map((cCode) => (
                  <button
                    key={cCode}
                    onClick={() => setSelectedCountry(cCode)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                      selectedCountry === cCode ? 'bg-white text-black' : 'bg-black text-zinc-400'
                    }`}
                  >
                    {COUNTRIES[cCode].flag} {COUNTRIES[cCode].currency}
                  </button>
                ))}
              </div>
            </div>

            <a href="#demos" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg text-sm text-zinc-200 font-bold hover:bg-white/10">
              {isEn ? 'Live Demos' : 'Demos en Vivo'}
            </a>
            <a href="#scanner" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg text-sm text-zinc-200 font-bold hover:bg-white/10">
              {isEn ? 'Instagram Audit' : 'Auditoría Instagram'}
            </a>
            <a href="#roi" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg text-sm text-zinc-200 font-bold hover:bg-white/10">
              {isEn ? 'ROI Calculator' : 'Calculadora de Ventas'}
            </a>
            <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg text-sm text-zinc-200 font-bold hover:bg-white/10">
              {isEn ? 'Services & Support' : 'Servicios & Mantenimiento'}
            </a>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-3 w-full py-3.5 rounded-xl bg-white text-black text-center font-bold font-sans flex items-center justify-center gap-2"
            >
              <span>{isEn ? 'Chat via WhatsApp' : 'Consultar por WhatsApp'}</span>
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-28 px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-white/20 text-zinc-300 text-xs font-mono mb-8 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-zinc-400 tracking-wider">
              {isEn ? 'CUSTOM CREATION & MONTHLY SUPPORT' : 'CREACIÓN & MANTENIMIENTO CONTINUO'}
            </span>
            <span className="text-white font-bold ml-1">✦ {selectedCountry} ({country.currency})</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-8xl font-black tracking-tight leading-[1.02] max-w-5xl mb-8">
            {isEn ? (
              <>
                Websites that <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-600">
                  crush the generic.
                </span>
              </>
            ) : (
              <>
                Páginas web que <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-600">
                  destruyen lo genérico.
                </span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl font-normal leading-relaxed mb-12">
            {isEn 
              ? 'We design your brand-tailored web experience and manage monthly maintenance, fast hosting, and continuous updates so you can focus solely on your customers.'
              : selectedCountry === 'ES'
              ? 'Diseñamos la presencia web a medida de tu negocio en Alicante y toda España, encargándonos del soporte mensual, hosting ultra rápido y actualizaciones para que vos solo atiendas clientes.'
              : 'Creamos la web a medida de tu negocio y nos encargamos del mantenimiento mensual, velocidad y actualizaciones para que vos solo te preocupes por atender clientes.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a 
              href="#demos"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-display font-bold text-sm bg-white text-black hover:bg-zinc-200 transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:scale-105"
            >
              <Laptop className="w-4 h-4" />
              <span>{isEn ? 'Explore Real Demos' : 'Explorar Demos Reales'}</span>
            </a>

            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-mono text-xs uppercase tracking-wider bg-zinc-950 hover:bg-zinc-900 border border-white/25 text-zinc-200 hover:text-white transition-all duration-200 flex items-center justify-center gap-2.5"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>{isEn ? 'Quote Project + Support' : 'Cotizar Proyecto + Soporte'}</span>
            </a>
          </div>

          <div className="mt-16 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="p-4 rounded-xl bg-zinc-950/90 border border-white/15">
              <span className="text-[10px] font-mono text-zinc-400 uppercase block mb-1">
                {isEn ? 'Average Load Speed' : 'Carga Rápida'}
              </span>
              <div className="text-2xl font-display font-bold text-white flex items-center gap-2">
                0.4s <span className="text-emerald-400 text-xs font-mono font-normal">Ultra</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950/90 border border-white/15">
              <span className="text-[10px] font-mono text-zinc-400 uppercase block mb-1">
                {isEn ? 'Mobile Conversion' : 'Optimización Móvil'}
              </span>
              <div className="text-2xl font-display font-bold text-white flex items-center gap-2">
                100% <span className="text-zinc-400 text-xs font-mono font-normal">WhatsApp</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950/90 border border-white/15">
              <span className="text-[10px] font-mono text-zinc-400 uppercase block mb-1">
                {isEn ? 'Maintenance' : 'Mantenimiento'}
              </span>
              <div className="text-2xl font-display font-bold text-white flex items-center gap-2">
                Mensual <span className="text-emerald-400 text-xs font-mono font-normal">{country.currency}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950/90 border border-white/15">
              <span className="text-[10px] font-mono text-zinc-400 uppercase block mb-1">
                {isEn ? 'Initial Delivery' : 'Entrega Inicial'}
              </span>
              <div className="text-2xl font-display font-bold text-white flex items-center gap-2">
                3-5 Días <span className="text-zinc-400 text-xs font-mono font-normal">Rápida</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SHOWROOM: DEMOS AUTÉNTICAS CON MONEDA Y LOCACIÓN ADAPTADA
         ========================================================================= */}
      <section id="demos" className="py-24 px-6 border-b border-white/15 bg-black relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3 block font-bold">
              // MUESTRAS PERSONALIZADAS POR RUBRO ({country.currency})
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
              {isEn ? '100% Authentic Industry Demos' : 'Diseño 100% fiel al rubro de cada cliente'}
            </h2>
            <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
              {isEn 
                ? 'A restaurant is not a tech firm, and a dental clinic is not a dark hacker site. Each demo has its own real palette, typography, and prices in your currency.'
                : 'Un restaurante no es una empresa de tecnología, ni una clínica es un sitio oscuro. Cada muestra tiene su propia paleta de colores, tipografía y precios adaptados a tu moneda.'}
            </p>

            {/* BOTONES FLOTANTES */}
            <div className="mt-10 mb-4 py-4 flex justify-center gap-3 sm:gap-4 flex-wrap items-center">
              
              <button
                onClick={() => setActiveDemoTab('gastro')}
                className={`group px-6 py-3.5 rounded-2xl text-xs font-mono font-bold tracking-wider transition-all duration-300 flex items-center gap-2.5 shadow-xl relative cursor-pointer ${
                  activeDemoTab === 'gastro'
                    ? 'bg-amber-400 text-black shadow-[0_0_30px_rgba(251,191,36,0.4)] scale-110 -translate-y-2 z-20 border-2 border-amber-300'
                    : 'animate-floating-1 bg-zinc-950 text-zinc-300 hover:text-white border border-white/20 hover:border-amber-400/80 z-10'
                }`}
              >
                <Utensils className="w-4 h-4 text-amber-500" />
                <span>1. Restaurante & Bar ({country.currency})</span>
                {activeDemoTab === 'gastro' && (
                  <span className="ml-1 px-1.5 py-0.5 rounded bg-black text-[9px] font-mono text-amber-400 font-bold">
                    ACTIVO
                  </span>
                )}
              </button>

              <button
                onClick={() => setActiveDemoTab('health')}
                className={`group px-6 py-3.5 rounded-2xl text-xs font-mono font-bold tracking-wider transition-all duration-300 flex items-center gap-2.5 shadow-xl relative cursor-pointer ${
                  activeDemoTab === 'health'
                    ? 'bg-sky-500 text-white shadow-[0_0_30px_rgba(14,165,233,0.4)] scale-110 -translate-y-2 z-20 border-2 border-sky-300'
                    : 'animate-floating-2 bg-zinc-950 text-zinc-300 hover:text-white border border-white/20 hover:border-sky-400/80 z-10'
                }`}
              >
                <Stethoscope className="w-4 h-4 text-sky-400" />
                <span>2. Odontología & Salud (Blanco Clínico)</span>
                {activeDemoTab === 'health' && (
                  <span className="ml-1 px-1.5 py-0.5 rounded bg-black text-[9px] font-mono text-sky-300 font-bold">
                    ACTIVO
                  </span>
                )}
              </button>

              <button
                onClick={() => setActiveDemoTab('fashion')}
                className={`group px-6 py-3.5 rounded-2xl text-xs font-mono font-bold tracking-wider transition-all duration-300 flex items-center gap-2.5 shadow-xl relative cursor-pointer ${
                  activeDemoTab === 'fashion'
                    ? 'bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.4)] scale-110 -translate-y-2 z-20 border-2 border-white'
                    : 'animate-floating-3 bg-zinc-950 text-zinc-300 hover:text-white border border-white/20 hover:border-white z-10'
                }`}
              >
                <ShoppingBag className="w-4 h-4 text-zinc-400" />
                <span>3. Tienda & Moda ({country.currency})</span>
                {activeDemoTab === 'fashion' && (
                  <span className="ml-1 px-1.5 py-0.5 rounded bg-black text-[9px] font-mono text-white font-bold">
                    ACTIVO
                  </span>
                )}
              </button>

              <button
                onClick={() => setActiveDemoTab('legal')}
                className={`group px-6 py-3.5 rounded-2xl text-xs font-mono font-bold tracking-wider transition-all duration-300 flex items-center gap-2.5 shadow-xl relative cursor-pointer ${
                  activeDemoTab === 'legal'
                    ? 'bg-amber-100 text-stone-900 shadow-[0_0_30px_rgba(254,243,199,0.3)] scale-110 -translate-y-2 z-20 border-2 border-amber-200'
                    : 'animate-floating-4 bg-zinc-950 text-zinc-300 hover:text-white border border-white/20 hover:border-amber-200 z-10'
                }`}
              >
                <Briefcase className="w-4 h-4 text-amber-200" />
                <span>4. Estudio Jurídico & Asesoría</span>
                {activeDemoTab === 'legal' && (
                  <span className="ml-1 px-1.5 py-0.5 rounded bg-black text-[9px] font-mono text-white font-bold">
                    ACTIVO
                  </span>
                )}
              </button>

            </div>
          </div>

          {/* MARCO DEL NAVEGADOR DE DEMO */}
          <div className="max-w-5xl mx-auto rounded-3xl bg-zinc-950 border border-white/20 shadow-2xl overflow-hidden">
            
            <div className="bg-zinc-900/90 px-6 py-3.5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 text-[11px] font-mono text-zinc-400 hidden sm:inline">
                  {country.flag} Precios adaptados a {country.name} ({country.currency})
                </span>
              </div>

              <div className="px-4 py-1 rounded-lg bg-black border border-white/15 text-[11px] font-mono text-zinc-300 flex items-center gap-2">
                <span className="text-emerald-400">https://</span>
                <span>
                  {activeDemoTab === 'gastro' && (selectedCountry === 'ES' ? 'aurabistro.es/carta' : 'aurabistro.com/menu')}
                  {activeDemoTab === 'health' && (selectedCountry === 'ES' ? 'novadental.es/cita' : 'novadental.com/turnos')}
                  {activeDemoTab === 'fashion' && (selectedCountry === 'ES' ? 'kroma.es/coleccion' : 'kromastore.com')}
                  {activeDemoTab === 'legal' && (selectedCountry === 'ES' ? 'apexabogados.es' : 'apexpartners.com')}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setDemoDeviceView('desktop')}
                  className={`p-1.5 rounded-lg transition-colors ${
                    demoDeviceView === 'desktop' ? 'bg-white text-black' : 'text-zinc-400 hover:text-white'
                  }`}
                  title="Vista Computadora"
                >
                  <Laptop className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setDemoDeviceView('mobile')}
                  className={`p-1.5 rounded-lg transition-colors ${
                    demoDeviceView === 'mobile' ? 'bg-white text-black' : 'text-zinc-400 hover:text-white'
                  }`}
                  title="Vista Celular"
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className={`transition-all duration-300 flex justify-center items-center ${
              demoDeviceView === 'mobile' ? 'p-4 sm:p-8 bg-zinc-950' : 'p-0'
            }`}>
              
              <div className={`w-full transition-all duration-300 ${
                demoDeviceView === 'mobile' 
                  ? 'max-w-sm rounded-[40px] border-8 border-zinc-800 bg-white p-0 shadow-2xl overflow-hidden' 
                  : 'w-full'
              }`}>
                
                {/* 1. DEMO GASTRONOMÍA */}
                {activeDemoTab === 'gastro' && (
                  <div className="bg-[#181411] text-[#fbf6ee] p-6 sm:p-10 font-serif text-left space-y-8">
                    
                    <div className="text-center pb-6 border-b border-[#3d3229]">
                      <span className="text-xs uppercase tracking-[0.3em] text-[#d97706] font-sans font-semibold">
                        Cocina de Brasas & Arroces Mediterráneos
                      </span>
                      <h3 className="text-3xl sm:text-4xl font-normal text-[#fbf6ee] mt-1 font-serif tracking-tight">
                        Aura Bistro // Alicante
                      </h3>
                      <div className="flex items-center justify-center gap-4 text-xs text-[#a89989] font-sans mt-2">
                        <span>Paseo de la Explanada, Alicante</span>
                        <span>•</span>
                        <span>Martes a Domingos: 13:30 - 23:30 hs</span>
                      </div>
                    </div>

                    <div className="font-sans">
                      <div className="flex justify-center gap-2 pb-2 overflow-x-auto">
                        <button
                          onClick={() => setGastroCategory('principales')}
                          className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                            gastroCategory === 'principales' 
                              ? 'bg-[#d97706] text-black font-bold shadow-md' 
                              : 'bg-[#29221d] text-[#c7b9a9] hover:text-white'
                          }`}
                        >
                          Arroces & Carnes a la Brasa
                        </button>
                        <button
                          onClick={() => setGastroCategory('entradas')}
                          className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                            gastroCategory === 'entradas' 
                              ? 'bg-[#d97706] text-black font-bold shadow-md' 
                              : 'bg-[#29221d] text-[#c7b9a9] hover:text-white'
                          }`}
                        >
                          Tapas de Autor
                        </button>
                        <button
                          onClick={() => setGastroCategory('postres')}
                          className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                            gastroCategory === 'postres' 
                              ? 'bg-[#d97706] text-black font-bold shadow-md' 
                              : 'bg-[#29221d] text-[#c7b9a9] hover:text-white'
                          }`}
                        >
                          Postres Artesanales
                        </button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {gastroCategory === 'principales' && (
                        <>
                          <div className="p-4 rounded-xl bg-[#231b16] border border-[#3d3229] flex justify-between items-start">
                            <div>
                              <h4 className="text-lg font-serif text-[#fbf6ee]">Arroz del Senyoret a la Leña</h4>
                              <p className="text-xs text-[#a89989] font-sans mt-1">
                                Sepia de la bahía de Santa Pola, gamba roja y fumet de roca tradicional con alioli casero.
                              </p>
                              <span className="inline-block mt-2 text-[10px] uppercase font-sans tracking-wider text-[#d97706] font-bold">
                                ★ Recomendación del chef
                              </span>
                            </div>
                            <span className="text-lg font-serif font-bold text-[#d97706] ml-4">
                              {formatMoney(22)}
                            </span>
                          </div>

                          <div className="p-4 rounded-xl bg-[#231b16] border border-[#3d3229] flex justify-between items-start">
                            <div>
                              <h4 className="text-lg font-serif text-[#fbf6ee]">Chuletón de Vaca Rubia Madurada (600g)</h4>
                              <p className="text-xs text-[#a89989] font-sans mt-1">
                                Madurado 45 días en seco, asado en parrilla vasca con pimientos del padrón y patatas panaderas.
                              </p>
                            </div>
                            <span className="text-lg font-serif font-bold text-[#d97706] ml-4">
                              {formatMoney(34)}
                            </span>
                          </div>
                        </>
                      )}

                      {gastroCategory === 'entradas' && (
                        <>
                          <div className="p-4 rounded-xl bg-[#231b16] border border-[#3d3229] flex justify-between items-start">
                            <div>
                              <h4 className="text-lg font-serif text-[#fbf6ee]">Jamón Ibérico 100% Bellota & Pan con Tomate</h4>
                              <p className="text-xs text-[#a89989] font-sans mt-1">
                                Cortado a cuchillo al momento, con pan de cristal tostado y aceite de oliva virgen extra de Alicante.
                              </p>
                            </div>
                            <span className="text-lg font-serif font-bold text-[#d97706] ml-4">
                              {formatMoney(19)}
                            </span>
                          </div>
                        </>
                      )}

                      {gastroCategory === 'postres' && (
                        <>
                          <div className="p-4 rounded-xl bg-[#231b16] border border-[#3d3229] flex justify-between items-start">
                            <div>
                              <h4 className="text-lg font-serif text-[#fbf6ee]">Tarta de Queso Fluida de Jijona</h4>
                              <p className="text-xs text-[#a89989] font-sans mt-1">
                                Con turrón artesanal con denominación de origen y helado de almendra tostada.
                              </p>
                            </div>
                            <span className="text-lg font-serif font-bold text-[#d97706] ml-4">
                              {formatMoney(7.5)}
                            </span>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="p-6 rounded-2xl bg-[#201813] border border-[#d97706]/40 font-sans">
                      <div className="text-center mb-4">
                        <span className="text-xs uppercase tracking-widest text-[#d97706] font-bold">RESERVAS EN EL ACTO</span>
                        <h4 className="text-lg font-serif text-[#fbf6ee] mt-1">Asegurá tu mesa en terraza o salón</h4>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                        <div>
                          <label className="text-[10px] text-[#a89989] block mb-1">DÍA</label>
                          <select 
                            value={reserveDate}
                            onChange={(e) => setReserveDate(e.target.value)}
                            className="w-full bg-[#181411] border border-[#3d3229] rounded-lg px-3 py-2 text-xs text-[#fbf6ee]"
                          >
                            <option>Hoy</option>
                            <option>Mañana</option>
                            <option>Viernes</option>
                            <option>Sábado</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-[10px] text-[#a89989] block mb-1">HORA</label>
                          <select 
                            value={reserveTime}
                            onChange={(e) => setReserveTime(e.target.value)}
                            className="w-full bg-[#181411] border border-[#3d3229] rounded-lg px-3 py-2 text-xs text-[#fbf6ee]"
                          >
                            <option>14:00 hs (Almuerzo)</option>
                            <option>21:00 hs (Cena)</option>
                            <option>22:15 hs (Cena)</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-[10px] text-[#a89989] block mb-1">COMENSALES</label>
                          <select 
                            value={reserveGuests}
                            onChange={(e) => setReserveGuests(e.target.value)}
                            className="w-full bg-[#181411] border border-[#3d3229] rounded-lg px-3 py-2 text-xs text-[#fbf6ee]"
                          >
                            <option>2 comensales</option>
                            <option>4 comensales</option>
                            <option>6 comensales</option>
                          </select>
                        </div>
                      </div>

                      <a 
                        href={`https://wa.me/34600000000?text=${encodeURIComponent(`Hola Aura Bistro Alicante, quiero reservar mesa para ${reserveGuests} el día ${reserveDate} a las ${reserveTime}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 rounded-xl bg-[#d97706] hover:bg-[#b45309] text-black font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Confirmar Reserva por WhatsApp</span>
                      </a>
                    </div>

                  </div>
                )}

                {/* 2. DEMO SALUD */}
                {activeDemoTab === 'health' && (
                  <div className="bg-white text-slate-800 p-6 sm:p-10 font-sans text-left space-y-6">
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                            Clínica Dental Colegiada • Alicante Centro
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                          Nova Odontología <span className="text-sky-600 font-light">& Estética Dental</span>
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5">Dra. Valentina Ortiz • Nº Colegiado COEA 03/2941</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1.5 rounded-full bg-sky-50 text-sky-700 text-xs font-semibold border border-sky-200">
                          Av. Alfonso El Sabio 34, Alicante
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <h4 className="text-sm font-bold text-slate-900">Ortodoncia Invisible</h4>
                        <p className="text-xs text-slate-600 mt-1">Alineadores transparentes con escáner 3D iTero en consulta.</p>
                        <span className="text-xs font-bold text-sky-700 mt-2 block">
                          Desde {formatMoney(1600)}
                        </span>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <h4 className="text-sm font-bold text-slate-900">Implantes de Carga Rápida</h4>
                        <p className="text-xs text-slate-600 mt-1">Titanio con biocompatibilidad y dientes fijos en el día.</p>
                        <span className="text-xs font-bold text-sky-700 mt-2 block">
                          Desde {formatMoney(650)}
                        </span>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <h4 className="text-sm font-bold text-slate-900">Higiene & Blanqueamiento</h4>
                        <p className="text-xs text-slate-600 mt-1">Limpieza dental con ultrasonido y sesión láser de 45 min.</p>
                        <span className="text-xs font-bold text-sky-700 mt-2 block">
                          {formatMoney(120)}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-sky-50/60 border border-sky-200 space-y-4">
                      <div>
                        <span className="text-xs font-bold text-sky-800 uppercase tracking-wider block">CITA PREVIA ONLINE</span>
                        <h4 className="text-base font-bold text-slate-900">Primera visita diagnóstica con radiografía bonificada</h4>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {['Ortodoncia Invisible', 'Implante Dental', 'Revisión & Limpieza'].map((t) => (
                          <button
                            key={t}
                            onClick={() => setDentalTreatment(t)}
                            className={`p-3 rounded-xl text-xs font-semibold text-left transition-all ${
                              dentalTreatment === t 
                                ? 'bg-sky-600 text-white shadow-sm' 
                                : 'bg-white text-slate-700 border border-slate-200'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>

                      <a 
                        href={`https://wa.me/34600000000?text=${encodeURIComponent(`Hola Nova Odontología Alicante, quiero pedir cita para ${dentalTreatment}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Solicitar Cita Previa por WhatsApp</span>
                      </a>
                    </div>

                  </div>
                )}

                {/* 3. DEMO MODA */}
                {activeDemoTab === 'fashion' && (
                  <div className="bg-zinc-100 text-zinc-900 p-6 sm:p-10 font-sans text-left space-y-6">
                    
                    <div className="flex items-center justify-between pb-6 border-b border-zinc-200">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                          COLECCIÓN 2026 • HECHO EN ESPAÑA
                        </span>
                        <h3 className="text-3xl font-black uppercase tracking-tight text-black">
                          KROMA STUDIO
                        </h3>
                      </div>

                      <button 
                        onClick={() => setIsCartOpen(!isCartOpen)}
                        className="px-4 py-2 rounded-lg bg-black text-white text-xs font-bold flex items-center gap-2 shadow-sm"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>Cesta ({cartCount})</span>
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-zinc-600">Talla:</span>
                      {['S', 'M', 'L', 'XL'].map((s) => (
                        <button
                          key={s}
                          onClick={() => setSelectedSize(s)}
                          className={`w-8 h-8 rounded text-xs font-bold transition-all ${
                            selectedSize === s 
                              ? 'bg-black text-white' 
                              : 'bg-white text-zinc-800 border border-zinc-300'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      <div className="p-4 rounded-xl bg-white border border-zinc-200 shadow-sm flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-[10px] font-bold text-zinc-500 uppercase">100% Algodón 450 GSM</span>
                            <span className="text-base font-black text-black">
                              {formatMoney(45)}
                            </span>
                          </div>
                          <h4 className="text-base font-bold text-zinc-900">Heavy Boxy Hoodie Black</h4>
                          <p className="text-xs text-zinc-600 mt-1">Corte oversize fabricado con algodón peinado de alto gramaje.</p>
                        </div>
                        <button
                          onClick={() => setCartCount(cartCount + 1)}
                          className="mt-4 w-full py-2.5 rounded bg-black hover:bg-zinc-800 text-white text-xs font-bold flex items-center justify-center gap-1.5"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Añadir a la Cesta (Talla {selectedSize})</span>
                        </button>
                      </div>

                      <div className="p-4 rounded-xl bg-white border border-zinc-200 shadow-sm flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-[10px] font-bold text-zinc-500 uppercase">Tejido Técnico Ripstop</span>
                            <span className="text-base font-black text-black">
                              {formatMoney(55)}
                            </span>
                          </div>
                          <h4 className="text-base font-bold text-zinc-900">Pantalón Cargo Wide Leg</h4>
                          <p className="text-xs text-zinc-600 mt-1">Pantalón ancho impermeable con 6 bolsillos utilitarios.</p>
                        </div>
                        <button
                          onClick={() => setCartCount(cartCount + 1)}
                          className="mt-4 w-full py-2.5 rounded bg-black hover:bg-zinc-800 text-white text-xs font-bold flex items-center justify-center gap-1.5"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Añadir a la Cesta (Talla {selectedSize})</span>
                        </button>
                      </div>

                    </div>

                    <a 
                      href={`https://wa.me/34600000000?text=${encodeURIComponent(`Hola Kroma! Quiero pedir el Heavy Boxy Hoodie en Talla ${selectedSize} por ${formatMoney(45)}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Pedir directamente por WhatsApp</span>
                    </a>

                  </div>
                )}

                {/* 4. DEMO LEGAL */}
                {activeDemoTab === 'legal' && (
                  <div className="bg-[#0f172a] text-[#f8fafc] p-6 sm:p-10 font-serif text-left space-y-6">
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-700 gap-4">
                      <div>
                        <span className="text-xs font-sans tracking-[0.2em] text-amber-200 uppercase font-semibold">
                          Alicante • Valencia • Madrid
                        </span>
                        <h3 className="text-3xl font-normal text-white mt-1">
                          Apex & Asociados <span className="text-slate-400 font-sans text-sm font-light">Abogados de Empresa</span>
                        </h3>
                        <p className="text-xs text-slate-400 font-sans mt-1">Despacho especializado en pymes, empresas turísticas y startups.</p>
                      </div>

                      <div className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 font-sans text-xs">
                        Colegio de la Abogacía de Alicante (ICALI)
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-sans">
                      <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
                        <h4 className="text-sm font-bold text-amber-200">Derecho Mercantil & SL</h4>
                        <p className="text-xs text-slate-400">Constitución de Sociedades Limitadas, pactos de socios y contratos mercantiles.</p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
                        <h4 className="text-sm font-bold text-amber-200">Derecho Laboral Empresarial</h4>
                        <p className="text-xs text-slate-400">Prevención de conflictos de personal, despidos objetivos y defensa en SMAC.</p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
                        <h4 className="text-sm font-bold text-amber-200">Empresa Familiar & Sucesiones</h4>
                        <p className="text-xs text-slate-400">Protocolo familiar para garantizar la continuidad del patrimonio y el negocio.</p>
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700 font-sans space-y-4">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-amber-200 font-bold">SOLICITUD DE CONSULTA</span>
                        <h4 className="text-base font-bold text-white">Reunión con un abogado en Alicante o por videollamada</h4>
                      </div>

                      <a 
                        href={`https://wa.me/34600000000?text=${encodeURIComponent(`Hola Apex Abogados Alicante, quiero coordinar una consulta profesional sobre Derecho Mercantil.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 rounded-xl bg-amber-200 hover:bg-amber-100 text-slate-900 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
                      >
                        <Briefcase className="w-4 h-4" />
                        <span>Solicitar Consulta por WhatsApp</span>
                      </a>
                    </div>

                  </div>
                )}

              </div>
            </div>

            <div className="bg-zinc-900/90 px-6 py-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
              <span className="text-xs text-zinc-400">
                {isEn ? 'Want a tailor-made website for your business?' : '¿Querés una web a medida con esta misma identidad para tu negocio?'}
              </span>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-white text-black font-display font-bold text-xs hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-sm"
              >
                <span>{isEn ? 'Request quote with Célere' : 'Cotizar una web como esta con Célere'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          AUDITORÍA INSTAGRAM
         ========================================================================= */}
      <section id="scanner" className="py-24 px-6 border-b border-white/15 bg-zinc-950 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/15 text-zinc-300 text-xs font-mono mb-4">
            <InstagramIcon className="w-3.5 h-3.5 text-pink-500" />
            <span>DIAGNÓSTICO SEGÚN TU CUENTA DE INSTAGRAM</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Auditá tu Instagram y descubrí cuántas ventas perdés
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Ingresá el usuario de Instagram de tu negocio (ej: <span className="text-white font-mono">@bistro_alicante</span> o <span className="text-white font-mono">@clinicadental</span>). Analizaremos la efectividad de tu link actual y la fuga de clientes.
          </p>

          <form onSubmit={handleStartScan} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3 mb-8">
            <div className="relative flex-1">
              <input 
                type="text" 
                value={instaInput}
                onChange={(e) => setInstaInput(e.target.value)}
                placeholder="Ej: @tunegocio o tuweb.es"
                className="w-full px-5 py-4 rounded-xl bg-black border border-white/20 text-white font-mono text-xs focus:outline-none focus:border-white transition-colors"
              />
              <Search className="w-4 h-4 text-zinc-500 absolute right-4 top-1/2 -translate-y-1/2" />
            </div>

            <button
              type="submit"
              disabled={scanState === 'scanning'}
              className="px-8 py-4 rounded-xl font-display font-bold text-xs bg-white text-black hover:bg-zinc-200 transition-all disabled:opacity-50 shrink-0 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              {scanState === 'scanning' ? 'Analizando...' : 'Auditar Cuenta'}
            </button>
          </form>

          {scanState === 'scanning' && (
            <div className="max-w-md mx-auto p-6 rounded-2xl bg-black border border-white/15 text-left font-mono text-xs space-y-3">
              <div className="flex justify-between text-zinc-400 text-[10px]">
                <span>ANALIZANDO ENLACE DE BIOGRAFÍA...</span>
                <span>{scanProgress}%</span>
              </div>
              <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-pink-500 to-emerald-400 transition-all duration-300"
                  style={{ width: `${scanProgress}%` }}
                />
              </div>
              <div className="text-[11px] text-zinc-400">
                {scanProgress < 40 && '● Inspeccionando biografía y enlace de contacto...'}
                {scanProgress >= 40 && scanProgress < 80 && '● Midiendo fricción en apertura de WhatsApp...'}
                {scanProgress >= 80 && '● Calculando visitantes que se van sin escribir...'}
              </div>
            </div>
          )}

          {scanState === 'done' && scannedData && (
            <div className="max-w-xl mx-auto p-6 rounded-2xl bg-black border border-emerald-500/40 text-left space-y-4 shadow-[0_0_30px_rgba(16,185,129,0.15)] font-mono">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <InstagramIcon className="w-4 h-4 text-pink-400" />
                  <span className="text-xs font-bold text-white uppercase">{scannedData.handle} ({scannedData.followers})</span>
                </div>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
                  DIAGNÓSTICO LISTO
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-zinc-950 border border-white/10">
                  <span className="text-zinc-500 text-[10px] block">CLIENTES QUE SE VAN AL ENTRAR</span>
                  <span className="text-red-400 font-bold text-base">{scannedData.bounceRate}</span>
                </div>
                <div className="p-3 rounded-lg bg-zinc-950 border border-white/10">
                  <span className="text-zinc-500 text-[10px] block">VENTAS ESTIMADAS PERDIDAS</span>
                  <span className="text-amber-400 font-bold text-base">~{scannedData.lostClients} ventas/mes</span>
                </div>
              </div>

              <div className="text-xs text-zinc-300 leading-relaxed bg-zinc-900/60 p-3 rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-bold">Problema detectado en {scannedData.handle}:</div>
                <p className="text-zinc-400 text-[11px]">
                  Tus seguidores hacen clic en el link de la bio pero encuentran un linktree genérico o un chat en blanco. Pierden tiempo preguntando precios y abandonan la consulta ({scannedData.wastedRevenue} de facturación desaprovechada).
                </p>
              </div>

              <a 
                href={`https://wa.me/34600000000?text=${encodeURIComponent(`Hola Célere, acabo de auditar mi Instagram (${scannedData.handle}) en su web y quiero que me armen la propuesta para solucionar la fuga de clientes.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-white text-black font-display font-bold text-xs flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all shadow-md"
              >
                <span>Recibir solución a medida para {scannedData.handle}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          )}

        </div>
      </section>

      {/* =========================================================================
          CALCULADORA DE INGRESOS CON RANGOS REALISTAS (€ EN ESPAÑA / LOCALES)
         ========================================================================= */}
      <section id="roi" className="py-24 px-6 border-b border-white/15 bg-black relative z-10">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3 block font-bold">
              // IMPACTO REAL EN TU FACTURACIÓN ({country.currency})
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
              ¿Cuánto más puede facturar tu negocio al mes?
            </h2>
            <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
              Basado en métricas reales de comercios y profesionales en {country.name}. Al ofrecer una carta o catálogo claro sin esperas, la conversión a clientes pasa del 0.8% al 3.4%.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-zinc-950 p-8 sm:p-12 rounded-3xl border border-white/20">
            
            <div className="md:col-span-6 space-y-6">
              
              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-zinc-400">Visitas o clics que recibes al mes:</span>
                  <span className="text-white font-bold">{monthlyVisits.toLocaleString()} personas</span>
                </div>
                <input 
                  type="range" 
                  min="100" 
                  max="1500" 
                  step="50"
                  value={monthlyVisits}
                  onChange={(e) => setMonthlyVisits(Number(e.target.value))}
                  className="w-full accent-white cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-zinc-500 mt-1">
                  <span>100 visitas</span>
                  <span>750 visitas</span>
                  <span>1.500 visitas</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-zinc-400">Ticket promedio de tu producto/servicio:</span>
                  <span className="text-white font-bold">
                    {country.code === 'ES' ? `${averageTicket} €` : `$${averageTicket.toLocaleString()}`}
                  </span>
                </div>
                <input 
                  type="range" 
                  min={country.minTicket} 
                  max={country.maxTicket} 
                  step={country.stepTicket}
                  value={averageTicket}
                  onChange={(e) => setAverageTicket(Number(e.target.value))}
                  className="w-full accent-white cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-zinc-500 mt-1">
                  <span>{country.code === 'ES' ? `${country.minTicket} € (ticket bajo)` : `$${country.minTicket}`}</span>
                  <span>{country.code === 'ES' ? `${country.maxTicket / 2} €` : `$${country.maxTicket / 2}`}</span>
                  <span>{country.code === 'ES' ? `${country.maxTicket} €` : `$${country.maxTicket}`}</span>
                </div>
              </div>

              <div className="text-[11px] font-mono text-zinc-500 pt-4 border-t border-white/10">
                * Con una web Célere tu tasa de respuesta aumenta ~3 veces porque el cliente ve fotos y precios al instante sin dar vueltas.
              </div>

            </div>

            <div className="md:col-span-6 p-6 sm:p-8 rounded-2xl bg-black border border-white/15 text-center space-y-4">
              <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest font-bold">
                FACTURACIÓN MENSUAL ADICIONAL ESTIMADA
              </span>

              <div className="text-4xl sm:text-5xl font-display font-black text-white tracking-tight">
                +{country.code === 'ES' ? `${extraRevenue.toLocaleString()} €` : `$${extraRevenue.toLocaleString()}`} 
                <span className="text-xs font-mono text-zinc-400 font-normal"> /mes</span>
              </div>

              <div className="text-xs text-zinc-400 font-mono">
                Representa aproximadamente <span className="text-white font-bold">~{conversionsCelere - conversionsTraditional} clientes adicionales al mes</span> en tu negocio.
              </div>

              <a 
                href={`https://wa.me/34600000000?text=${encodeURIComponent(`Hola Célere, calculé una ganancia adicional de +${extraRevenue} ${country.currency}/mes para mi negocio y quiero coordinar la creación de mi web.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-white text-black font-display font-bold text-xs flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all shadow-md"
              >
                <span>Coordinar mi proyecto por WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* SERVICIOS & MANTENIMIENTO */}
      <section id="servicios" className="py-24 px-6 border-b border-white/15 bg-void relative z-10">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3 block font-bold">
                // SERVICIOS & ACOMPAÑAMIENTO
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
                {isEn ? 'Creation + Monthly Maintenance' : 'Construcción + Mantenimiento Mensual'}
              </h2>
            </div>
            <p className="text-xs font-mono text-zinc-400 max-w-sm">
              {isEn 
                ? 'We don’t abandon you after launch. We handle technical support, servers, and updates month by month.'
                : 'No te dejamos solo una vez entregada la web. Nos ocupamos del soporte técnico, servidores y actualizaciones mes a mes.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-8 rounded-2xl bg-zinc-950 border border-white/15 hover:border-white/35 transition-all group">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-white font-bold">01 // CREACIÓN COMPLETA</span>
                <Zap className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-3">Diseño & Programación a Medida</h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                Creamos tu web desde cero sin plantillas prefabricadas. Diseñada para convertir en móviles y optimizada para aparecer en Google en tu ciudad.
              </p>
              <div className="text-xs font-mono text-zinc-400 pt-4 border-t border-white/10 flex items-center justify-between">
                <span>PAGO ÚNICO DE DESARROLLO ({country.currency})</span>
                <span className="text-white group-hover:translate-x-1 transition-transform font-bold">Cotizar →</span>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-zinc-950 border border-white/15 hover:border-white/35 transition-all group">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-emerald-400 font-bold">02 // TRANQUILIDAD TOTAL</span>
                <ShieldCheck className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-3">Mantenimiento & Soporte Mensual</h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                Nosotros nos encargamos del hosting de alta velocidad, copias de seguridad semanales, cambios de fotos/precios y soporte directo por WhatsApp.
              </p>
              <div className="text-xs font-mono text-zinc-400 pt-4 border-t border-white/10 flex items-center justify-between">
                <span>ABONO MENSUAL FIJO ({country.currency})</span>
                <span className="text-white group-hover:translate-x-1 transition-transform font-bold">Cotizar →</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-6 relative overflow-hidden bg-black z-10">
        <div className="max-w-4xl mx-auto p-12 sm:p-16 rounded-3xl bg-zinc-950 border border-white/25 text-center relative shadow-[0_0_80px_rgba(255,255,255,0.08)]">
          
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4 block font-bold">
            [ INICIAR CONVERSACIÓN DIRECTA • {country.flag} ]
          </span>

          <h2 className="font-display text-3xl sm:text-6xl font-black text-white tracking-tight mb-6">
            Hagamos una web que dé orgullo mostrar.
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Sin formularios interminables ni intermediarios. Nos contás tu idea por WhatsApp y te armamos una propuesta técnica y económica hoy mismo.
          </p>

          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-white text-black font-display font-black text-base hover:bg-zinc-200 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Hablar por WhatsApp con Célere</span>
          </a>

        </div>
      </section>

      {/* =========================================================================
          FOOTER CON BARRA VERDECITA DE PERSONITAS 3D EXPLOSIVAS
         ========================================================================= */}
      <footer className="pt-12 pb-16 px-6 border-t border-white/15 bg-black text-xs font-mono text-zinc-400 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-white tracking-widest">CÉLERE</span>
            <span>// DIGITAL ENGINEERING STUDIO</span>
            <span>• Alicante, España ({new Date().getFullYear()})</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#demos" className="hover:text-white transition-colors">Demos</a>
            <a href="#scanner" className="hover:text-white transition-colors">Auditoría</a>
            <a href="#roi" className="hover:text-white transition-colors">Calculadora</a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
          </div>

        </div>

        {/* BARRA VERDECITA CON PERSONITAS 3D QUE EXPLOTAN AL CAERLES CÓDIGO */}
        <div className="max-w-7xl mx-auto h-9 rounded-xl bg-emerald-950/80 border border-emerald-500/40 px-4 flex items-center justify-between text-[11px] font-mono text-emerald-400 relative overflow-hidden select-none">
          <div className="flex items-center gap-2 z-10 pointer-events-none">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-bold">ZONA INTERACTIVA:</span>
            <span className="text-emerald-300 hidden sm:inline">Hacé clic en la pantalla para arrojar código sobre las personitas y verlas explotar</span>
          </div>

          <span className="text-[10px] text-emerald-400/80 font-bold z-10 pointer-events-none">
            [ WIREFRAME WALKERS 3D ]
          </span>
        </div>
      </footer>

    </div>
  );
}
