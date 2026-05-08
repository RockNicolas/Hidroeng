import projectMain from '../assets/empreendimentos/pexels-kelly-32821661.jpg'
import condoTwo from '../assets/empreendimentos/pexels-claiton-13631997.jpg'
import ProjectsGallerySection from '../components/projects/ProjectsGallerySection'
import ProjectsHeroSection from '../components/projects/ProjectsHeroSection'
import ProjectsServicesSection from '../components/projects/ProjectsServicesSection'
import projectsData from '../data/projectsData'

function ProjectsPage() {
  return (
    <div className="space-y-0">
      <ProjectsHeroSection backgroundImage={projectMain} sideImage={condoTwo} />
      <ProjectsGallerySection images={projectsData} />
      <div className="mx-auto w-full max-w-6xl px-3 sm:px-4">
        <ProjectsServicesSection />
      </div>
    </div>
  )
}

export default ProjectsPage
