import { notFound } from 'next/navigation'
import Image from 'next/image'

const projects = [
   {
    slug: 'luxury-modern-residence',
    title: 'Luxury Modern Residence',
    category: 'Residential Architecture',
    description:
      'A premium modern residence featuring clean geometric lines, glass balconies, warm wooden textures, and elegant night lighting for a luxurious urban lifestyle.',
    image: '/images/imm1.png',
    tags: ['3D Visualization', 'Exterior Design', 'Modern Facade'],
  },
  {
    slug: 'contemporary-urban-villa',
    title: 'Contemporary Urban Villa',
    category: 'Residential Architecture',
    description:
      'Contemporary villa design with bold horizontal slabs, accent lighting, and a balanced mix of concrete, wood, and glass elements.',
    image: '/images/imm2.png',
    tags: ['Villa Design', 'Modern Architecture', 'Exterior Render'],
  },
  {
    slug: 'minimalist-duplex-house',
    title: 'Minimalist Duplex House',
    category: 'Residential Architecture',
    description:
      'A minimalist duplex house with stone textures, perforated facade elements, and a calm neutral palette focused on simplicity and functionality.',
    image: '/images/imm3.jpeg',
    tags: ['Minimal Design', 'Stone Facade', 'Duplex House'],
  },
  {
    slug: 'premium-vertical-residence',
    title: 'Premium Vertical Residence',
    category: 'Residential Architecture',
    description:
      'A vertical modern home designed for narrow plots, featuring layered balconies, wooden soffits, and elegant ambient lighting.',
    image: '/images/imm4.jpeg',
    tags: ['Vertical House', 'Urban Home', 'Modern Elevation'],
  },
  {
    slug: 'luxury-urban-home',
    title: 'Luxury Urban Home',
    category: 'Residential Architecture',
    description:
      'A luxury urban residence with strong facade framing, dark stone finishes, glass railings, and warm interior lighting creating a bold street presence.',
    image: '/images/imm6.png',
    tags: ['Luxury Home', 'Modern Elevation', 'Facade Design'],
  },
  {
    slug: 'contemporary-family-house',
    title: 'Contemporary Family House',
    category: 'Residential Architecture',
    description:
      'A modern family house combining curved facade elements, wooden panels, soft lighting, and greenery for a welcoming and elegant appearance.',
    image: '/images/imm5.png',
    tags: ['Family House', 'Contemporary Design', 'Exterior Visualization'],
  },
   {
  slug: 'luxury-bedroom-retreat',
  title: 'Luxury Bedroom Retreat',
  category: 'Residential Interior Design',
  description:
    'An elegant bedroom interior blending natural stone textures, rich wood finishes, layered lighting, and minimalist furnishings to create a warm, contemporary, and inviting living space.',
  image: '/images/imm7.jpeg',
  tags: ['Luxury Interior', 'Bedroom Design', 'Contemporary Style']
},
{
  slug: 'luxury-walk-in-wardrobe-wall',
  title: 'Luxury Wardrobe Wall',
  category: 'Interior Design',
  description:
    'An elegant built-in wardrobe system with seamless panel doors, refined finishes, indirect ceiling lighting, and a sophisticated neutral palette, creating a modern and highly functional bedroom environment.',
  image: '/images/imm8.jpeg',
  tags: ['Luxury Interior', 'Wardrobe Storage', '3D Visualization']
},
{
  slug: 'luxury-kitchen-with-island',
  title: 'Luxury Kitchen with Island',
  category: 'Residential Interior Design',
  description:
    'An elegant kitchen space combining rich wood textures, premium stone surfaces, ambient lighting, and a spacious central island to deliver a sophisticated blend of aesthetics, comfort, and practicality.',
  image: '/images/imm9.jpeg',
  tags: ['Luxury Kitchen', 'Contemporary Design', 'Interior Visualization']
},
{
  slug: 'luxury-bedroom-suite',
  title: 'Luxury Bedroom Suite',
  category: 'Interior Design',
  description:
    'An upscale bedroom interior showcasing bespoke wall artwork, integrated wardrobe storage, layered lighting, premium furnishings, and timeless finishes designed to deliver comfort, elegance, and modern sophistication.',
  image: '/images/imm10.jpeg',
  tags: ['Bedroom Design', 'Luxury Living', 'Interior Visualization']
},
{
  slug: 'contemporary-bedroom-retreat',
  title: 'Contemporary Bedroom Retreat',
  category: 'Interior Design',
  description:
    'An elegant bedroom interior combining natural wood textures, ambient cove lighting, refined furnishings, and modern decorative elements to achieve a timeless blend of comfort, functionality, and luxury.',
  image: '/images/imm11.jpeg',
  tags: ['Bedroom Design', 'Contemporary Style', 'Luxury Interior']
},
{
  slug: 'luxury-contemporary-duplex',
  title: 'Luxury Contemporary Duplex',
  category: 'Residential Architecture',
  description:
    'An upscale duplex residence showcasing a harmonious blend of stone accents, minimalist facades, floor-to-ceiling windows, and premium outdoor spaces. The architectural design creates a striking street presence while maximizing natural light and comfort.',
  image: '/images/imm12.jpeg',
  tags: ['Luxury Home', 'Contemporary Design', 'Architectural Rendering']
},
{
  slug: 'royal-elegance-lounge',
  title: 'Royal Elegance Lounge',
  category: 'Residential Interior Design',
  description:
    'A lavish lounge space showcasing intricately crafted furnishings, decorative wall panels, premium textiles, and a statement crystal chandelier. The refined palette and classical detailing evoke a sense of grandeur, comfort, and timeless luxury.',
  image: '/images/imm13.jpeg',
  tags: ['Royal Interior', 'Luxury Design', 'Classical Architecture']
},
{
  slug: 'contemporary-bedroom-workspace',
  title: 'Contemporary Bedroom Workspace',
  category: 'Interior Design',
  description:
    'An elegant bedroom featuring bespoke built-in storage, a dedicated work desk, accent wall art, and layered lighting. The design seamlessly blends comfort, functionality, and modern aesthetics for contemporary urban living.',
  image: '/images/imm14.jpeg',
  tags: ['Luxury Bedroom', 'Home Office', 'Interior Visualization']
},
{
  slug: 'contemporary-lounge-space',
  title: 'Contemporary Lounge Space',
  category: 'Interior Design',
  description:
    'An elegant lounge area showcasing a refined neutral palette, luxurious seating, premium stone surfaces, and thoughtfully curated decor. The open, light-filled environment delivers a perfect balance of comfort, sophistication, and modern design.',
  image: '/images/imm15.jpeg',
  tags: ['Luxury Living Room', 'Contemporary Design', 'Interior Visualization']
},
{
  slug: 'contemporary-woodland-cottage',
  title: 'Contemporary Woodland Cottage',
  category: 'Residential Architecture',
  description:
    'An elegant cottage-style home nestled within a green landscape, showcasing natural wood textures, large glazed openings, refined detailing, and a welcoming porch. The architecture blends rustic warmth with modern design principles.',
  image: '/images/imm16.jpeg',
  tags: ['Luxury Cottage', 'Residential Design', 'Architectural Rendering']
},
{
  slug: 'luxury-country-estate',
  title: 'Luxury Country Estate',
  category: 'Residential Architecture',
  description:
    'An elegant countryside residence showcasing timeless farmhouse architecture, premium exterior finishes, expansive windows, and lush floral landscaping. The balanced composition and refined detailing offer a sophisticated interpretation of modern rural living.',
  image: '/images/imm17.jpeg',
  tags: ['Luxury Home', 'Farmhouse Design', 'Architectural Rendering']
},
{
  slug: 'contemporary-lounge-retreat',
  title: 'Contemporary Lounge Retreat',
  category: 'Interior Design',
  description:
    'An upscale lounge space showcasing minimalist furnishings, premium stone textures, custom wall accents, and seamless indoor-outdoor connectivity. Warm natural lighting and refined materials create an inviting atmosphere of understated elegance.',
  image: '/images/imm18.jpeg',
  tags: ['Luxury Living Space', 'Contemporary Design', 'Interior Rendering']
},
{
  slug: 'luxury-modern-living-space',
  title: 'Luxury Modern Living Space',
  category: 'Interior Design',
  description:
    'An upscale living area showcasing refined textures, custom feature walls, premium furniture, and abundant natural daylight. The balanced composition of contemporary forms and organic elements delivers an atmosphere of understated elegance and comfort.',
  image: '/images/imm19.jpeg',
  tags: ['Luxury Interior', 'Contemporary Lounge', 'Residential Design']
},
{
  slug: 'contemporary-bedroom-sanctuary',
  title: 'Contemporary Bedroom Sanctuary',
  category: 'Interior Design',
  description:
    'An elegant bedroom interior showcasing artistic wall treatments, layered lighting, bespoke furnishings, and refined textures. The carefully curated design delivers a calming atmosphere while maintaining a modern sense of luxury and sophistication.',
  image: '/images/imm20.jpeg',
  tags: ['Contemporary Design', 'Luxury Bedroom', 'Interior Rendering']
},
]

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <section className="section-padding bg-dark">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="bg-secondary text-primary text-sm font-semibold px-4 py-2 rounded-full">
              {project.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {project.title}
          </h1>

          <div className="relative h-96 mb-8">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover rounded-xl"
            />
          </div>

          <p className="text-gray-400 text-lg mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm bg-primary text-light px-4 py-2 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}