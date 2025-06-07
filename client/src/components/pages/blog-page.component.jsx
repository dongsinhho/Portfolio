import { useParams } from 'react-router-dom'
import BlogTitle from '../molecules/blog-title'
import '../../styles/pages-style/blog-page.component.css'
import NotFound from '../templat3/not-found.component';
import ScrollIndicator from '../templat3/scroll-indicator.component';
import ScrollTop from '../molecules/scroll-top';
import GoBack from '../molecules/go-back';
import blogs_data from '../../mock-data/blog-data';
import { useEffect, useState } from 'react';
import { GetBlogBySlug } from '../../api/BlogApi';
import useAxios from '../../hooks/useAxios';
import Loader from '../atoms/loader';

const Blog = () => {
    const axios = useAxios();
    const { slug } = useParams();
    const [blogDetail, setBlogDetail] = useState(null);
    const [isLoadFinished, setIsLoadFinished] = useState(false);

    useEffect(() => {
        const getBlogDetail = async () => {
            try {
                const res = await GetBlogBySlug(axios, slug);
                if (res && res.data && res.status !== 404 && res.data.data) {
                    setBlogDetail(res.data.data);
                } else {
                    // Nếu không hợp lệ, lấy từ mock-data
                    const localBlog = blogs_data.find(b => b.slug === slug);
                    setBlogDetail(localBlog || null);
                }
                setIsLoadFinished(true);
            } catch (err) {
                // Nếu lỗi, lấy từ mock-data
                const localBlog = blogs_data.find(b => b.slug === slug);
                setBlogDetail(localBlog || null);
                setIsLoadFinished(true);
            }
        };
        getBlogDetail();
    }, [slug, axios]);



    return (
        blogDetail ?
            <div className="blog-container">
                <BlogTitle blog={{
                    ...blogDetail,
                    categories: Array.isArray(blogDetail.categories) ? blogDetail.categories : []
                }} />
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