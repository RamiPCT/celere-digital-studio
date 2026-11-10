import React, { useState } from 'react';
import { 
  Zap, 
  Sparkles, 
  ArrowRight, 
  Smartphone, 
  Rocket, 
  ShieldCheck, 
  CheckCircle2, 
  MessageCircle, 
  Layers, 
  Clock, 
  Palette, 
  TrendingUp, 
  ChevronRight, 
  Menu, 
  X,
  ExternalLink,
  Laptop
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDemo, setActiveDemo] = useState(0);

  // Número de WhatsApp (pueden cambiar este número cuando quieran)
  const whatsappNumber = "5491100000000"; 
  const whatsappMessage = encodeURIComponent("¡Hola Célere Digital Studio! Me gustaría consultar para crear o renovar una página web.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const demos = [
    {
      title: "Aura Bistro & Lounge",
      category: "Gastronomía & Experiencias",
      tag: "Demo Restaurante",
      description: "Menú interactivo con fotos en alta definición, reservas directas a WhatsApp y diseño envolvente con atmósfera nocturna.",
      accent: "from-amber-500/20 to-purple-600/20",
      features: ["Carta Digital QR", "Botón de Reserva Inmediata", "Optimizado para Móviles"]
    },
    {
      title: "Nova Dental & Estética",
      category: "Salud, Medicina & Servicios",
      tag: "Demo Salud & Bienestar",
      description: "Sitio corporativo de confianza con agenda de turnos, sección de especialistas y testimonios verificados de pacientes.",
      accent: "from-blue-500/20 to-purple-600/20",
      features: ["Agenda de Turnos Ágil", "Galería de Casos Clínicos", "Carga en 0.8s"]
    },
    {
      title: "Kroma Studio Wear",
      category: "E-Commerce & Moda Urbana",
      tag: "Demo Tienda & Catálogo",
      description: "Lookbook interactivo de alta gama con catálogo de productos por categorías y pedidos directos a WhatsApp sin comisiones.",
      accent: "from-fuchsia-500/20 to-purple-600/20",
      features: ["Catálogo sin comisiones", "Lookbook en Video/Fotos", "Filtros rápidos"]
    }
  ];

  const services = [
    {
      icon: <Zap className="w-6 h-6 text-accent-neon" />,
      title: "Landing Pages de Alta Conversión",
      desc: "Páginas de aterrizaje diseñadas estratégicamente para captar clientes en campañas publicitarias o promociones concretas.",
      ideal: "Ideal para: Emprendimientos, lanzamientos y venta directa."
    },
    {
      icon: <Laptop className="w-6 h-6 text-accent-neon" />,
      title: "Sitios Web Corporativos",
      desc: "Páginas institucionales completas que transmiten autoridad, solidez y posicionan a tu empresa en lo más alto de su rubro.",
      ideal: "Ideal para: Pymes, clínicas, consultoras y estudios profesionales."
    },
    {
      icon: <Palette className="w-6 h-6 text-accent-neon" />,
      title: "Rediseño & Modernización Web",
      desc: "¿Tenés una web antigua, lenta o que no se ve bien en celulares? La reinventamos con estética moderna y carga ultra rápida.",
      ideal: "Ideal para: Marcas que necesitan renovar su imagen digital."
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-accent-neon" />,
      title: "Integraciones & Automatización",
      desc: "Conectamos tu web con WhatsApp, formularios dinámicos, botones de pago y herramientas de analítica para medir resultados.",
      ideal: "Ideal para: Negocios que quieren simplificar la atención al cliente."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-zinc-100 relative overflow-hidden">
      
      {/* Luces de fondo (Glow Efecto AI / Púrpura) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-[40%] right-[-100px] w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] left-[-100px] w-[600px] h-[600px] bg-purple-900/15 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-accent-light group-hover:scale-105 group-hover:border-purple-400 transition-all duration-300">
              <Zap className="w-5 h-5 fill-accent-light" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight text-white flex items-center gap-1">
                CÉLERE
                <span className="w-1.5 h-1.5 rounded-full bg-accent-neon animate-pulse" />
              </span>
              <span className="text-[10px] tracking-widest text-zinc-400 font-medium -mt-1 uppercase">Digital Studio</span>
            </div>
          </a>

          {/* Links Desktop */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
            <a href="#ventajas" className="hover:text-accent-light transition-colors">¿Por qué Célere?</a>
            <a href="#servicios" className="hover:text-accent-light transition-colors">Servicios</a>
            <a href="#proyectos" className="hover:text-accent-light transition-colors">Demos & Trabajos</a>
            <a href="#proceso" className="hover:text-accent-light transition-colors">Cómo Trabajamos</a>
          </nav>

          {/* Botón CTA Header */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/40 text-purple-200 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] flex items-center gap-2"
            >
              <span>Hablemos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Menú Mobile Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menú Desplegable Mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-zinc-950/95 border-b border-zinc-800 px-6 py-6 flex flex-col gap-4 text-base font-medium">
            <a href="#ventajas" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-white">¿Por qué Célere?</a>
            <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-white">Servicios</a>
            <a href="#proyectos" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-white">Demos & Trabajos</a>
            <a href="#proceso" onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-white">Cómo Trabajamos</a>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-2 w-full py-3 rounded-xl bg-purple-600 text-white text-center font-semibold flex items-center justify-center gap-2"
            >
              <span>Consultar por WhatsApp</span>
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        )}
      </header>

      {/* 1. HERO SECTION */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 px-6">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          
          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-8 backdrop-blur-md shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-accent-neon animate-spin" style={{ animationDuration: '6s' }} />
            <span>Desarrollo Web Ágil & Diseño de Vanguardia</span>
          </div>

          {/* Título Principal */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-4xl mb-6">
            Transformamos tu visión en experiencias web que <span className="text-gradient-purple">aceleran tu negocio.</span>
          </h1>

          {/* Bajada */}
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl font-normal leading-relaxed mb-10">
            Diseñamos y desarrollamos páginas web ultra rápidas, modernas y optimizadas para que tu marca destaque y convierta visitantes en clientes reales.
          </p>

          {/* Botones de Acción */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a 
              href="#proyectos"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-[0_0_30px_rgba(168,85,247,0.35)] hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Ver Demos en Vivo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-200 hover:text-white transition-all duration-300 flex items-center justify-center gap-2.5"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Cotizar por WhatsApp</span>
            </a>
          </div>

          {/* Badges de métricas o confianza */}
          <div className="mt-16 pt-8 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6 text-zinc-400 text-xs font-medium w-full max-w-3xl">
            <div className="flex items-center justify-center gap-2">
              <Zap className="w-4 h-4 text-accent-light" />
              <span>Carga en menos de 1s</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Smartphone className="w-4 h-4 text-accent-light" />
              <span>100% Mobile First</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-accent-light" />
              <span>Código Seguro & Limpio</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Rocket className="w-4 h-4 text-accent-light" />
              <span>Entrega Ágil</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. ¿POR QUÉ CÉLERE? (DIFERENCIALES) */}
      <section id="ventajas" className="py-24 px-6 border-t border-zinc-900 bg-zinc-950/40">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-accent-light mb-3">La Diferencia Célere</h2>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Por qué elegirnos para tu próxima web
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="glass-card p-8 rounded-2xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-accent-light mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Velocidad Célere</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                No esperamos meses. Nuestro flujo de trabajo acelerado nos permite entregarte una web lista y funcional en días, sin comprometer calidad.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-accent-light mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Impacto Visual Real</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Olvidate de las plantillas genéricas y aburridas. Desarrollamos interfaces visuales de alto nivel que causan una primera impresión memorable.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-accent-light mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Diseñadas para Vender</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Una web no sirve si nadie te escribe. Estructuramos la página con psicología de ventas y botones estratégicos hacia tu canal de contacto.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-accent-light mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Trato 100% Directo</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Hablas directamente con nosotros, los desarrolladores. Sin agentes de cuentas ni intermediarios; respuestas claras y personalizadas.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 3. NUESTROS SERVICIOS */}
      <section id="servicios" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-xs font-bold uppercase tracking-widest text-accent-light mb-3">Soluciones a Medida</h2>
              <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Servicios pensados para cada etapa de tu marca
              </p>
            </div>
            <p className="text-sm text-zinc-400 max-w-sm">
              Desde una página de aterrizaje ágil hasta un portal corporativo completo. Todo llave en mano.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((srv, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl flex flex-col justify-between group transition-all duration-300">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-purple-500/40 transition-colors">
                    {srv.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{srv.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">{srv.desc}</p>
                </div>
                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                  <span className="text-purple-300 font-medium">{srv.ideal}</span>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white flex items-center gap-1 font-semibold group-hover:text-accent-light transition-colors">
                    <span>Consultar</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. DEMOS & TRABAJOS (SHOWCASE) */}
      <section id="proyectos" className="py-24 px-6 border-t border-zinc-900 bg-zinc-950/60">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-accent-light mb-3">Muestra de Potencial</h2>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              Demos interactivas en vivo
            </p>
            <p className="text-sm text-zinc-400">
              Así lucen las experiencias que construimos. Diseños limpios, interactivos y con identidad propia.
            </p>
          </div>

          {/* Selector de pestañas para Demos */}
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {demos.map((d, idx) => (
              <button
                key={idx}
                onClick={() => setActiveDemo(idx)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activeDemo === idx 
                    ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]' 
                    : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {d.title}
              </button>
            ))}
          </div>

          {/* Tarjeta de Demo Destacada */}
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-purple-500/30 overflow-hidden relative">
            
            <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl ${demos[activeDemo].accent} rounded-full blur-[100px] pointer-events-none`} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 rounded-md bg-purple-500/10 text-purple-300 text-xs font-semibold w-max mb-4 border border-purple-500/30">
                  {demos[activeDemo].tag}
                </span>
                
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                  {demos[activeDemo].title}
                </h3>
                
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {demos[activeDemo].description}
                </p>

                <div className="space-y-2.5 mb-8">
                  {demos[activeDemo].features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-accent-neon shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-colors shadow-lg shadow-purple-600/30"
                  >
                    <span>Quiero una web similar para mi negocio</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Mockup visual de la Demo */}
              <div className="lg:col-span-7 bg-zinc-900/90 rounded-2xl border border-zinc-700/60 p-4 shadow-2xl relative group">
                <div className="flex items-center gap-2 mb-3 px-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <div className="mx-auto text-[11px] font-mono text-zinc-400 bg-zinc-800/80 px-4 py-0.5 rounded-md border border-zinc-700">
                    https://celere-studio.demo/{demos[activeDemo].title.toLowerCase().replace(/\s+/g, '-')}
                  </div>
                </div>

                <div className="bg-zinc-950 rounded-xl p-8 border border-zinc-800 min-h-[300px] flex flex-col justify-center items-center text-center relative overflow-hidden">
                  <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-accent-light mb-4">
                    <Laptop className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{demos[activeDemo].title}</h4>
                  <p className="text-xs text-zinc-400 max-w-md mb-6">
                    Diseño visual concebido con micro-interacciones, paleta de colores a medida y rendimiento óptimo en móviles.
                  </p>
                  <span className="text-[11px] font-semibold text-accent-light px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30">
                    Vista previa de concepto activo
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. CÓMO TRABAJAMOS (3 PASOS) */}
      <section id="proceso" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-accent-light mb-3">Simple & Transparente</h2>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              De la idea a tu web en 3 pasos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            <div className="glass-card p-8 rounded-2xl relative">
              <span className="text-5xl font-black text-purple-500/20 absolute top-6 right-6 font-mono">01</span>
              <h3 className="text-lg font-bold text-white mb-3">Enfoque & Estrategia</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Nos reunimos por llamada o WhatsApp, conocemos qué hacés y definimos la estructura ideal para captar a tus clientes.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl relative border-purple-500/30">
              <span className="text-5xl font-black text-purple-500/30 absolute top-6 right-6 font-mono">02</span>
              <h3 className="text-lg font-bold text-white mb-3">Desarrollo Ágil</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Maquetamos y programamos la web con diseño moderno y te compartimos avances en tiempo real para que veas cómo va quedando.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl relative">
              <span className="text-5xl font-black text-purple-500/20 absolute top-6 right-6 font-mono">03</span>
              <h3 className="text-lg font-bold text-white mb-3">Lanzamiento & Despegue</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Conectamos tu dominio, configuramos el hosting de alta velocidad y publicamos tu página lista para recibir visitas.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 6. CALL TO ACTION FINAL */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-purple-900/30 via-zinc-900 to-zinc-950 p-10 sm:p-16 border border-purple-500/30 text-center relative overflow-hidden shadow-[0_0_50px_rgba(147,51,234,0.15)]">
          
          <div className="max-w-2xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold mb-6 border border-purple-500/40">
              <Sparkles className="w-3.5 h-3.5 text-accent-neon" />
              <span>Empecemos a trabajar juntos</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
              ¿Listo para darle a tu negocio la presencia que merece?
            </h2>

            <p className="text-zinc-300 text-base mb-10 leading-relaxed">
              Contanos sobre tu idea o proyecto. Te asesoramos sin compromiso y te enviamos una propuesta a medida.
            </p>

            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-base shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chatear por WhatsApp Ahora</span>
            </a>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-500">
          
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-accent-light">
              <Zap className="w-3.5 h-3.5 fill-accent-light" />
            </div>
            <span className="font-bold text-zinc-300">CÉLERE DIGITAL STUDIO</span>
            <span>• © {new Date().getFullYear()}</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#ventajas" className="hover:text-zinc-300 transition-colors">Ventajas</a>
            <a href="#servicios" className="hover:text-zinc-300 transition-colors">Servicios</a>
            <a href="#proyectos" className="hover:text-zinc-300 transition-colors">Demos</a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent-light transition-colors">Contacto</a>
          </div>

        </div>
      </footer>

    </div>
  );
}
