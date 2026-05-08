import projectMain from '../assets/empreendimentos/pexels-kelly-32821661.jpg'
import condoOne from '../assets/empreendimentos/Modern House at Twilight.png'
import condoTwo from '../assets/empreendimentos/pexels-claiton-13631997.jpg'
import condoThree from '../assets/empreendimentos/pexels-eury-escudero-124357529-9962911.jpg'
import condoFour from '../assets/empreendimentos/pexels-jonathanborba-3179179.jpg'
import condoFive from '../assets/empreendimentos/pexels-volkerthimm-27307400.jpg'
import houseOne from '../assets/casas/Modern-Minimalist-Building.png'
import houseTwo from '../assets/casas/Modern-Minimalist-House.png'
import houseThree from '../assets/casas/Twilight Modern House.png'
import ProjectsGallerySection from '../components/projects/ProjectsGallerySection'
import ProjectsHeroSection from '../components/projects/ProjectsHeroSection'
import ProjectsServicesSection from '../components/projects/ProjectsServicesSection'

const galleryImages = [
  {
    src: houseTwo,
    alt: 'Casa contemporânea com jardim frontal amplo',
    title: 'Casa Reserva do Lago',
    type: 'Residência unifamiliar',
    description:
      'Casa unifamiliar com projeto contemporâneo, excelente iluminação natural e espaços funcionais para o dia a dia.',
    year: '2024',
    location: 'Porto das Dunas, Aquiraz',
    area: '165 m²',
    bedrooms: '3 quartos',
    bathrooms: '3 banheiros',
    garage: '2 vagas',
    investment: 'A partir de R$ 890 mil',
  },
  {
    src: condoTwo,
    alt: 'Condomínio vertical com torres residenciais',
    title: 'Condomínio Jardim das Águas',
    type: 'Condomínio residencial',
    description:
      'Empreendimento com torres modernas, lazer completo e localização estratégica para quem deseja morar com praticidade.',
    year: '2025',
    location: 'Aldeota, Fortaleza',
    area: '72 a 108 m²',
    bedrooms: '2 a 3 quartos',
    bathrooms: '2 banheiros',
    garage: '1 a 2 vagas',
    investment: 'R$ 440 mil a R$ 710 mil',
  },
  {
    src: condoThree,
    alt: 'Condomínio planejado com urbanização moderna',
    title: 'Residencial Villa Serena',
    type: 'Condomínio fechado',
    description:
      'Condomínio fechado com urbanização premium, paisagismo e foco em conforto, segurança e valorização patrimonial.',
    year: '2024',
    location: 'Cocó, Fortaleza',
    area: '110 a 168 m²',
    bedrooms: '3 quartos',
    bathrooms: '3 banheiros',
    garage: '2 vagas',
    investment: 'R$ 780 mil a R$ 1,15 mi',
  },
  {
    src: condoFour,
    alt: 'Condomínio com infraestrutura de alto padrão',
    title: 'Condomínio Parque Imperial',
    type: 'Condomínio residencial',
    description:
      'Projeto com infraestrutura completa, áreas de convivência e padrão construtivo elevado para famílias modernas.',
    year: '2024',
    location: 'Mucuripe, Fortaleza',
    area: '84 a 126 m²',
    bedrooms: '3 quartos',
    bathrooms: '2 banheiros',
    garage: '2 vagas',
    investment: 'R$ 530 mil a R$ 820 mil',
  },
  {
    src: condoFive,
    alt: 'Condomínio contemporâneo com padrão construtivo elevado',
    title: 'Condomínio Mirante Prime',
    type: 'Condomínio de luxo',
    description:
      'Condomínio de luxo com arquitetura contemporânea, vista privilegiada e soluções de acabamento premium.',
    year: '2026',
    location: 'Guararapes, Fortaleza',
    area: '128 a 190 m²',
    bedrooms: '3 a 4 quartos',
    bathrooms: '3 banheiros',
    garage: '2 a 3 vagas',
    investment: 'R$ 980 mil a R$ 1,65 mi',
  },
  {
    src: houseOne,
    alt: 'Casa moderna com acabamento premium',
    title: 'Casa Horizonte Nobre',
    type: 'Casa de alto padrão',
    description:
      'Residência com arquitetura imponente, ambientes integrados e acabamento de alto padrão para morar com exclusividade.',
    year: '2025',
    location: 'Eusébio, CE',
    area: '210 m²',
    bedrooms: '4 quartos',
    bathrooms: '3 banheiros',
    garage: '3 vagas',
    investment: 'A partir de R$ 1,25 mi',
  },
  {
    src: condoOne,
    alt: 'Condomínio de alto padrão com área de lazer',
    title: 'Condomínio Reserva Atlântica',
    type: 'Condomínio residencial',
    description:
      'Condomínio planejado com áreas comuns completas, segurança integrada e apartamentos pensados para famílias que buscam qualidade de vida.',
    year: '2025',
    location: 'Meireles, Fortaleza',
    area: '98 a 132 m²',
    bedrooms: '3 quartos',
    bathrooms: '2 banheiros',
    garage: '2 vagas',
    investment: 'R$ 620 mil a R$ 890 mil',
  },
  {
    src: houseThree,
    alt: 'Casa de luxo com arquitetura contemporânea',
    title: 'Casa Vista Imperial',
    type: 'Casa de alto padrão',
    description:
      'Residência de alto padrão com fachada marcante, ampla área social e conceito arquitetônico moderno.',
    year: '2026',
    location: 'Lagoa Redonda, Fortaleza',
    area: '248 m²',
    bedrooms: '4 quartos',
    bathrooms: '4 banheiros',
    garage: '3 vagas',
    investment: 'A partir de R$ 1,48 mi',
  },
]

function ProjectsPage() {
  return (
    <div className="space-y-0">
      <ProjectsHeroSection backgroundImage={projectMain} sideImage={condoTwo} />
      <ProjectsGallerySection images={galleryImages} />
      <div className="mx-auto w-full max-w-6xl px-3 sm:px-4">
        <ProjectsServicesSection />
      </div>
    </div>
  )
}

export default ProjectsPage
