import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaGraduationCap, FaTools, FaBriefcase, FaProjectDiagram } from 'react-icons/fa';
import '../../styles/pages-style/about-page.component.css'

const About = () => {
    return (
        <div className="container about-page">
            <div className="personal-info">
                <h1>Ho Ngoc Dong Sinh</h1>
                <p className="headline">Software Engineer | Web Developer | Tech Enthusiast</p>
                <div className="contact-row">
                    <span><FaPhone />&nbsp;+84 (373) 418 673</span>
                    <a href="mailto:18521339@gm.uit.edu.vn" target="_blank" rel="noopener noreferrer"><FaEnvelope />&nbsp;Gmail</a>
                    <a href="https://linkedin.com/in/hongocdongsinh" target="_blank" rel="noopener noreferrer"><FaLinkedin />&nbsp;LinkedIn</a>
                    <a href="https://github.com/dongsinhho" target="_blank" rel="noopener noreferrer"><FaGithub />&nbsp;GitHub</a>
                </div>
            </div>
            <div className="bio">
                <h2>About Me</h2>
                <p>
                    I am a young engineer with a passion for exploring technology, a continuous learning mindset, and a readiness to tackle challenging issues in every assigned task.<br/>
                    As a software developer with over 2 years of experience, originating from a computer network engineering background, I am confident in my extensive knowledge of networking, operating systems, and system administration. I am capable of contributing to the development of large-scale backend systems or complex computer applications.
                </p>
            </div>
            <div className="skills">
                <h2><FaTools /> Technical Skills</h2>
                <ul>
                    <li><b>Programming Languages:</b> C#, Python, JavaScript</li>
                    <li><b>Libraries/Frameworks:</b> WPF, Windows Filtering Platform, Django, Bash Script, ExpressJs</li>
                    <li><b>Tools:</b> Jenkins, Git, Docker & Kubernetes</li>
                    <li><b>Database:</b> PostgreSQL, MongoDB, Redis</li>
                </ul>
            </div>
            <div className="education">
                <h2><FaGraduationCap /> Education</h2>
                <p><b>University Of Information Technology - VNUHCM</b> (2018-2022)</p>
                <p>Engineer's Degree in Network and Data Communication, GPA: 3.3</p>
            </div>
            <div className="experience">
                <h2><FaBriefcase /> Work Experience</h2>
                <div className="exp-item">
                    <b>DEK Technologies</b> <span className="exp-location">(Ho Chi Minh City, Vietnam)</span><br/>
                    <i>DevOps Intern (10/2021 - 01/2022)</i>
                    <ul>
                        <li>Built a CI/CD pipeline for a VoIP project on multiple platforms (Android/Windows).</li>
                        <li>Designed test cases for Android applications and improved the team's development process.</li>
                        <li>Technologies: Jenkins, Docker, Gradle</li>
                    </ul>
                </div>
                <div className="exp-item">
                    <b>TMA Solutions</b> <span className="exp-location">(Ho Chi Minh City, Vietnam)</span><br/>
                    <i>Software Engineer (05/2022 - Now)</i>
                    <ul>
                        <li>Joined Menlo Private Access project enabling secure access to internal systems (IaaS/PaaS/on-premises) from outside environments.</li>
                        <li>Worked with international teams to clarify requirements and design client application architecture.</li>
                        <li>Implemented, tested, and supported Windows platform applications and tools.</li>
                        <li>Technologies: C#, WPF, Windows Filtering Platform, TCP/IP, Windows Driver, Python</li>
                    </ul>
                </div>
            </div>
            <div className="projects">
                <h2><FaProjectDiagram /> Projects</h2>
                <ul>
                    <li><b>Bike Rental System (MERN Stack):</b> Graduation project with a local K8S cluster providing API and WebSocket services to bike stations. <a href="https://github.com/dongsinhho/System-Setup" target="_blank" rel="noopener noreferrer">System setup</a> | <a href="https://github.com/dongsinhho/Bike-Rental-System" target="_blank" rel="noopener noreferrer">Backend</a> | <a href="https://github.com/dongsinhho/ReactNative-BikeRental" target="_blank" rel="noopener noreferrer">Client app</a> | <a href="https://github.com/dongsinhho/BikeEdgeService" target="_blank" rel="noopener noreferrer">Edge Service</a></li>
                    <li><b>Book Store (Django):</b> Web API for managing a virtual bookstore with CRUD, pagination, filtering, and search. <a href="https://github.com/luongviethung31/b-book" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><b>CryptoTrack Realtime (Django):</b> Real-time cryptocurrency price monitoring API. <a href="https://github.com/dongsinhho/marketFinance" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                </ul>
            </div>
        </div>
    )
}

export default About