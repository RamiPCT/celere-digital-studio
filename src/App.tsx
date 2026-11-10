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
  ArrowUpRight
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeBenchmark, setActiveBenchmark] = useState<'traditional' | 'celere'>('celere');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Configurador interactivo
  const [selectedIndustry, setSelectedIndustry] = useState('Gastronomía & Bares');
  const [selectedGoal, setSelectedGoal] = useState('Vender directo por WhatsApp');
  const [selectedVibe, setSelectedVibe] = useState('Minimalista Oscuro (Luxury)');

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
  const generateCustomWhatsApp = () => {
    const text = `¡Hola Célere! Quiero consultar por una web para el rubro ${selectedIndustry}, con estilo ${selectedVibe} y objetivo: ${selectedGoal}.`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

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
      comment: "Impecable el trato directo con los programadores. Cero rodeos, entendieron exactamente la estética que buscábamos."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black relative">
      
      {/* Barra superior de progreso de scroll ultra-fina */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-laser-violet via-white to-laser-neon z-[60] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Grid sutil de fondo para atmósfera de ingeniería */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-20" />
      
      {/* Luz focal láser sutil en la parte superior */}
      <div className="fixed top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-purple-700/20 via-laser-violet/5 to-transparent blur-[160px] pointer-events-none -z-10" />

      {/* =========================================================================
          NAVBAR: REDISEÑO TOTAL (Estilo Insignia de Estudio Tecnológico)
         ========================================================================= */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo Minimalista de Alta Precisión */}
          <a href="#" className="flex items-center gap-3 group">
            {/* Ícono de precisión en corte láser */}
            <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/20 flex items-center justify-center font-mono text-xs font-bold text-white group-hover:border-laser-neon transition-colors duration-300 relative overflow-hidden">
              <span className="text-white tracking-tighter">C<span className="text-laser-neon">//</span></span>
              <div className="absolute inset-0 bg-gradient-to-tr from-laser-violet/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Tipografía CÉLERE en Space Grotesk con detalles monospace */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-xl tracking-[0.2em] text-white">
                  CÉLERE
                </span>
                <span className="px-1.5 py-0.5 rounded bg-zinc-900 border border-white/15 text-[9px] font-mono text-zinc-400">
                  v2.6
                </span>
              </div>
              <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase -mt-0.5">
                Digital Engineering Studio
              </span>
            </div>
          </a>

          {/* Links Desktop */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-zinc-400">
            <a href="#benchmark" className="hover:text-white transition-colors flex items-center gap-1.5">
              <span className="text-laser-neon">//</span> Benchmark
            </a>
            <a href="#lab" className="hover:text-white transition-colors flex items-center gap-1.5">
              <span className="text-laser-neon">//</span> Simulador
            </a>
            <a href="#resenas" className="hover:text-white transition-colors flex items-center gap-1.5">
              <span className="text-laser-neon">//</span> Clientes
            </a>
            <a href="#servicios" className="hover:text-white transition-colors flex items-center gap-1.5">
              <span className="text-laser-neon">//</span> Soluciones
            </a>
          </nav>

          {/* Botón CTA Header */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950 border border-white/10 text-[11px] font-mono text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>SISTEMA DISPONIBLE</span>
            </div>

            <a 
              href={generateCustomWhatsApp()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider font-semibold bg-white text-black hover:bg-zinc-200 transition-all duration-200 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <span>Cotizar Proyecto</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-zinc-950 border-b border-white/10 px-6 py-6 flex flex-col gap-4 text-sm font-mono">
            <a href="#benchmark" onClick={() => setMobileMenuOpen(false)} className="text-zinc-400 hover:text-white">// Benchmark de Rendimiento</a>
            <a href="#lab" onClick={() => setMobileMenuOpen(false)} className="text-zinc-400 hover:text-white">// Simulador Interactivo</a>
            <a href="#resenas" onClick={() => setMobileMenuOpen(false)} className="text-zinc-400 hover:text-white">// Testimonios</a>
            <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="text-zinc-400 hover:text-white">// Soluciones</a>
            <a 
              href={generateCustomWhatsApp()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-2 w-full py-3 rounded-lg bg-white text-black text-center font-bold font-sans flex items-center justify-center gap-2"
            >
              <span>Contactar por WhatsApp</span>
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        )}
      </header>

      {/* =========================================================================
          1. HERO SECTION: ESTÉTICA MONOCROMÁTICA CON LÁSER VIOLETA
         ========================================================================= */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-28 px-6 relative">
        <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
          
          {/* Badge superior de ingeniería */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/15 text-zinc-300 text-xs font-mono mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-laser-neon" />
            <span className="text-zinc-400 tracking-wider">NEXT-GEN WEB ARCHITECTURE</span>
            <span className="text-white font-bold ml-1">✦ 2026</span>
          </div>

          {/* Título Monumental en Space Grotesk */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-8xl font-black tracking-tight leading-[1.02] max-w-5xl mb-8">
            Páginas web que <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-600">
              destruyen lo genérico.
            </span>
          </h1>

          {/* Bajada directa y sin rodeos */}
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl font-normal leading-relaxed mb-12">
            Ingeniería web de precisión matemática. Fusionamos diseño en blanco y negro de alto estatus, tiempos de carga inferiores a 1 segundo y arquitectura asistida por IA para acelerar tus ventas.
          </p>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a 
              href="#lab"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-display font-bold text-sm bg-white text-black hover:bg-zinc-200 transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:scale-105"
            >
              <Sliders className="w-4 h-4" />
              <span>Configurar mi Web en Vivo</span>
            </a>

            <a 
              href={generateCustomWhatsApp()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-mono text-xs uppercase tracking-wider bg-zinc-950 hover:bg-zinc-900 border border-white/20 text-zinc-200 hover:text-white transition-all duration-200 flex items-center justify-center gap-2.5"
            >
              <MessageCircle className="w-4 h-4 text-laser-neon" />
              <span>Chatear con Desarrolladores</span>
            </a>
          </div>

          {/* Métricas técnicas directas */}
          <div className="mt-16 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/10">
              <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">Velocidad Promedio</span>
              <div className="text-2xl font-display font-bold text-white flex items-center gap-2">
                0.4s <span className="text-emerald-400 text-xs font-mono font-normal">● ULTRA</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/10">
              <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">Google PageSpeed</span>
              <div className="text-2xl font-display font-bold text-white flex items-center gap-2">
                99/100 <span className="text-laser-neon text-xs font-mono font-normal">✦ TOP 1%</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/10">
              <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">Mantenimiento</span>
              <div className="text-2xl font-display font-bold text-white flex items-center gap-2">
                $0/mes <span className="text-zinc-400 text-xs font-mono font-normal">Cloud Free</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/10">
              <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">Metodología</span>
              <div className="text-2xl font-display font-bold text-white flex items-center gap-2">
                AI-Driven <span className="text-purple-400 text-xs font-mono font-normal">Ágil</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          2. BARRA DE RESEÑAS INFINITA (AUTO-SCROLLING MARQUEE)
         ========================================================================= */}
      <section id="resenas" className="py-12 border-y border-white/10 bg-zinc-950 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Resultados Reales de Clientes
            </span>
          </div>
          <span className="text-xs font-mono text-zinc-500">
            [ AUTO_FEED // SCROLLING ]
          </span>
        </div>

        {/* Ticker deslizable infinito con máscara en degradé */}
        <div className="mask-marquee overflow-hidden whitespace-nowrap">
          <div className="animate-marquee inline-flex gap-6 py-2">
            {[...reviews, ...reviews].map((rev, idx) => (
              <div 
                key={idx}
                className="w-[380px] shrink-0 p-6 rounded-2xl bg-black border border-white/10 hover:border-white/30 transition-all duration-200 whitespace-normal text-left"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/30 text-laser-neon text-[10px] font-mono font-bold">
                    {rev.metric}
                  </span>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed mb-4 italic">
                  "{rev.comment}"
                </p>

                <div className="flex items-center justify-between border-t border-white/10 pt-3">
                  <div>
                    <h4 className="text-xs font-bold text-white font-display">{rev.name}</h4>
                    <span className="text-[10px] font-mono text-zinc-500">{rev.role}</span>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-zinc-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* =========================================================================
          3. ELEMENTO INTERACTIVO: COMPARADOR / BENCHMARK EN VIVO
         ========================================================================= */}
      <section id="benchmark" className="py-24 px-6 border-b border-white/10 bg-void">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-laser-neon mb-3 block">
              // TELEMETRÍA Y COMPARATIVA
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
              ¿Por qué las webs tradicionales pierden clientes?
            </h2>
            <p className="text-sm text-zinc-400 mt-4">
              Alterná el selector para ver cómo rinde una web genérica común frente a nuestra arquitectura Célere.
            </p>

            {/* Selector Interactivo */}
            <div className="mt-8 inline-flex p-1.5 rounded-xl bg-zinc-950 border border-white/20">
              <button
                onClick={() => setActiveBenchmark('traditional')}
                className={`px-5 py-2.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                  activeBenchmark === 'traditional'
                    ? 'bg-red-500/20 text-red-300 border border-red-500/40 shadow-sm'
                    : 'text-zinc-500 hover:text-white'
                }`}
              >
                Web Común (WordPress / Plantilla)
              </button>
              <button
                onClick={() => setActiveBenchmark('celere')}
                className={`px-5 py-2.5 rounded-lg text-xs font-mono font-bold transition-all duration-200 ${
                  activeBenchmark === 'celere'
                    ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.4)]'
                    : 'text-zinc-500 hover:text-white'
                }`}
              >
                ✦ Arquitectura Célere (Stack 2026)
              </button>
            </div>
          </div>

          {/* Panel de Telemetría Dinámico */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Medidor 1: Tiempo de Carga */}
            <div className={`p-8 rounded-2xl border transition-all duration-300 ${
              activeBenchmark === 'celere' 
                ? 'bg-zinc-950 border-white/20' 
                : 'bg-zinc-950/50 border-red-900/30'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase text-zinc-400">Tiempo de Carga</span>
                <Gauge className="w-5 h-5 text-zinc-500" />
              </div>
              <div className={`text-5xl font-display font-black tracking-tight mb-2 ${
                activeBenchmark === 'celere' ? 'text-white' : 'text-red-400'
              }`}>
                {activeBenchmark === 'celere' ? '0.4s' : '4.6s'}
              </div>
              <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden mb-3">
                <div 
                  className={`h-full transition-all duration-500 ${
                    activeBenchmark === 'celere' ? 'w-[10%] bg-emerald-400' : 'w-[85%] bg-red-500'
                  }`} 
                />
              </div>
              <p className="text-xs text-zinc-400">
                {activeBenchmark === 'celere' 
                  ? 'Abre instantáneamente en cualquier celular, incluso con 4G lento.' 
                  : 'El 53% de los usuarios abandona una web si tarda más de 3 segundos.'}
              </p>
            </div>

            {/* Medidor 2: Fuga de Clientes */}
            <div className={`p-8 rounded-2xl border transition-all duration-300 ${
              activeBenchmark === 'celere' 
                ? 'bg-zinc-950 border-white/20' 
                : 'bg-zinc-950/50 border-red-900/30'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase text-zinc-400">Fuga de Visitantes</span>
                <Activity className="w-5 h-5 text-zinc-500" />
              </div>
              <div className={`text-5xl font-display font-black tracking-tight mb-2 ${
                activeBenchmark === 'celere' ? 'text-emerald-400' : 'text-red-400'
              }`}>
                {activeBenchmark === 'celere' ? '0%' : '44%'}
              </div>
              <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden mb-3">
                <div 
                  className={`h-full transition-all duration-500 ${
                    activeBenchmark === 'celere' ? 'w-[0%] bg-emerald-400' : 'w-[44%] bg-red-500'
                  }`} 
                />
              </div>
              <p className="text-xs text-zinc-400">
                {activeBenchmark === 'celere'
                  ? 'Estructura orientada a retener la atención y dirigir directo al WhatsApp.'
                  : 'Diseño confuso o aburrido que no guía al usuario a una acción concreta.'}
              </p>
            </div>

            {/* Medidor 3: Costo de Mantenimiento */}
            <div className={`p-8 rounded-2xl border transition-all duration-300 ${
              activeBenchmark === 'celere' 
                ? 'bg-zinc-950 border-white/20' 
                : 'bg-zinc-950/50 border-red-900/30'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase text-zinc-400">Costo Servidor Mensual</span>
                <Terminal className="w-5 h-5 text-zinc-500" />
              </div>
              <div className={`text-5xl font-display font-black tracking-tight mb-2 ${
                activeBenchmark === 'celere' ? 'text-white' : 'text-zinc-400'
              }`}>
                {activeBenchmark === 'celere' ? '$0' : '$25-50'}
              </div>
              <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden mb-3">
                <div 
                  className={`h-full transition-all duration-500 ${
                    activeBenchmark === 'celere' ? 'w-[0%] bg-emerald-400' : 'w-[100%] bg-zinc-600'
                  }`} 
                />
              </div>
              <p className="text-xs text-zinc-400">
                {activeBenchmark === 'celere'
                  ? 'Alojado en servidores globales edge gratuitos de máxima velocidad sin cuotas fijas.'
                  : 'Hostings lentos que te cobran todos los meses y se caen en fechas clave.'}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          4. ELEMENTO DE ENTRETENIMIENTO: SIMULADOR INTERACTIVO (WEB LAB)
         ========================================================================= */}
      <section id="lab" className="py-24 px-6 border-b border-white/10 relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-laser-neon mb-3 block">
              // HERRAMIENTA INTERACTIVA
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
              Simulador: Diseñá tu web ideal
            </h2>
            <p className="text-sm text-zinc-400 mt-4">
              Seleccioná las opciones abajo y mirá cómo se adapta la propuesta técnica en vivo para tu negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Controles de Configuración */}
            <div className="lg:col-span-6 space-y-8 p-8 rounded-2xl bg-zinc-950 border border-white/10">
              
              {/* Opción 1: Rubro */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 block">
                  1. Rubro o Tipo de Negocio
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Gastronomía & Bares', 'Salud & Estética', 'Estudio Profesional', 'Indumentaria & Tienda'].map((ind) => (
                    <button
                      key={ind}
                      onClick={() => setSelectedIndustry(ind)}
                      className={`p-3 rounded-lg text-xs font-medium text-left transition-all ${
                        selectedIndustry === ind
                          ? 'bg-white text-black font-bold'
                          : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800'
                      }`}
                    >
                      {ind}
                    </button>
                  ))}
                </div>
              </div>

              {/* Opción 2: Objetivo */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 block">
                  2. Objetivo Comercial Principal
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Vender directo por WhatsApp', 'Agenda de Turnos / Reservas', 'Transmitir Prestigio de Marca', 'Catálogo con Precios'].map((goal) => (
                    <button
                      key={goal}
                      onClick={() => setSelectedGoal(goal)}
                      className={`p-3 rounded-lg text-xs font-medium text-left transition-all ${
                        selectedGoal === goal
                          ? 'bg-white text-black font-bold'
                          : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800'
                      }`}
                    >
                      {goal}
                    </button>
                  ))}
                </div>
              </div>

              {/* Opción 3: Estética */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 block">
                  3. Estilo Visual Deseado
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Minimalista Oscuro (Luxury)', 'Blanco Puro & Editorial', 'Tecnológico & Neón', 'Cálido & Orgánico'].map((vibe) => (
                    <button
                      key={vibe}
                      onClick={() => setSelectedVibe(vibe)}
                      className={`p-3 rounded-lg text-xs font-medium text-left transition-all ${
                        selectedVibe === vibe
                          ? 'bg-white text-black font-bold'
                          : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800'
                      }`}
                    >
                      {vibe}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Resultado en Tiempo Real (Live Spec Sheet) */}
            <div className="lg:col-span-6 p-8 rounded-2xl bg-zinc-950 border border-white/20 relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-laser-neon" />
                  <span className="text-xs font-mono uppercase tracking-widest text-white font-bold">
                    PREVIEW DEL PROYECTO
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  TIEMPO ESTIMADO: 3-5 DÍAS
                </span>
              </div>

              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl bg-black border border-white/10">
                  <span className="text-[10px] font-mono text-zinc-500 block mb-1">PROYECTO CONFIGURADO:</span>
                  <div className="text-lg font-display font-bold text-white">
                    Web Especializada para {selectedIndustry}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-black border border-white/5">
                    <span className="text-zinc-500 block text-[10px]">ESTILO:</span>
                    <span className="text-zinc-200">{selectedVibe}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black border border-white/5">
                    <span className="text-zinc-500 block text-[10px]">FOCO DE VENTAS:</span>
                    <span className="text-zinc-200">{selectedGoal}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30 text-xs text-zinc-300 space-y-2">
                  <div className="flex items-center gap-2 text-laser-neon font-bold font-mono">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Incluido en esta configuración:</span>
                  </div>
                  <ul className="space-y-1 text-zinc-400 text-[11px] list-disc list-inside">
                    <li>Diseño adaptable para celular y computadora</li>
                    <li>Conexión de dominio propio con certificado SSL de seguridad</li>
                    <li>Enlace inteligente directo a tu WhatsApp con mensaje prearmado</li>
                    <li>Sin abonos mensuales obligatorios</li>
                  </ul>
                </div>
              </div>

              <a 
                href={generateCustomWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl font-display font-bold text-sm bg-white text-black hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,255,255,0.3)]"
              >
                <span>Consultar presupuesto de esta web por WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          5. SOLUCIONES Y SERVICIOS
         ========================================================================= */}
      <section id="servicios" className="py-24 px-6 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-laser-neon mb-3 block">
                // CAPACIDADES DEL ESTUDIO
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
                Qué construimos para vos
              </h2>
            </div>
            <p className="text-xs font-mono text-zinc-400 max-w-sm">
              Cada proyecto se diseña y programa a medida. Sin código inflado ni plantillas prefabricadas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-8 rounded-2xl bg-zinc-950 border border-white/10 hover:border-white/30 transition-all group">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-laser-neon">01 // CONVERSIÓN RÁPIDA</span>
                <Zap className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-3">Landing Pages de Alto Impacto</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Páginas de aterrizaje pensadas para campañas de publicidad, lanzamientos de productos o negocios locales que quieren multiplicar sus mensajes de WhatsApp.
              </p>
              <div className="text-xs font-mono text-zinc-500 pt-4 border-t border-white/5 flex items-center justify-between">
                <span>ENTREGA: 3 DÍAS HÁBILES</span>
                <span className="text-white group-hover:translate-x-1 transition-transform">Consultar →</span>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-zinc-950 border border-white/10 hover:border-white/30 transition-all group">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-laser-neon">02 // PRESTIGIO Y MARCA</span>
                <Layers className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-3">Sitios Web Corporativos</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Presencia institucional sólida para empresas, consultoras, estudios y clínicas que necesitan transmitir autoridad indiscutible frente a clientes exigentes.
              </p>
              <div className="text-xs font-mono text-zinc-500 pt-4 border-t border-white/5 flex items-center justify-between">
                <span>ENTREGA: 5-7 DÍAS HÁBILES</span>
                <span className="text-white group-hover:translate-x-1 transition-transform">Consultar →</span>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-zinc-950 border border-white/10 hover:border-white/30 transition-all group">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-laser-neon">03 // UPGRADE</span>
                <Cpu className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-3">Rediseño & Aceleración Web</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                ¿Tenés una página vieja, lenta o que se ve rota en el celular? La migramos a tecnología moderna manteniendo tu contenido y multiplicando su velocidad.
              </p>
              <div className="text-xs font-mono text-zinc-500 pt-4 border-t border-white/5 flex items-center justify-between">
                <span>MIGRACIÓN COMPLETA</span>
                <span className="text-white group-hover:translate-x-1 transition-transform">Consultar →</span>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-zinc-950 border border-white/10 hover:border-white/30 transition-all group">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-laser-neon">04 // AUTOMATIZACIÓN</span>
                <MessageCircle className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-3">Integraciones & WhatsApp Smart</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Conexión con menús QR, catálogos sin comisiones, calendarios de turnos y pasarelas de pago para que tu negocio funcione incluso mientras dormís.
              </p>
              <div className="text-xs font-mono text-zinc-500 pt-4 border-t border-white/5 flex items-center justify-between">
                <span>PLUGINS & APIS</span>
                <span className="text-white group-hover:translate-x-1 transition-transform">Consultar →</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          6. CTA FINAL MONUMENTAL
         ========================================================================= */}
      <section className="py-24 px-6 relative overflow-hidden bg-black">
        <div className="max-w-4xl mx-auto p-12 sm:p-16 rounded-3xl bg-zinc-950 border border-white/20 text-center relative shadow-[0_0_80px_rgba(255,255,255,0.06)]">
          
          <span className="text-xs font-mono uppercase tracking-widest text-laser-neon mb-4 block">
            [ INICIAR CONVERSACIÓN DIRECTA ]
          </span>

          <h2 className="font-display text-3xl sm:text-6xl font-black text-white tracking-tight mb-6">
            Hagamos una web que dé orgullo mostrar.
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Sin formularios interminables ni intermediarios. Nos contás tu idea por WhatsApp y te armamos una propuesta técnica y económica hoy mismo.
          </p>

          <a 
            href={generateCustomWhatsApp()} 
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
          FOOTER MONOCROMÁTICO
         ========================================================================= */}
      <footer className="py-12 px-6 border-t border-white/10 bg-black text-xs font-mono text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-white tracking-widest">CÉLERE</span>
            <span>// DIGITAL ENGINEERING STUDIO</span>
            <span>• © {new Date().getFullYear()}</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#benchmark" className="hover:text-white transition-colors">Benchmark</a>
            <a href="#lab" className="hover:text-white transition-colors">Simulador</a>
            <a href="#resenas" className="hover:text-white transition-colors">Reseñas</a>
            <a href={generateCustomWhatsApp()} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
          </div>

        </div>
      </footer>

    </div>
  );
}
