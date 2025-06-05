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
                        {project.media && project.media.length > 0 && (
                            <div className="project-media">
                                {project.media.map((m, i) => (
                                    m.type === 'image' ? (
                                        <img key={i} src={m.src} alt={project.title + ' demo'} style={{maxWidth:'100%',marginBottom:'8px'}} />
                                    ) : m.type === 'video' ? (
                                        <video key={i} src={m.src} controls style={{maxWidth:'100%',marginBottom:'8px'}} />
                                    ) : null
                                ))}
                            </div>
                        )}
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects