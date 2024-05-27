import IntroSection from '../../components/sections/IntroSection'
import ProjectsSection from '../../components/sections/ProjectsSection'
import SkillsSection from '../../components/sections/SkillsSection'
import AboutSection from '../../components/sections/AboutSection'

const Landing = () => {
  return (
    <div className='flex flex-col w-full overflow-x-hidden'>
      <IntroSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
    </div>
  )
}

export default Landing
