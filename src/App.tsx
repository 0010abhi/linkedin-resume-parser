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
    <div className="flex flex-col min-h-screen w-screen">
      <div className='text-3xl p-4 font-mono font-bold text-white bg-blue-400'>
        RESUMIFY
      </div>
      <main className='flex flex-col flex-grow'>
        <ParseLinkedInResume setFileData={setFileData} />
        <ChooseTemplate data={response} />
      </main>
      <footer className="text-center p-4 mt-4 bg-gray-200 text-gray-700">
        &copy; 2026 Resumify. All rights reserved.
      </footer>
    </div>
  )
}
export default App

