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
  DollarSign,
  Maximize2,
  RefreshCw,
  Plus
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeBenchmark, setActiveBenchmark] = useState<'traditional' | 'celere'>('celere');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Estado del Showroom de Demos
  const [activeDemoTab, setActiveDemoTab] = useState<'gastro' | 'health' | 'fashion' | 'legal'>('gastro');
  const [demoDeviceView, setDemoDeviceView] = useState<'desktop' | 'mobile'>('desktop');
  const [fullScreenModal, setFullScreenModal] = useState(false);

  // Estados interactivos dentro de las Demos
  const [gastroCategory, setGastroCategory] = useState<'entradas' | 'principales' | 'cocteles'>('principales');
  const [cartCount, setCartCount] = useState(0);
  const [selectedDoctor, setSelectedDoctor] = useState('Dra. Valentina');

  // Estado del Escáner Interactivo
  const [scanInput, setScanInput] = useState('');
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'done'>('idle');
  const [scanProgress, setScanProgress] = useState(0);

  // Estado de la Calculadora de Impacto Comercial
  const [monthlyVisits, setMonthlyVisits] = useState(1200);
  const [averageTicket, setAverageTicket] = useState(25000);

  // Barra de progreso de lectura al hacer scroll
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
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("¡Hola Célere! Quiero consultar por un proyecto web con soporte y mantenimiento mensual.")}`;

  // Simulación de escáner en vivo
  const handleStartScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!scanInput.trim()) return;
    setScanState('scanning');
    setScanProgress(15);
    setTimeout(() => setScanProgress(45), 600);
    setTimeout(() => setScanProgress(80), 1200);
    setTimeout(() => {
      setScanProgress(100);
      setScanState('done');
    }, 1800);
  };

  // Cálculo del simulador de ingresos extra
  // Web tradicional: 0.8% conversión | Web Célere: 3.5% conversión
  const conversionsTraditional = Math.round(monthlyVisits * 0.008);
  const conversionsCelere = Math.round(monthlyVisits * 0.035);
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
      
      {/* Barra superior de progreso de scroll ultra-fina */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-laser-violet via-white to-laser-neon z-[60] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Grid sutil de fondo */}
      <div className="fixed inset-0 bg-grid-pattern opacity-35 pointer-events-none -z-20" />
      <div className="fixed top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-purple-700/15 via-laser-violet/5 to-transparent blur-[160px] pointer-events-none -z-10" />

      {/* =========================================================================
          NAVBAR: LINKS MÁS NOTABLES, VISIBLES Y DESTACADOS
         ========================================================================= */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-2xl border-b border-white/15 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo Minimalista de Alta Precisión */}
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

          {/* Links Desktop: MUCHO MÁS NOTABLES, NÍTIDOS Y VISIBLES */}
          <nav className="hidden md:flex items-center gap-2 bg-zinc-950/80 p-1.5 rounded-xl border border-white/10">
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

          {/* Botón CTA Header */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-white/15 text-[11px] font-mono text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>SOPORTE 24/7 ACTIVO</span>
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

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-300 hover:text-white bg-zinc-900 rounded-lg border border-white/10"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
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

      {/* =========================================================================
          1. HERO SECTION: ORIENTADO A VENDER PROYECTOS CON SOPORTE
         ========================================================================= */}
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
              <span>Explorar Demos Interactivas</span>
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

          {/* Métricas: Ajustadas a Mantenimiento Gestionado y Soporte Continuo */}
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

      {/* =========================================================================
          BARRA DE RESEÑAS INFINITA (AUTO-SCROLLING MARQUEE)
         ========================================================================= */}
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
          2. SHOWROOM // DEMOS INTERACTIVAS CON PREPÁGINA EN VIVO
         ========================================================================= */}
      <section id="demos" className="py-24 px-6 border-b border-white/15 bg-void relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-laser-neon mb-3 block font-bold">
              // SHOWROOM EN VIVO & DEMOS FUNCIONALES
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
              Tocá y probá una muestra real por cada rubro
            </h2>
            <p className="text-sm text-zinc-300 mt-4 leading-relaxed">
              Cada sector tiene necesidades diferentes. Elegí un rubro abajo e interactuá directamente con la demo como si fueras el cliente final.
            </p>

            {/* Selector de Rubros */}
            <div className="mt-8 flex justify-center gap-2 flex-wrap">
              <button
                onClick={() => setActiveDemoTab('gastro')}
                className={`px-5 py-3 rounded-xl text-xs font-mono font-bold tracking-wider transition-all flex items-center gap-2 ${
                  activeDemoTab === 'gastro'
                    ? 'bg-white text-black shadow-[0_0_25px_rgba(255,255,255,0.35)] scale-105'
                    : 'bg-zinc-950 text-zinc-400 hover:text-white border border-white/10'
                }`}
              >
                <Utensils className="w-4 h-4" />
                <span>Gastronomía & Bares</span>
              </button>

              <button
                onClick={() => setActiveDemoTab('health')}
                className={`px-5 py-3 rounded-xl text-xs font-mono font-bold tracking-wider transition-all flex items-center gap-2 ${
                  activeDemoTab === 'health'
                    ? 'bg-white text-black shadow-[0_0_25px_rgba(255,255,255,0.35)] scale-105'
                    : 'bg-zinc-950 text-zinc-400 hover:text-white border border-white/10'
                }`}
              >
                <Stethoscope className="w-4 h-4" />
                <span>Salud & Estética</span>
              </button>

              <button
                onClick={() => setActiveDemoTab('fashion')}
                className={`px-5 py-3 rounded-xl text-xs font-mono font-bold tracking-wider transition-all flex items-center gap-2 ${
                  activeDemoTab === 'fashion'
                    ? 'bg-white text-black shadow-[0_0_25px_rgba(255,255,255,0.35)] scale-105'
                    : 'bg-zinc-950 text-zinc-400 hover:text-white border border-white/10'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Tienda & Moda Urbana</span>
              </button>

              <button
                onClick={() => setActiveDemoTab('legal')}
                className={`px-5 py-3 rounded-xl text-xs font-mono font-bold tracking-wider transition-all flex items-center gap-2 ${
                  activeDemoTab === 'legal'
                    ? 'bg-white text-black shadow-[0_0_25px_rgba(255,255,255,0.35)] scale-105'
                    : 'bg-zinc-950 text-zinc-400 hover:text-white border border-white/10'
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span>Estudios & Consultoras</span>
              </button>
            </div>
          </div>

          {/* Marco de Navegador / Dispositivo Interactivo */}
          <div className="max-w-5xl mx-auto rounded-3xl bg-zinc-950 border border-white/20 shadow-2xl overflow-hidden">
            
            {/* Barra superior de la ventana del simulador */}
            <div className="bg-zinc-900/90 px-6 py-3.5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 text-[11px] font-mono text-zinc-400 hidden sm:inline">
                  Ambiente de Simulación Célere
                </span>
              </div>

              {/* URL falsa pero interactiva */}
              <div className="px-4 py-1 rounded-lg bg-black border border-white/15 text-[11px] font-mono text-zinc-300 flex items-center gap-2">
                <span className="text-emerald-400">https://</span>
                <span>
                  {activeDemoTab === 'gastro' && 'aurabistro.celere.studio/menu'}
                  {activeDemoTab === 'health' && 'novadental.celere.studio/turnos'}
                  {activeDemoTab === 'fashion' && 'kromawear.celere.studio/lookbook'}
                  {activeDemoTab === 'legal' && 'apexpartners.celere.studio/asesoria'}
                </span>
              </div>

              {/* Selector Vista Desktop / Celular */}
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

            {/* CONTENIDO INTERACTIVO SEGÚN EL RUBRO */}
            <div className={`p-6 sm:p-10 transition-all duration-300 min-h-[460px] flex justify-center items-center ${
              demoDeviceView === 'mobile' ? 'bg-zinc-900/50' : 'bg-black'
            }`}>
              
              <div className={`w-full transition-all duration-300 ${
                demoDeviceView === 'mobile' 
                  ? 'max-w-sm rounded-[36px] border-4 border-zinc-700 bg-black p-5 shadow-2xl' 
                  : 'max-w-4xl'
              }`}>
                
                {/* 1. DEMO GASTRONOMÍA & BARES */}
                {activeDemoTab === 'gastro' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-white/10">
                      <div>
                        <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase">Restó & Cocktails</span>
                        <h3 className="text-2xl font-display font-extrabold text-white">Aura Bistro // Carta Digital</h3>
                      </div>
                      <a 
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola Aura Bistro, quiero reservar una mesa.")}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-mono font-bold flex items-center gap-1.5 hover:bg-amber-500/30"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Reservar Mesa</span>
                      </a>
                    </div>

                    {/* Categorías de Menú Interactivas */}
                    <div className="flex gap-2">
                      {(['entradas', 'principales', 'cocteles'] as const).map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setGastroCategory(cat)}
                          className={`px-4 py-1.5 rounded-lg text-xs font-mono uppercase transition-all ${
                            gastroCategory === cat 
                              ? 'bg-amber-400 text-black font-bold' 
                              : 'bg-zinc-900 text-zinc-400 hover:text-white'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>

                    {/* Platos en tiempo real */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {gastroCategory === 'principales' && (
                        <>
                          <div className="p-4 rounded-xl bg-zinc-950 border border-white/10 flex justify-between items-center">
                            <div>
                              <h4 className="text-sm font-bold text-white">Ojo de Bife Madurado</h4>
                              <p className="text-xs text-zinc-400">Con emulsión de trufa y papas rústicas.</p>
                            </div>
                            <span className="text-sm font-mono font-bold text-amber-300">$19.500</span>
                          </div>
                          <div className="p-4 rounded-xl bg-zinc-950 border border-white/10 flex justify-between items-center">
                            <div>
                              <h4 className="text-sm font-bold text-white">Risotto de Hongos Silvestres</h4>
                              <p className="text-xs text-zinc-400">Arborio, parmesano 24 meses y portobellos.</p>
                            </div>
                            <span className="text-sm font-mono font-bold text-amber-300">$16.800</span>
                          </div>
                        </>
                      )}

                      {gastroCategory === 'entradas' && (
                        <>
                          <div className="p-4 rounded-xl bg-zinc-950 border border-white/10 flex justify-between items-center">
                            <div>
                              <h4 className="text-sm font-bold text-white">Burrata Cremosa & Pesto</h4>
                              <p className="text-xs text-zinc-400">Tomates cherry confitados y focaccia artesanal.</p>
                            </div>
                            <span className="text-sm font-mono font-bold text-amber-300">$12.400</span>
                          </div>
                          <div className="p-4 rounded-xl bg-zinc-950 border border-white/10 flex justify-between items-center">
                            <div>
                              <h4 className="text-sm font-bold text-white">Tartar de Salmón Rosado</h4>
                              <p className="text-xs text-zinc-400">Palta hass, lima y crocante de sésamo.</p>
                            </div>
                            <span className="text-sm font-mono font-bold text-amber-300">$14.200</span>
                          </div>
                        </>
                      )}

                      {gastroCategory === 'cocteles' && (
                        <>
                          <div className="p-4 rounded-xl bg-zinc-950 border border-white/10 flex justify-between items-center">
                            <div>
                              <h4 className="text-sm font-bold text-white">Smoked Old Fashioned</h4>
                              <p className="text-xs text-zinc-400">Bourbon, bitter aromático ahumado en madera de roble.</p>
                            </div>
                            <span className="text-sm font-mono font-bold text-amber-300">$8.500</span>
                          </div>
                          <div className="p-4 rounded-xl bg-zinc-950 border border-white/10 flex justify-between items-center">
                            <div>
                              <h4 className="text-sm font-bold text-white">Gin Tonic Cítrico & Lavanda</h4>
                              <p className="text-xs text-zinc-400">Gin artesanal, tónica premium y flor de azahar.</p>
                            </div>
                            <span className="text-sm font-mono font-bold text-amber-300">$7.800</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}

                {/* 2. DEMO SALUD & ESTÉTICA */}
                {activeDemoTab === 'health' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-white/10">
                      <div>
                        <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase">Clínica Odontológica & Estética</span>
                        <h3 className="text-2xl font-display font-extrabold text-white">Nova Dental Studio</h3>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
                        Turnos Online Activos
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-zinc-950 border border-white/10 space-y-4">
                      <div className="text-xs font-mono text-zinc-400">1. Seleccioná el Especialista:</div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {['Dra. Valentina (Ortodoncia)', 'Dr. Matías (Implantes)', 'Dra. Sol (Estética)'].map((doc) => (
                          <button
                            key={doc}
                            onClick={() => setSelectedDoctor(doc)}
                            className={`p-2.5 rounded-lg text-xs text-left transition-all ${
                              selectedDoctor === doc ? 'bg-white text-black font-bold' : 'bg-zinc-900 text-zinc-400 hover:text-white'
                            }`}
                          >
                            {doc}
                          </button>
                        ))}
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-white/10">
                        <div className="text-xs font-mono text-zinc-300">
                          Especialista seleccionado: <span className="text-emerald-400 font-bold">{selectedDoctor}</span>
                        </div>
                        <a 
                          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola Nova Dental, quiero agendar un turno con ${selectedDoctor}.`)}`}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-mono font-bold flex items-center justify-center gap-2"
                        >
                          <Calendar className="w-3.5 h-3.5" />
                          <span>Confirmar Turno por WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. DEMO MODA & E-COMMERCE */}
                {activeDemoTab === 'fashion' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-white/10">
                      <div>
                        <span className="text-[10px] font-mono tracking-widest text-laser-neon uppercase">Drop // SS26</span>
                        <h3 className="text-2xl font-display font-extrabold text-white">Kroma Streetwear</h3>
                      </div>
                      <div className="px-4 py-2 rounded-xl bg-zinc-900 border border-white/20 text-xs font-mono font-bold flex items-center gap-2">
                        <ShoppingBag className="w-4 h-4 text-laser-neon" />
                        <span>Carrito ({cartCount})</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-2xl bg-zinc-950 border border-white/10 flex justify-between items-center">
                        <div>
                          <span className="text-[10px] font-mono text-zinc-500">OVERSIZED HOODIE</span>
                          <h4 className="text-sm font-bold text-white">Heavy Cyber Black</h4>
                          <span className="text-xs font-mono text-laser-neon font-bold">$42.000</span>
                        </div>
                        <button
                          onClick={() => setCartCount(cartCount + 1)}
                          className="px-3 py-2 rounded-lg bg-white text-black text-xs font-mono font-bold hover:bg-zinc-200 flex items-center gap-1"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Agregar</span>
                        </button>
                      </div>

                      <div className="p-4 rounded-2xl bg-zinc-950 border border-white/10 flex justify-between items-center">
                        <div>
                          <span className="text-[10px] font-mono text-zinc-500">PARACHUTE PANTS</span>
                          <h4 className="text-sm font-bold text-white">Titanium Tactical Cargo</h4>
                          <span className="text-xs font-mono text-laser-neon font-bold">$48.000</span>
                        </div>
                        <button
                          onClick={() => setCartCount(cartCount + 1)}
                          className="px-3 py-2 rounded-lg bg-white text-black text-xs font-mono font-bold hover:bg-zinc-200 flex items-center gap-1"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Agregar</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. DEMO ESTUDIOS & CONSULTORAS */}
                {activeDemoTab === 'legal' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-white/10">
                      <div>
                        <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">Estudio Jurídico & Contable</span>
                        <h3 className="text-2xl font-display font-extrabold text-white">Apex & Partners Legal</h3>
                      </div>
                      <span className="text-xs font-mono text-zinc-400">Atención a Empresas</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                      <div className="p-4 rounded-xl bg-zinc-950 border border-white/10">
                        <span className="text-laser-neon font-bold block mb-1">01 // CORPORATIVO</span>
                        <p className="text-zinc-400 text-[11px]">Constitución de sociedades, contratos y blindaje societario.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-zinc-950 border border-white/10">
                        <span className="text-laser-neon font-bold block mb-1">02 // TRIBUTARIO</span>
                        <p className="text-zinc-400 text-[11px]">Planificación fiscal inteligente y auditorías contables.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-zinc-950 border border-white/10">
                        <span className="text-laser-neon font-bold block mb-1">03 // LITIGIOS</span>
                        <p className="text-zinc-400 text-[11px]">Defensa judicial y resolución de conflictos comerciales.</p>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Pie del visualizador con llamada a la acción */}
            <div className="bg-zinc-900/90 px-6 py-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-zinc-400">
                ¿Querés una web con esta misma estructura y catálogo interactivo para tu rubro?
              </span>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-lg bg-white text-black font-display font-bold text-xs hover:bg-zinc-200 transition-all flex items-center gap-1.5"
              >
                <span>Solicitar demo personalizada por WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          3. ENTRETENIMIENTO IA: AUDITORÍA DE TU SITIO O INSTAGRAM EN 5s
         ========================================================================= */}
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

          {/* Animación del Escáner */}
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

          {/* Resultado de la Auditoría */}
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

      {/* =========================================================================
          4. CALCULADORA DE INGRESOS EXTRA (ROI) - ENTRETENIMIENTO FINANCIERO
         ========================================================================= */}
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
            
            {/* Controles de Sliders */}
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
                * Comparativa basada en conversión tradicional del 0.8% frente al 3.5% promedio de una web Célere con botón directo a WhatsApp.
              </div>

            </div>

            {/* Resultado Visual de Ingresos Extra */}
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

      {/* =========================================================================
          5. SERVICIOS & PLANES DE MANTENIMIENTO
         ========================================================================= */}
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

      {/* =========================================================================
          6. CTA FINAL MONUMENTAL
         ========================================================================= */}
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

      {/* FOOTER MONOCROMÁTICO */}
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
