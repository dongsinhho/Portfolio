import '../../styles/pages-style/projects-page.component.css'
import projects_data from '../../mock-data/projects-data'

const Projects = () => {
    return (
        <div className='container'>
            <div className='page-title'>
                <h1>Projects</h1>
            </div>
            <div className="project-list">
                {projects_data.map((project, index) => (
                    <div className="project-item" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects