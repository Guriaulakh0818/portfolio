export default function About() {
  return (
    <section id="about" className="section-padding bg-dark">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="text-secondary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate architect and 3D visualization expert with a focus on creating immersive digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Architectural Visualization Specialist</h3>
            <p className="text-gray-300 mb-6">
              With over 2 years of experience in architectural design and 3D visualization, I specialize in transforming architectural concepts into photorealistic visualizations that communicate design intent effectively.
            </p>
            <p className="text-gray-300 mb-8">
              My expertise spans across residential, commercial, and urban planning projects, with a strong focus on sustainable design and innovative architectural solutions.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-secondary text-xl">📍</span>
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-400">DLF Garden City, Sec 98, Gurugram</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-secondary text-xl">🎓</span>
                </div>
                <div>
                  <h4 className="font-semibold">Education</h4>
                  <p className="text-gray-400">ITI - Draughtman</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary p-6 rounded-xl">
              <div className="text-4xl text-secondary mb-2">50+</div>
              <h4 className="font-semibold mb-1">Projects</h4>
              <p className="text-gray-400 text-sm">Completed</p>
            </div>
            
            <div className="bg-primary p-6 rounded-xl">
              <div className="text-4xl text-secondary mb-2">2+</div>
              <h4 className="font-semibold mb-1">Years</h4>
              <p className="text-gray-400 text-sm">Experience</p>
            </div>
            
            <div className="bg-primary p-6 rounded-xl">
              <div className="text-4xl text-secondary mb-2">30+</div>
              <h4 className="font-semibold mb-1">Clients</h4>
              <p className="text-gray-400 text-sm">Worldwide</p>
            </div>
            
            <div className="bg-primary p-6 rounded-xl">
              <div className="text-4xl text-secondary mb-2">100%</div>
              <h4 className="font-semibold mb-1">Satisfaction</h4>
              <p className="text-gray-400 text-sm">Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}