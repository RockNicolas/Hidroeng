import condoOne from '../assets/empreendimentos/Modern House at Twilight.png'
import condoTwo from '../assets/empreendimentos/pexels-claiton-13631997.jpg'
import condoThree from '../assets/empreendimentos/pexels-eury-escudero-124357529-9962911.jpg'
import condoFour from '../assets/empreendimentos/pexels-jonathanborba-3179179.jpg'
import condoFive from '../assets/empreendimentos/pexels-volkerthimm-27307400.jpg'
import houseOne from '../assets/casas/Modern-Minimalist-Building.png'
import houseTwo from '../assets/casas/Modern-Minimalist-House.png'
import houseThree from '../assets/casas/Twilight Modern House.png'

const projectsData = [
  {
    slug: 'casa-reserva-do-lago',
    src: houseTwo,
    alt: 'Casa contemporânea com jardim frontal amplo',
    title: 'Casa Reserva do Lago',
    type: 'Residência unifamiliar',
    description:
      'Casa unifamiliar com projeto contemporâneo, excelente iluminação natural e espaços funcionais para o dia a dia.',
    concept:
      'A Casa Reserva do Lago foi idealizada para famílias que valorizam integração, iluminação natural e conforto. O projeto combina fachada limpa, áreas sociais conectadas e acabamentos modernos para criar uma experiência residencial sofisticada e acolhedora.',
    year: '2024',
    location: 'Porto das Dunas, Aquiraz',
    area: '165 m²',
    bedrooms: '3 quartos',
    bathrooms: '3 banheiros',
    garage: '2 vagas',
    investment: 'A partir de R$ 890 mil',
  },
  {
    slug: 'condominio-jardim-das-aguas',
    src: condoTwo,
    alt: 'Condomínio vertical com torres residenciais',
    title: 'Condomínio Jardim das Águas',
    type: 'Condomínio residencial',
    description:
      'Empreendimento com torres modernas, lazer completo e localização estratégica para quem deseja morar com praticidade.',
    concept:
      'O Condomínio Jardim das Águas nasce com foco em segurança, convivência e praticidade. A proposta integra áreas comuns completas com unidades bem distribuídas, atendendo famílias que buscam morar em um endereço valorizado.',
    year: '2025',
    location: 'Aldeota, Fortaleza',
    area: '72 a 108 m²',
    bedrooms: '2 a 3 quartos',
    bathrooms: '2 banheiros',
    garage: '1 a 2 vagas',
    investment: 'R$ 440 mil a R$ 710 mil',
  },
  {
    slug: 'residencial-villa-serena',
    src: condoThree,
    alt: 'Condomínio planejado com urbanização moderna',
    title: 'Residencial Villa Serena',
    type: 'Condomínio fechado',
    description:
      'Condomínio fechado com urbanização premium, paisagismo e foco em conforto, segurança e valorização patrimonial.',
    concept:
      'O Villa Serena foi desenvolvido para unir tranquilidade e sofisticação. Com urbanização qualificada, áreas verdes e arquitetura contemporânea, o empreendimento oferece qualidade de vida e valorização de longo prazo.',
    year: '2024',
    location: 'Cocó, Fortaleza',
    area: '110 a 168 m²',
    bedrooms: '3 quartos',
    bathrooms: '3 banheiros',
    garage: '2 vagas',
    investment: 'R$ 780 mil a R$ 1,15 mi',
  },
  {
    slug: 'condominio-parque-imperial',
    src: condoFour,
    alt: 'Condomínio com infraestrutura de alto padrão',
    title: 'Condomínio Parque Imperial',
    type: 'Condomínio residencial',
    description:
      'Projeto com infraestrutura completa, áreas de convivência e padrão construtivo elevado para famílias modernas.',
    concept:
      'Com foco em conforto urbano, o Parque Imperial combina infraestrutura técnica robusta com áreas de convivência planejadas. O resultado é um condomínio funcional, elegante e preparado para o dia a dia das famílias.',
    year: '2024',
    location: 'Mucuripe, Fortaleza',
    area: '84 a 126 m²',
    bedrooms: '3 quartos',
    bathrooms: '2 banheiros',
    garage: '2 vagas',
    investment: 'R$ 530 mil a R$ 820 mil',
  },
  {
    slug: 'condominio-mirante-prime',
    src: condoFive,
    alt: 'Condomínio contemporâneo com padrão construtivo elevado',
    title: 'Condomínio Mirante Prime',
    type: 'Condomínio de luxo',
    description:
      'Condomínio de luxo com arquitetura contemporânea, vista privilegiada e soluções de acabamento premium.',
    concept:
      'O Mirante Prime representa um conceito de moradia de alto padrão, com desenho arquitetônico imponente e soluções construtivas premium. Cada detalhe foi pensado para oferecer exclusividade e bem-estar.',
    year: '2026',
    location: 'Guararapes, Fortaleza',
    area: '128 a 190 m²',
    bedrooms: '3 a 4 quartos',
    bathrooms: '3 banheiros',
    garage: '2 a 3 vagas',
    investment: 'R$ 980 mil a R$ 1,65 mi',
  },
  {
    slug: 'casa-horizonte-nobre',
    src: houseOne,
    alt: 'Casa moderna com acabamento premium',
    title: 'Casa Horizonte Nobre',
    type: 'Casa de alto padrão',
    description:
      'Residência com arquitetura imponente, ambientes integrados e acabamento de alto padrão para morar com exclusividade.',
    concept:
      'A Casa Horizonte Nobre tem assinatura contemporânea e integração total entre interior e exterior. O projeto prioriza amplitude, acabamento refinado e uma experiência de morar sofisticada em todos os ambientes.',
    year: '2025',
    location: 'Eusébio, CE',
    area: '210 m²',
    bedrooms: '4 quartos',
    bathrooms: '3 banheiros',
    garage: '3 vagas',
    investment: 'A partir de R$ 1,25 mi',
  },
  {
    slug: 'condominio-reserva-atlantica',
    src: condoOne,
    alt: 'Condomínio de alto padrão com área de lazer',
    title: 'Condomínio Reserva Atlântica',
    type: 'Condomínio residencial',
    description:
      'Condomínio planejado com áreas comuns completas, segurança integrada e apartamentos pensados para famílias que buscam qualidade de vida.',
    concept:
      'O Reserva Atlântica foi concebido para entregar segurança, convivência e alto padrão em um único endereço. O empreendimento combina lazer completo e soluções de engenharia focadas em durabilidade.',
    year: '2025',
    location: 'Meireles, Fortaleza',
    area: '98 a 132 m²',
    bedrooms: '3 quartos',
    bathrooms: '2 banheiros',
    garage: '2 vagas',
    investment: 'R$ 620 mil a R$ 890 mil',
  },
  {
    slug: 'casa-vista-imperial',
    src: houseThree,
    alt: 'Casa de luxo com arquitetura contemporânea',
    title: 'Casa Vista Imperial',
    type: 'Casa de alto padrão',
    description:
      'Residência de alto padrão com fachada marcante, ampla área social e conceito arquitetônico moderno.',
    concept:
      'A Casa Vista Imperial traduz imponência e conforto em uma proposta arquitetônica autoral. A distribuição dos espaços valoriza a integração social e proporciona uma experiência residencial exclusiva.',
    year: '2026',
    location: 'Lagoa Redonda, Fortaleza',
    area: '248 m²',
    bedrooms: '4 quartos',
    bathrooms: '4 banheiros',
    garage: '3 vagas',
    investment: 'A partir de R$ 1,48 mi',
  },
]

export default projectsData
