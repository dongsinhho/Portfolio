import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor } from 'ckeditor5';

import '../../styles/pages-style/write-page.component.css'
import 'ckeditor5/ckeditor5.css';
import editorConfig from '../../utils/ckEditorConfig';
import { CreateBlog, GetAllCategory } from '../../api/BlogApi';
import useAxios from '../../hooks/useAxios';

const WritePage = (props) => {
    const axios = useAxios();
    const [isLayoutReady, setIsLayoutReady] = useState(false);
    const [formData, setFormData] = useState({});
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [categoryList, setCategoryList] = useState([]);


    
    const { blogDetails } = props;
    if (blogDetails) {
        setFormData(blogDetails)
    }

    useEffect(() => {
        setIsLayoutReady(true);
        return () => setIsLayoutReady(false);
    }, []);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const res = await GetAllCategory(axios);
                setCategoryList([{ id: "", name: "--" }, ...res.data]);
            }
            catch (err) {
                setCategoryList([{ id: "", name: "--" }]);
            }
        }
        getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setCategoryList]);


    const inputOnChangeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleCkEditorChange = (e, editor) => {
        const content = editor.getData()
        setFormData({ ...formData, content: content })
    }

    const chooseCategory = (value) => {
        if (!value || selectedCategory.includes(value) || value === "--") {
            return
        }
        console.log(value)
        setSelectedCategory([...selectedCategory, value])
    }
    const handleRemoveCategory = (e) => {
        const newCategoryList = selectedCategory.filter(item => item !== e)
        console.log(newCategoryList)
        setSelectedCategory(newCategoryList)
    }

    const createPost = async () => {
        if (!formData.title) {
            alert("missing title")
            return
        }
        if (!formData.description) {
            console.log("missing description")
            return
        }
        if (!formData.content) {
            console.log("missing content")
            return
        }

        if (!selectedCategory || selectedCategory.length === 0) {
            // Handle UnCategory case    
        }

        let categories = []
        selectedCategory.forEach(element => {
            const cate = categoryList.find(obj => {
                return obj.name === element
              })
            categories.push(cate.id);
        });
        console.log(categories)
        try {
            var result = await CreateBlog(axios, formData.title, formData.description, formData.content, categories);
            //if (resut && result.)
            console.log(result);
        }
        catch (err) {
            if (!err?.response) {
                alert("No server response");
            }
            else if (err.response?.status >= 400 && err.response?.status <= 499) {
                alert(err.response.statusText)
            }
            else {
                alert("Create post failed")
            }
        }
    }

    return (
        <div className="container">
            <div className='page-title'>
                <h1>Write blog</h1>
            </div>

            <div className='blog-input'>
                <div className='blog-info'>
                    <div>
                        <label>Title
                            <input type='text' name='title' onChange={inputOnChangeHandler} />
                        </label>
                        <label>Description
                            <input type='text' name='description' onChange={inputOnChangeHandler} />
                        </label>
                    </div>
                    <div className='category-section'>
                        <div className='category-input'>
                            <label>Category</label>
                            <select className='category-box'
                                onChange={(e) => chooseCategory(e.target.value)}
                            >
                                {categoryList.map((item) => (
                                    <option key={item.id} value={item.name}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                            {/* create popup to create new category */}
                            <button>+</button>
                        </div>
                        <div className='selected-category'>
                            {selectedCategory.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <label>
                                            {item}
                                        </label>
                                        <button onClick={() => handleRemoveCategory(item)}>X</button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        {isLayoutReady &&
                            <CKEditor editor={ClassicEditor} config={editorConfig}
                                onReady={(editor) => {
                                    handleCkEditorChange(null, editor)
                                }}
                                onChange={handleCkEditorChange} />}
                    </div>
                </div>
                <button id='post-button' onClick={createPost}>Post</button>
            </div>

        </div>
    )
}

WritePage.propTypes = {
    blogDetails: PropTypes.object
}

export default WritePage