import { WipeIn } from "./wipe-in";
import { WipeOut } from "./wipe-out";

export function Wipe() {
  return (
    <div style={{ marginTop: 30 }}>
      <h1>Wipe Animations</h1>

      <WipeIn />
      <WipeOut />
    </div>
  );
}
