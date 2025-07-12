import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import resume from './resume.pdf';
import './Resume.css';

// Use the local pdfjs worker
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs';

const Resume = () => {
    const [numPages, setNumPages] = useState(null);
    
    const onLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <div className="ResumeContainer">
            <Document
                file={resume}
                onLoadSuccess={onLoadSuccess}
                loading="Loading resume..."
            >
                {Array.from({ length: numPages || 0 }, (_, index) => (
                    <Page
                        key={`page_${index + 1}`}
                        pageNumber={index + 1}
                        width={800}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                    />
                ))}
            </Document>
        </div>
    );
};

export default Resume;