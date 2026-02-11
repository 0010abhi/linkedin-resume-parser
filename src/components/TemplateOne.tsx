import React, { useRef } from "react";
// import ResumeSkills from "./ResumeSections/Skills";
// import ResumePersonalInfo from "./ResumeSections/PersonalInfo";
// import ResumeWorkExperience from "./ResumeSections/WorkExperience";
import ResumePreview from "./ResumeSections/ResumePreview";
// import TextArea from "./app-components/TextArea";
// import ResumeEducation from "./ResumeSections/Education";
// import SectionTitle from "./ResumeSections/SectionTitle";
// // import html2pdf from "html2pdf";

const PDFDownloader: React.FC = ({ data }: any) => {
  // 1. Create the hook
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    // 2. Trigger the native print dialog
    window.print();
  };

  return (
    <div className="p-10">
      {/* THE BUTTON: Use 'print:hidden' to make sure the button itself isn't in the PDF */}
      <button 
        onClick={handlePrint}
        className="bg-blue-600 text-white px-4 py-2 rounded print:hidden"
      >
        Download PDF
      </button>

      {/* THE CONTENT: Attach 'printRef' via the ref prop and add a CLASS for CSS to find */}
      <div 
        ref={printRef} 
        className="printable-area bg-white p-8 mt-4 border border-gray-200"
      >
        <ResumePreview data={data?.data} />
        {/* <h1 className="text-2xl font-bold">This is my A4 Content</h1>
        <p>This will now show up in the PDF dialog.</p> */}
      </div>

      {/* THE CSS: Tells the browser "Hide everything EXCEPT .printable-area" */}
      <style>{`
        @media print {
          /* Hide everything in the body */
          body * {
            visibility: hidden;
          }
          /* Show ONLY the div with the .printable-area class */
          .printable-area, .printable-area * {
            visibility: visible;
          }
          .printable-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 210mm; /* A4 Width */
            height: 297mm; /* A4 Height */
          }
          @page {
            size: A4;
            margin: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default PDFDownloader;

// export default function TemplateOne({ data }: any) {
//     const componentRef = useRef<HTMLDivElement>(null);
//     console.log("Data in TemplateOne:", data);

//     function downloadPdf() {
//         // 1. Add a 'printing' class to body to trigger CSS logic
//     document.body.classList.add('is-printing');
    
//     // 2. Trigger native print
//     window.print();
    
//     // 3. Clean up after the print dialog closes
//     document.body.classList.remove('is-printing');

//         // Native browser print triggers the PDF save dialog
//     // window.print();
//         // const element = document.getElementById("content-to-download");
//         // if (element) {
//         //     const content = element.innerHTML;
//         //     const blob = new Blob([content], { type: "text/html" });
//         //     const url = URL.createObjectURL(blob);
//         //     const a = document.createElement("a");
//         //     a.href = url;
//         //     a.download = "resume.html";
//         //     document.body.appendChild(a);
//         //     a.click();
//         //     document.body.removeChild(a);
//         // }
//     // Define the options for html2pdf
//     const options = {
//         margin: 10,
//         filename: 'downloaded-content.pdf',
//         image: { type: 'jpeg', quality: 0.98 },
//         html2canvas: { scale: 2 }, // Adjust scale for better resolution
//         jsPDF: { unit: 'mm', format: 'a4', orientation: 'p' } // Set PDF format to A4 (portrait)
//     };

//     // Use html2pdf to generate and download the PDF
//     // html2pdf().set(options).from(element).save();
//     }

//     return (
//         <>
//             <div>
//                 <button onClick={downloadPdf}>Download</button>
//                 <div ref={componentRef} id="content-to-download" className="p-5 bg-gray-100 border border-gray-300">
//                     <div className="grid grid-cols-2 gap-4 m-[20px]">
//                         <div className="border p-[15px]">
//                             <ResumePersonalInfo personalInfo={data?.data} />
//                             <section className="border-b border-gray-400 pb-2 mb-2">
//                                 <SectionTitle title="Professional Summary" />
//                                 <TextArea name="summary" value={data?.data?.professionalSummary} />
//                             </section>
//                             <ResumeWorkExperience workExperience={data?.data?.experience} />
//                             <ResumeEducation education={data?.data?.education} />
//                             <ResumeSkills skills={data?.data?.skills} />
//                         </div>
//                         <div className="border p-[15px]">
//                             <ResumePreview data={data?.data} />
//                         </div>
//                     </div>
//                     {/* 3. Global Print Rules (Page Setup) */}
//       <style>{`
//         @media print {
//           /* 1. Force the page to A4 size */
//           @page { 
//             size: A4; 
//             margin: 0; 
//           }

//           /* 2. Hide everything in the body by default when printing */
//           body.is-printing * {
//             visibility: hidden;
//           }

//           /* 3. Re-enable visibility ONLY for the target ref and its children */
//           body.is-printing .pdf-content,
//           body.is-printing .pdf-content * {
//             visibility: visible;
//           }

//           /* 4. Position the target ref at the absolute top-left of the PDF */
//           body.is-printing .pdf-content {
//             position: absolute;
//             left: 0;
//             top: 0;
//             width: 210mm;
//             height: 297mm;
//             margin: 0;
//             padding: 20mm; /* Internal PDF margin */
//             border: none;
//             box-shadow: none;
//           }
//         }
//       `}</style>
//                 </div>
//             </div>

//         </>
//     );
// }