import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [file, setFile] = useState(null);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [response, setResponse] = useState(null);

  const handleFileChange = async (e) => {
    setFile(e.target.files[0]);
    try {
      const formData = new FormData();
      formData.append('file', file);
      const response = await axios.get('http://localhost:5000/predict');
      console.log(response.data)
      setPrediction(response.data.prediction)
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const response = await axios.get('http://localhost:5000/predict');
      console.log(response.data)
    } catch (error) {
      console.error(error);
    }
  };

  const handleResponse = (label) => {
    setResponse(label);
  };

  const handleSubmit = async () => {
    try {
      const data = { fileName: file.name, prediction, manuallabel: response };
      // const response = await axios.post('http://localhost:5000/save', data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}></button>
      {prediction && (
        <div>
          <h2>Prediction: {prediction}</h2>
          {image1 && <img src={image1} alt="Image 1" />}
          <div>
            <button onClick={() => handleResponse('Normal')}>Correct</button>
            <button onClick={() => handleResponse('Abnormal')}>Incorrect</button>
          </div>
          {response && (
            <div>
              <h3>Response: {response}</h3>
              <button onClick={handleSubmit}>Submit</button>
              <div>FileName : {file.name}</div>
              <div>Prediction : {prediction}</div>
              <div>Manual Label : {response}</div>
            </div>
          )}
          
        </div>
      )}
    </div>
  );
};

export default App;
