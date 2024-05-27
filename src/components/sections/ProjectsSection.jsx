import { useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { RiCodeSSlashLine } from 'react-icons/ri'
import Container from '../container/Container'
import Card from '../card/Card'
import { PROJECTS_DATA } from '../../data'
import { BtnViewAll } from '../buttons'

const ProjectsSection = () => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  const variants = {
    visible: {
      opacity: 1,
      translateX: 0,
      transition: { duration: 0.5, delay: 0.5 }
    },
    hidden: { opacity: 0, translateX: -100 }
  }

  useEffect(() => {
    if (inView) {
      control.start('visible')
    } else {
      control.start('hidden')
    }
  }, [control, inView])
  const featuredProjects = PROJECTS_DATA.slice(0, 3)
  return (
    <Container>
      <motion.div
        className='flex flex-col'
        ref={ref}
        variants={variants}
        initial='hidden'
        animate={control}
      >
        <h2 className='md:text-3xl text-2xl flex items-center gap-2 text-gray-400 mb-10'>
          <RiCodeSSlashLine />
          Proyectos Destacados
        </h2>
        {/* Projects */}
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-3 '>
          {featuredProjects.map((project) => (
            <Card project={project} key={project.id} />
          ))}
        </div>

        <BtnViewAll to='/projects' text='Ver más proyectos' />
      </motion.div>
    </Container>
  )
}

export default ProjectsSection
