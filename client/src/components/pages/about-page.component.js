import './about-page.component.css'

const About = () => {
    return (
        <div className="container">
            <div className="main-content">
                <div className="personal-info">
                    <h1>Ho Ngoc Dong Sinh</h1>
                    <p>Software Engineer | Web Developer | Tech Enthusiast</p>
                </div>
                <div className="bio">
                    <h2>About Me</h2>
                    <p>
                        I am a passionate software engineer with experience in developing web applications using modern technologies. My expertise lies in full-stack development, and I enjoy creating efficient and scalable solutions. I am constantly learning and keeping up-to-date with the latest industry trends to ensure that I am always improving my skills.
                    </p>
                </div>
                <div className="skills">
                    <h2>Skills</h2>
                    <ul>
                        <li>Node.js</li>
                        <li>Python</li>
                        <li>C#</li>
                        <li>TCP/IP</li>
                        <li>Windows Application</li>
                        <li>Git & GitHub</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default About