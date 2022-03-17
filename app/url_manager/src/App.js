import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './templates/header';
import Footer from './templates/footer';

import About from './content/about';
import SignIn from './content/auth/sign_in';

function App() {
  return (
    <div className='root-conteiner'>
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/about" element={<About />} />
            {/* <Route path="/contact" element={<Contact />} />
            <Route path="/sign_up" element={<SignUp />} /> */}
            <Route path="/sign_in" element={<SignIn />} />
            {/* <Route path="/users/:id/urls" element={<About />} />
            <Route path="/users/:id/urls/new" element={<About />} />
            <Route path="/users/:id/urls/edit" element={<About />} /> */}
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
