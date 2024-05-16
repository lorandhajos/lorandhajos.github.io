import Header from './components/Header'
import UniversityProjects from './components/UniversityProjects'
import Competitions from './components/Competitions'
import PersonalProjects from './components/PersonalProjects'

function App() {
  return (
    <div className="max-w-3xl md:mx-auto mx-5 my-8 sm:text-sm">
      <Header />
      <main>
        <UniversityProjects />
        <Competitions />
        <PersonalProjects />
      </main>
    </div>
  )
}

export default App
