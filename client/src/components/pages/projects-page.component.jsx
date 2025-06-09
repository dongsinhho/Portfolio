import React from 'react'
import '../../styles/pages-style/projects-page.component.css'
import projects_data from '../../mock-data/projects-data'
import LinkRef from '../atoms/link-ref'

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
                        {/* Render all project links if available, else fallback to old link */}
                        {project.links && project.links.length > 0 ? (
                            <div className="project-links">
                                {project.links.map((l, idx) => (
                                    <React.Fragment key={idx}>
                                        {idx > 0 && <span className="project-link-sep">|</span>}
                                        <LinkRef text={l.label} link={l.url} target="_blank" rel="noopener noreferrer" className="project-link-btn" />
                                    </React.Fragment>
                                ))}
                            </div>
                        ) : project.links ? (
                            <LinkRef text="View Project" link={project.link} target="_blank" rel="noopener noreferrer" className="project-link-btn" />
                        ) : null}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects