import React, { useState, useEffect } from 'react';

export default function TextForm({ heading, theme, showAlert }) {
  const [text, setText] = useState("");
  const [bulletType, setBulletType] = useState('*');

  useEffect(() => {
    const myBox = document.querySelector("#myBox");
    if (myBox) {
      myBox.style.backgroundColor = theme === 'light' ? 'white' : 'lightgrey';
    }
  }, [theme]);

  const handleUpperClick = () => {
    if (text.trim() === "") {
      showAlert('Please enter some text first!', 'warning');
      return;
    }
    setText(text.toUpperCase());
    showAlert('Text converted to UpperCase!', 'success');
  };

  const handleLowerClick = () => {
    if (text.trim() === "") {
      showAlert('Please enter some text first!', 'warning');
      return;
    }
    setText(text.toLowerCase());
    showAlert('Text converted to LowerCase!', 'success');
  };

  const handleCapitalizeClick = () => {
    if (text.trim() === "") {
      showAlert('Please enter some text first!', 'warning');
      return;
    }
  
    const capitalizedText = text
      .split(/(\s+)/) // Split by whitespace while retaining spaces
      .map(word => {
        if (word.trim() === 'i') {
          return 'I'; // Special case for the word "i"
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join('');
  
    setText(capitalizedText);
    showAlert('Text capitalized!', 'success');
  };
  

  const handleBulletClick = () => {
    if (text.trim() === "") {
      showAlert('Please enter some text first!', 'warning');
      return;
    }
    const lines = text.split('\n').map(line => `${bulletType} ${line}`);
    setText(lines.join('\n'));
    showAlert(`Lines formatted with bullet: ${bulletType}`, 'success');
  };

  const handleOnChange = (event) => {
    setText(event.target.value); 
  };

  const handleClearClick = () => {
    if (text.trim() === "") {
      showAlert('There is no text to clear!', 'warning');
      return;
    }
    setText('');
    showAlert('Text has been cleared', 'success');
  };

  const countWords = (str) => {
    return str.split(/\s+/).filter(word => word.length !== 0).length;
  };

  return (
    <>
      <div className='container my-3'>
        <h1>{heading}</h1>
        <div className="mb-3 mt-4">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            placeholder='Enter the text'
            rows="8"
            style={{ width:"80%"}}
          ></textarea>
        </div>
        
        {/* Button Group for Text Operations */}
        <div className="d-flex flex-wrap my-2">
          <button className="btn btn-primary mx-1" onClick={handleUpperClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-1" onClick={handleCapitalizeClick}>Capitalize</button>

          {/* Dropdown for bullet types */}
          <div className="dropdown mx-1">
            <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Add Pointers ({bulletType})
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><button className="dropdown-item" onClick={() => setBulletType('*')}>*</button></li>
              <li><button className="dropdown-item" onClick={() => setBulletType('•')}>•</button></li>
              <li><button className="dropdown-item" onClick={() => setBulletType('-')}>-</button></li>
              <li><button className="dropdown-item" onClick={() => setBulletType('→')}>→</button></li>
            </ul>
          </div>
          <button className="btn btn-primary mx-1" onClick={handleBulletClick}>Add {bulletType}</button>
          <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
        </div>
      </div>
      
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{countWords(text)} Words</p>
        <p>{text.length} Characters</p>
        <p>{0.008 * countWords(text)} Minutes to read</p>
        <h2>Preview</h2>
        <pre style={{ whiteSpace: 'pre-wrap' }}>{text}</pre>
      </div>

    </>
  );
}
