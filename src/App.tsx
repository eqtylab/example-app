import { useEffect, useState } from "react";
import { Modal, Container } from "react-bootstrap";
import { AgentPolicyPlaneApplication } from "eqty-agent-policy-plane";
import { AgentProvisionCertificate } from "eqty-agent-policy-plane";

import "bootstrap/dist/css/bootstrap.min.css";
import "eqty-agent-policy-plane/dist/styles.css";

const customStyles = `
   .transparent-modal  {
    background-color: transparent;
    background: transparent;
    border: none;
  }
  
  .wide-modal {
    max-width: 98vw;
    width: 98vw;
    margin: 0 auto;
  }



  .custom-modal-backdrop {
    background-image: url("/gradientbg.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
}
`;

const ModalWrapper = ({
  showMe,
  setShowMe,
}: {
  showMe: boolean;
  setShowMe: (to: boolean) => void;
}) => (
  <Modal
    show={showMe}
    fullscreen
    backdrop="static"
    data-bs-theme="dark"
    centered
    className="text-light"
    onHide={() => setShowMe(false)}
    dialogClassName="custom-modal-backdrop"
    backdropClassName="custom-modal-backdrop"
    contentClassName="custom-modal-backdrop"
  >
    <Modal.Header>EQTY Compliance Grid</Modal.Header>
    <Modal.Body>
      <AgentPolicyPlaneApplication />
    </Modal.Body>
  </Modal>
);
function App() {
  const [showModal, setShowModal] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);

  //  on ctrl+shift+c, show the certificate

  useEffect(() => {
    // Define the named callback
    const handleKeyDown = (e: KeyboardEvent) => {
      console.log("ypou");
      console.log(e.ctrlKey, e.shiftKey, e.key);
      // Check if user pressed Ctrl+Shift+C
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "c") {
        console.log("yep");
        setShowCertificate((prev) => !prev);
      }
    };

    // Add the listener
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup properly by removing the *same* listener
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* Include custom styles */}
      <style>{customStyles}</style>
      <Container
        fluid
        style={{
          minHeight: "100vh",
          minWidth: "100vw",
          backgroundColor: "#09090B",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {showCertificate && <AgentProvisionCertificate />}
        <ModalWrapper
          showMe={!showCertificate && showModal}
          setShowMe={setShowModal}
        />
        {!showModal && !showCertificate && (
          <button
            className="btn btn-secondary"
            onClick={() => setShowModal(true)}
          >
            Initiate Agentic Workflow{" "}
          </button>
        )}
      </Container>
    </>
  );
}

export default App;
