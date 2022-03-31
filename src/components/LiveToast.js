import { Toast } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import ToastContainer from 'react-bootstrap/ToastContainer';
export default function LiveToast({ show, setShow }) {
  return (
    <Row>
      <Col xs={6}>
        <ToastContainer position='bottom-end'>
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={5000}
            autohide
          >
            {/* <Toast.Header>
              <strong className='me-auto'>Copied </strong>
            </Toast.Header> */}
            <Toast.Body>Woohoo, code is copied to clipboard!</Toast.Body>
          </Toast>
        </ToastContainer>
      </Col>
    </Row>
  );
}
