import { Link } from 'react-router-dom';

import '../../styles/pages-style/home-page.component.css';
import routes from '../../utils/routes';
import LinkRef from '../atoms/link-ref';
import CardSection from '../organisms/card.section';

import blogs_data from '../../mock-data/blog-data';

const Homepage = () => {

    //const data = Axios.Get('/ándaskdmasd'); 
    // [blogdata,setblog] = useState();
    // param =useParam()
    // useEffect = (() => {// const blogdata = import(api)} ), [param])  // [] chỉ gọi 1 lần khi component load,  còn nếu không có

    return (
        <div className="container">
            <div className="overview">
                <p className="intro-main">Hello I'm Hồ Ngọc Đông Sinh a.k.a Dong Sinh Ho 🚀</p>
                <div>
                    <p className="intro-desc" style={{ fontSize: '1rem', color: '#666', fontWeight: 400 }}>
                        This page doesn’t have much on it, folks. I’ve only done a little bit to flex some skills for the HR folks (or maybe not…).
                    </p>
                    <h4 className="intro-section">A Little About Me</h4>
                    <p className="intro-text">
                        Basically, I’m a back-end developer, so showcasing my skills in a flashy way is a bit out of my wheelhouse. But hey, here’s a rough and tumble website anyway. It might be ugly and messy, but it gets the job done.
                    </p>
                    <h4 className="intro-section">What You’ll Find Here</h4>
                    <ul className="intro-list">
                        <li><b>Technical Blogs:</b> I post some technical blogs where I share knowledge picked up from the vast internet. If you find any mistakes, please bear with me. ))</li>
                        <li><b>Random Musings:</b> Occasionally, I might drop some thoughts or ideas that pop into my head.</li>
                    </ul>
                    <p className="intro-text">If you can view it, great. If not, then buzz off.</p>
                    <h4 className="intro-section">Get in Touch</h4>
                    <p className="intro-text">
                        If you have any feedback or want to get in touch, head over to the <Link className='about-text' to={routes.about.path}>About Me</Link> page --{'>>>>>>'}
                    </p>
                </div>
                <div className='social'>
                    <div className='social-button'>
                        {/* TODO: Change this to SVG */}
                        <a href='https://github.com/dongsinhho' target='_blank' rel="noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                ></path>
                            </svg>
                        </a>
                    </div>
                    <div className='social-button'>
                        <a href='https://www.linkedin.com/in/hongocdongsinh' target='_blank' rel="noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                                ></path>
                            </svg>
                        </a>
                    </div>
                    <div className='social-button'>
                        <a href='https://facebook.com/dongsinhho' target='_blank' rel="noreferrer">
                            <svg viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1Z">
                                </path>
                            </svg                            >
                        </a>
                    </div>
                </div>
            </div>
            <div className='post-section'>
                {/* <Tag name="test" link="/about" />
                <LinkRef text="wwww.hasda/.ádkasmd" link="https://facebook.com" /> */}
                <div className='post-section-title'>
                    <p>Latest Posts</p>
                    <LinkRef text='all posts →' link='/blog' referrer />
                </div>
                <CardSection blogData={blogs_data} />
            </div>
        </div>
    );
}

export default Homepage;