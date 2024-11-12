import { useParams } from 'react-router-dom'
import BlogTitle from '../molecules/blog-title'
import '../../styles/pages-style/blog-page.component.css'
import NotFound from '../templat3/not-found.component';
import ScrollIndicator from '../templat3/scroll-indicator.component';
import ScrollTop from '../molecules/scroll-top';
import GoBack from '../molecules/go-back';
import blogs_data from '../../mock-data/blog-data';
import { useEffect, useState } from 'react';
import { GetBlogById } from '../../api/BlogApi';
import useAxios from '../../hooks/useAxios';
import Loader from '../atoms/loader';

const Blog = () => {
    const axios = useAxios();
    const { blogId } = useParams();
    const [blogDetail, setBlogDetail] = useState(null);
    const [isLoadFinished, setIsLoadFinished] = useState(false);

    useEffect(() => {
        const getBlogDetail = async () => {
            try {
                const res = await GetBlogById(axios, blogId);
                if (res) {
                    setBlogDetail(res.data);
                }
                else {
                    const getLocalBlog = blogs_data.find(({ id }) => id === blogId)
                    setBlogDetail(getLocalBlog);
                }
                setIsLoadFinished(true)
            }
            catch (err) {
                const res = blogs_data.find(({ id }) => id == blogId)
                setBlogDetail(res);
                setIsLoadFinished(true)
            }
        }
        getBlogDetail();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    return (
        blogDetail ?
            <div className="blog-container">
                <BlogTitle blog={blogDetail} />
                <ScrollIndicator />
                {blogDetail && blogDetail.hasOwnProperty('content') ?
                    <div className='blog-content' dangerouslySetInnerHTML={{ __html: blogDetail.content }} />
                    :
                    <div className="blog-content">
                        <NotFound isBlog />
                    </div>}
                <div className='blog-footer'>
                    <GoBack />
                    <ScrollTop />
                </div>
            </div>
            :
            isLoadFinished ?
                <NotFound />
                :
                <Loader />

    )
}

export default Blog