import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaGraduationCap, FaTools, FaBriefcase, FaProjectDiagram, FaCertificate, FaGlobe } from 'react-icons/fa';
import '../../styles/pages-style/about-page.component.css';

const About = () => {
    return (
        <div className="container about-page">
            <div className="personal-info">
                <h1>Ho Ngoc Dong Sinh</h1>
                <p className="headline">Software Engineer | Network Engineer | Backend Developer</p>
                <div className="contact-row">
                    <span><FaPhone /> +84 373 418 673</span>
                    <a href="mailto:18521339@gm.uit.edu.vn" target="_blank" rel="noopener noreferrer"><FaEnvelope /> Gmail</a>
                    <a href="https://linkedin.com/in/hongocdongsinh" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
                    <a href="https://github.com/dongsinhho" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
                    <a href="https://hndsinh.site" target="_blank" rel="noopener noreferrer"><FaGlobe /> Portfolio</a>
                </div>
            </div>

            <div className="bio">
                <h2>Summary</h2>
                <p>
                    Passionate and driven Software Engineer with ~3 years of experience, blending a strong foundation in computer networking with hands-on expertise in software development.<br />
                    With a background in network engineering, I bring deep knowledge of networking, operating systems, and system administration to the table.<br />
                    I thrive in tackling complex challenges, designing scalable backend systems, and contributing to high-performance applications.<br />
                    Committed to continuous learning and innovation, I am eager to leverage my skills to build impactful and efficient software solutions.
                </p>
            </div>

            <div className="skills">
                <h2><FaTools /> Technical Skills</h2>
                <ul>
                    <li><b>Programming Languages:</b> C#, Python, JavaScript, Go</li>
                    <li><b>Libraries/Frameworks:</b> Django, ExpressJs, WPF, Windows Filtering Platform, Go Fiber</li>
                    <li><b>Tools:</b> Jenkins, Git, Docker & Kubernetes</li>
                    <li><b>Database:</b> PostgreSQL, MongoDB, Redis</li>
                    <li><b>Other skills:</b> TCP/IP, Monitoring, OS, VPN, Protobuf</li>
                </ul>
            </div>

            <div className="education">
                <h2><FaGraduationCap /> Education</h2>
                <p><b>University Of Information Technology - VNUHCM</b> (Thu Duc, Ho Chi Minh City, VietNam)</p>
                <p>Engineer's Degree in Network and Data Communication, GPA: 3.14 (09/2018 - 09/2022)</p>
            </div>

            <div className="experience">
                <h2><FaBriefcase /> Work Experience</h2>
                {/* <div className="exp-item">
                    <b>Hitachi Digital Services - CSCADA</b> <span className="exp-location">(Ho Chi Minh City, Viet Nam)</span><br />
                    <i>Software Engineer (04/2025 - Now)</i>
                    <ul>
                        <li>Inherited and developed the Center SCADA system for Macau Light Rapid Transit (LRT), a critical infrastructure comprising server systems and operational software.</li>
                        <li>Maintained and developed the full stack Center SCADA system, covering front-end HMI, back-end database servers, subsystem drivers, simulators, and other core components.</li>
                        <li>Implemented system data for the East Line project and enhanced system features to ensure successful integration between legacy and new systems.</li>
                        <li>Developed new subsystem drivers in response to interface changes from third-party vendors, ensuring seamless communication and integration within the SCADA system.</li>
                        <li>Introduced and implemented new technologies into the system to improve performance and enhance user experience.</li>
                        <li><b>Technologies:</b> C#, WCF, Microsoft SQL Server, SignalR, WPF, NHibernate</li>
                    </ul>
                </div> */}
                <div className="exp-item">
                    <b>TMA Solution - Menlo Security</b> <span className="exp-location">(Ho Chi Minh City, Viet Nam)</span><br />
                    <i>Software Engineer (05/2022 - 04/2025)</i>
                    <ul>
                        <li>Joined Menlo Private Access project enabling secure access to internal systems (IaaS/PaaS/on-premises) from outside environments, immune to attacks that exploit VPN vulnerabilities.</li>
                        <li>Worked with international team to clarify requirements and design client application architecture.</li>
                        <li>Implemented application (including application and windows service, kernel driver), test cases and related tools.</li>
                        <li>Built an API server to mock the configuration that returns pre-integrated support.</li>
                        <li>Helped team members develop applications on other platforms.</li>
                        <li><b>Technologies:</b> C#, WPF, Windows Filtering Platform, Windows Driver, Python, Go, Protobuf</li>
                    </ul>
                </div>
                <div className="exp-item">
                    <b>DEK Technologies</b> <span className="exp-location">(Ho Chi Minh City, Viet Nam)</span><br />
                    <i>DevOps Intern (10/2021 - 01/2022)</i>
                    <ul>
                        <li>Built a CI/CD pipeline for a VoIP project that runs on multiple platforms (Android/Windows).</li>
                        <li>Designed test cases to test applications on the Android platform.</li>
                        <li>Helped improve the team's application development process, ensuring stable operation before deployment.</li>
                        <li><b>Technologies:</b> Jenkins, Docker, Gradle</li>
                    </ul>
                </div>
            </div>

            <div className="projects">
                <h2><FaProjectDiagram /> Personal Projects</h2>
                <ul>
                    <li>
                        <b>Bike Rental System</b> <span className="tag">MERN Stack, Python, React Native, Kubernetes, Docker, Prometheus-Grafana</span><br />
                        Graduation project: Created a local K8S cluster providing API and WebSocket services to bike stations built on embedded computers. Implemented high availability and fault-tolerant clusters for monitoring and data storage.<br />
                        <a href="https://github.com/dongsinhho/System-Setup" target="_blank" rel="noopener noreferrer">System setup</a> | <a href="https://github.com/dongsinhho/Bike-Rental-System" target="_blank" rel="noopener noreferrer">Backend</a> | <a href="https://github.com/dongsinhho/ReactNative-BikeRental" target="_blank" rel="noopener noreferrer">Client app</a> | <a href="https://github.com/dongsinhho/BikeEdgeService" target="_blank" rel="noopener noreferrer">Edge Service</a>
                    </li>
                    <li>
                        <b>Book Store</b> <span className="tag">Python, Django, PostgreSql</span><br />
                        Web API using Django and DRF for managing a virtual bookstore with CRUD, pagination, filtering, and search.
                        <br /><a href="https://github.com/luongviethung31/b-book" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </li>
                    <li>
                        <b>Homelab</b> <span className="tag">Cloudflare Tunnel, Docker, Go Fiber</span><br />
                        Self-hosting website on Raspberry Pi Server at home.
                    </li>
                    <li>
                        <b>CryptoTrack Realtime</b> <span className="tag">Python, Django, Redis, PostgreSql, Docker</span><br />
                        API for monitoring cryptocurrency prices in real-time. Scrapes, cleans, caches, and provides real-time prices via sockets.
                        <br /><a href="https://github.com/dongsinhho/marketFinance" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </li>
                    <li>
                        <b>Data analytics platform</b> <span className="tag">C#, WPF, NodeJS</span><br />
                        Windows app to scrape and download TikTok videos without watermarks. Used NodeJS for device emulation, managed videos, parallel downloads, and deployed on AWS.
                    </li>
                    <li>
                        <b>Blog Engine</b> <span className="tag">C#, React, PostgreSql</span><br />
                        Blog engine for personal use, learning .NET/EF Core and React. Platform for portfolio and knowledge sharing.
                        <br /><a href="https://github.com/dongsinhho/Portfolio" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </li>
                    <li><i>And all my other projects you can check out on<a href="https://github.com/dongsinhho" target="_blank" rel="noopener noreferrer">GitHub</a>!</i></li>
                </ul>
            </div>

            <div className="certifications">
                <h2><FaCertificate /> Certifications</h2>
                <ul>
                    <li>TOEIC Listening & Reading: 720</li>
                </ul>
            </div>
        </div>
    );
};

export default About;