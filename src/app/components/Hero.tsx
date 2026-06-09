import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="section-padding pt-24 md:pt-32">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <p className="text-secondary mb-4">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Jatin <span className="text-secondary">Verma</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-light mb-6">
              Architectural Designer & 3D Visualization Specialist
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg">
              Transforming architectural concepts into stunning visual experiences
              through expert 3D modeling, CAD design, and SketchUp visualization.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </div>
          </div>

          {/* RIGHT PROFILE CARD */}
          <div className="relative flex justify-center">
            
            {/* Glow background (same as template) */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-blue-500 rounded-2xl rotate-3 opacity-30 blur-xl"></div>

            {/* Tilted Glass Card */}
            <div className="relative w-[300px] h-[380px] md:w-[360px] md:h-[440px] 
                            bg-gradient-to-br from-teal-400/80 to-blue-600/80 
                            rounded-2xl -rotate-3 shadow-2xl 
                            border border-white/20 overflow-hidden">

              {/* Profile Image */}
              <Image
                src="/images/profile.png"
                alt="Jatin Verma"
                fill
                className="object-cover"
                priority
              />

              {/* Dark Overlay for blending */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>

              {/* Text Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-center">
                <h3 className="text-xl font-semibold text-white">
                  Jatin Verma
                </h3>
                <p className="text-gray-300 text-sm mt-1">
                  Architecture & 3D Visualization
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
