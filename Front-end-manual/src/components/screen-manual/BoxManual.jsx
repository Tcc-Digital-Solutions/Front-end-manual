import '../../assets/css/css-manual/BoxManual.css';
import React from 'react';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library
import PDF from '../../pdf.pdf';

export const BoxManual = (props) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  console.log('aqui', props.manual && props.manual.pdf)
  // quando nao tiver precisa controlar a lógica
  return (
    <>
      <div className='BoxManual-container'>
        <div className='pdf-container'>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.6.172/build/pdf.worker.min.js">
            <Viewer fileUrl={props.manual && props.manual.pdf}
              plugins={[defaultLayoutPluginInstance]} />
          </Worker>
        </div>
      </div>
    </>
  );
}
