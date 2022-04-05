import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import PhotosFrame from "./photoFrame";
import { Modal, ModalGateway } from "react-images";
import { myPhotos } from "./myPhotos";

export default function PhotosDisplay() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div>
            <Gallery photos={myPhotos} onClick={openLightbox}/>
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <PhotosFrame image={myPhotos[currentImage]}/>
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    );
}
