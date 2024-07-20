import './App.css';
import { Suspense, lazy } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import routes from './utils/routes';
import Loader from './components/atoms/loader';
import Header from './components/templates/header.component';
import Footer from './components/templates/footer.component';
import NotFound from './components/templates/not-found.component';

const Homepage = lazy(() => import('./components/pages/home-page.component'))
const About = lazy(() => import('./components/pages/about-page.component'))
const Blogs = lazy(() => import('./components/pages/blogs-page.component'))
const Blog = lazy(() => import('./components/pages/blog-page.component'))
const Projects = lazy(() => import('./components/pages/projects-page.component'))
const WritePage = lazy(() => import('./components/pages/write-page.component'))
const Login = lazy(() => import('./components/pages/login-page.component'))
const Admin = lazy(() => import('./components/pages/admin-page.component'))


function App() {
  return (
    <BrowserRouter basename='/'>
      <Header/>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path={routes.home.path} Component={Homepage}/>
          <Route path={routes.blog.path} Component={Blogs}/>
          <Route path={`${routes.blog.path}/:blogId`} Component={Blog}/>
          <Route path={routes.about.path} Component={About}/>
          <Route path={routes.projects.path} Component={Projects}/>
          <Route path={'/write'} Component={WritePage}/>
          <Route path={'/login'} Component={Login}/>
          <Route path={'/admin'} Component={Admin}/>
          <Route path='*' Component={NotFound}/>
        </Routes>
      </Suspense>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;


// Authentication / handle private route, redirect

// Write Blog

// Create API C#

// Search page

// Add slide image in About Me

// Get Reading time from reading-time



/*
List-Detail pattern
Login -> Lưu token vào local storage, config Axios


Tạo mới blog
ckeditor react -> lưu -> lấy thẻ html từ ckeditor -> post
Lưu thẳng HTML vào DB


Render
https://stackoverflow.com/questions/37337289/react-js-set-innerhtml-vs-dangerouslysetinnerhtml


a/1/b/2/

dô admin page thì hiện ra list blog và có thể ấn vào từng blog để chỉnh sửa
*/