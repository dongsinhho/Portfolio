import './App.css';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import routes from './utils/routes';
import Loader from './components/atoms/loader';
import Header from './components/templat3/header.component';
import Footer from './components/templat3/footer.component';
import NotFound from './components/templat3/not-found.component';
import { DataProvider } from './context/DataProvider';
import PrivateRoute from './components/templat3/private-route.component';

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
    <DataProvider>
      <BrowserRouter basename='/'>
        <Header />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path={routes.home.path} Component={Homepage} />
            <Route path={routes.blog.path} Component={Blogs} />
            <Route path={`${routes.blog.path}/:blogId`} Component={Blog} />
            <Route path={routes.about.path} Component={About} />
            <Route path={routes.projects.path} Component={Projects} />
            <Route element={<PrivateRoute />}>
              <Route path={routes.write.path} Component={WritePage} />
              <Route path={routes.admin.path} Component={Admin} />
              <Route path={`${routes.write.path}/:blogId`} Component={WritePage} />
            </Route>
            <Route path={routes.login.path} Component={Login} />
            <Route path='*' Component={NotFound} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;

// Tags ==> categories

// Authentication / handle private route, redirect

// Write Blog

// Search page

// Add slide image in About Me

// Get Reading time from reading-time



/*
List-Detail pattern
Login -> Lưu token vào local storage, config Axios


Tạo mới blog
ckeditor react -> lưu -> lấy thẻ html từ ckeditor -> post
Lưu thẳng HTML vào DB


a/1/b/2/

dô admin page thì hiện ra list blog và có thể ấn vào từng blog để chỉnh sửa
*/
