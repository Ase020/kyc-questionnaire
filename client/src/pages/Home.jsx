import { useState } from "react";

import { Mainbar, Sidebar } from "../components";

function Home() {
  const [currentForm, setCurrentForm] = useState(0);

  return (
    <main className="relative flex">
      <Sidebar currentForm={currentForm} />

      <Mainbar currentForm={currentForm} setCurrentForm={setCurrentForm} />
    </main>
  );
}

export default Home;
