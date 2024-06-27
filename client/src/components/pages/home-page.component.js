import { Link } from 'react-router-dom';
import './home-page.component.css';
import routes from '../../utils/routes';

function Homepage() {
    return (
        <div className="container">
            <div className="overview">
                <p>Hello I'm Hồ Ngọc Đông Sinh a.k.a Dong Sinh Ho 🚀</p>
                <p>
                    Page này chả có mẹ gì hết đó mấy fen, mới làm được có xíu xiu để flex xíu kĩ năng với mấy chị HR (hoặc không...)
                    <br />
                    Mà cơ bản thì tui làm back-end nên cũng chưa biết show kĩ năng kiểu gì. Thôi thì làm cái web xấu xấu dơ dơ.
                    <br />
                    Xem được thì xem, không xem được thì cút.
                    <br />
                    À tui cũng đăng mấy cái blog về technical lượm lượm kiến thức trên mạng. Lỡ có viết bậy thì thông cảm nhé :{"))"}
                    <br />
                    Có gì liên hệ hoặc góp ý thì ghé <Link className='about-text' to={routes.about.path}>About Me</Link> nhé --{">>>>>>"}
                </p>
                <div className='social'>
                    <div className='social-button'>
                        {/* TODO: Change this to SVG */}
                        <a href='https://github.com/dongsinhho' target='_blank' rel="noreferrer">
                            GitHub 
                        </a>
                    </div>
                    <div className='social-button'>
                        <a href='https://www.linkedin.com/in/hongocdongsinh' target='_blank' rel="noreferrer">
                            Linkedin
                        </a>
                    </div>
                    <div className='social-button'>
                        <a href='https://facebook.com/dongsinhho' target='_blank' rel="noreferrer">
                            Facebook
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;