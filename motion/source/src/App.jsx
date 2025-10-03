import "./globals.css";

import { Container } from "./components/core";
import { FadeIn } from "./components/fade/fade-in";
import { WipeIn } from "./components/wipe/wipe-in";

function App() {
  return (
    <main>
      <Container>
        <FadeIn />
        <WipeIn />
      </Container>
    </main>
  );
}

export default App;
