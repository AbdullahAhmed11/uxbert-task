import React, { useState } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react'

interface ImgProps {
    imgUrl: string;
}

const ModalSlide = ({ imgUrl }: ImgProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <img src={imgUrl} />
                    </ModalBody>

                    <ModalFooter>
                        <button onClick={onClose}>
                            Close
                        </button>
                        <button >Secondary Action</button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
};

export default ModalSlide