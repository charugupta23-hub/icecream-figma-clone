import { useState } from 'react'
import Navbar from '../Components/Navbar';
import { pagesData } from '../data/pagesData';
import HeroSection from '../Components/HeroSection';
function App() {
  
 const [currentPage, setCurrentPage] = useState(0);
  const totalPages = pagesData.length;

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };
  return (
    <>
     <div className="App">
      <Navbar page={pagesData[currentPage]}/>
      <HeroSection
        data={pagesData[currentPage]}
        onNext={nextPage}
        onPrev={prevPage}
      />
    </div>
     
    </>
  )
}

export default App
