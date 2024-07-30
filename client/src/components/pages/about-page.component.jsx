import '../../styles/pages-style/about-page.component.css'

const About = () => {
    return (
        <div className="container">
            <div className="personal-info">
                <h1>Ho Ngoc Dong Sinh</h1>
                <p>Software Engineer | Web Developer | Tech Enthusiast</p>
            </div>
            <div className="bio">
                <h2>About Me</h2>
                <p>
                    I am a young engineer with a passion for exploring technology, a continuous learning mindset, and a readiness to
                    tackle challenging issues in every assigned task.
                    As a software developer with over 2 years of experience, originating from a computer network engineering
                    background, I am confident in my extensive knowledge of networking, operating systems, and system
                    administration. I am capable of contributing to the development of large-scale backend systems or complex
                    computer applications.
                </p>
            </div>
            <div className="skills">
                <h2>Skills</h2>
                <ul>
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>C#</li>
                    <li>Networking</li>
                    <li>Windows Application</li>
                    <li>Operating System</li>
                    <li>CI/CD & Docker Container </li>
                </ul>
            </div>
            <div className="education">
                <h2>Education</h2>
                <p>Engineer's Degree in Network and Data Communication, UIT - VNUHCM</p>
                <p>Graduated: 2023</p>
            </div>

        </div>
    )
}

export default About