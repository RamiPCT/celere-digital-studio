import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  ArrowRight, 
  Smartphone, 
  ShieldCheck, 
  CheckCircle2, 
  MessageCircle, 
  Layers, 
  Activity,
  Terminal,
  Cpu,
  ChevronRight, 
  Menu, 
  X,
  Star,
  Gauge,
  Sliders,
  Sparkles,
  ArrowUpRight,
  Laptop,
  Search,
  Check,
  ShoppingBag,
  Calendar,
  Utensils,
  Stethoscope,
  Briefcase,
  Maximize2,
  Minimize2,
  Plus,
  Minus,
  Clock,
  MapPin,
  Phone,
  Trash2,
  ChevronDown
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeBenchmark, setActiveBenchmark] = useState<'traditional' | 'celere'>('celere');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Showroom State
  const [activeDemoTab, setActiveDemoTab] = useState<'gastro' | 'health' | 'fashion' | 'legal'>('gastro');
  const [demoDeviceView, setDemoDeviceView] = useState<'desktop' | 'mobile'>('desktop');
  const [isFullScreenDemo, setIsFullScreenDemo] = useState(false);

  // 1. Estado Demo Gastronomía (Aura Bistro)
  const [gastroCategory, setGastroCategory] = useState<'principales' | 'entradas' | 'cocteles'>('principales');
  const [reserveGuests, setReserveGuests] = useState('2 personas');
  const [reserveTime, setReserveTime] = useState('21:30 hs');
  const [reserveDate, setReserveDate] = useState('Hoy');

  // 2. Estado Demo Salud (Nova Dental)
  const [dentalTreatment, setDentalTreatment] = useState('Ortodoncia Invisible 3D');
  const [dentalDoctor, setDentalDoctor] = useState('Dra. Valentina Ortiz');
  const [dentalDay, setDentalDay] = useState('Jueves');

  // 3. Estado Demo Moda (Kroma Streetwear)
  const [cartItems, setCartItems] = useState<{ id: number; name: string; price: number; size: string; count: number }[]>([
    { id: 1, name: "Heavy Cyber Hoodie Black", price: 45000, size: "L", count: 1 }
  ]);
  const [selectedSize, setSelectedSize] = useState('L');
  const [isCartOpen, setIsCartOpen] = useState(false);

  // 4. Estado Demo Legal (Apex Partners)
  const [legalArea, setLegalArea] = useState('Blindaje Societario & Startups');

  // Escáner Interactivo
  const [scanInput, setScanInput] = useState('');
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'done'>('idle');
  const [scanProgress, setScanProgress] = useState(0);

  // Calculadora ROI
  const [monthlyVisits, setMonthlyVisits] = useState(1500);
  const [averageTicket, setAverageTicket] = useState(30000);

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

  const handleStartScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!scanInput.trim()) return;
    setScanState('scanning');
    setScanProgress(20);
    setTimeout(() => setScanProgress(55), 500);
    setTimeout(() => setScanProgress(85), 1100);
    setTimeout(() => {
      setScanProgress(100);
      setScanState('done');
    }, 1600);
  };

  // Cálculos ROI
  const conversionsTraditional = Math.round(monthlyVisits * 0.008);
  const conversionsCelere = Math.round(monthlyVisits * 0.038);
  const revenueTraditional = conversionsTraditional * averageTicket;
  const revenueCelere = conversionsCelere * averageTicket;
  const extraRevenue = revenueCelere - revenueTraditional;

  const reviews = [
    {
      name: "Martín Rossi",
      role: "Fundador de Bistro 9",
      rating: 5,
      metric: "+280% reservas",
      comment: "La web es un misil. Los clientes escanean el QR o entran desde Instagram y reservan en 10 segundos directo por WhatsApp."
    },
    {
      name: "Dra. Camila Soria",
      role: "Directora en Nova Salud",
      rating: 5,
      metric: "Carga en 0.4s",
      comment: "Veníamos de un WordPress viejísimo que tardaba 5 segundos en abrir. La diferencia de velocidad y estética que lograron es de otro planeta."
    },
    {
      name: "Lucas Benítez",
      role: "Founder en Kroma Brand",
      rating: 5,
      metric: "x3 visitas convertidas",
      comment: "El diseño dejó a toda nuestra competencia pareciendo de 2012. Tuvimos récord de consultas la primera semana de lanzamiento."
    },
    {
      name: "Valeria Mendez",
      role: "Estudio Contable VM",
      rating: 5,
      metric: "100% automatizado",
      comment: "Nos armaron la web y nos explicaron todo con una paciencia tremenda. Da una imagen de confianza y seriedad absoluta."
    },
    {
      name: "Ignacio Vega",
      role: "CEO en Apex Logistics",
      rating: 5,
      metric: "99/100 en Google",
      comment: "Impecable el servicio de soporte y mantenimiento mensual. Cualquier cambio que necesitamos lo hacen el mismo día."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black relative">
      
      {/* Barra superior de lectura */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-laser-violet via-white to-laser-neon z-[70] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none -z-20" />
      <div className="fixed top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-purple-700/15 via-laser-violet/5 to-transparent blur-[160px] pointer-events-none -z-10" />

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-2xl border-b border-white/15 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/25 flex items-center justify-center font-mono text-sm font-bold text-white group-hover:border-laser-neon transition-colors duration-300 relative overflow-hidden shadow-inner">
              <span className="text-white tracking-tighter">C<span className="text-laser-neon font-black">//</span></span>
              <div className="absolute inset-0 bg-gradient-to-tr from-laser-violet/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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

          {/* Menú Nítido y Notable */}
          <nav className="hidden md:flex items-center gap-2 bg-zinc-950 p-1.5 rounded-xl border border-white/15 shadow-inner">
            <a 
              href="#demos" 
              className="px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider text-zinc-200 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5"
            >
              <span className="text-laser-neon">●</span> DEMOS EN VIVO
            </a>
            <a 
              href="#scanner" 
              className="px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider text-zinc-200 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5"
            >
              <span className="text-laser-neon">●</span> AUDITORÍA IA
            </a>
            <a 
              href="#roi" 
              className="px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider text-zinc-200 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5"
            >
              <span className="text-laser-neon">●</span> CALCULADORA
            </a>
            <a 
              href="#servicios" 
              className="px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider text-zinc-200 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5"
            >
              <span className="text-laser-neon">●</span> SERVICIOS
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-white/15 text-[11px] font-mono text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>SOPORTE MENSUAL ACTIVO</span>
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
            <a href="#demos" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg text-sm text-zinc-200 font-bold hover:bg-white/10">// Demos Interactivas en Vivo</a>
            <a href="#scanner" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg text-sm text-zinc-200 font-bold hover:bg-white/10">// Auditoría IA en 5s</a>
            <a href="#roi" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg text-sm text-zinc-200 font-bold hover:bg-white/10">// Calculadora de Ventas</a>
            <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded-lg text-sm text-zinc-200 font-bold hover:bg-white/10">// Servicios & Mantenimiento</a>
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
            <span className="w-2 h-2 rounded-full bg-laser-neon" />
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
            Desarrollamos la presencia web de tu marca y nos encargamos del mantenimiento mensual, velocidad y actualizaciones continuas para que vos solo te preocupes por atender clientes.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a 
              href="#demos"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-display font-bold text-sm bg-white text-black hover:bg-zinc-200 transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:scale-105"
            >
              <Laptop className="w-4 h-4" />
              <span>Explorar Demos en Vivo</span>
            </a>

            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-mono text-xs uppercase tracking-wider bg-zinc-950 hover:bg-zinc-900 border border-white/25 text-zinc-200 hover:text-white transition-all duration-200 flex items-center justify-center gap-2.5"
            >
              <MessageCircle className="w-4 h-4 text-laser-neon" />
              <span>Cotizar Proyecto + Soporte</span>
            </a>
          </div>

          <div className="mt-16 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="p-4 rounded-xl bg-zinc-950/90 border border-white/15">
              <span className="text-[10px] font-mono text-zinc-400 uppercase block mb-1">Velocidad Promedio</span>
              <div className="text-2xl font-display font-bold text-white flex items-center gap-2">
                0.4s <span className="text-emerald-400 text-xs font-mono font-normal">● ULTRA</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950/90 border border-white/15">
              <span className="text-[10px] font-mono text-zinc-400 uppercase block mb-1">Google PageSpeed</span>
              <div className="text-2xl font-display font-bold text-white flex items-center gap-2">
                99/100 <span className="text-laser-neon text-xs font-mono font-normal">✦ TOP 1%</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950/90 border border-white/15">
              <span className="text-[10px] font-mono text-zinc-400 uppercase block mb-1">Soporte y Gestión</span>
              <div className="text-2xl font-display font-bold text-white flex items-center gap-2">
                Mensual <span className="text-purple-300 text-xs font-mono font-normal">Llave en mano</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950/90 border border-white/15">
              <span className="text-[10px] font-mono text-zinc-400 uppercase block mb-1">Desarrollo Ágil</span>
              <div className="text-2xl font-display font-bold text-white flex items-center gap-2">
                3-5 Días <span className="text-emerald-400 text-xs font-mono font-normal">Entrega</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* MARQUEE RESEÑAS */}
      <section id="resenas" className="py-12 border-y border-white/15 bg-zinc-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-300 font-bold">
              Clientes con Mantenimiento & Desarrollo Activo
            </span>
          </div>
          <span className="text-xs font-mono text-zinc-500 font-medium">
            [ CASOS DE ÉXITO ]
          </span>
        </div>

        <div className="mask-marquee overflow-hidden whitespace-nowrap">
          <div className="animate-marquee inline-flex gap-6 py-2">
            {[...reviews, ...reviews].map((rev, idx) => (
              <div 
                key={idx}
                className="w-[380px] shrink-0 p-6 rounded-2xl bg-black border border-white/15 hover:border-white/35 transition-all duration-200 whitespace-normal text-left shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded bg-purple-500/15 border border-purple-500/30 text-laser-neon text-[10px] font-mono font-bold">
                    {rev.metric}
                  </span>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed mb-4 italic">
                  "{rev.comment}"
                </p>

                <div className="flex items-center justify-between border-t border-white/10 pt-3">
                  <div>
                    <h4 className="text-xs font-bold text-white font-display">{rev.name}</h4>
                    <span className="text-[10px] font-mono text-zinc-400">{rev.role}</span>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SHOWROOM: PREPÁGINAS COMPLETAS, RICAS Y DETALLADAS POR RUBRO
         ========================================================================= */}
      <section id="demos" className="py-24 px-6 border-b border-white/15 bg-void relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-laser-neon mb-3 block font-bold">
              // MUESTRAS REALES POR INDUSTRIA
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
              Pre-páginas completas para cada rubro
            </h2>
            <p className="text-sm text-zinc-300 mt-4 leading-relaxed">
              No mostramos simples fotos: cada demo es una mini-web funcional con catálogo, cartas interactivas, selección de turnos o carritos de compra.
            </p>

            {/* Selector de Rubros Flotantes (Levitación Magnética Dinámica) */}
            <div className="mt-10 mb-4 py-4 flex justify-center gap-3 sm:gap-4 flex-wrap items-center">
              
              {/* Rubro 1: Gastronomía */}
              <button
                onClick={() => setActiveDemoTab('gastro')}
                className={`group px-6 py-3.5 rounded-2xl text-xs font-mono font-bold tracking-wider transition-all duration-300 flex items-center gap-2.5 shadow-xl relative cursor-pointer ${
                  activeDemoTab === 'gastro'
                    ? 'bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.4)] scale-110 -translate-y-2 z-20 border-2 border-white'
                    : 'animate-floating-1 bg-zinc-950/90 text-zinc-300 hover:text-white border border-white/20 hover:border-amber-400/80 hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] z-10'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-amber-400 group-hover:scale-125 transition-transform" />
                <Utensils className="w-4 h-4 text-amber-400" />
                <span>1. Gastronomía & Bar</span>
                {activeDemoTab === 'gastro' && (
                  <span className="ml-1 px-1.5 py-0.5 rounded bg-black text-[9px] font-mono text-white font-bold">
                    ACTIVO
                  </span>
                )}
              </button>

              {/* Rubro 2: Salud & Estética */}
              <button
                onClick={() => setActiveDemoTab('health')}
                className={`group px-6 py-3.5 rounded-2xl text-xs font-mono font-bold tracking-wider transition-all duration-300 flex items-center gap-2.5 shadow-xl relative cursor-pointer ${
                  activeDemoTab === 'health'
                    ? 'bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.4)] scale-110 -translate-y-2 z-20 border-2 border-white'
                    : 'animate-floating-2 bg-zinc-950/90 text-zinc-300 hover:text-white border border-white/20 hover:border-emerald-400/80 hover:shadow-[0_0_20px_rgba(52,211,153,0.3)] z-10'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
                <Stethoscope className="w-4 h-4 text-emerald-400" />
                <span>2. Salud & Estética</span>
                {activeDemoTab === 'health' && (
                  <span className="ml-1 px-1.5 py-0.5 rounded bg-black text-[9px] font-mono text-white font-bold">
                    ACTIVO
                  </span>
                )}
              </button>

              {/* Rubro 3: Tienda & Moda */}
              <button
                onClick={() => setActiveDemoTab('fashion')}
                className={`group px-6 py-3.5 rounded-2xl text-xs font-mono font-bold tracking-wider transition-all duration-300 flex items-center gap-2.5 shadow-xl relative cursor-pointer ${
                  activeDemoTab === 'fashion'
                    ? 'bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.4)] scale-110 -translate-y-2 z-20 border-2 border-white'
                    : 'animate-floating-3 bg-zinc-950/90 text-zinc-300 hover:text-white border border-white/20 hover:border-laser-neon/80 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] z-10'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-laser-neon group-hover:scale-125 transition-transform" />
                <ShoppingBag className="w-4 h-4 text-laser-neon" />
                <span>3. Tienda & Moda</span>
                {activeDemoTab === 'fashion' && (
                  <span className="ml-1 px-1.5 py-0.5 rounded bg-black text-[9px] font-mono text-white font-bold">
                    ACTIVO
                  </span>
                )}
              </button>

              {/* Rubro 4: Estudios & Consultoras */}
              <button
                onClick={() => setActiveDemoTab('legal')}
                className={`group px-6 py-3.5 rounded-2xl text-xs font-mono font-bold tracking-wider transition-all duration-300 flex items-center gap-2.5 shadow-xl relative cursor-pointer ${
                  activeDemoTab === 'legal'
                    ? 'bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.4)] scale-110 -translate-y-2 z-20 border-2 border-white'
                    : 'animate-floating-4 bg-zinc-950/90 text-zinc-300 hover:text-white border border-white/20 hover:border-blue-400/80 hover:shadow-[0_0_20px_rgba(96,165,250,0.3)] z-10'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-blue-400 group-hover:scale-125 transition-transform" />
                <Briefcase className="w-4 h-4 text-blue-400" />
                <span>4. Estudios & Consultoras</span>
                {activeDemoTab === 'legal' && (
                  <span className="ml-1 px-1.5 py-0.5 rounded bg-black text-[9px] font-mono text-white font-bold">
                    ACTIVO
                  </span>
                )}
              </button>

            </div>
          </div>

          {/* Marco del Navegador Interactivo */}
          <div className="max-w-5xl mx-auto rounded-3xl bg-zinc-950 border border-white/20 shadow-2xl overflow-hidden">
            
            {/* Barra superior de la ventana */}
            <div className="bg-zinc-900/90 px-6 py-3.5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 text-[11px] font-mono text-zinc-400 hidden sm:inline">
                  {activeDemoTab === 'gastro' && 'Demo: Aura Bistro & Lounge • Carta QR & Reservas'}
                  {activeDemoTab === 'health' && 'Demo: Nova Dental Studio • Turnero Online'}
                  {activeDemoTab === 'fashion' && 'Demo: Kroma Streetwear • E-Commerce Catálogo'}
                  {activeDemoTab === 'legal' && 'Demo: Apex Partners Legal • Asesoría Corporativa'}
                </span>
              </div>

              {/* URL activa */}
              <div className="px-4 py-1 rounded-lg bg-black border border-white/15 text-[11px] font-mono text-zinc-300 flex items-center gap-2">
                <span className="text-emerald-400">https://</span>
                <span>
                  {activeDemoTab === 'gastro' && 'aurabistro.com.ar'}
                  {activeDemoTab === 'health' && 'novadental.com.ar/agenda'}
                  {activeDemoTab === 'fashion' && 'kroma.store/drop-2026'}
                  {activeDemoTab === 'legal' && 'apexlegal.com/corporativo'}
                </span>
              </div>

              {/* Controles de Vista Desktop / Celular */}
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

            {/* CONTENIDO DE LA PREPÁGINA */}
            <div className={`p-4 sm:p-8 transition-all duration-300 flex justify-center items-center ${
              demoDeviceView === 'mobile' ? 'bg-zinc-900/60' : 'bg-black'
            }`}>
              
              <div className={`w-full transition-all duration-300 ${
                demoDeviceView === 'mobile' 
                  ? 'max-w-sm rounded-[40px] border-8 border-zinc-800 bg-black p-4 shadow-2xl overflow-hidden' 
                  : 'max-w-4xl'
              }`}>
                
                {/* =========================================================
                    1. PREPÁGINA COMPLETA: GASTRONOMÍA & BARES (Aura Bistro)
                   ========================================================= */}
                {activeDemoTab === 'gastro' && (
                  <div className="space-y-8 text-left">
                    
                    {/* Header de Aura Bistro */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold">
                            Abierto hoy hasta 02:30 AM • Palermo Hollywood
                          </span>
                        </div>
                        <h3 className="text-3xl font-display font-black text-white tracking-tight">
                          AURA BISTRO <span className="text-amber-400 font-serif italic text-2xl">& Cocktails</span>
                        </h3>
                        <p className="text-xs text-zinc-400">Cocina contemporánea de fuegos, pastas frescas y barra sensorial.</p>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="text-right hidden sm:block">
                          <span className="text-[10px] font-mono text-zinc-400 block">Frente al Jardín Botánico</span>
                          <span className="text-xs font-mono text-white font-bold">Av. Libertador 4120</span>
                        </div>
                      </div>
                    </div>

                    {/* Selector de Categorías de la Carta */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                          Carta Digital de Temporada (Otoño / Invierno)
                        </span>
                        <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                          Precios Actualizados
                        </span>
                      </div>

                      <div className="flex gap-2 pb-2 overflow-x-auto">
                        <button
                          onClick={() => setGastroCategory('principales')}
                          className={`px-5 py-2 rounded-xl text-xs font-mono font-bold transition-all shrink-0 ${
                            gastroCategory === 'principales' ? 'bg-amber-400 text-black' : 'bg-zinc-900 text-zinc-400 hover:text-white'
                          }`}
                        >
                          🥩 Platos Principales & Fuegos
                        </button>
                        <button
                          onClick={() => setGastroCategory('entradas')}
                          className={`px-5 py-2 rounded-xl text-xs font-mono font-bold transition-all shrink-0 ${
                            gastroCategory === 'entradas' ? 'bg-amber-400 text-black' : 'bg-zinc-900 text-zinc-400 hover:text-white'
                          }`}
                        >
                          🧀 Entradas & Tapas
                        </button>
                        <button
                          onClick={() => setGastroCategory('cocteles')}
                          className={`px-5 py-2 rounded-xl text-xs font-mono font-bold transition-all shrink-0 ${
                            gastroCategory === 'cocteles' ? 'bg-amber-400 text-black' : 'bg-zinc-900 text-zinc-400 hover:text-white'
                          }`}
                        >
                          🍸 Coctelería de Autor
                        </button>
                      </div>
                    </div>

                    {/* Grilla de Platos con Descripción Gastronómica y Tags */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {gastroCategory === 'principales' && (
                        <>
                          <div className="p-4 rounded-2xl bg-zinc-950 border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="text-base font-bold text-white font-display">Ojo de Bife con Hueso (500g)</h4>
                                <span className="text-base font-mono font-black text-amber-300">$22.500</span>
                              </div>
                              <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                                Madurado 28 días en seco. Cocido a las brasas de quebracho con emulsión de ajo negro y papas rústicas al romero.
                              </p>
                            </div>
                            <div className="flex items-center gap-2 pt-2 border-t border-white/5 text-[10px] font-mono text-zinc-400">
                              <span className="px-2 py-0.5 rounded bg-zinc-900 border border-white/10 text-amber-300 font-bold">RECOMENDADO</span>
                              <span>Sin TACC disponible</span>
                            </div>
                          </div>

                          <div className="p-4 rounded-2xl bg-zinc-950 border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="text-base font-bold text-white font-display">Tortelloni de Osobuco Braseado</h4>
                                <span className="text-base font-mono font-black text-amber-300">$18.200</span>
                              </div>
                              <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                                Pasta artesanal rellena de osobuco al Malbec por 8 horas, crema de trufas y crocante de nuez moscada.
                              </p>
                            </div>
                            <div className="flex items-center gap-2 pt-2 border-t border-white/5 text-[10px] font-mono text-zinc-400">
                              <span className="px-2 py-0.5 rounded bg-zinc-900 border border-white/10 text-zinc-300">PASTA CASERA</span>
                              <span>Elaboración del día</span>
                            </div>
                          </div>

                          <div className="p-4 rounded-2xl bg-zinc-950 border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="text-base font-bold text-white font-display">Pesca del Día a la Manteca Noisette</h4>
                                <span className="text-base font-mono font-black text-amber-300">$19.800</span>
                              </div>
                              <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                                Filet fresco con puré cremoso de coliflor tostado, alcaparras crocantes y chips de batata crocante.
                              </p>
                            </div>
                            <div className="flex items-center gap-2 pt-2 border-t border-white/5 text-[10px] font-mono text-zinc-400">
                              <span className="px-2 py-0.5 rounded bg-zinc-900 border border-white/10 text-emerald-400">PESCA FRESCA</span>
                            </div>
                          </div>

                          <div className="p-4 rounded-2xl bg-zinc-950 border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="text-base font-bold text-white font-display">Risotto de Hongos Silvestres</h4>
                                <span className="text-base font-mono font-black text-amber-300">$17.400</span>
                              </div>
                              <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                                Arroz carnaroli con gírgolas, portobellos asados, queso pecorino y manteca de salvia.
                              </p>
                            </div>
                            <div className="flex items-center gap-2 pt-2 border-t border-white/5 text-[10px] font-mono text-zinc-400">
                              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">VEGETARIANO</span>
                            </div>
                          </div>
                        </>
                      )}

                      {gastroCategory === 'entradas' && (
                        <>
                          <div className="p-4 rounded-2xl bg-zinc-950 border border-white/10 flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="text-base font-bold text-white font-display">Burrata Pugliese Artesanal</h4>
                                <span className="text-base font-mono font-black text-amber-300">$13.900</span>
                              </div>
                              <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                                Corazón cremoso con tomates cherry asados en oliva virgen, reducción balsámica y focaccia caliente al romero.
                              </p>
                            </div>
                            <span className="text-[10px] font-mono text-emerald-400">VEGGIE</span>
                          </div>

                          <div className="p-4 rounded-2xl bg-zinc-950 border border-white/10 flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="text-base font-bold text-white font-display">Carpaccio de Lomo Curado</h4>
                                <span className="text-base font-mono font-black text-amber-300">$14.500</span>
                              </div>
                              <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                                Láminas finas de lomo premium, rúcula fresca, lajas de parmesano reggiano y aceite de trufas blancas.
                              </p>
                            </div>
                            <span className="text-[10px] font-mono text-amber-400">ENTRADA DESTACADA</span>
                          </div>
                        </>
                      )}

                      {gastroCategory === 'cocteles' && (
                        <>
                          <div className="p-4 rounded-2xl bg-zinc-950 border border-white/10 flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="text-base font-bold text-white font-display">Smoked Bourbon Old Fashioned</h4>
                                <span className="text-base font-mono font-black text-amber-300">$9.200</span>
                              </div>
                              <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                                Bourbon de barril simple, bitter de cacao amazónico, piel de naranja y humo de astillas de roble en mesa.
                              </p>
                            </div>
                            <span className="text-[10px] font-mono text-amber-400">EXPERIENCIA SENSORIAL</span>
                          </div>

                          <div className="p-4 rounded-2xl bg-zinc-950 border border-white/10 flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="text-base font-bold text-white font-display">Clarified Milk Punch Botánico</h4>
                                <span className="text-base font-mono font-black text-amber-300">$8.800</span>
                              </div>
                              <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                                Ron dorado clarificado, té Earl Grey, maracuyá, lima y cardamomo. Cristalino y refrescante.
                              </p>
                            </div>
                            <span className="text-[10px] font-mono text-laser-neon">COCTEL DE AUTOR</span>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Módulo de Reserva Interactivo en Tiempo Real */}
                    <div className="p-6 rounded-2xl bg-zinc-900 border border-amber-400/30">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                        <div>
                          <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-bold">Reserva Inmediata</span>
                          <h4 className="text-lg font-bold text-white font-display">¿Venís a cenar? Asegurá tu mesa</h4>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                          <Clock className="w-4 h-4 text-amber-400" />
                          <span>Confirmación directa por WhatsApp</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                        <div>
                          <label className="text-[10px] font-mono text-zinc-400 block mb-1">DÍA</label>
                          <select 
                            value={reserveDate}
                            onChange={(e) => setReserveDate(e.target.value)}
                            className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-xs text-white font-mono"
                          >
                            <option>Hoy</option>
                            <option>Mañana</option>
                            <option>Viernes</option>
                            <option>Sábado</option>
                          </select>
                        </div>

                        <div>
                          <label className="text-[10px] font-mono text-zinc-400 block mb-1">HORARIO</label>
                          <select 
                            value={reserveTime}
                            onChange={(e) => setReserveTime(e.target.value)}
                            className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-xs text-white font-mono"
                          >
                            <option>20:30 hs</option>
                            <option>21:30 hs</option>
                            <option>22:45 hs</option>
                            <option>23:30 hs</option>
                          </select>
                        </div>

                        <div>
                          <label className="text-[10px] font-mono text-zinc-400 block mb-1">PERSONAS</label>
                          <select 
                            value={reserveGuests}
                            onChange={(e) => setReserveGuests(e.target.value)}
                            className="w-full bg-black border border-white/20 rounded-xl px-3 py-2 text-xs text-white font-mono"
                          >
                            <option>2 personas</option>
                            <option>4 personas</option>
                            <option>6 personas</option>
                            <option>8 o más (Evento)</option>
                          </select>
                        </div>
                      </div>

                      <a 
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola Aura Bistro! Quiero reservar una mesa para ${reserveGuests} el día ${reserveDate} a las ${reserveTime}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-display font-black text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-400/20"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Confirmar Reserva de Mesa por WhatsApp</span>
                      </a>
                    </div>

                  </div>
                )}

                {/* =========================================================
                    2. PREPÁGINA COMPLETA: SALUD & ESTÉTICA (Nova Dental Studio)
                   ========================================================= */}
                {activeDemoTab === 'health' && (
                  <div className="space-y-8 text-left">
                    
                    {/* Header de Nova Dental */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold">
                            Guardia & Turnos Online • Sede Recoleta & Belgrano
                          </span>
                        </div>
                        <h3 className="text-3xl font-display font-black text-white tracking-tight">
                          NOVA DENTAL <span className="text-emerald-400 font-sans font-light text-2xl">// Odontología 3D</span>
                        </h3>
                        <p className="text-xs text-zinc-400">Escaneo intraoral sin moldes, ortodoncia invisible y diseño de sonrisa en 24hs.</p>
                      </div>

                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
                        <span>Tecnología iTero 3D</span>
                      </div>
                    </div>

                    {/* Tratamientos Especializados */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-4 rounded-2xl bg-zinc-950 border border-white/10 space-y-2">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <h4 className="text-sm font-bold text-white">Ortodoncia Invisible</h4>
                        <p className="text-xs text-zinc-400">Alineadores transparentes extraíbles. Sin brackets metálicos ni dolor.</p>
                      </div>

                      <div className="p-4 rounded-2xl bg-zinc-950 border border-white/10 space-y-2">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <h4 className="text-sm font-bold text-white">Implantes Guiados por IA</h4>
                        <p className="text-xs text-zinc-400">Colocación con guía quirúrgica milimétrica y dientes fijos en el mismo día.</p>
                      </div>

                      <div className="p-4 rounded-2xl bg-zinc-950 border border-white/10 space-y-2">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                          <Zap className="w-4 h-4" />
                        </div>
                        <h4 className="text-sm font-bold text-white">Carillas de Porcelana</h4>
                        <p className="text-xs text-zinc-400">Diseño digital previo para que veas el resultado antes de tocar un diente.</p>
                      </div>
                    </div>

                    {/* Turnero Interactivo Paso a Paso */}
                    <div className="p-6 rounded-2xl bg-zinc-900 border border-emerald-500/30 space-y-5">
                      <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <div>
                          <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold">Agenda en Línea</span>
                          <h4 className="text-base font-bold text-white font-display">Solicitar Turno de Diagnóstico</h4>
                        </div>
                        <span className="text-xs font-mono text-zinc-400">Primer consulta con escaneo 3D bonificado</span>
                      </div>

                      {/* 1. Seleccionar Tratamiento */}
                      <div>
                        <label className="text-[10px] font-mono text-zinc-400 block mb-2">1. SELECCIONÁ EL TRATAMIENTO QUE NECESITÁS:</label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {['Ortodoncia Invisible 3D', 'Implantes & Prótesis', 'Limpieza Profunda & Blanqueamiento'].map((tr) => (
                            <button
                              key={tr}
                              onClick={() => setDentalTreatment(tr)}
                              className={`p-2.5 rounded-xl text-xs font-mono text-left transition-all ${
                                dentalTreatment === tr 
                                  ? 'bg-emerald-400 text-black font-bold' 
                                  : 'bg-black text-zinc-300 hover:text-white border border-white/10'
                              }`}
                            >
                              {tr}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* 2. Seleccionar Profesional */}
                      <div>
                        <label className="text-[10px] font-mono text-zinc-400 block mb-2">2. PROFESIONAL RESPONSABLE:</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {[
                            { name: "Dra. Valentina Ortiz", spec: "Especialista en Ortodoncia & Alineadores" },
                            { name: "Dr. Matías Ramos", spec: "Cirugía e Implantes Guiados" }
                          ].map((doc) => (
                            <button
                              key={doc.name}
                              onClick={() => setDentalDoctor(doc.name)}
                              className={`p-3 rounded-xl text-xs text-left transition-all ${
                                dentalDoctor === doc.name 
                                  ? 'bg-white text-black font-bold' 
                                  : 'bg-black text-zinc-300 hover:text-white border border-white/10'
                              }`}
                            >
                              <div className="font-bold">{doc.name}</div>
                              <div className="text-[10px] text-zinc-500 font-mono">{doc.spec}</div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Botón WhatsApp con datos pre-cargados */}
                      <a 
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola Nova Dental, quiero agendar un turno para ${dentalTreatment} con ${dentalDoctor}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-display font-black text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-400/20"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Agendar Turno con {dentalDoctor} por WhatsApp</span>
                      </a>
                    </div>

                  </div>
                )}

                {/* =========================================================
                    3. PREPÁGINA COMPLETA: TIENDA & MODA (Kroma Streetwear)
                   ========================================================= */}
                {activeDemoTab === 'fashion' && (
                  <div className="space-y-8 text-left">
                    
                    {/* Barra de Promoción Superior */}
                    <div className="py-1 px-4 rounded-lg bg-zinc-900 border border-white/10 text-center text-[10px] font-mono text-zinc-300 tracking-wider">
                      ✦ ENVIOS GRATIS A TODO EL PAÍS EN COMPRAS SUPERIORES A $80.000 • 3 CUOTAS SIN INTERÉS ✦
                    </div>

                    {/* Header de la Marca */}
                    <div className="flex items-center justify-between pb-6 border-b border-white/10">
                      <div>
                        <span className="text-[10px] font-mono tracking-widest text-laser-neon uppercase font-bold">
                          DROP 04 // SEASON 2026
                        </span>
                        <h3 className="text-3xl font-display font-black text-white tracking-tight">
                          KROMA <span className="text-zinc-500 font-mono text-lg font-normal">// Heavy Garments</span>
                        </h3>
                      </div>

                      {/* Botón de Carrito con Contador en Vivo */}
                      <button 
                        onClick={() => setIsCartOpen(!isCartOpen)}
                        className="px-4 py-2 rounded-xl bg-white text-black font-mono text-xs font-bold flex items-center gap-2 hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>Carrito ({cartTotalItems})</span>
                      </button>
                    </div>

                    {/* Selector de Talle Activo */}
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-zinc-400">Elegir Talle:</span>
                      <div className="flex gap-1.5">
                        {['S', 'M', 'L', 'XL'].map((size) => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`w-8 h-8 rounded-lg text-xs font-mono font-bold transition-all ${
                              selectedSize === size 
                                ? 'bg-white text-black' 
                                : 'bg-zinc-900 text-zinc-400 border border-white/10 hover:text-white'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Catálogo de Productos */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Producto 1 */}
                      <div className="p-5 rounded-2xl bg-zinc-950 border border-white/10 hover:border-laser-neon transition-all flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <span className="px-2 py-0.5 rounded bg-purple-500/10 text-laser-neon text-[10px] font-mono font-bold">
                              450 GSM COTTON
                            </span>
                            <span className="text-base font-mono font-black text-white">$45.000</span>
                          </div>
                          <h4 className="text-base font-bold text-white font-display mb-1">Heavy Cyber Hoodie Black</h4>
                          <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                            Algodón rústico pesado de 450 gramos. Corte boxy fit oversize con estampas serigráficas en alta densidad.
                          </p>
                        </div>

                        <button
                          onClick={() => addToCart("Heavy Cyber Hoodie Black", 45000)}
                          className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-white hover:text-black border border-white/20 text-xs font-mono font-bold transition-all flex items-center justify-center gap-2"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Agregar al Carrito (Talle {selectedSize})</span>
                        </button>
                      </div>

                      {/* Producto 2 */}
                      <div className="p-5 rounded-2xl bg-zinc-950 border border-white/10 hover:border-laser-neon transition-all flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <span className="px-2 py-0.5 rounded bg-purple-500/10 text-laser-neon text-[10px] font-mono font-bold">
                              RIPSTOP FABRIC
                            </span>
                            <span className="text-base font-mono font-black text-white">$52.000</span>
                          </div>
                          <h4 className="text-base font-bold text-white font-display mb-1">Tactical Parachute Pants</h4>
                          <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                            Pantalón cargo en tela impermeable antidesgarro con 6 bolsillos utilitarios y cordones elásticos ajustables.
                          </p>
                        </div>

                        <button
                          onClick={() => addToCart("Tactical Parachute Pants", 52000)}
                          className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-white hover:text-black border border-white/20 text-xs font-mono font-bold transition-all flex items-center justify-center gap-2"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Agregar al Carrito (Talle {selectedSize})</span>
                        </button>
                      </div>

                    </div>

                    {/* Desplegable del Carrito Interactivo */}
                    {cartItems.length > 0 && (
                      <div className="p-5 rounded-2xl bg-zinc-900 border border-white/20 space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-white/10">
                          <span className="text-xs font-mono font-bold text-white">RESUMEN DE TU PEDIDO ({cartTotalItems} prendas)</span>
                          <span className="text-xs font-mono text-emerald-400 font-bold">Envío Bonificado</span>
                        </div>

                        <div className="space-y-2">
                          {cartItems.map((item, idx) => (
                            <div key={idx} className="flex justify-between items-center text-xs font-mono">
                              <span className="text-zinc-300">{item.name} ({item.size}) x{item.count}</span>
                              <span className="text-white font-bold">${(item.price * item.count).toLocaleString()}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-3 border-t border-white/10 flex justify-between items-center font-mono">
                          <span className="text-xs text-zinc-400">TOTAL ESTIMADO:</span>
                          <span className="text-lg font-bold text-white font-display">${cartTotal.toLocaleString()}</span>
                        </div>

                        <a 
                          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola Kroma! Quiero realizar el pedido de mi carrito: ${cartItems.map(i => `${i.name} (Talle ${i.size}) x${i.count}`).join(', ')} por un total de $${cartTotal.toLocaleString()}.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-3.5 rounded-xl bg-white text-black font-display font-black text-xs flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all shadow-lg"
                        >
                          <MessageCircle className="w-4 h-4 text-emerald-600" />
                          <span>Enviar Pedido Directo a WhatsApp</span>
                        </a>
                      </div>
                    )}

                  </div>
                )}

                {/* =========================================================
                    4. PREPÁGINA COMPLETA: ESTUDIOS & CONSULTORAS (Apex Legal)
                   ========================================================= */}
                {activeDemoTab === 'legal' && (
                  <div className="space-y-8 text-left">
                    
                    {/* Header Institucional */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-bold">
                            Buenos Aires • Miami • Madrid
                          </span>
                        </div>
                        <h3 className="text-3xl font-display font-black text-white tracking-tight">
                          APEX & PARTNERS <span className="text-zinc-500 font-mono text-base font-normal">// Abogados Corporativos</span>
                        </h3>
                        <p className="text-xs text-zinc-400">Blindaje societario, estructuras tributarias internacionales y defensa de empresas.</p>
                      </div>

                      <div className="px-3 py-1.5 rounded-xl bg-zinc-900 border border-white/15 text-zinc-300 text-xs font-mono">
                        Confidencialidad Garantizada
                      </div>
                    </div>

                    {/* Áreas de Práctica con Descripción Detallada */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-5 rounded-2xl bg-zinc-950 border border-white/10 space-y-3">
                        <span className="text-xs font-mono text-laser-neon font-bold">01 // CORPORATIVO & M&A</span>
                        <h4 className="text-sm font-bold text-white">Fusiones, Adquisiciones & Rondas</h4>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                          Asesoramiento legal integral en rondas de inversión, pactos de socios y constitución de sociedades en Delaware / Uruguay.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-zinc-950 border border-white/10 space-y-3">
                        <span className="text-xs font-mono text-laser-neon font-bold">02 // FISCALIDAD INTELIGENTE</span>
                        <h4 className="text-sm font-bold text-white">Planificación Tributaria</h4>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                          Optimización impositiva legal para empresas exportadoras de servicios, software y marcas de e-commerce global.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-zinc-950 border border-white/10 space-y-3">
                        <span className="text-xs font-mono text-laser-neon font-bold">03 // LITIGIOS & RIESGO</span>
                        <h4 className="text-sm font-bold text-white">Defensa Empresarial & Laboral</h4>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                          Auditoría de contratos, prevención de contingencias laborales y representación ante fueros comerciales.
                        </p>
                      </div>
                    </div>

                    {/* Solicitud de Consulta Corporativa Confidencial */}
                    <div className="p-6 rounded-2xl bg-zinc-900 border border-white/20 space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <div>
                          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-bold">Contacto Corporativo</span>
                          <h4 className="text-base font-bold text-white font-display">Solicitar Consulta Diagnóstico con un Socio</h4>
                        </div>
                        <span className="text-xs font-mono text-emerald-400 font-bold">Respuesta en menos de 2 horas</span>
                      </div>

                      <div>
                        <label className="text-[10px] font-mono text-zinc-400 block mb-2">SELECCIONÁ EL MOTIVO DE LA CONSULTA:</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {[
                            'Blindaje Societario & Startups',
                            'Contratos Comerciales & Exportación',
                            'Conflicto Laboral / Mediación',
                            'Asesoría Tributaria Internacional'
                          ].map((area) => (
                            <button
                              key={area}
                              onClick={() => setLegalArea(area)}
                              className={`p-3 rounded-xl text-xs font-mono text-left transition-all ${
                                legalArea === area 
                                  ? 'bg-white text-black font-bold' 
                                  : 'bg-black text-zinc-300 hover:text-white border border-white/10'
                              }`}
                            >
                              {area}
                            </button>
                          ))}
                        </div>
                      </div>

                      <a 
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola Apex Partners, solicito una consulta confidencial con un socio por: ${legalArea}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 rounded-xl bg-white text-black font-display font-black text-xs flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all shadow-lg"
                      >
                        <Briefcase className="w-4 h-4" />
                        <span>Coordinar Consulta Confidencial por WhatsApp</span>
                      </a>
                    </div>

                  </div>
                )}

              </div>
            </div>

            {/* Pie del visualizador */}
            <div className="bg-zinc-900/90 px-6 py-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-zinc-400">
                ¿Querés una web con esta misma estructura y catálogo interactivo para tu rubro?
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

      {/* ESCÁNER INTERACTIVO EN 5s */}
      <section id="scanner" className="py-24 px-6 border-b border-white/15 bg-black relative">
        <div className="max-w-4xl mx-auto text-center">
          
          <span className="text-xs font-mono uppercase tracking-widest text-laser-neon mb-3 block font-bold">
            // ESCÁNER DE RENDIMIENTO EN TIEMPO REAL
          </span>

          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Auditá tu negocio digital en 5 segundos
          </h2>
          <p className="text-sm text-zinc-300 max-w-xl mx-auto mb-10">
            Ingresá tu página web actual o tu usuario de Instagram. Nuestro algoritmo diagnosticará si estás perdiendo clientes por velocidad o diseño.
          </p>

          <form onSubmit={handleStartScan} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3 mb-8">
            <div className="relative flex-1">
              <input 
                type="text" 
                value={scanInput}
                onChange={(e) => setScanInput(e.target.value)}
                placeholder="Ej: tuweb.com o @tunegocio"
                className="w-full px-5 py-4 rounded-xl bg-zinc-950 border border-white/20 text-white font-mono text-xs focus:outline-none focus:border-laser-neon transition-colors"
              />
              <Search className="w-4 h-4 text-zinc-500 absolute right-4 top-1/2 -translate-y-1/2" />
            </div>

            <button
              type="submit"
              disabled={scanState === 'scanning'}
              className="px-8 py-4 rounded-xl font-display font-bold text-xs bg-white text-black hover:bg-zinc-200 transition-all disabled:opacity-50 shrink-0 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              {scanState === 'scanning' ? 'Analizando...' : 'Escanear Ahora'}
            </button>
          </form>

          {scanState === 'scanning' && (
            <div className="max-w-md mx-auto p-6 rounded-2xl bg-zinc-950 border border-white/10 text-left font-mono text-xs space-y-3">
              <div className="flex justify-between text-zinc-400 text-[10px]">
                <span>ANALIZANDO ARQUITECTURA...</span>
                <span>{scanProgress}%</span>
              </div>
              <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-laser-violet to-emerald-400 transition-all duration-300"
                  style={{ width: `${scanProgress}%` }}
                />
              </div>
              <div className="text-[11px] text-zinc-500">
                {scanProgress < 40 && '● Conectando con servidores DNS...'}
                {scanProgress >= 40 && scanProgress < 80 && '● Verificando velocidad en dispositivos móviles 4G...'}
                {scanProgress >= 80 && '● Calculando tasa de rebote y fugas de clientes...'}
              </div>
            </div>
          )}

          {scanState === 'done' && (
            <div className="max-w-xl mx-auto p-6 rounded-2xl bg-zinc-950 border border-emerald-500/40 text-left space-y-4 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono text-xs font-bold text-white uppercase">Diagnóstico Completado: {scanInput}</span>
                </div>
                <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-bold">
                  POTENCIAL DE MEJORA: 82%
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-lg bg-black border border-white/10">
                  <span className="text-zinc-500 text-[10px] block">PÉRDIDA ESTIMADA</span>
                  <span className="text-red-400 font-bold text-base">38% de clientes</span>
                </div>
                <div className="p-3 rounded-lg bg-black border border-white/10">
                  <span className="text-zinc-500 text-[10px] block">TIEMPO DE RESPUESTA</span>
                  <span className="text-amber-400 font-bold text-base">Lento en celulares</span>
                </div>
              </div>

              <p className="text-xs text-zinc-300 leading-relaxed">
                Tu proyecto tiene un gran potencial pero está limitado por la falta de un flujo directo a WhatsApp y velocidad de carga móvil.
              </p>

              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola Célere, acabo de auditar mi marca (${scanInput}) en su web y quiero recibir la propuesta para optimizarla.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-white text-black font-display font-bold text-xs flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all"
              >
                <span>Recibir plan de optimización gratuito por WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          )}

        </div>
      </section>

      {/* CALCULADORA DE INGRESOS EXTRA (ROI) */}
      <section id="roi" className="py-24 px-6 border-b border-white/15 bg-void">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-laser-neon mb-3 block font-bold">
              // CALCULADORA DE RETORNO DE INVERSIÓN
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
              ¿Cuánto dinero extra deja una web rápida?
            </h2>
            <p className="text-sm text-zinc-300 mt-4">
              Ajustá las barras para ver cómo impacta una tasa de conversión moderna en tu facturación mensual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-zinc-950 p-8 sm:p-12 rounded-3xl border border-white/20">
            
            <div className="md:col-span-6 space-y-6">
              
              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-zinc-400">Visitas mensuales estimadas:</span>
                  <span className="text-white font-bold">{monthlyVisits.toLocaleString()} personas</span>
                </div>
                <input 
                  type="range" 
                  min="200" 
                  max="10000" 
                  step="200"
                  value={monthlyVisits}
                  onChange={(e) => setMonthlyVisits(Number(e.target.value))}
                  className="w-full accent-laser-neon cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-zinc-400">Ticket promedio de tu producto/servicio:</span>
                  <span className="text-white font-bold">${averageTicket.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="5000" 
                  max="150000" 
                  step="5000"
                  value={averageTicket}
                  onChange={(e) => setAverageTicket(Number(e.target.value))}
                  className="w-full accent-laser-neon cursor-pointer"
                />
              </div>

              <div className="text-[11px] font-mono text-zinc-500 pt-4 border-t border-white/10">
                * Comparativa basada en conversión tradicional del 0.8% frente al 3.8% promedio de una web Célere con botón directo a WhatsApp.
              </div>

            </div>

            <div className="md:col-span-6 p-6 sm:p-8 rounded-2xl bg-black border border-white/15 text-center space-y-4">
              <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest font-bold">
                FACTURACIÓN ESTIMADA ADICIONAL
              </span>

              <div className="text-4xl sm:text-5xl font-display font-black text-white tracking-tight">
                +${extraRevenue.toLocaleString()} <span className="text-xs font-mono text-zinc-400 font-normal">/mes</span>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed">
                Al no perder visitas por lentitud y facilitar el contacto inmediato, tu web pasa de ser un gasto a convertirse en tu mejor vendedor.
              </p>

              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola Célere, calculé un retorno extra de $${extraRevenue.toLocaleString()} en su web y quiero poner en marcha el proyecto.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-white text-black font-display font-bold text-xs flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all"
              >
                <span>Empezar con mi web ahora</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* SERVICIOS & PLANES */}
      <section id="servicios" className="py-24 px-6 border-b border-white/15">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-laser-neon mb-3 block font-bold">
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
                <span className="text-xs font-mono text-laser-neon font-bold">01 // CREACIÓN COMPLETA</span>
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
          
          <span className="text-xs font-mono uppercase tracking-widest text-laser-neon mb-4 block font-bold">
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

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-white/15 bg-black text-xs font-mono text-zinc-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          
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
      </footer>

    </div>
  );
}
