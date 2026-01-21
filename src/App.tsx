import { useState } from 'react';
import './App.css'
import ParseLinkedInResume from './components/ParseLinkedInResume';
import ChooseTemplate from './components/ChooseTemplate';
import useLinkedInParser from './hooks/useLinkedinParser';
function App() {
  const [fileData, setFileData] = useState<any>(null);
  const response = useLinkedInParser(fileData);
  console.log("response App component:", response);

  return (
    <>
      <div className="container h-screen w-full">
        <header className='text-3xl'>
          Resumify
        </header>
        <main>
          <ParseLinkedInResume setFileData={setFileData} />
          <ChooseTemplate data={response} />
        </main>
        <footer>
          &copy; 2026 Resumify. All rights reserved.
        </footer>
      </div>
    </>
  )
}
export default App

