import { React, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function MyModal() {
  const [show, setShow] = useState(false);

  const closeModal = () => setShow(false);
  const showModal = () => setShow(true);

  return (
    <>
      <Button centered="true" variant="primary" onClick={showModal}>
        Заказать звонок
      </Button>

      <Modal
        centered="true"
        show={show}
        onHide={closeModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Заказать звонок</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Text className="text-muted">
                Мы никогда не передадим вашу информацию другим лицам
              </Form.Text>
              <Form.Label>Введите своё имя</Form.Label>
              <Form.Control type="text" placeholder="Имя" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTel">
              <Form.Label>Номер телефона</Form.Label>
              <Form.Control type="tel" placeholder="+375..." required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Отправить
            </Button>
          </Form>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default MyModal;