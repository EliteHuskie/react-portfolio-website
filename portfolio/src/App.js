import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import MyWork from './components/MyWork';
import ContactMe from './components/ContactMe';
import './styles/App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return (
        <AboutMe
          handlePageChange={handlePageChange}
          color={'rgb(239, 214, 206)'}
        />
      );
    } else if (currentPage === 'MyWork') {
      return <MyWork color={'rgba(162, 103, 105)'} />;
    } else if (currentPage === 'ContactMe') {
      return <ContactMe color={'rgba(115, 44, 44, 1)'} />;
    }
  };

  const handlePageChange = (newPage) => setCurrentPage(newPage);

  return (
    <div className="App">
      <div className="page-container">
      <Header handlePageChange={handlePageChange} />
        <div className="content">
          {renderPage()}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;