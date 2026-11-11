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
  ShoppingBag, 
  Calendar, 
  Utensils, 
  Stethoscope, 
  Briefcase, 
  Plus, 
  Clock, 
  MapPin, 
  Phone, 
  ChevronDown,
  Calculator,
  Compass,
  Award,
  Check,
  Send,
  Plane
} from 'lucide-react';

const WHATSAPP_PHONE = (import.meta.env.VITE_WHATSAPP_PHONE || '34600000000').replace(/\D/g, '');

function waLink(text: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

// Configuración de Países e Idiomas / Monedas
type CountryCode = 'ES' | 'AR' | 'US' | 'MX';

interface CountryConfig {
  code: CountryCode;
  name: string;
  flag: string;
  currency: string;
  lang: 'es' | 'en';
  phonePrefix: string;
  rateToEUR: number;
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
  const [currentScrollY, setCurrentScrollY] = useState(0);

  const country = COUNTRIES[selectedCountry];

  // Showroom State
  const [activeDemoTab, setActiveDemoTab] = useState<'gastro' | 'health' | 'fashion' | 'legal'>('gastro');
  const [demoDeviceView, setDemoDeviceView] = useState<'desktop' | 'mobile'>('desktop');

  // Demos States
  // 1. Gastronomía
  const [gastroCategory, setGastroCategory] = useState<'arroces' | 'carnes' | 'tapas' | 'vinos'>('arroces');
  const [reserveGuests, setReserveGuests] = useState('2 personas');
  const [reserveTime, setReserveTime] = useState('21:30 hs');
  const [reserveDate, setReserveDate] = useState('Hoy');

  // 2. Salud
  const [dentalTreatment, setDentalTreatment] = useState('Ortodoncia Invisible');
  const [dentalDoctor, setDentalDoctor] = useState('Dra. Valentina Ortiz');

  // 3. Moda
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Negro Carbón');
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Drop 04 // Sudadera Heavy Boxy", price: 45, size: "M", color: "Negro", count: 1 }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // 4. Legal
  const [legalArea, setLegalArea] = useState('Sociedad Limitada (SL) & Pacto de Socios');

  // Presupuestador Transparente (Reemplazo de la auditoría)
  const [calcType, setCalcType] = useState<'landing' | 'corp' | 'store' | 'redesign'>('corp');
  const [calcMaintenance, setCalcMaintenance] = useState<'pro' | 'basic' | 'none'>('pro');
  const [calcUrgency, setCalcUrgency] = useState<'standard' | 'express'>('standard');

  // Calculadora ROI adaptada por país
  const [monthlyVisits, setMonthlyVisits] = useState(country.defaultVisits);
  const [averageTicket, setAverageTicket] = useState(country.defaultTicket);

  useEffect(() => {
    setMonthlyVisits(country.defaultVisits);
    setAverageTicket(country.defaultTicket);
  }, [selectedCountry]);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setCurrentScrollY(scrollY);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Formateador de moneda según país
  const formatMoney = (baseEur: number) => {
    const value = Math.round(baseEur * country.rateToEUR);
    if (country.code === 'ES') return `${value} €`;
    if (country.code === 'US') return `$${value}`;
    return `$${value.toLocaleString()}`;
  };

  const whatsappUrl = waLink(
    country.lang === 'en'
      ? "Hello Célere! I would like to request a quote for a custom website with monthly maintenance."
      : "¡Hola Célere! Me gustaría consultar por un proyecto web a medida con servicio de mantenimiento mensual."
  );

  // =========================================================================
  // SISTEMA FÍSICO: CLIC + GIROSCOPIO MÓVIL + AVIONCITOS QUE TIRAN CÓDIGO + MUÑECOS 3D ADORABLES
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

    // Detección de Inclinación Móvil (Giroscopio)
    let tiltX = 0; // -1 a +1 según la inclinación
    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma !== null) {
        // gamma: -90 (izquierda) a 90 (derecha)
        tiltX = Math.max(-1.8, Math.min(1.8, e.gamma / 22));
      }
    };
    window.addEventListener('deviceorientation', handleOrientation);

    const codeSymbols = ['</>', '{}', '=>', '01', '//', 'div', 'px', 'git', '&&', '[]', 'const', 'fn()', 'npm', '€', '$'];
    const colors = ['#9ca3af', '#18181b', '#ef4444', '#22c55e', '#6b7280', '#10b981', '#38bdf8'];

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

    interface CuteWalker {
      id: number;
      x: number;
      y: number;
      baseSpeed: number;
      direction: number; // 1 o -1
      legAngle: number;
      bodyBounce: number;
      isExploded: boolean;
      respawnTimer: number;
      color: string;
      scale: number;
    }

    interface PlaneObj {
      x: number;
      y: number;
      vx: number;
      dropCooldown: number;
      altitude: number;
    }

    let particles: Particle[] = [];
    let shards: Shard[] = [];
    let planes: PlaneObj[] = [];
    let planeSpawnTimer = 0;

    // Personajes 3D rediseñados: Estilo Chibi / Astro-Bot amistoso y adorable
    const walkers: CuteWalker[] = [
      { id: 1, x: 90, y: height - 24, baseSpeed: 1.1, direction: 1, legAngle: 0, bodyBounce: 0, isExploded: false, respawnTimer: 0, color: '#38bdf8', scale: 1 },
      { id: 2, x: width * 0.35, y: height - 24, baseSpeed: 0.9, direction: -1, legAngle: 1.5, bodyBounce: 0, isExploded: false, respawnTimer: 0, color: '#a855f7', scale: 0.95 },
      { id: 3, x: width * 0.65, y: height - 24, baseSpeed: 1.3, direction: 1, legAngle: 3, bodyBounce: 0, isExploded: false, respawnTimer: 0, color: '#34d399', scale: 1.05 },
      { id: 4, x: width - 80, y: height - 24, baseSpeed: 1.0, direction: -1, legAngle: 4.5, bodyBounce: 0, isExploded: false, respawnTimer: 0, color: '#fbbf24', scale: 1 },
    ];

    const handleClick = (e: MouseEvent) => {
      const count = Math.floor(Math.random() * 3) + 3;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20,
          vx: (Math.random() - 0.5) * 4 + (tiltX * 1.5),
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
        if (!w.isExploded && Math.abs(e.clientX - w.x) < 30 && Math.abs(e.clientY - (height - 30)) < 40) {
          triggerExplosion(w);
        }
      });
    };

    const triggerExplosion = (w: CuteWalker) => {
      w.isExploded = true;
      w.respawnTimer = 160;
      for (let i = 0; i < 26; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 7 + 2;
        shards.push({
          x: w.x,
          y: height - 30,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 2.5,
          size: Math.random() * 4 + 2,
          opacity: 1
        });
      }
    };

    window.addEventListener('click', handleClick);

    let animationFrameId: number;
    let planeCycle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      planeCycle++;

      const isNearTop = window.scrollY < 650;
      const groundY = height - 16;

      // 1. GESTIÓN DE AVIONCITOS (Solo cuando estás en la parte superior)
      if (isNearTop) {
        planeSpawnTimer++;
        if (planeSpawnTimer > 240 && planes.length < 2) {
          planes.push({
            x: -60,
            y: 90 + Math.random() * 140,
            vx: 2.8 + Math.random() * 1.5,
            dropCooldown: 25,
            altitude: Math.random() * 10
          });
          planeSpawnTimer = 0;
        }

        for (let i = planes.length - 1; i >= 0; i--) {
          const plane = planes[i];
          plane.x += plane.vx;
          plane.y += Math.sin(planeCycle * 0.03 + plane.altitude) * 0.5;
          plane.dropCooldown--;

          // El avioncito suelta pedacitos de código en pleno vuelo
          if (plane.dropCooldown <= 0) {
            particles.push({
              x: plane.x + 10,
              y: plane.y + 12,
              vx: (Math.random() - 0.5) * 1.5 + (tiltX * 0.8),
              vy: Math.random() * 1.5 + 1.2,
              symbol: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
              color: colors[Math.floor(Math.random() * colors.length)],
              size: 13,
              opacity: 1,
              rotation: 0,
              rotSpeed: 0.04
            });
            plane.dropCooldown = Math.floor(Math.random() * 40) + 35;
          }

          // Dibujar avioncito de papel 3D minimalista
          ctx.save();
          ctx.translate(plane.x, plane.y);
          ctx.strokeStyle = '#ffffff';
          ctx.fillStyle = '#18181b';
          ctx.lineWidth = 1.5;

          // Cuerpo del avioncito
          ctx.beginPath();
          ctx.moveTo(25, 0); // nariz
          ctx.lineTo(-12, -9); // ala izquierda
          ctx.lineTo(-4, 0); // centro
          ctx.lineTo(-12, 9); // ala derecha
          ctx.closePath();
          ctx.fill();
          ctx.stroke();

          // Pliegue central
          ctx.beginPath();
          ctx.moveTo(25, 0);
          ctx.lineTo(-4, 0);
          ctx.strokeStyle = '#38bdf8';
          ctx.stroke();

          ctx.restore();

          if (plane.x > width + 70) {
            planes.splice(i, 1);
          }
        }
      } else {
        planes = []; // Se ocultan al bajar para no molestar
      }

      // 2. PERSONITAS ADORABLES (Afectadas por el giroscopio y tilt móvil)
      walkers.forEach(w => {
        if (w.isExploded) {
          w.respawnTimer--;
          if (w.respawnTimer <= 0) {
            w.isExploded = false;
            w.x = w.direction === 1 ? -30 : width + 30;
          }
          return;
        }

        // Si el celular se inclina hacia la derecha, aceleran hacia la derecha; si se inclina a la izquierda, van a la izquierda
        const tiltForce = tiltX * 3.5;
        const currentSpeed = (w.baseSpeed * w.direction) + tiltForce;

        w.x += currentSpeed;
        w.legAngle += 0.14 * Math.abs(currentSpeed || 1);
        w.bodyBounce = Math.abs(Math.sin(w.legAngle)) * 3;

        // Desaparición por los bordes
        if (w.x > width + 40) {
          w.x = -35;
        } else if (w.x < -40) {
          w.x = width + 35;
        }

        const px = w.x;
        const py = groundY - w.bodyBounce;
        const legSwing = Math.sin(w.legAngle) * 7;
        const armSwing = Math.cos(w.legAngle) * 6;

        ctx.save();
        ctx.strokeStyle = '#ffffff';
        ctx.fillStyle = '#064e3b'; // Relleno verde oscuro a tono con la barra
        ctx.lineWidth = 1.7;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        // Cabeza Chibi redondita y simpática (tipo casco/auriculares)
        const headY = py - 26;
        ctx.beginPath();
        ctx.arc(px, headY, 7.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Visor / Ojitos tiernos
        ctx.fillStyle = w.color;
        ctx.beginPath();
        const faceDir = currentSpeed >= 0 ? 1 : -1;
        ctx.arc(px + (faceDir * 3.5), headY - 1, 2.2, 0, Math.PI * 2);
        ctx.fill();

        // Pequeña antenita o detalle tecnológico lindo
        ctx.beginPath();
        ctx.moveTo(px, headY - 7.5);
        ctx.lineTo(px, headY - 11);
        ctx.stroke();
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(px, headY - 12, 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Torso gordito y amigable
        ctx.beginPath();
        ctx.roundRect(px - 5, headY + 8, 10, 10, 3);
        ctx.fill();
        ctx.stroke();

        // Bracitos redondeados en balanceo
        ctx.beginPath();
        ctx.moveTo(px - 4, headY + 11);
        ctx.lineTo(px - 7 - (armSwing * 0.7), py - 7);
        ctx.moveTo(px + 4, headY + 11);
        ctx.lineTo(px + 7 + (armSwing * 0.7), py - 7);
        ctx.stroke();

        // Piernitas simpáticas cortitas
        ctx.beginPath();
        ctx.moveTo(px - 2.5, py - 8);
        ctx.lineTo(px - 3 - legSwing, groundY);
        ctx.moveTo(px + 2.5, py - 8);
        ctx.lineTo(px + 3 + legSwing, groundY);
        ctx.stroke();

        ctx.restore();
      });

      // 3. PARTÍCULAS DE CÓDIGO CAYENDO (Afectadas por el giroscopio)
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx + (tiltX * 0.7);
        p.y += p.vy;
        p.vy += 0.22;
        p.rotation += p.rotSpeed;
        p.opacity -= 0.007;

        // Colisión con los muñequitos: si les cae código, EXPLOTAN
        walkers.forEach(w => {
          if (!w.isExploded) {
            const dx = Math.abs(p.x - w.x);
            const dy = Math.abs(p.y - (groundY - 18));
            if (dx < 22 && dy < 28) {
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

      // 4. PEDACITOS BLANCOS DE EXPLOSIÓN
      for (let i = shards.length - 1; i >= 0; i--) {
        const s = shards[i];
        s.x += s.vx + (tiltX * 0.5);
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
      window.removeEventListener('deviceorientation', handleOrientation);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Manejo de carrito de la demo de moda
  const addToCart = (name: string, price: number) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.name === name && item.size === selectedSize);
      if (existing) {
        return prev.map(item => item === existing ? { ...item, count: item.count + 1 } : item);
      }
      return [...prev, { id: Date.now(), name, price, size: selectedSize, color: selectedColor, count: 1 }];
    });
    setIsCartOpen(true);
  };

  const cartTotal = cartItems.reduce((acc, curr) => acc + (curr.price * curr.count), 0);
  const cartTotalItems = cartItems.reduce((acc, curr) => acc + curr.count, 0);

  // Cálculos del Presupuestador Transparente en €
  const calculateBudget = () => {
    let base = 750;
    if (calcType === 'landing') base = 390;
    if (calcType === 'corp') base = 750;
    if (calcType === 'store') base = 1150;
    if (calcType === 'redesign') base = 480;

    let monthly = 49;
    if (calcMaintenance === 'basic') monthly = 29;
    if (calcMaintenance === 'pro') monthly = 49;
    if (calcMaintenance === 'none') monthly = 0;

    let urgencyCost = 0;
    if (calcUrgency === 'express') urgencyCost = 150;

    return {
      initialTotal: base + urgencyCost,
      monthlyTotal: monthly,
      days: calcUrgency === 'express' ? '48 horas' : '5 a 7 días'
    };
  };

  const budget = calculateBudget();

  // Cálculos ROI
  const conversionsTraditional = Math.max(1, Math.round(monthlyVisits * 0.008));
  const conversionsCelere = Math.round(monthlyVisits * 0.034);
  const revenueTraditional = conversionsTraditional * averageTicket;
  const revenueCelere = conversionsCelere * averageTicket;
  const extraRevenue = revenueCelere - revenueTraditional;

  const isEn = country.lang === 'en';

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black relative">
      
      {/* Canvas interactivo para física de avioncitos, código cayendo y personajes */}
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 pointer-events-none z-50 w-full h-full"
      />

      <div 
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-zinc-500 via-white to-zinc-400 z-[70] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none -z-20" />

      {/* =========================================================================
          FONDO DE CÓDIGO ANIMADO (DESDE EL HERO HASTA EL SHOWROOM)
         ========================================================================= */}
      <div className="absolute top-0 left-0 right-0 h-[1900px] pointer-events-none overflow-hidden select-none z-0 opacity-[0.14]">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-purple-800/25 via-emerald-800/10 to-transparent blur-[160px]" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 pt-24 font-mono text-[11px] leading-relaxed">
          <div className="space-y-1 text-zinc-400">
            <div className="text-emerald-400 font-bold">// 01: CELERE_CORE_ENGINE.ts</div>
            <div>import &#123; createEngine, CloudflareEdge &#125; from '@celere/kernel';</div>
            <div className="text-zinc-600">/* Location: Alicante, Comunidad Valenciana, ES */</div>
            <div>const studio = createEngine(&#123; region: 'eu-west-spain', latency: '0.38ms' &#125;);</div>
            <div className="text-emerald-400">await studio.verifyLighthouseScores(&#123; performance: 99 &#125;);</div>
            <div className="pt-2 text-purple-400">export default studio.compile();</div>
          </div>

          <div className="space-y-1 text-zinc-400 hidden md:block">
            <div className="text-sky-400 font-bold">// 02: WHATSAPP_ROUTER.tsx</div>
            <div>export function dispatchDirectOrder(cart: Order) &#123;</div>
            <div className="pl-4 text-emerald-400">const url = `https://wa.me/$&#123;phone&#125;?text=$&#123;cart.encoded&#125;`;</div>
            <div className="pl-4 text-purple-300">return window.open(url, '_blank');</div>
            <div>&#125;</div>
          </div>

          <div className="space-y-1 text-zinc-400 hidden md:block">
            <div className="text-purple-400 font-bold">// 03: MONTHLY_MAINTENANCE.sh</div>
            <div className="text-emerald-300">ssl_cert_status="VALID (Let's Encrypt)"</div>
            <div className="text-emerald-300">uptime_status="99.98% OK"</div>
            <div>sync_prices_to_cdn --instant</div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          NAVBAR: BOTÓN LIMPIO DE CONTACTO / HABLEMOS
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

          {/* Menú visible */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-950 p-1.5 rounded-xl border border-white/15 shadow-inner">
            <a 
              href="#demos" 
              className="px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider text-zinc-300 hover:text-white hover:bg-white/10 transition-all"
            >
              {isEn ? 'LIVE DEMOS' : 'DEMOS EN VIVO'}
            </a>
            <a 
              href="#presupuesto" 
              className="px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider text-zinc-300 hover:text-white hover:bg-white/10 transition-all"
            >
              {isEn ? 'PRICE ESTIMATOR' : 'PRESUPUESTADOR'}
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
            
            {/* Selector de País */}
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

            {/* BOTÓN LIMPIO Y DIRECTO: HABLEMOS / CONTACTAR */}
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider font-bold bg-white text-black hover:bg-zinc-200 transition-all duration-200 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:scale-105"
            >
              <span>{isEn ? 'Get in Touch' : 'Hablemos'}</span>
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
            <a href="#presupuesto" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg text-sm text-zinc-200 font-bold hover:bg-white/10">
              {isEn ? 'Price Estimator' : 'Presupuestador Inmediato'}
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
              <span>{isEn ? 'Chat via WhatsApp' : 'Contactar por WhatsApp'}</span>
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
            Páginas web que <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-600">
              destruyen lo genérico.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl font-normal leading-relaxed mb-12">
            Diseñamos la presencia web a medida de tu negocio en Alicante y toda España, encargándonos del soporte mensual, hosting ultra rápido y actualizaciones para que vos solo atiendas clientes.
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

          {/* Aviso sutil de los avioncitos */}
          <div className="mt-8 text-[11px] font-mono text-zinc-500 flex items-center gap-2">
            <Plane className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
            <span>Mira los aviones volando arriba soltando código sobre los muñecos del footer</span>
          </div>

          <div className="mt-12 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="p-4 rounded-xl bg-zinc-950/90 border border-white/15">
              <span className="text-[10px] font-mono text-zinc-400 uppercase block mb-1">Carga Rápida</span>
              <div className="text-2xl font-display font-bold text-white flex items-center gap-2">
                0.4s <span className="text-emerald-400 text-xs font-mono font-normal">Instantánea</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950/90 border border-white/15">
              <span className="text-[10px] font-mono text-zinc-400 uppercase block mb-1">Optimización Móvil</span>
              <div className="text-2xl font-display font-bold text-white flex items-center gap-2">
                100% <span className="text-zinc-400 text-xs font-mono font-normal">WhatsApp Ready</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950/90 border border-white/15">
              <span className="text-[10px] font-mono text-zinc-400 uppercase block mb-1">Mantenimiento</span>
              <div className="text-2xl font-display font-bold text-white flex items-center gap-2">
                Mensual <span className="text-emerald-400 text-xs font-mono font-normal">{country.currency}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950/90 border border-white/15">
              <span className="text-[10px] font-mono text-zinc-400 uppercase block mb-1">Entrega Inicial</span>
              <div className="text-2xl font-display font-bold text-white flex items-center gap-2">
                3-5 Días <span className="text-zinc-400 text-xs font-mono font-normal">Rápida</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SHOWROOM: PÁGINAS COMPLETÍSIMAS, RICAS Y NADA TECNOLÓGICAS
         ========================================================================= */}
      <section id="demos" className="py-24 px-6 border-b border-white/15 bg-black relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3 block font-bold">
              // MUESTRAS COMPLETAS Y PERSONALIZADAS ({country.currency})
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
              Páginas completas con la identidad real de cada negocio
            </h2>
            <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
              Muestras con navegación real, secciones completas, fotos, testimonios, cartas gastronómicas y módulos de compra o reserva listos para vender.
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
                <span>1. Restaurante & Brasas (Cálido & Gourmet)</span>
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
                <span>2. Clínica Dental (Blanco Médico & Confianza)</span>
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
                <span>3. Tienda de Ropa (Lookbook Editorial)</span>
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
                <span>4. Despacho Jurídico (Serio & Prestigioso)</span>
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
                  {activeDemoTab === 'gastro' && 'aurabistro.es/carta'}
                  {activeDemoTab === 'health' && 'novadental.es/cita-previa'}
                  {activeDemoTab === 'fashion' && 'kromastudio.es/lookbook'}
                  {activeDemoTab === 'legal' && 'apexabogados.es'}
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
                
                {/* 1. DEMO GASTRONOMÍA COMPLETA (Aura Bistro // Alicante) */}
                {activeDemoTab === 'gastro' && (
                  <div className="bg-[#16120e] text-[#fbf6ee] p-6 sm:p-10 font-serif text-left space-y-8">
                    
                    {/* Barra Superior del Restaurante */}
                    <div className="flex justify-between items-center text-xs font-sans text-[#a89989] pb-3 border-b border-[#31261e]">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#d97706]" />
                        <span>Paseo de la Explanada de España 12, Alicante</span>
                      </div>
                      <div className="hidden sm:flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-[#d97706]" />
                        <span>Tel: 965 21 88 XX</span>
                      </div>
                    </div>

                    {/* Header Restaurante */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#31261e] gap-4">
                      <div>
                        <span className="text-[11px] uppercase tracking-[0.25em] text-[#d97706] font-sans font-bold">
                          Cocina de Brasas, Arroces & Vinos DO Alicante
                        </span>
                        <h3 className="text-3xl sm:text-4xl font-normal text-[#fbf6ee] mt-1 font-serif">
                          Aura Bistro & Arrocería
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 bg-[#251d17] px-3.5 py-1.5 rounded-full border border-[#d97706]/30 text-xs font-sans">
                        <Star className="w-3.5 h-3.5 fill-[#d97706] text-[#d97706]" />
                        <span className="font-bold text-white">4.9 / 5</span>
                        <span className="text-[#a89989]">(280+ reseñas)</span>
                      </div>
                    </div>

                    {/* Menú y Categorías */}
                    <div className="font-sans">
                      <div className="flex gap-2 pb-2 overflow-x-auto">
                        <button
                          onClick={() => setGastroCategory('arroces')}
                          className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 ${
                            gastroCategory === 'arroces' ? 'bg-[#d97706] text-black shadow-md' : 'bg-[#251d17] text-[#c7b9a9]'
                          }`}
                        >
                          Arroces a la Leña
                        </button>
                        <button
                          onClick={() => setGastroCategory('carnes')}
                          className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 ${
                            gastroCategory === 'carnes' ? 'bg-[#d97706] text-black shadow-md' : 'bg-[#251d17] text-[#c7b9a9]'
                          }`}
                        >
                          Carnes Maduradas
                        </button>
                        <button
                          onClick={() => setGastroCategory('tapas')}
                          className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 ${
                            gastroCategory === 'tapas' ? 'bg-[#d97706] text-black shadow-md' : 'bg-[#251d17] text-[#c7b9a9]'
                          }`}
                        >
                          Tapas & Entrantes
                        </button>
                      </div>
                    </div>

                    {/* Platos */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {gastroCategory === 'arroces' && (
                        <>
                          <div className="p-4 rounded-xl bg-[#201813] border border-[#382b22] flex justify-between items-start">
                            <div>
                              <h4 className="text-base font-serif text-[#fbf6ee]">Arroz a Banda Tradicional de Santa Pola</h4>
                              <p className="text-xs text-[#a89989] font-sans mt-1">Con sepia fresca, fondo de pescado de roca de la lonja y alioli casero de mortero.</p>
                              <span className="inline-block mt-2 text-[10px] uppercase font-sans tracking-wider text-[#d97706] font-bold">★ El más pedido</span>
                            </div>
                            <span className="text-base font-serif font-bold text-[#d97706] ml-4">{formatMoney(19)}</span>
                          </div>

                          <div className="p-4 rounded-xl bg-[#201813] border border-[#382b22] flex justify-between items-start">
                            <div>
                              <h4 className="text-base font-serif text-[#fbf6ee]">Arroz Meloso con Gamba Roja de Dénia</h4>
                              <p className="text-xs text-[#a89989] font-sans mt-1">Gamba roja premium, alcachofas de la vega baja y azafrán en hebra.</p>
                            </div>
                            <span className="text-base font-serif font-bold text-[#d97706] ml-4">{formatMoney(24)}</span>
                          </div>
                        </>
                      )}

                      {gastroCategory === 'carnes' && (
                        <>
                          <div className="p-4 rounded-xl bg-[#201813] border border-[#382b22] flex justify-between items-start">
                            <div>
                              <h4 className="text-base font-serif text-[#fbf6ee]">Chuletón de Vaca Rubia Gallega (650g)</h4>
                              <p className="text-xs text-[#a89989] font-sans mt-1">Maduración dry-aged 45 días, asado a la brasa con sal marina de Santa Pola.</p>
                            </div>
                            <span className="text-base font-serif font-bold text-[#d97706] ml-4">{formatMoney(36)}</span>
                          </div>

                          <div className="p-4 rounded-xl bg-[#201813] border border-[#382b22] flex justify-between items-start">
                            <div>
                              <h4 className="text-base font-serif text-[#fbf6ee]">Solomillo Ibérico con Reducción de Fondillón</h4>
                              <p className="text-xs text-[#a89989] font-sans mt-1">Con salsa de vino dulce Fondillón de Alicante y patatas panaderas.</p>
                            </div>
                            <span className="text-base font-serif font-bold text-[#d97706] ml-4">{formatMoney(22)}</span>
                          </div>
                        </>
                      )}

                      {gastroCategory === 'tapas' && (
                        <>
                          <div className="p-4 rounded-xl bg-[#201813] border border-[#382b22] flex justify-between items-start">
                            <div>
                              <h4 className="text-base font-serif text-[#fbf6ee]">Jamón Ibérico 100% de Bellota</h4>
                              <p className="text-xs text-[#a89989] font-sans mt-1">Con tostas de pan de cristal y tomate rallado con aceite virgen de Jaén.</p>
                            </div>
                            <span className="text-base font-serif font-bold text-[#d97706] ml-4">{formatMoney(21)}</span>
                          </div>

                          <div className="p-4 rounded-xl bg-[#201813] border border-[#382b22] flex justify-between items-start">
                            <div>
                              <h4 className="text-base font-serif text-[#fbf6ee]">Croquetas Caseras de Carabinero (4 uds)</h4>
                              <p className="text-xs text-[#a89989] font-sans mt-1">Bechamel cremosa con fondo de marisco y velo de papada ibérica.</p>
                            </div>
                            <span className="text-base font-serif font-bold text-[#d97706] ml-4">{formatMoney(12)}</span>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Módulo de Reserva de Mesa */}
                    <div className="p-6 rounded-2xl bg-[#1c1510] border border-[#d97706]/40 font-sans">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                        <div>
                          <span className="text-xs uppercase tracking-widest text-[#d97706] font-bold">RESERVAS EN EL ACTO</span>
                          <h4 className="text-lg font-serif text-[#fbf6ee] mt-0.5">Terraza o Salón Climatizado</h4>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-[#a89989]">
                          <Clock className="w-3.5 h-3.5 text-[#d97706]" />
                          <span>Respuesta inmediata en WhatsApp</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                        <div>
                          <label className="text-[10px] text-[#a89989] block mb-1">DÍA</label>
                          <select 
                            value={reserveDate}
                            onChange={(e) => setReserveDate(e.target.value)}
                            className="w-full bg-[#14100c] border border-[#382b22] rounded-lg px-3 py-2 text-xs text-[#fbf6ee]"
                          >
                            <option>Hoy</option>
                            <option>Mañana</option>
                            <option>Viernes</option>
                            <option>Sábado</option>
                            <option>Domingo</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-[10px] text-[#a89989] block mb-1">HORA</label>
                          <select 
                            value={reserveTime}
                            onChange={(e) => setReserveTime(e.target.value)}
                            className="w-full bg-[#14100c] border border-[#382b22] rounded-lg px-3 py-2 text-xs text-[#fbf6ee]"
                          >
                            <option>14:00 hs (Almuerzo)</option>
                            <option>15:00 hs (Almuerzo)</option>
                            <option>21:00 hs (Cena)</option>
                            <option>22:15 hs (Cena)</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-[10px] text-[#a89989] block mb-1">PERSONAS</label>
                          <select 
                            value={reserveGuests}
                            onChange={(e) => setReserveGuests(e.target.value)}
                            className="w-full bg-[#14100c] border border-[#382b22] rounded-lg px-3 py-2 text-xs text-[#fbf6ee]"
                          >
                            <option>2 comensales</option>
                            <option>4 comensales</option>
                            <option>6 comensales</option>
                            <option>8 o más (Grupo)</option>
                          </select>
                        </div>
                      </div>

                      <a 
                        href={waLink(`Hola Aura Bistro Alicante, quiero reservar mesa para ${reserveGuests} el día ${reserveDate} a las ${reserveTime}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 rounded-xl bg-[#d97706] hover:bg-[#b45309] text-black font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Confirmar Reserva de Mesa por WhatsApp</span>
                      </a>
                    </div>

                  </div>
                )}

                {/* 2. DEMO CLÍNICA DENTAL COMPLETA (Nova Dental // Alicante) */}
                {activeDemoTab === 'health' && (
                  <div className="bg-white text-slate-800 p-6 sm:p-10 font-sans text-left space-y-6">
                    
                    {/* Top Bar Clínica */}
                    <div className="flex justify-between items-center text-xs text-slate-500 pb-3 border-b border-slate-100">
                      <span>Colegio Oficial de Odontólogos de Alicante (COEA) • Nº 03/2941</span>
                      <span className="font-semibold text-emerald-700">Urgencias: 965 14 XX XX</span>
                    </div>

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                            Clínica Dental Avanzada • Alicante Centro
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                          Nova Odontología <span className="text-sky-600 font-light">& Estética</span>
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5">Av. de la Estación 14, Alicante (Frente a Renfe)</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-800 text-xs font-bold border border-sky-200">
                          Financiación 12 meses sin intereses
                        </span>
                      </div>
                    </div>

                    {/* Tratamientos */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <h4 className="text-sm font-bold text-slate-900">Ortodoncia Invisible</h4>
                        <p className="text-xs text-slate-600 mt-1">Alineadores transparentes Invisalign con simulación 3D en la 1ª cita.</p>
                        <span className="text-xs font-bold text-sky-700 mt-2 block">
                          Desde {formatMoney(1600)}
                        </span>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <h4 className="text-sm font-bold text-slate-900">Implantes de Carga Inmediata</h4>
                        <p className="text-xs text-slate-600 mt-1">Cirugía guiada por ordenador. Dientes fijos en 24 horas.</p>
                        <span className="text-xs font-bold text-sky-700 mt-2 block">
                          Desde {formatMoney(650)}
                        </span>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <h4 className="text-sm font-bold text-slate-900">Blanqueamiento & Carillas</h4>
                        <p className="text-xs text-slate-600 mt-1">Carillas de porcelana ultrafinas sin tallar tu diente.</p>
                        <span className="text-xs font-bold text-sky-700 mt-2 block">
                          Desde {formatMoney(180)}
                        </span>
                      </div>
                    </div>

                    {/* Turnero Interactivo */}
                    <div className="p-6 rounded-2xl bg-sky-50/70 border border-sky-200 space-y-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-xs font-bold text-sky-800 uppercase tracking-wider block">CITA PREVIA ONLINE</span>
                          <h4 className="text-base font-bold text-slate-900">Primera visita y radiografía panorámica gratuita</h4>
                        </div>
                        <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                          Agenda abierta hoy
                        </span>
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

                      <div className="pt-2 border-t border-sky-200/60 flex flex-col sm:flex-row items-center justify-between gap-3">
                        <div className="text-xs text-slate-600">
                          Especialista asignada: <span className="font-bold text-slate-900">{dentalDoctor}</span>
                        </div>
                        <a 
                          href={waLink(`Hola Nova Odontología Alicante, quiero pedir cita para ${dentalTreatment} con ${dentalDoctor}.`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
                        >
                          <Calendar className="w-4 h-4" />
                          <span>Solicitar Cita por WhatsApp</span>
                        </a>
                      </div>
                    </div>

                  </div>
                )}

                {/* 3. DEMO TIENDA MODA COMPLETA (Kroma Studio // España) */}
                {activeDemoTab === 'fashion' && (
                  <div className="bg-zinc-100 text-zinc-900 p-6 sm:p-10 font-sans text-left space-y-6">
                    
                    <div className="text-center py-1.5 px-4 rounded-lg bg-black text-white text-[11px] font-bold tracking-wider">
                      ✦ ENVIOS EN 24/48H EN ESPAÑA • CAMBIOS GRATIS EN 30 DÍAS ✦
                    </div>

                    <div className="flex items-center justify-between pb-6 border-b border-zinc-200">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                          DROP 04 // SEASON 2026
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
                        <span>Cesta ({cartTotalItems})</span>
                      </button>
                    </div>

                    {/* Selector de Talla */}
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

                    {/* Productos */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      <div className="p-4 rounded-xl bg-white border border-zinc-200 shadow-sm flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded uppercase">En Stock</span>
                            <span className="text-base font-black text-black">{formatMoney(45)}</span>
                          </div>
                          <h4 className="text-base font-bold text-zinc-900">Heavy Boxy Hoodie Black</h4>
                          <p className="text-xs text-zinc-600 mt-1">Algodón pesado peinado de 450 GSM. Confeccionado en talleres de Portugal.</p>
                        </div>
                        <button
                          onClick={() => addToCart("Heavy Boxy Hoodie Black", 45)}
                          className="mt-4 w-full py-2.5 rounded bg-black hover:bg-zinc-800 text-white text-xs font-bold flex items-center justify-center gap-1.5"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Añadir a la Cesta (Talla {selectedSize})</span>
                        </button>
                      </div>

                      <div className="p-4 rounded-xl bg-white border border-zinc-200 shadow-sm flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded uppercase">Últimas Unidades</span>
                            <span className="text-base font-black text-black">{formatMoney(55)}</span>
                          </div>
                          <h4 className="text-base font-bold text-zinc-900">Pantalón Cargo Wide Leg</h4>
                          <p className="text-xs text-zinc-600 mt-1">Tejido técnico ripstop impermeable con 6 bolsillos y ajuste en tobillos.</p>
                        </div>
                        <button
                          onClick={() => addToCart("Pantalón Cargo Wide Leg", 55)}
                          className="mt-4 w-full py-2.5 rounded bg-black hover:bg-zinc-800 text-white text-xs font-bold flex items-center justify-center gap-1.5"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Añadir a la Cesta (Talla {selectedSize})</span>
                        </button>
                      </div>

                    </div>

                    {/* Resumen del pedido en WhatsApp */}
                    {cartItems.length > 0 && (
                      <div className="p-4 rounded-xl bg-white border-2 border-black space-y-3 shadow-md">
                        <div className="flex justify-between items-center text-xs font-bold border-b border-zinc-200 pb-2">
                          <span>RESUMEN DEL PEDIDO ({cartTotalItems} prendas)</span>
                          <span className="text-emerald-700">Envío Gratis</span>
                        </div>
                        <div className="space-y-1">
                          {cartItems.map((item, idx) => (
                            <div key={idx} className="flex justify-between text-xs text-zinc-700">
                              <span>{item.name} ({item.size}) x{item.count}</span>
                              <span className="font-bold text-black">{formatMoney(item.price * item.count)}</span>
                            </div>
                          ))}
                        </div>
                        <div className="pt-2 border-t border-zinc-200 flex justify-between font-bold text-sm">
                          <span>TOTAL:</span>
                          <span>{formatMoney(cartTotal)}</span>
                        </div>
                        <a 
                          href={waLink(`Hola Kroma Studio! Quiero comprar: ${cartItems.map(i => `${i.name} (Talla ${i.size}) x${i.count}`).join(', ')} por un total de ${formatMoney(cartTotal)}.`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-3 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Finalizar Pedido por WhatsApp</span>
                        </a>
                      </div>
                    )}

                  </div>
                )}

                {/* 4. DEMO DESPACHO JURÍDICO COMPLETA (Apex Abogados // Alicante) */}
                {activeDemoTab === 'legal' && (
                  <div className="bg-[#0f172a] text-[#f8fafc] p-6 sm:p-10 font-serif text-left space-y-6">
                    
                    <div className="flex justify-between items-center text-xs font-sans text-slate-400 pb-3 border-b border-slate-700">
                      <span>Ilustre Colegio de la Abogacía de Alicante (ICALI)</span>
                      <span>Sede: Plaza Gabriel Miró 4, Alicante</span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-700 gap-4">
                      <div>
                        <span className="text-xs font-sans tracking-[0.2em] text-amber-200 uppercase font-semibold">
                          Despacho de Abogados de Empresa & Mercantil
                        </span>
                        <h3 className="text-3xl font-normal text-white mt-1">
                          Apex & Asociados Abogados
                        </h3>
                        <p className="text-xs text-slate-400 font-sans mt-1">Especialistas en asesoramiento societario, fiscal y laboral para empresas.</p>
                      </div>

                      <div className="px-3.5 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 font-sans text-xs">
                        Atención Confidencial
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-sans">
                      <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
                        <h4 className="text-sm font-bold text-amber-200">Derecho Mercantil & SL</h4>
                        <p className="text-xs text-slate-400">Constitución rápida de Sociedades Limitadas, pactos de socios y fusiones.</p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
                        <h4 className="text-sm font-bold text-amber-200">Laboral & Seguridad Social</h4>
                        <p className="text-xs text-slate-400">Contratos de alta dirección, despidos objetivos y representación en SMAC.</p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
                        <h4 className="text-sm font-bold text-amber-200">Fiscalidad Inmobiliaria</h4>
                        <p className="text-xs text-slate-400">Asesoramiento legal para no residentes y compraventas en la Costa Blanca.</p>
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700 font-sans space-y-4">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-amber-200 font-bold">CONSULTA PROFESIONAL</span>
                        <h4 className="text-base font-bold text-white">Reunión presencial en despacho o videoconferencia</h4>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {[
                          'Sociedad Limitada (SL) & Pacto de Socios',
                          'Conflicto Laboral de Empresa',
                          'Compraventa Inmobiliaria en Alicante',
                          'Reclamación de Deudas Comerciales'
                        ].map((m) => (
                          <button
                            key={m}
                            onClick={() => setLegalArea(m)}
                            className={`p-3 rounded-lg text-xs font-medium text-left transition-all ${
                              legalArea === m 
                                ? 'bg-amber-200 text-slate-900 font-bold' 
                                : 'bg-slate-900 text-slate-300 border border-slate-700'
                            }`}
                          >
                            {m}
                          </button>
                        ))}
                      </div>

                      <a 
                        href={waLink(`Hola Apex Abogados Alicante, solicito consulta sobre: ${legalArea}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 rounded-xl bg-amber-200 hover:bg-amber-100 text-slate-900 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
                      >
                        <Briefcase className="w-4 h-4" />
                        <span>Solicitar Cita con un Abogado por WhatsApp</span>
                      </a>
                    </div>

                  </div>
                )}

              </div>
            </div>

            <div className="bg-zinc-900/90 px-6 py-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
              <span className="text-xs text-zinc-400">
                ¿Querés una web a medida con esta misma identidad para tu negocio?
              </span>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-white text-black font-display font-bold text-xs hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-sm"
              >
                <span>Cotizar una web como esta con Célere</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          NUEVA SECCIÓN: PRESUPUESTADOR TRANSPARENTE EN 3 PASOS (SIN RODEOS)
         ========================================================================= */}
      <section id="presupuesto" className="py-24 px-6 border-b border-white/15 bg-zinc-950 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3 block font-bold">
              // PRECIOS CLAROS Y TRANSPARENTES ({country.currency})
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
              Calculá tu presupuesto en 3 clics
            </h2>
            <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
              Sin presupuestos inflados ni sorpresas. Seleccioná lo que necesita tu negocio y conocé el precio estimado de desarrollo y mantenimiento mensual.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Opciones */}
            <div className="lg:col-span-7 space-y-6 p-6 sm:p-8 rounded-2xl bg-black border border-white/15 font-mono">
              
              {/* Paso 1: Tipo de Web */}
              <div>
                <label className="text-xs text-zinc-400 uppercase tracking-wider block mb-3 font-bold">
                  1. TIPO DE PROYECTO
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { id: 'landing', label: 'Landing Page Rápida', price: 390 },
                    { id: 'corp', label: 'Web Corporativa Completa', price: 750 },
                    { id: 'store', label: 'Tienda Online / Catálogo', price: 1150 },
                    { id: 'redesign', label: 'Rediseño & Aceleración', price: 480 },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setCalcType(item.id as any)}
                      className={`p-3.5 rounded-xl text-left border transition-all ${
                        calcType === item.id 
                          ? 'bg-white text-black font-bold border-white shadow-sm' 
                          : 'bg-zinc-900 text-zinc-300 border-white/10 hover:border-white/30'
                      }`}
                    >
                      <div className="text-xs">{item.label}</div>
                      <div className={`text-xs mt-1 ${calcType === item.id ? 'text-zinc-600' : 'text-zinc-400'}`}>
                        {formatMoney(item.price)}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Paso 2: Plan de Mantenimiento Mensual */}
              <div>
                <label className="text-xs text-zinc-400 uppercase tracking-wider block mb-3 font-bold">
                  2. PLAN DE MANTENIMIENTO MENSUAL
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'pro', label: 'Pro (Recomendado)', desc: 'Hosting rápido + soporte WhatsApp + cambios ilimitados', price: 49 },
                    { id: 'basic', label: 'Básico', desc: 'Hosting rápido + copias semanales + SSL', price: 29 },
                    { id: 'none', label: 'Sin Abono', desc: 'Te entregamos el código y te autogestionas', price: 0 },
                  ].map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setCalcMaintenance(m.id as any)}
                      className={`p-3 rounded-xl text-left border transition-all ${
                        calcMaintenance === m.id 
                          ? 'bg-white text-black font-bold border-white' 
                          : 'bg-zinc-900 text-zinc-300 border-white/10 hover:border-white/30'
                      }`}
                    >
                      <div className="text-xs">{m.label}</div>
                      <div className="text-[10px] text-zinc-500 mt-1">{m.desc}</div>
                      <div className="text-xs font-bold mt-2">
                        {m.price === 0 ? '0 €' : `${formatMoney(m.price)}/mes`}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Paso 3: Urgencia de Entrega */}
              <div>
                <label className="text-xs text-zinc-400 uppercase tracking-wider block mb-3 font-bold">
                  3. PLAZO DE ENTREGA
                </label>
                <div className="grid grid-cols-2 gap-2.5 text-xs">
                  <button
                    onClick={() => setCalcUrgency('standard')}
                    className={`p-3 rounded-xl text-left border ${
                      calcUrgency === 'standard' ? 'bg-white text-black font-bold border-white' : 'bg-zinc-900 text-zinc-300 border-white/10'
                    }`}
                  >
                    <div>Estándar (5 a 7 días)</div>
                    <div className="text-[10px] text-zinc-500 mt-0.5">Sin coste adicional</div>
                  </button>
                  <button
                    onClick={() => setCalcUrgency('express')}
                    className={`p-3 rounded-xl text-left border ${
                      calcUrgency === 'express' ? 'bg-white text-black font-bold border-white' : 'bg-zinc-900 text-zinc-300 border-white/10'
                    }`}
                  >
                    <div>Express (48 horas)</div>
                    <div className="text-[10px] text-zinc-500 mt-0.5">+{formatMoney(150)} prioridad máxima</div>
                  </button>
                </div>
              </div>

            </div>

            {/* Ficha Resumen del Presupuesto */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-black border border-white/20 font-mono space-y-5 shadow-2xl">
              
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <span className="text-xs uppercase tracking-widest text-zinc-400 font-bold">PRESUPUESTO ESTIMADO</span>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
                  ENTREGA EN {budget.days.toUpperCase()}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-xs">
                  <span className="text-zinc-400">Desarrollo inicial a medida:</span>
                  <span className="text-white font-bold">{formatMoney(budget.initialTotal)}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-zinc-400">Mantenimiento y soporte mensual:</span>
                  <span className="text-emerald-400 font-bold">
                    {budget.monthlyTotal === 0 ? '0 €' : `${formatMoney(budget.monthlyTotal)} /mes`}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/10 text-xs text-zinc-300 space-y-2">
                <div className="text-white font-bold flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Incluido con Célere:</span>
                </div>
                <ul className="text-[11px] text-zinc-400 space-y-1 list-disc list-inside">
                  <li>Diseño único adaptable a móviles y tablets</li>
                  <li>Conexión de dominio propio con certificado SSL</li>
                  <li>Botón directo a tu WhatsApp con mensaje pre-armado</li>
                  <li>Cero permanencia: cancelas el mantenimiento cuando quieras</li>
                </ul>
              </div>

              <a 
                href={waLink(`Hola Célere! Hice mi presupuesto en su web para un proyecto de ${formatMoney(budget.initialTotal)} con mantenimiento de ${formatMoney(budget.monthlyTotal)}/mes. Me gustaría ponerlo en marcha.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-white text-black font-display font-black text-xs flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>Pedir este presupuesto por WhatsApp</span>
              </a>

            </div>

          </div>

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
                href={waLink(`Hola Célere, calculé una ganancia adicional de +${extraRevenue} ${country.currency}/mes para mi negocio y quiero coordinar la creación de mi web.`)}
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
                Construcción + Mantenimiento Mensual
              </h2>
            </div>
            <p className="text-xs font-mono text-zinc-400 max-w-sm">
              No te dejamos solo una vez entregada la web. Nos ocupamos del soporte técnico, servidores y actualizaciones mes a mes.
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
          FOOTER CON BARRA VERDECITA DE PERSONITAS CHIBI 3D EXPLOSIVAS
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
            <a href="#presupuesto" className="hover:text-white transition-colors">Presupuestador</a>
            <a href="#roi" className="hover:text-white transition-colors">Calculadora</a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
          </div>

        </div>

        {/* BARRA VERDECITA CON PERSONAJES QUE REACCIONAN AL GIROSCOPIO / INCLINACIÓN MÓVIL */}
        <div className="max-w-7xl mx-auto h-9 rounded-xl bg-emerald-950/80 border border-emerald-500/40 px-4 flex items-center justify-between text-[11px] font-mono text-emerald-400 relative overflow-hidden select-none">
          <div className="flex items-center gap-2 z-10 pointer-events-none">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-bold">ZONA INTERACTIVA:</span>
            <span className="text-emerald-300 hidden sm:inline">
              En móvil inclina tu teléfono para mover a los personajes. Clic para lanzar código o haz que los aviones los alcancen.
            </span>
          </div>

          <span className="text-[10px] text-emerald-400/80 font-bold z-10 pointer-events-none">
            [ GYRO_PHYSICS // MASCOTS ]
          </span>
        </div>
      </footer>

    </div>
  );
}
