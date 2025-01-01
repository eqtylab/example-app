import { useState } from "react";
import { Modal, Button, Container } from "react-bootstrap";
import { AgentPolicyPlane } from "eqty-agent-policy-plane";
import "eqty-agent-policy-plane/dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
`;

const ModalWrapper = () => (
  <Modal
    style={{
      background: "transparent",
      backgroundColor: "transparent",
    }}
    show={true}
    size="xl"
    centered
    dialogClassName="wide-modal"
    contentClassName="transparent-modal"
    backdropClassName="transparent-modal"
  >
    <Modal.Body style={{ height: "80vh" }}>
      <AgentPolicyPlane />
    </Modal.Body>
  </Modal>
);
function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  // const handleClose = () => setShowModal(false);

  return (
    <>
      {/* Include custom styles */}
      <style>{customStyles}</style>
      <Container
        fluid
        style={{
          minHeight: "100vh",
          backgroundImage: `url("/gradientbg.svg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <Button variant="primary" size="lg" onClick={handleShow}>
          Open Agent Policy Plane
        </Button>

        {showModal && <ModalWrapper />}
      </Container>
    </>
  );
}

export default App;
