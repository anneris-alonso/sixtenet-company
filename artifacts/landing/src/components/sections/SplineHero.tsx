export default function SplineHero() {

  return (
    <section className="relative w-full h-[100dvh] flex flex-col md:flex-row overflow-hidden bg-background">
      
      {/* 
        BLOQUE IZQUIERDO (SIDEBAR EDITORIAL)
        Ocupa un 25% en escritorio y un 20vh en móvil. 
        Color turquesa con tipografía brutalista en vertical.
      */}
      <div className="w-[30%] md:w-[30%] lg:w-[25%] h-full bg-primary flex flex-col items-center justify-between z-20 shadow-[20px_0_50px_rgba(0,0,0,0.5)] absolute top-0 left-0 md:relative py-8 md:py-16">
        
        {/* Espaciador invisible para mantener el título centrado */}
        <div className="h-10"></div> 

        <h1 className="flex flex-col gap-4 md:gap-8 items-center leading-none font-sans font-black tracking-tighter uppercase select-none mt-20">
          {/* Palabra THE horizontal grande */}
          <span className="text-[7vw] md:text-[6vw] text-background">THE</span>
          
          {/* Palabra BUS en rotación vertical (no apilada, sino girada 90 grados) */}
          <span 
            className="text-transparent md:[writing-mode:vertical-rl] md:rotate-180 text-[10vw] md:text-[12vw] mt-4" 
            style={{ WebkitTextStroke: "3px hsl(var(--background))", lineHeight: "0.9" }}
          >
            BUS
          </span>
        </h1>

        {/* Espaciador flexible que garantiza aire entre el texto y el botón incluso en pantallas ajustadas */}
        <div className="flex-1 min-h-[60px] md:min-h-[80px] w-full"></div>

        {/* Botón hacia la sección Contact al fondo de la barra */}
        <a 
          href="#contact"
          className="mb-10 w-[80%] max-w-[200px] text-center border-2 border-background text-background font-bold uppercase tracking-widest text-xs md:text-sm py-4 hover:bg-background hover:text-primary transition-all duration-300 hover:scale-105"
        >
          Contact Us
        </a>
      </div>

      {/* 
        BLOQUE DERECHO (ESCENA 3D)
        Ocupa el 75% restante. Como Spline es cuadrado, este grid ancho le da espacio
        para que la pieza cuadrada domine el centro de la pantalla derecha.
      */}
      <div className="w-full md:w-[70%] lg:w-[75%] h-[100dvh] relative z-10 bg-[#050505] overflow-hidden ml-auto">
        
        {/* Sombra exclusiva para el menú superior, cae solo sobre el 3D para darle legibilidad al Navbar */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/80 to-transparent z-20 pointer-events-none" />

        {/* El video 3D renderizado, configurado en loop infinito sin tirones */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          <video 
            src="/hero.webm" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover pointer-events-none"
          ></video>
        </div>

        {/* Pequeño adorno editorial (Opcional) */}
        <div className="absolute top-24 right-8 z-30 hidden md:block mix-blend-difference pointer-events-none">
          <p className="text-white/50 text-xs tracking-[0.4em] uppercase font-mono text-right">
            Interactive_01
            <br />
            <span className="text-primary tracking-widest">v.26</span>
          </p>
        </div>
      </div>
      
    </section>
  );
}
