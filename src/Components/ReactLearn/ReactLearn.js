import React , { useState , useEffect }from 'react';
import './ReactLearn.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import checker from '../../images/check.svg';



const ReactLearn = (props) => {

  const spaceExtractor = props.data;

  const [copyActive, setCopyActive] = useState(false);

  const code = `
Microsoft Windows [Version 10.0.22621.2283]
(c) Microsoft Corporation. All rights reserved.

C:/React/ProjectFolder> npx create-react-app FirstApp`;

  const npmStart = `
  Microsoft Windows [Version 10.0.22621.2283]
  (c) Microsoft Corporation. All rights reserved.
  
  C:/React/ProjectFolder> npm start`;
  

  const copyableText = "npx create-react-app FirstApp";
  const copyNpmStart = "npm start";

  const redirectToLink = () => {
    const linkToRedirect = 'https://nodejs.org/en/blog/release/v18.17.1';
    window.open(linkToRedirect, '_blank');
  };



  return (

      <div className={`main-right-side-section ${spaceExtractor === true ? 'active' : ''}`}>
        <div className="react-inner-section pt-20 pb-8">
          <div className="react-head-section">
            <p className='font-Manrope text-[15px]'>
                <strong>ReactJS</strong>, is an open-source JavaScript library developed by Facebook. 
                It is primarily used for building user interfaces (UIs) or single-page 
                applications where the content can be updated dynamically without requiring 
                a full page reload. React is often used in conjunction with other libraries 
                and frameworks to create complex and interactive web applications.
            </p>
          </div>
          <div className="top-react-setupheader mb-5 mt-6">
            <div className="start-now-head mb-2">
              <h2 className='text-3xl font-Manrope font-bold'>Start a New React Project</h2>
            </div>
            <p className='font-Manrope text-[15px] leading-normal'>
              If you want to create a new application or a new website completely with react. Just press 
              <strong className='bg-gray-300 mx-1 px-2 py-1'>Win + R</strong> or open cmd on your pc and type 
              <strong className='bg-gray-300 mx-1 px-2 py-1'>node -v</strong> you'll see a verison like  
              <strong> v18.XX.1</strong> if not , install <button onClick={redirectToLink} className='text-homePrimary font-bold underline underline-offset-4 duration-500 hover:text-green-500'>Node js</button> from here.
              After finishing the installation take an empty folder in your pc and name it as react for identification  and click on path which is like c:/react and type cmd and press enter, you will see a cmd (command prompt) window and enter a command npx create-react-app YourAppName , shown as below 
            </p>
          </div>
          <div className="syntax-section">
            <div className="code-upper-section rounded-2xl overflow-auto">
              <div className="top-header-bar bg-[#282c34] px-5 pt-2 flex justify-between border-b-2 border-[#464b55]">
                <div className="flex items-center gap-4">
                  <div className="apple-window-bar flex items gap-2 ">
                    <div className="dots bg-[#ff5f5a] w-3 h-3 rounded-full"></div>
                    <div className="dots bg-[#ffbe2e] w-3 h-3 rounded-full"></div>
                    <div className="dots bg-[#2aca44] w-3 h-3 rounded-full"></div>
                  </div>
                  <div className="file-logo flex items-center gap-2 py-1 w-fit px-2 rounded rounded-b-none bg-[#464b55]">
                    <div className="js-icon">
                      <i class="bi bi-terminal-dash text-greenYellow"></i>
                    </div>
                    <div className="js-file-name">
                      <p className="text-white font-Inter text-sm">cmd</p>
                    </div>
                  </div>
                </div>
                <div className="copy-to-clipboard">
                  <button
                    className="flex items-center gap-2 text-white"
                    onClick={() => {
                      navigator.clipboard.writeText(copyableText);
                      setCopyActive(true);
                      setTimeout(() => {
                        setCopyActive(false);
                      }, 3000);
                    }}
                  >
                    <div className="copy-image">
                      <img src={checker} alt="" className={`duration-500 w-4 h-4 object-contain ${copyActive ? 'scale-1' : 'scale-0'}`}/>
                    </div>
                    <p className='font-Manrope'>{copyActive ? "Copied" : "Copy"}</p>
                  </button>
                </div>
              </div>
              <SyntaxHighlighter
                language="powershell"
                style={atomOneDark}
                className="syntaxer"
                customStyle={{
                  padding: "0px 15px 25px 15px",
                  overflowX: "auto",
                }}
                wrapLines={true}
              >
                {code}
              </SyntaxHighlighter>
            </div>
            <div className="syntax-bottom-text mt-4">
              <p className='font-Manrope text-[15px] leading-normal'>
                After the installation of apk , The Command Say's 
                <strong> App installed successfully , Happy Hacking :)</strong>.
              </p>
            </div>
            <div className="getstarted-section">
              <p className='font-Manrope text-[15px] leading-normal'>Open your project folder with vs code and open terminal from Terminal {'>'} New Terminal and you'll see a terminal pops up from the bottom which says <strong>{'C:/React/ProjectFolder\FirstApp>'}</strong> Enter npm start like shown below</p>
              <div className="code-upper-section rounded-2xl overflow-auto my-5">
                <div className="top-header-bar bg-[#282c34] px-5 pt-2 flex justify-between border-b-2 border-[#464b55]">
                  <div className="flex items-center gap-4">
                    <div className="apple-window-bar flex items gap-2 ">
                      <div className="dots bg-[#ff5f5a] w-3 h-3 rounded-full"></div>
                      <div className="dots bg-[#ffbe2e] w-3 h-3 rounded-full"></div>
                      <div className="dots bg-[#2aca44] w-3 h-3 rounded-full"></div>
                    </div>
                    <div className="file-logo flex items-center gap-2 py-1 w-fit px-2 rounded rounded-b-none bg-[#464b55]">
                      <div className="js-icon">
                        <i class="bi bi-terminal-dash text-greenYellow"></i>
                      </div>
                      <div className="js-file-name">
                        <p className="text-white font-Inter text-sm">cmd</p>
                      </div>
                    </div>
                  </div>
                  <div className="copy-to-clipboard">
                    <button
                      className="flex items-center gap-2 text-white"
                      onClick={() => {
                        navigator.clipboard.writeText(copyNpmStart);
                        setCopyActive(true);
                        setTimeout(() => {
                          setCopyActive(false);
                        }, 3000);
                      }}
                    >
                      <div className="copy-image">
                        <img src={checker} alt="" className={`duration-500 w-4 h-4 object-contain ${copyActive ? 'scale-1' : 'scale-0'}`}/>
                      </div>
                      <p className='font-Manrope'>{copyActive ? "Copied" : "Copy"}</p>
                    </button>
                  </div>
                </div>
                <SyntaxHighlighter
                  language="powershell"
                  style={atomOneDark}
                  className="syntaxer"
                  customStyle={{
                    padding: "0px 15px 25px 15px",
                    overflowX: "auto",
                  }}
                  wrapLines={true}
                >
                  {npmStart}
                </SyntaxHighlighter>
              </div>
              <p className='font-Manrope text-[15px] leading-normal'>Now your project starts with the server localhost:3000 and if you need any changes in the code just edit on app.js which refelects the changes immediately without loading the page</p>
            </div>
          </div>
        </div>
      </div>
  );
}

ReactLearn.propTypes = {};

ReactLearn.defaultProps = {};

export default ReactLearn;
