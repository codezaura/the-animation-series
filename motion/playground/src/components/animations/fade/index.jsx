import { FadeIn } from "./fade-in";
import { FadeOut } from "./fade-out";

export function Fade() {
  return (
    <div style={{ marginTop: 30 }}>
      <h1>Fade Animations</h1>

      <FadeIn />
      <FadeOut />
    </div>
  );
}
