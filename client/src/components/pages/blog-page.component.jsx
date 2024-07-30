import { useParams } from 'react-router-dom'
import BlogTitle from '../molecules/blog-title'
import '../../styles/pages-style/blog-page.component.css'
import NotFound from '../templates/not-found.component';
import ScrollIndicator from '../templates/scroll-indicator.component';
import ScrollTop from '../molecules/scroll-top';
import GoBack from '../molecules/go-back';
import blogs_data from '../../mock-data/blog-data';

const Blog = () => {
    const { blogId } = useParams();
    // eslint-disable-next-line
    const blogDetail = blogs_data.find(({id}) => id == blogId)
    console.log(blogDetail)
    return (
        <div className="blog-container">
            <BlogTitle blog={blogDetail}/>
            <ScrollIndicator/>
            { blogDetail && blogDetail.hasOwnProperty('content') ? 
            <div className='blog-content' dangerouslySetInnerHTML={{__html: blogDetail.content}}/>  
            :
            <div className="blog-content">
                <NotFound isBlog/>
            </div>}
            <div className='blog-footer'>
                <GoBack/>
                <ScrollTop/>
            </div>
        </div>
    )
}

export default Blog