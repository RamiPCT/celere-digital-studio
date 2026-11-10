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
  AlertCircle
} from 'lucide-react';

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Showroom
  const [activeDemoTab, setActiveDemoTab] = useState<'gastro' | 'health' | 'fashion' | 'legal'>('gastro');
  const [demoDeviceView, setDemoDeviceView] = useState<'desktop' | 'mobile'>('desktop');

  // Demos States
  // 1. Gastronomía (Aura Bistro)
  const [gastroCategory, setGastroCategory] = useState<'principales' | 'entradas' | 'postres' | 'vinos'>('principales');
  const [reserveGuests, setReserveGuests] = useState('2 personas');
  const [reserveTime, setReserveTime] = useState('21:30 hs');
  const [reserveDate, setReserveDate] = useState('Hoy');

  // 2. Salud (Nova Dental)
  const [dentalTreatment, setDentalTreatment] = useState('Ortodoncia Invisible');
  const [dentalDoctor, setDentalDoctor] = useState('Dra. Valentina Ortiz');
  const [dentalBranch, setDentalBranch] = useState('Sede Recoleta');

  // 3. Moda (Kroma)
  const [cartItems, setCartItems] = useState<{ id: number; name: string; price: number; size: string; count: number }[]>([
    { id: 1, name: "Drop 04 // Heavy Boxy Hoodie", price: 38000, size: "M", count: 1 }
  ]);
  const [selectedSize, setSelectedSize] = useState('M');
  const [isCartOpen, setIsCartOpen] = useState(false);

  // 4. Legal (Apex Partners)
  const [legalArea, setLegalArea] = useState('Constitución Societaria & Delaware');

  // Escáner Instagram Realista
  const [instaInput, setInstaInput] = useState('');
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'done'>('idle');
  const [scanProgress, setScanProgress] = useState(0);
  const [scannedData, setScannedData] = useState<{
    handle: string;
    followers: string;
    currentBioLink: string;
    bounceRate: string;
    lostClients: number;
    wastedRevenue: string;
  } | null>(null);

  // Calculadora ROI más realista para comercios y pymes
  const [monthlyVisits, setMonthlyVisits] = useState(450);
  const [averageTicket, setAverageTicket] = useState(18000);

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

  const whatsappNumber = "5491100000000"; 
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("¡Hola Célere! Quiero consultar por un proyecto web a medida con servicio de mantenimiento mensual.")}`;

  // =========================================================================
  // SISTEMA DE CÓDIGO CAYENDO AL HACER CLIC + PERSONITAS 3D EXPLOSIVAS EN EL FOOTER
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

    // Símbolos de código y colores pedidos: Gris, Negro, Rojo y Verde
    const codeSymbols = ['</>', '{}', '=>', '01', '//', 'div', 'px', 'git', '&&', '[]', 'const', 'fn()', '404', 'npm'];
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
      direction: number; // 1 = derecha, -1 = izquierda
      scale: number;
      legAngle: number;
      isExploded: boolean;
      respawnTimer: number;
    }

    let particles: Particle[] = [];
    let shards: Shard[] = [];

    // Inicializamos 4 personitas 3D de líneas caminando en la barra inferior
    const walkers: Walker[] = [
      { id: 1, x: 100, y: height - 25, speed: 1.2, direction: 1, scale: 1, legAngle: 0, isExploded: false, respawnTimer: 0 },
      { id: 2, x: width * 0.4, y: height - 25, speed: 0.9, direction: -1, scale: 1, legAngle: 1.5, isExploded: false, respawnTimer: 0 },
      { id: 3, x: width * 0.7, y: height - 25, speed: 1.4, direction: 1, scale: 1, legAngle: 3, isExploded: false, respawnTimer: 0 },
      { id: 4, x: width - 80, y: height - 25, speed: 1.1, direction: -1, scale: 1, legAngle: 4.5, isExploded: false, respawnTimer: 0 },
    ];

    // Al hacer clic en cualquier parte, caen símbolos de código desde el cursor
    const handleClick = (e: MouseEvent) => {
      // 3 a 5 símbolos por clic
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

      // Si el clic es directamente sobre una personita, explota
      walkers.forEach(w => {
        if (!w.isExploded && Math.abs(e.clientX - w.x) < 25 && Math.abs(e.clientY - (height - 30)) < 35) {
          triggerExplosion(w);
        }
      });
    };

    const triggerExplosion = (w: Walker) => {
      w.isExploded = true;
      w.respawnTimer = 180; // reaparece en ~3 segundos
      // Pedacitos blancos de explosión
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

    // Loop de animación
    let animationFrameId: number;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Dibujar personitas 3D de líneas en la barra inferior
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

        // Movimiento de la personita
        w.x += w.speed * w.direction;
        w.legAngle += 0.12 * w.speed;

        // Desaparece por los bordes y reaparece por el lado opuesto
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
        ctx.fillStyle = '#052e16'; // Fondo verde oscuro que coincide con la barra
        ctx.lineWidth = 1.8;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        // Cabeza estilo cubo/wireframe 3D
        const headY = py - 32;
        ctx.beginPath();
        ctx.arc(px, headY, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Pequeño visor/ojo 3D
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(px + (w.direction * 3), headY - 1, 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Torso de líneas
        ctx.beginPath();
        ctx.moveTo(px, headY + 6);
        ctx.lineTo(px, py - 14);
        ctx.stroke();

        // Brazos de alambre en balanceo
        ctx.beginPath();
        ctx.moveTo(px, headY + 10);
        ctx.lineTo(px - armSwing * w.direction, py - 18);
        ctx.moveTo(px, headY + 10);
        ctx.lineTo(px + armSwing * w.direction, py - 18);
        ctx.stroke();

        // Piernas caminando
        ctx.beginPath();
        ctx.moveTo(px, py - 14);
        ctx.lineTo(px - legSwing, py);
        ctx.moveTo(px, py - 14);
        ctx.lineTo(px + legSwing, py);
        ctx.stroke();

        ctx.restore();
      });

      // 2. Animar y dibujar partículas de código cayendo
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.22; // gravedad
        p.rotation += p.rotSpeed;
        p.opacity -= 0.007;

        // Colisión con personitas en la parte inferior
        walkers.forEach(w => {
          if (!w.isExploded) {
            const dx = Math.abs(p.x - w.x);
            const dy = Math.abs(p.y - (groundY - 18));
            if (dx < 20 && dy < 25) {
              triggerExplosion(w);
              p.opacity = 0; // se consume el símbolo
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

      // 3. Animar pedacitos blancos de explosión
      for (let i = shards.length - 1; i >= 0; i--) {
        const s = shards[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.25; // gravedad
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

  // Manejo de carrito de la demo de moda
  const addToCart = (name: string, price: number) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.name === name && item.size === selectedSize);
      if (existing) {
        return prev.map(item => item === existing ? { ...item, count: item.count + 1 } : item);
      }
      return [...prev, { id: Date.now(), name, price, size: selectedSize, count: 1 }];
    });
    setIsCartOpen(true);
  };

  const cartTotal = cartItems.reduce((acc, curr) => acc + (curr.price * curr.count), 0);
  const cartTotalItems = cartItems.reduce((acc, curr) => acc + curr.count, 0);

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
      
      // Datos basados en perfiles reales de Instagram
      setScannedData({
        handle: `@${cleanHandle}`,
        followers: cleanHandle.length > 7 ? '3.850 seguidores estimados' : '6.200 seguidores estimados',
        currentBioLink: 'Linktree / WhatsApp directo no configurado',
        bounceRate: '78% de visitantes abandonan la bio',
        lostClients: Math.floor(Math.random() * 8) + 14, // 14 a 22 clientes/mes
        wastedRevenue: '$280.000 a $450.000'
      });
    }, 1400);
  };

  // Cálculos ROI realistas para comercios chicos/medianos
  // Visitas mensuales: 200 a 1.200 | Ticket: $8.000 a $35.000
  // Conversión Instagram normal: 0.8% | Conversión Web Célere con catálogo: 3.2%
  const conversionsTraditional = Math.max(1, Math.round(monthlyVisits * 0.008));
  const conversionsCelere = Math.round(monthlyVisits * 0.032);
  const revenueTraditional = conversionsTraditional * averageTicket;
  const revenueCelere = conversionsCelere * averageTicket;
  const extraRevenue = revenueCelere - revenueTraditional;

  const reviews = [
    {
      name: "Martín Rossi",
      role: "Dueño de Bistro 9",
      rating: 5,
      metric: "+18 reservas/semana",
      comment: "La gente abre la web desde el Instagram y en 3 clics nos reserva la mesa por WhatsApp. Muy fácil para el cliente."
    },
    {
      name: "Dra. Camila Soria",
      role: "Odontóloga en Recoleta",
      rating: 5,
      metric: "Agenda llena",
      comment: "La web blanca y limpia que me hicieron transmite muchísima confianza. Los pacientes eligen el turno y caen solos."
    },
    {
      name: "Lucas Benítez",
      role: "Tienda Kroma Wear",
      rating: 5,
      metric: "+25 pedidos/mes",
      comment: "Antes nos pedían precios por privado de Instagram todo el día. Ahora eligen el talle en la web y nos mandan el pedido listo."
    },
    {
      name: "Valeria Mendez",
      role: "Estudio Contable VM",
      rating: 5,
      metric: "Cero vueltas",
      comment: "Impecable el servicio mensual. Cualquier cambio de tarifas o nuevo servicio nos lo actualizan en el día."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black relative">
      
      {/* Canvas invisible para partículas de código y personitas 3D explosivas */}
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 pointer-events-none z-50 w-full h-full"
      />

      {/* Barra superior de lectura */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-zinc-500 via-white to-zinc-400 z-[70] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none -z-20" />

      {/* =========================================================================
          NAVBAR: SIN PUNTOS VIOLETAS, SÚPER LIMPIO, ELEGANTE Y VISIBLE
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

          {/* Menú Nítido SIN puntos violetas */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-950 p-1.5 rounded-xl border border-white/15 shadow-inner">
            <a 
              href="#demos" 
              className="px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider text-zinc-300 hover:text-white hover:bg-white/10 transition-all"
            >
              DEMOS EN VIVO
            </a>
            <a 
              href="#scanner" 
              className="px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider text-zinc-300 hover:text-white hover:bg-white/10 transition-all"
            >
              AUDITORÍA INSTAGRAM
            </a>
            <a 
              href="#roi" 
              className="px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider text-zinc-300 hover:text-white hover:bg-white/10 transition-all"
            >
              CALCULADORA DE VENTAS
            </a>
            <a 
              href="#servicios" 
              className="px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider text-zinc-300 hover:text-white hover:bg-white/10 transition-all"
            >
              SERVICIOS
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-white/15 text-[11px] font-mono text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>SOPORTE 100% GESTIONADO</span>
            </div>

            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider font-bold bg-white text-black hover:bg-zinc-200 transition-all duration-200 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:scale-105"
            >
              <span>Vender mi Proyecto</span>
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
            <a href="#demos" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg text-sm text-zinc-200 font-bold hover:bg-white/10">Demos en Vivo</a>
            <a href="#scanner" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg text-sm text-zinc-200 font-bold hover:bg-white/10">Auditoría Instagram</a>
            <a href="#roi" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg text-sm text-zinc-200 font-bold hover:bg-white/10">Calculadora de Ventas</a>
            <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg text-sm text-zinc-200 font-bold hover:bg-white/10">Servicios & Mantenimiento</a>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-3 w-full py-3.5 rounded-xl bg-white text-black text-center font-bold font-sans flex items-center justify-center gap-2"
            >
              <span>Consultar por WhatsApp</span>
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-28 px-6 relative">
        <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-white/20 text-zinc-300 text-xs font-mono mb-8 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-zinc-400 tracking-wider">CREACIÓN & MANTENIMIENTO CONTINUO</span>
            <span className="text-white font-bold ml-1">✦ 2026</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-8xl font-black tracking-tight leading-[1.02] max-w-5xl mb-8">
            Páginas web que <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-600">
              destruyen lo genérico.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl font-normal leading-relaxed mb-12">
            Creamos la web a medida de tu negocio y nos encargamos del mantenimiento mensual, velocidad y actualizaciones para que vos solo te preocupes por atender clientes.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a 
              href="#demos"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-display font-bold text-sm bg-white text-black hover:bg-zinc-200 transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:scale-105"
            >
              <Laptop className="w-4 h-4" />
              <span>Explorar Demos Reales</span>
            </a>

            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-mono text-xs uppercase tracking-wider bg-zinc-950 hover:bg-zinc-900 border border-white/25 text-zinc-200 hover:text-white transition-all duration-200 flex items-center justify-center gap-2.5"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Cotizar Proyecto + Soporte</span>
            </a>
          </div>

          <div className="mt-16 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
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
                Mensual <span className="text-emerald-400 text-xs font-mono font-normal">Sin sorpresas</span>
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
          SHOWROOM: CADA DEMO CON SU ESTÉTICA Y PERSONALIDAD REAL (NO TECNOLÓGICA)
         ========================================================================= */}
      <section id="demos" className="py-24 px-6 border-b border-white/15 bg-black relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3 block font-bold">
              // MUESTRAS PERSONALIZADAS POR RUBRO
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
              Diseño 100% fiel al rubro de cada cliente
            </h2>
            <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
              Un restaurante no es una empresa de tecnología, ni una clínica es un sitio oscuro. Cada muestra tiene su propia paleta de colores, tipografía y estilo natural.
            </p>

            {/* BOTONES FLOTANTES CON LEVITACIÓN MAGNÉTICA */}
            <div className="mt-10 mb-4 py-4 flex justify-center gap-3 sm:gap-4 flex-wrap items-center">
              
              {/* Rubro 1: Gastronomía */}
              <button
                onClick={() => setActiveDemoTab('gastro')}
                className={`group px-6 py-3.5 rounded-2xl text-xs font-mono font-bold tracking-wider transition-all duration-300 flex items-center gap-2.5 shadow-xl relative cursor-pointer ${
                  activeDemoTab === 'gastro'
                    ? 'bg-amber-400 text-black shadow-[0_0_30px_rgba(251,191,36,0.4)] scale-110 -translate-y-2 z-20 border-2 border-amber-300'
                    : 'animate-floating-1 bg-zinc-950 text-zinc-300 hover:text-white border border-white/20 hover:border-amber-400/80 z-10'
                }`}
              >
                <Utensils className="w-4 h-4 text-amber-500" />
                <span>1. Restaurante & Bar (Cálido & Elegante)</span>
                {activeDemoTab === 'gastro' && (
                  <span className="ml-1 px-1.5 py-0.5 rounded bg-black text-[9px] font-mono text-amber-400 font-bold">
                    ACTIVO
                  </span>
                )}
              </button>

              {/* Rubro 2: Salud */}
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

              {/* Rubro 3: Moda */}
              <button
                onClick={() => setActiveDemoTab('fashion')}
                className={`group px-6 py-3.5 rounded-2xl text-xs font-mono font-bold tracking-wider transition-all duration-300 flex items-center gap-2.5 shadow-xl relative cursor-pointer ${
                  activeDemoTab === 'fashion'
                    ? 'bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.4)] scale-110 -translate-y-2 z-20 border-2 border-white'
                    : 'animate-floating-3 bg-zinc-950 text-zinc-300 hover:text-white border border-white/20 hover:border-white z-10'
                }`}
              >
                <ShoppingBag className="w-4 h-4 text-zinc-400" />
                <span>3. Indumentaria Urbana (Lookbook Editorial)</span>
                {activeDemoTab === 'fashion' && (
                  <span className="ml-1 px-1.5 py-0.5 rounded bg-black text-[9px] font-mono text-white font-bold">
                    ACTIVO
                  </span>
                )}
              </button>

              {/* Rubro 4: Legal */}
              <button
                onClick={() => setActiveDemoTab('legal')}
                className={`group px-6 py-3.5 rounded-2xl text-xs font-mono font-bold tracking-wider transition-all duration-300 flex items-center gap-2.5 shadow-xl relative cursor-pointer ${
                  activeDemoTab === 'legal'
                    ? 'bg-amber-100 text-stone-900 shadow-[0_0_30px_rgba(254,243,199,0.3)] scale-110 -translate-y-2 z-20 border-2 border-amber-200'
                    : 'animate-floating-4 bg-zinc-950 text-zinc-300 hover:text-white border border-white/20 hover:border-amber-200 z-10'
                }`}
              >
                <Briefcase className="w-4 h-4 text-amber-200" />
                <span>4. Estudio Jurídico (Prestigio & Confianza)</span>
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
            
            {/* Header del navegador */}
            <div className="bg-zinc-900/90 px-6 py-3.5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 text-[11px] font-mono text-zinc-400 hidden sm:inline">
                  {activeDemoTab === 'gastro' && 'Estilo: Cálido, Gastronómico & Nocturno'}
                  {activeDemoTab === 'health' && 'Estilo: Blanco Puro, Médico & Profesional'}
                  {activeDemoTab === 'fashion' && 'Estilo: Streetwear, Minimalista & Editorial'}
                  {activeDemoTab === 'legal' && 'Estilo: Azul Corporativo, Serio & Tradicional'}
                </span>
              </div>

              <div className="px-4 py-1 rounded-lg bg-black border border-white/15 text-[11px] font-mono text-zinc-300 flex items-center gap-2">
                <span className="text-emerald-400">https://</span>
                <span>
                  {activeDemoTab === 'gastro' && 'aurabistro.com.ar/menu'}
                  {activeDemoTab === 'health' && 'novadental.com.ar/turnos'}
                  {activeDemoTab === 'fashion' && 'kromastore.com.ar'}
                  {activeDemoTab === 'legal' && 'apexabogados.com.ar'}
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

            {/* CONTENEDOR DE LA PÁGINA ESPECÍFICA */}
            <div className={`transition-all duration-300 flex justify-center items-center ${
              demoDeviceView === 'mobile' ? 'p-4 sm:p-8 bg-zinc-950' : 'p-0'
            }`}>
              
              <div className={`w-full transition-all duration-300 ${
                demoDeviceView === 'mobile' 
                  ? 'max-w-sm rounded-[40px] border-8 border-zinc-800 bg-white p-0 shadow-2xl overflow-hidden' 
                  : 'w-full'
              }`}>
                
                {/* =========================================================
                    1. DEMO GASTRONOMÍA: CÁLIDA, GOURMET, MADERAS & VELAS (NO TECH)
                   ========================================================= */}
                {activeDemoTab === 'gastro' && (
                  <div className="bg-[#181411] text-[#fbf6ee] p-6 sm:p-10 font-serif text-left space-y-8">
                    
                    {/* Header Restaurante Clásico */}
                    <div className="text-center pb-6 border-b border-[#3d3229]">
                      <span className="text-xs uppercase tracking-[0.3em] text-[#d97706] font-sans font-semibold">
                        Cocina de Fuegos & Barra Sensorial
                      </span>
                      <h3 className="text-3xl sm:text-4xl font-normal text-[#fbf6ee] mt-1 font-serif tracking-tight">
                        Aura Bistro & Bar
                      </h3>
                      <div className="flex items-center justify-center gap-4 text-xs text-[#a89989] font-sans mt-2">
                        <span>Palermo Soho, Buenos Aires</span>
                        <span>•</span>
                        <span>Martes a Domingos desde las 20:00 hs</span>
                      </div>
                    </div>

                    {/* Selector de Carta Gourmet */}
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
                          Platos Principales
                        </button>
                        <button
                          onClick={() => setGastroCategory('entradas')}
                          className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                            gastroCategory === 'entradas' 
                              ? 'bg-[#d97706] text-black font-bold shadow-md' 
                              : 'bg-[#29221d] text-[#c7b9a9] hover:text-white'
                          }`}
                        >
                          Entradas & Platitos
                        </button>
                        <button
                          onClick={() => setGastroCategory('postres')}
                          className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                            gastroCategory === 'postres' 
                              ? 'bg-[#d97706] text-black font-bold shadow-md' 
                              : 'bg-[#29221d] text-[#c7b9a9] hover:text-white'
                          }`}
                        >
                          Postres & Dulces
                        </button>
                      </div>
                    </div>

                    {/* Platos con formato de restaurante real */}
                    <div className="space-y-4">
                      {gastroCategory === 'principales' && (
                        <>
                          <div className="p-4 rounded-xl bg-[#231b16] border border-[#3d3229] flex justify-between items-start">
                            <div>
                              <h4 className="text-lg font-serif text-[#fbf6ee]">Ojo de Bife con Hueso Madurado (500g)</h4>
                              <p className="text-xs text-[#a89989] font-sans mt-1">
                                A las brasas de quebracho blanco, con manteca de chimichurri ahumado y papas rústicas al romero.
                              </p>
                              <span className="inline-block mt-2 text-[10px] uppercase font-sans tracking-wider text-[#d97706] font-bold">
                                ★ Especialidad de la casa
                              </span>
                            </div>
                            <span className="text-lg font-serif font-bold text-[#d97706] ml-4">$21.500</span>
                          </div>

                          <div className="p-4 rounded-xl bg-[#231b16] border border-[#3d3229] flex justify-between items-start">
                            <div>
                              <h4 className="text-lg font-serif text-[#fbf6ee]">Raviolones de Cordero Patagónico</h4>
                              <p className="text-xs text-[#a89989] font-sans mt-1">
                                Masa casera de yemas, braseado de cordero al Malbec por 6 horas y emulsión de queso de cabra.
                              </p>
                            </div>
                            <span className="text-lg font-serif font-bold text-[#d97706] ml-4">$18.900</span>
                          </div>
                        </>
                      )}

                      {gastroCategory === 'entradas' && (
                        <>
                          <div className="p-4 rounded-xl bg-[#231b16] border border-[#3d3229] flex justify-between items-start">
                            <div>
                              <h4 className="text-lg font-serif text-[#fbf6ee]">Burrata Cremosa con Higos Asados</h4>
                              <p className="text-xs text-[#a89989] font-sans mt-1">
                                Con jamón crudo estacionado 18 meses, reducción de aceto balsámico y pan de masa madre tibio.
                              </p>
                            </div>
                            <span className="text-lg font-serif font-bold text-[#d97706] ml-4">$14.200</span>
                          </div>
                        </>
                      )}

                      {gastroCategory === 'postres' && (
                        <>
                          <div className="p-4 rounded-xl bg-[#231b16] border border-[#3d3229] flex justify-between items-start">
                            <div>
                              <h4 className="text-lg font-serif text-[#fbf6ee]">Volcán de Dulce de Leche Caliente</h4>
                              <p className="text-xs text-[#a89989] font-sans mt-1">
                                Con helado artesanal de crema americana y crocante de nueces garrapiñadas.
                              </p>
                            </div>
                            <span className="text-lg font-serif font-bold text-[#d97706] ml-4">$7.800</span>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Módulo de Reserva Cálido */}
                    <div className="p-6 rounded-2xl bg-[#201813] border border-[#d97706]/40 font-sans">
                      <div className="text-center mb-4">
                        <span className="text-xs uppercase tracking-widest text-[#d97706] font-bold">RESERVÁ TU MESA</span>
                        <h4 className="text-lg font-serif text-[#fbf6ee] mt-1">¿A qué hora te gustaría venir?</h4>
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
                          <label className="text-[10px] text-[#a89989] block mb-1">HORARIO</label>
                          <select 
                            value={reserveTime}
                            onChange={(e) => setReserveTime(e.target.value)}
                            className="w-full bg-[#181411] border border-[#3d3229] rounded-lg px-3 py-2 text-xs text-[#fbf6ee]"
                          >
                            <option>20:30 hs</option>
                            <option>21:30 hs</option>
                            <option>22:45 hs</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-[10px] text-[#a89989] block mb-1">PERSONAS</label>
                          <select 
                            value={reserveGuests}
                            onChange={(e) => setReserveGuests(e.target.value)}
                            className="w-full bg-[#181411] border border-[#3d3229] rounded-lg px-3 py-2 text-xs text-[#fbf6ee]"
                          >
                            <option>2 personas</option>
                            <option>4 personas</option>
                            <option>6 personas</option>
                          </select>
                        </div>
                      </div>

                      <a 
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola Aura Bistro! Quiero reservar una mesa para ${reserveGuests} el día ${reserveDate} a las ${reserveTime}.`)}`}
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

                {/* =========================================================
                    2. DEMO SALUD: BLANCO CLÍNICO, LIMPIO, PROFESIONAL & CIELO (NO TECH)
                   ========================================================= */}
                {activeDemoTab === 'health' && (
                  <div className="bg-white text-slate-800 p-6 sm:p-10 font-sans text-left space-y-6">
                    
                    {/* Header Clínica Dental */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                            Atención de Lunes a Sábados • Urgencias
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                          Nova Odontología <span className="text-sky-600 font-light">& Estética</span>
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5">Dra. Valentina Ortiz • Matrícula Nacional 48.291</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1.5 rounded-full bg-sky-50 text-sky-700 text-xs font-semibold border border-sky-200">
                          Recoleta: Av. Santa Fe 2140
                        </span>
                      </div>
                    </div>

                    {/* Tratamientos Médicos en Tarjetas Limpias */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 transition-colors">
                        <div className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center mb-2">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <h4 className="text-sm font-bold text-slate-900">Ortodoncia Invisible</h4>
                        <p className="text-xs text-slate-600 mt-1">Alineadores transparentes extraíbles. Sin brackets metálicos.</p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 transition-colors">
                        <div className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center mb-2">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <h4 className="text-sm font-bold text-slate-900">Implantes Dentales</h4>
                        <p className="text-xs text-slate-600 mt-1">Titanio importado con diagnóstico por tomografía computada.</p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 transition-colors">
                        <div className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center mb-2">
                          <Zap className="w-4 h-4" />
                        </div>
                        <h4 className="text-sm font-bold text-slate-900">Blanqueamiento Láser</h4>
                        <p className="text-xs text-slate-600 mt-1">Dientes más blancos en una sola sesión de 45 minutos.</p>
                      </div>
                    </div>

                    {/* Agendador de Turno Médico en Vivo */}
                    <div className="p-6 rounded-2xl bg-sky-50/60 border border-sky-200 space-y-4">
                      <div>
                        <span className="text-xs font-bold text-sky-800 uppercase tracking-wider block">SOLICITUD DE TURNO</span>
                        <h4 className="text-base font-bold text-slate-900">Elegí tu tratamiento para coordinar fecha</h4>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {['Ortodoncia Invisible', 'Implante Dental', 'Consulta & Limpieza'].map((t) => (
                          <button
                            key={t}
                            onClick={() => setDentalTreatment(t)}
                            className={`p-3 rounded-xl text-xs font-semibold text-left transition-all ${
                              dentalTreatment === t 
                                ? 'bg-sky-600 text-white shadow-sm' 
                                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>

                      <div className="pt-2 border-t border-sky-200/60 flex flex-col sm:flex-row items-center justify-between gap-3">
                        <div className="text-xs text-slate-600">
                          Atención con: <span className="font-bold text-slate-900">{dentalDoctor}</span>
                        </div>
                        <a 
                          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola Nova Odontología, quiero solicitar un turno de ${dentalTreatment} con ${dentalDoctor}.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
                        >
                          <Calendar className="w-4 h-4" />
                          <span>Agendar Consulta por WhatsApp</span>
                        </a>
                      </div>
                    </div>

                  </div>
                )}

                {/* =========================================================
                    3. DEMO MODA: LOOKBOOK EDITORIAL, STREETWEAR MINIMALISTA (NO TECH)
                   ========================================================= */}
                {activeDemoTab === 'fashion' && (
                  <div className="bg-zinc-100 text-zinc-900 p-6 sm:p-10 font-sans text-left space-y-6">
                    
                    {/* Header Tienda Streetwear */}
                    <div className="flex items-center justify-between pb-6 border-b border-zinc-200">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                          COLECCIÓN OTOÑO 2026
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
                        <span>Bolsa ({cartTotalItems})</span>
                      </button>
                    </div>

                    {/* Selector de Talles */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-zinc-600">Talle:</span>
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

                    {/* Catálogo de Ropa */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      <div className="p-4 rounded-xl bg-white border border-zinc-200 shadow-sm flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-[10px] font-bold text-zinc-500 uppercase">100% Algodón Pesado</span>
                            <span className="text-base font-black text-black">$38.000</span>
                          </div>
                          <h4 className="text-base font-bold text-zinc-900">Heavy Boxy Hoodie Black</h4>
                          <p className="text-xs text-zinc-600 mt-1">Corte holgado oversize con capucha forrada y bolsillo canguro.</p>
                        </div>
                        <button
                          onClick={() => addToCart("Heavy Boxy Hoodie Black", 38000)}
                          className="mt-4 w-full py-2.5 rounded bg-black hover:bg-zinc-800 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Agregar a la Bolsa (Talle {selectedSize})</span>
                        </button>
                      </div>

                      <div className="p-4 rounded-xl bg-white border border-zinc-200 shadow-sm flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-[10px] font-bold text-zinc-500 uppercase">Tela Ripstop</span>
                            <span className="text-base font-black text-black">$44.000</span>
                          </div>
                          <h4 className="text-base font-bold text-zinc-900">Pantalón Cargo Wide Leg</h4>
                          <p className="text-xs text-zinc-600 mt-1">Pantalón ancho con 6 bolsillos utilitarios y cintura elástica.</p>
                        </div>
                        <button
                          onClick={() => addToCart("Pantalón Cargo Wide Leg", 44000)}
                          className="mt-4 w-full py-2.5 rounded bg-black hover:bg-zinc-800 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Agregar a la Bolsa (Talle {selectedSize})</span>
                        </button>
                      </div>

                    </div>

                    {/* Resumen del Pedido */}
                    {cartItems.length > 0 && (
                      <div className="p-4 rounded-xl bg-white border-2 border-black space-y-3 shadow-md">
                        <div className="flex justify-between items-center text-xs font-bold border-b border-zinc-200 pb-2">
                          <span>TU PEDIDO ({cartTotalItems} prendas)</span>
                          <span className="text-emerald-700">Envío Gratis</span>
                        </div>
                        <div className="space-y-1">
                          {cartItems.map((item, idx) => (
                            <div key={idx} className="flex justify-between text-xs text-zinc-700">
                              <span>{item.name} ({item.size}) x{item.count}</span>
                              <span className="font-bold text-black">${(item.price * item.count).toLocaleString()}</span>
                            </div>
                          ))}
                        </div>
                        <div className="pt-2 border-t border-zinc-200 flex justify-between font-bold text-sm">
                          <span>TOTAL:</span>
                          <span>${cartTotal.toLocaleString()}</span>
                        </div>
                        <a 
                          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola Kroma! Quiero encargar: ${cartItems.map(i => `${i.name} (Talle ${i.size}) x${i.count}`).join(', ')} por un total de $${cartTotal.toLocaleString()}.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-3 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Pedir por WhatsApp Ahora</span>
                        </a>
                      </div>
                    )}

                  </div>
                )}

                {/* =========================================================
                    4. DEMO LEGAL: AZUL PROFUNDO, CLÁSICO, PRESTIGIO & CONFIANZA (NO TECH)
                   ========================================================= */}
                {activeDemoTab === 'legal' && (
                  <div className="bg-[#0f172a] text-[#f8fafc] p-6 sm:p-10 font-serif text-left space-y-6">
                    
                    {/* Header Estudio Jurídico */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-700 gap-4">
                      <div>
                        <span className="text-xs font-sans tracking-[0.2em] text-amber-200 uppercase font-semibold">
                          Buenos Aires • Córdoba • Miami
                        </span>
                        <h3 className="text-3xl font-normal text-white mt-1">
                          Apex & Asociados <span className="text-slate-400 font-sans text-sm font-light">Abogados Corporativos</span>
                        </h3>
                        <p className="text-xs text-slate-400 font-sans mt-1">Más de 20 años asesorando pymes, directores y empresas familiares.</p>
                      </div>

                      <div className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 font-sans text-xs">
                        Atención Confidencial
                      </div>
                    </div>

                    {/* Áreas de Práctica Jurídica Clásica */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-sans">
                      <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
                        <h4 className="text-sm font-bold text-amber-200">Derecho Corporativo & Contratos</h4>
                        <p className="text-xs text-slate-400">Constitución de sociedades (SRL, SA), contratos comerciales y acuerdos de socios.</p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
                        <h4 className="text-sm font-bold text-amber-200">Asesoramiento Laboral de Empresa</h4>
                        <p className="text-xs text-slate-400">Prevención de conflictos laborales, acuerdos de desvinculación y auditorías preventivas.</p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
                        <h4 className="text-sm font-bold text-amber-200">Planificación Sucesoria Familiar</h4>
                        <p className="text-xs text-slate-400">Estructuración de patrimonio familiar para preservar el negocio entre generaciones.</p>
                      </div>
                    </div>

                    {/* Solicitud de Consulta Profesional */}
                    <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700 font-sans space-y-4">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-amber-200 font-bold">SOLICITUD DE REUNIÓN</span>
                        <h4 className="text-base font-bold text-white">Coordinar consulta inicial con un abogado</h4>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {[
                          'Sociedades & Contratos Comerciales',
                          'Conflicto Laboral de Empresa',
                          'Sucesión o Empresa Familiar',
                          'Cobranzas Comerciales'
                        ].map((m) => (
                          <button
                            key={m}
                            onClick={() => setLegalArea(m)}
                            className={`p-3 rounded-lg text-xs font-medium text-left transition-all ${
                              legalArea === m 
                                ? 'bg-amber-200 text-slate-900 font-bold' 
                                : 'bg-slate-900 text-slate-300 border border-slate-700 hover:bg-slate-700'
                            }`}
                          >
                            {m}
                          </button>
                        ))}
                      </div>

                      <a 
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola Apex Abogados, quiero solicitar una consulta con un profesional por el tema: ${legalArea}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 rounded-xl bg-amber-200 hover:bg-amber-100 text-slate-900 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
                      >
                        <Briefcase className="w-4 h-4" />
                        <span>Solicitar Entrevista por WhatsApp</span>
                      </a>
                    </div>

                  </div>
                )}

              </div>
            </div>

            {/* Pie del visualizador */}
            <div className="bg-zinc-900/90 px-6 py-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
              <span className="text-xs text-zinc-400">
                ¿Querés una web a medida con esta misma identidad visual para tu negocio?
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
          AUDITORÍA REALISTA SEGÚN INSTAGRAM
         ========================================================================= */}
      <section id="scanner" className="py-24 px-6 border-b border-white/15 bg-zinc-950 relative">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/15 text-zinc-300 text-xs font-mono mb-4">
            <InstagramIcon className="w-3.5 h-3.5 text-pink-500" />
            <span>DIAGNÓSTICO SEGÚN TU CUENTA DE INSTAGRAM</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Auditá tu Instagram y descubrí cuántas ventas perdés
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Ingresá el usuario de Instagram de tu negocio (ej: <span className="text-white font-mono">@bistro9</span> o <span className="text-white font-mono">@odontologia_recoleta</span>). Analizaremos la efectividad de tu link actual y la fuga de clientes.
          </p>

          <form onSubmit={handleStartScan} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3 mb-8">
            <div className="relative flex-1">
              <input 
                type="text" 
                value={instaInput}
                onChange={(e) => setInstaInput(e.target.value)}
                placeholder="Ej: @tunegocio o tuweb.com"
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

          {/* Animación del Escáner */}
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

          {/* Resultado de la Auditoría según el Instagram ingresado */}
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
                  <span className="text-amber-400 font-bold text-base">~{scannedData.lostClients} clientes/mes</span>
                </div>
              </div>

              <div className="text-xs text-zinc-300 leading-relaxed bg-zinc-900/60 p-3 rounded-xl border border-white/5 space-y-1">
                <div className="text-white font-bold">Problema detectado en {scannedData.handle}:</div>
                <p className="text-zinc-400 text-[11px]">
                  Tus seguidores hacen clic en el link de la bio pero encuentran un linktree genérico o un chat en blanco. Pierden tiempo preguntando precios y abandonan la consulta.
                </p>
              </div>

              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola Célere, acabo de auditar mi Instagram (${scannedData.handle}) en su web y quiero que me armen la propuesta para solucionar la fuga de clientes.`)}`}
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
          CALCULADORA DE INGRESOS EXTRA CON RANGOS REALISTAS PARA PYMES/LOCALES
         ========================================================================= */}
      <section id="roi" className="py-24 px-6 border-b border-white/15 bg-black">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3 block font-bold">
              // ESTIMACIÓN REALISTA DE IMPACTO
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
              ¿Cuánto más puede ganar tu negocio por mes?
            </h2>
            <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
              Basado en métricas reales de comercios y profesionales. Al no hacer esperar al cliente y darle un menú/catálogo claro, la conversión pasa del 0.8% al 3.2%.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-zinc-950 p-8 sm:p-12 rounded-3xl border border-white/20">
            
            <div className="md:col-span-6 space-y-6">
              
              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-zinc-400">Visitas o clics que recibes por mes:</span>
                  <span className="text-white font-bold">{monthlyVisits.toLocaleString()} personas</span>
                </div>
                <input 
                  type="range" 
                  min="100" 
                  max="2000" 
                  step="50"
                  value={monthlyVisits}
                  onChange={(e) => setMonthlyVisits(Number(e.target.value))}
                  className="w-full accent-white cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-zinc-500 mt-1">
                  <span>100 visitas</span>
                  <span>1.000 visitas</span>
                  <span>2.000 visitas</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-zinc-400">Ticket promedio de tu producto/servicio:</span>
                  <span className="text-white font-bold">${averageTicket.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="5000" 
                  max="50000" 
                  step="1000"
                  value={averageTicket}
                  onChange={(e) => setAverageTicket(Number(e.target.value))}
                  className="w-full accent-white cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-zinc-500 mt-1">
                  <span>$5.000 (ticket chico)</span>
                  <span>$25.000</span>
                  <span>$50.000 (ticket medio)</span>
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
                +${extraRevenue.toLocaleString()} <span className="text-xs font-mono text-zinc-400 font-normal">/mes</span>
              </div>

              <div className="text-xs text-zinc-400 font-mono">
                Representa aproximadamente <span className="text-white font-bold">~{conversionsCelere - conversionsTraditional} clientes extra por mes</span> comprando en tu negocio.
              </div>

              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola Célere, calculé una ganancia adicional de $${extraRevenue.toLocaleString()} para mi negocio y quiero coordinar la creación de mi web.`)}`}
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
      <section id="servicios" className="py-24 px-6 border-b border-white/15">
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
                Creamos tu web desde cero sin plantillas prefabricadas. Diseñada para convertir en celulares y optimizada para aparecer en Google.
              </p>
              <div className="text-xs font-mono text-zinc-400 pt-4 border-t border-white/10 flex items-center justify-between">
                <span>PAGO ÚNICO DE DESARROLLO</span>
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
                <span>ABONO MENSUAL FIJO</span>
                <span className="text-white group-hover:translate-x-1 transition-transform font-bold">Cotizar →</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CTA FINAL MONUMENTAL */}
      <section className="py-24 px-6 relative overflow-hidden bg-black">
        <div className="max-w-4xl mx-auto p-12 sm:p-16 rounded-3xl bg-zinc-950 border border-white/25 text-center relative shadow-[0_0_80px_rgba(255,255,255,0.08)]">
          
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4 block font-bold">
            [ INICIAR CONVERSACIÓN DIRECTA ]
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
          FOOTER: CON LA BARRA VERDECITA DE PERSONITAS 3D QUE EXPLOTAN CON CÓDIGO
         ========================================================================= */}
      <footer className="pt-12 pb-16 px-6 border-t border-white/15 bg-black text-xs font-mono text-zinc-400 relative">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-white tracking-widest">CÉLERE</span>
            <span>// DIGITAL ENGINEERING STUDIO</span>
            <span>• © {new Date().getFullYear()}</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#demos" className="hover:text-white transition-colors">Demos</a>
            <a href="#scanner" className="hover:text-white transition-colors">Auditoría</a>
            <a href="#roi" className="hover:text-white transition-colors">Calculadora</a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
          </div>

        </div>

        {/* BARRA VERDECITA INTERACTIVA: Las personitas de alambre caminan aquí y explotan al caerles código */}
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
