import React from 'react';
import { RandomGen } from './techniques/randomGenTechnique.js';
import Header from './header.js';

function Home() {
  return(
    <div>
      <Header />
      <main>
        <h1>Anxiety Techniques</h1>
        <button>Generate a Technique</button>
      </main>
    </div>
  )
}

export default Home;
