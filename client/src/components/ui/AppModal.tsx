import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react';

type AppModalPropType = {
    buttonName: string;
    children: JSX.Element;

}

export default function AppModal({ children, buttonName }: AppModalPropType): JSX.Element {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <Button onClick={onOpen}>{ buttonName }</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              {children}
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }