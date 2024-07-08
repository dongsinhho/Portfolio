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
          <Route path='*' Component={NotFound}/>
        </Routes>
      </Suspense>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;


// Scroll to top
// Blog-project Data
// Search page
// Go back
// Add slide image in About Me

// Get Reading time from reading-time