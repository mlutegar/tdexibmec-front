import {SideModalContent, SideModalOverlay} from "./Style";
import {useEffect, useRef} from "react";

const SideModal = ({ isOpen, onClose, children }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    return (
        <>
            <SideModalOverlay isOpen={isOpen} onClick={onClose} />
            <SideModalContent ref={modalRef} isOpen={isOpen}>
                {children}
            </SideModalContent>
        </>
    )
}

export default SideModal;