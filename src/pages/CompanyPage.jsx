import CompanyHeroSection from '../components/company/CompanyHeroSection'
import CompanyValuesSection from '../components/company/CompanyValuesSection'

function CompanyPage() {
  return (
    <div className="-mx-[calc(50dvw-50%)] w-dvw bg-slate-100 pb-12">
      <CompanyHeroSection />
      <div className="mx-auto w-full max-w-6xl px-3 sm:px-4">
        <CompanyValuesSection />
      </div>
    </div>
  )
}

export default CompanyPage
