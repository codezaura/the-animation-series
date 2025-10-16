import "./globals.css";

import { Container } from "./components/layouts";

import { Fade } from "./components/animations/fade";
import { Wipe } from "./components/animations/wipe";
import { Variants } from "./components/animations/variants";

function App() {
  return (
    <main>
      <Container>
        {/* <Fade /> */}
        {/* <Wipe /> */}
        <Variants />
      </Container>
    </main>
  );
}

export default App;
