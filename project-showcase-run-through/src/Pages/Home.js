import React, { useEffect, useState } from 'react';

function Home() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('')

  }, [])

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;