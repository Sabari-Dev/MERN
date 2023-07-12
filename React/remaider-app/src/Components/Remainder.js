import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { db } from "../Config/Config";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import EditRemainder from "./EditRemainder";

function Remainder() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //create Remainder
  const [createRemainder, setCreateRemainder] = useState("");
  const [getRemainder, setGetRemainder] = useState([]);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    const getRemainderFun = async () => {
      const remainderSnapShot = await getDocs(collection(db, "remainder"));
      const remainArr = remainderSnapShot.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      setGetRemainder(remainArr);
      setChecked(remainArr);
    };
    getRemainderFun();
  }, []);
  const handleRemainder = async (e) => {
    try {
      e.preventDefault();
      await addDoc(collection(db, "remainder"), {
        remainder: createRemainder,
        checkIn: false,
        timestamp: serverTimestamp(),
      });
      alert("Remainder added successfully");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const deleteRemainder = async (id) => {
    if (window.confirm("Are sure to delete this data?")) {
      await deleteDoc(doc(db, "remainder", id));
      window.location.reload();
    } else {
      alert("function not work");
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <Button variant="primary" onClick={handleShow}>
            Add Remainder
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Remainder</Modal.Title>
            </Modal.Header>
            <Form>
              <Modal.Body>
                <Form.Control
                  placeholder="Add Remainder"
                  onChange={(e) => setCreateRemainder(e.target.value)}
                />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="outline-danger" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="success" onClick={handleRemainder}>
                  Add Remainder
                </Button>
              </Modal.Footer>
            </Form>
          </Modal>
        </Card.Body>
      </Card>
      {getRemainder.map(({ id, remainder, checkIn, timestamp }) => (
        <div className="remainder-container mt-3" key={id}>
          <Card>
            <Card.Body>
              <Row>
                <span>
                  <Col>
                    <div className="d-flex gap-3">
                      <div className="check">
                        <Form.Check type="checkbox" />
                      </div>
                      <div className="content">
                        <Card.Title>{remainder}</Card.Title>
                        <Card.Text>
                          {new Date(timestamp.seconds * 1000).toLocaleString()}
                        </Card.Text>
                      </div>
                    </div>
                  </Col>
                </span>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col>
                  <EditRemainder id={id} editRemainder={remainder} />
                  <Button
                    variant="outline-danger"
                    onClick={() => deleteRemainder(id)}
                  >
                    Delete
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  );
}

export default Remainder;
