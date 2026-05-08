import { Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout'
import CompanyPage from '../pages/CompanyPage'
import ContactPage from '../pages/ContactPage'
import HomePage from '../pages/HomePage'
import PortfolioPage from '../pages/PortfolioPage'
import ProjectsPage from '../pages/ProjectsPage'
import TestimonialsPage from '../pages/TestimonialsPage'
import ScrollToTop from './ScrollToTop'

function Router() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/empresa" element={<CompanyPage />} />
          <Route path="/empreendimentos" element={<ProjectsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/depoimentos" element={<TestimonialsPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  )
}

export default Router
