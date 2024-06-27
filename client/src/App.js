import './App.css';
import { Suspense, lazy } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import routes from './utils/routes';
import Loading from './components/atoms/loading.component';
import Header from './components/templates/header.component';
import Footer from './components/templates/footer.component';

const Homepage = lazy(() => import('./components/pages/home-page.component'))
const About = lazy(() => import('./components/pages/about-page.component'))
const Blog = lazy(() => import('./components/pages/blog-page.component'))
const Projects = lazy(() => import('./components/pages/projects-page.component'))


function App() {
  return (
    <BrowserRouter basename='/'>
      <Header/>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path={routes.home.path} Component={Homepage}/>
          <Route path={routes.blog.path} Component={Blog}/>
          <Route path={routes.about.path} Component={About}/>
          <Route path={routes.projects.path} Component={Projects}/>
        </Routes>
      </Suspense>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
