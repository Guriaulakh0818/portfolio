export default function Footer() {
  return (
    <footer className="bg-dark border-t border-gray-800">
      <div className="container-custom section-padding">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold text-secondary">
              Jatin<span className="text-light">Studio</span>
            </a>
            <p className="text-gray-400 mt-2">Architectural Visualization & Design</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-light hover:text-secondary transition-colors">
              Home
            </a>
            <a href="#about" className="text-light hover:text-secondary transition-colors">
              About
            </a>
            <a href="#projects" className="text-light hover:text-secondary transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-light hover:text-secondary transition-colors">
              Contact
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Jatin Verma. All rights reserved.</p>
          <p className="mt-2 text-sm">Designed for architectural excellence and visual storytelling</p>
        </div>
      </div>
    </footer>
  )
}