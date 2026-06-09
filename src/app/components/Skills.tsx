const skills = [
  {
    category: '3D Visualization',
    items: ['3ds Max', 'V-Ray', 'Corona Renderer', 'Lumion', 'Enscape', 'Twinmotion']
  },
  {
    category: 'Architectural Software',
    items: ['AutoCAD', 'Revit', 'SketchUp Pro', 'Rhino 3D', 'Archicad', 'Vectorworks']
  },
  {
    category: 'Design & Presentation',
    items: ['Adobe Photoshop', 'Adobe Illustrator', 'InDesign', 'Figma', 'Blender', 'Unreal Engine']
  },
  {
    category: 'Additional Skills',
    items: ['Photorealistic Rendering', 'Virtual Reality', 'Animation', 'BIM Modeling', 'Parametric Design', 'Sustainable Design']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical <span className="text-secondary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Expert proficiency in industry-standard architectural visualization and design tools
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-dark rounded-xl p-6 hover:transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-secondary">{skillGroup.category}</h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                    <span className="text-light">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-dark rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">Work Process</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Concept Design', desc: 'Initial sketches and conceptual development' },
              { step: '02', title: '3D Modeling', desc: 'Detailed modeling in SketchUp/Revit' },
              { step: '03', title: 'Rendering', desc: 'Photorealistic visualization rendering' },
              { step: '04', title: 'Post-Production', desc: 'Final touches and presentation' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-secondary text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h4 className="font-semibold mb-2">{process.title}</h4>
                <p className="text-gray-400 text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}