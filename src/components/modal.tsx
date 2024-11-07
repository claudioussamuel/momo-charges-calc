'use client'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input} from "@nextui-org/react";
import  Button  from "./button";
import { joinNewsletter } from "@/utils/actions";
import { useState } from "react";

export default function ModalClass() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (onClose: () => void) => {
    await joinNewsletter(phoneNumber);
    setPhoneNumber("");
    onClose();
  };

  return (
    <>
      <Button 
       actions="Opening..." 
       onClick={onOpen} 
       color="warning">
      Join  Newsletter</Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Mailing List</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Phone Number"
                  placeholder="Enter your Phone Number"
                  variant="bordered"
                  type="number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button 
                  actions="Subscribing..." 
                  color="danger" 
                  variant="flat" 
                  onClick={() => handleSubmit(onClose)}
                  type="submit"
                >
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}