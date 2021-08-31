import React from 'react';
import { RandomGen } from './techniques/randomGenTechnique.js';

function Home() {
  return(
    <div>
      <header>
        <h3>Create New</h3>
        <h3>List All</h3>
      </header>
      <main>
        <h1>Anxiety Techniques</h1>
        <button>Generate a Technique</button>
      </main>
    </div>
  )
}

export default Home;
