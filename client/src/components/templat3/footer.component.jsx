import '../../styles/template-style/footer.component.css'
import LinkRef from '../atoms/link-ref';

const Footer = () => {
    return (
        <footer>
            <hr />
            <div className="footer-bottom">
                <div className='social-icons'>
                    <a href='http://github.com/dongsinhho' target='_blank' rel='noreferrer'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path
                                d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
                            ></path>
                        </svg>
                    </a>
                    <a href='http://facebook.com/dongsinhho' target='_blank' rel='noreferrer'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path
                                d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
                            ></path>
                        </svg>
                    </a>
                    <a href='mailto:sinhvua@gmail.com' target='_blank' rel='noreferrer'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                            <polyline points="3 7 12 13 21 7"></polyline>
                        </svg>
                    </a>
                    <a href='https://www.linkedin.com/in/hongocdongsinh/' target='_blank' rel='noreferrer'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                            <line x1="8" y1="11" x2="8" y2="16"></line>
                            <line x1="8" y1="8" x2="8" y2="8.01"></line>
                            <line x1="12" y1="16" x2="12" y2="11"></line>
                            <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                        </svg>
                    </a>
                </div>
                <p>&copy; 2022-2024 Ho Ngoc Dong Sinh. <LinkRef text="CC BY-NC-SA 4.0" link='https://creativecommons.org/licenses/by-nc-sa/4.0/' referrer={false}/> </p>
            </div>
        </footer>
    );
}

export default Footer;