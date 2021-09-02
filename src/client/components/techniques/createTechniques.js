import React, {useState, useEffect} from 'react';
import Header from '../header.js';

function Create() {
  const [technique, setTechnique] = useState("");
  const [category, setCategory] = useState("");
  return(
    <div>
      <header>
        <Header />
      </header>
      <form>
        <h3>Add a Technique</h3>
          <div>
            <label htmlFor='title'>Technique</label>
            <input type='text' id='title' onChange={e => setTechnique(e.target.value)}></input>
          </div>
          <div>
            <label htmlFor='category'>Category:</label>
            <input type='text' id='category' onChange={e => setCategory(e.target.value)}></input>
          </div>
          <div>
            <button>Submit</button>
          </div>
      </form>
    </div>
  )
};

export default Create;
