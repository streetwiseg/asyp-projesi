import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { assignUserSchema, AssignUserSchema } from "@/schemas/assignUserSchema";

interface AssignUserModalProps {
  show: boolean;
  onClose: () => void;
  onAssign: (data: AssignUserSchema) => void;
  users: { id: string; name: string }[];
}

const AssignUserModal: React.FC<AssignUserModalProps> = ({
  show,
  onClose,
  onAssign,
  users,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AssignUserSchema>({
    resolver: zodResolver(assignUserSchema),
  });

  const handleModalClose = () => {
    reset();
    onClose();
  };

  return (
    <Modal show={show} onHide={handleModalClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Sözleşme Ata</Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit(onAssign)}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Kullanıcı Seç</Form.Label>
            <Form.Select {...register("userId")} isInvalid={!!errors.userId}>
              <option value="">Bir kullanıcı seçin</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </Form.Select>
            {errors.userId && <div className="text-danger">{errors.userId.message}</div>}
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Vazgeç
          </Button>
          <Button type="submit" variant="primary">
            Ata
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AssignUserModal;
