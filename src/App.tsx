import { AgentPolicyPlane } from "eqty-agent-policy-plane";
import "eqty-agent-policy-plane/dist/styles.css";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        width: "100vw",
        backgroundImage: `url("/gradientbg.svg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        overflow: "scroll",
      }}
    >
      <AgentPolicyPlane />
    </div>
  );
}

export default App;
