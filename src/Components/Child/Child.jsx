import { useState } from 'react';
import { Modal } from 'react-bootstrap';

function Child({ imageLinks }) {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (index) => {
        setSelectedImage(index);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    return (
        <>
            {imageLinks.map((link, index) => (
                <div key={index} className="col-md-4 ">
                    <img
                        src={link}
                        className="img-fluid rounded portfolio-image"
                        style={{
                            height: "250px",
                            width: "500px",
                            objectFit: "cover",
                            cursor: "pointer",
                            transition: "opacity 0.3s ease-in-out"
                        }}
                        onClick={() => handleImageClick(index)}
                        onMouseEnter={(e) => e.target.style.opacity = "0.6"}
                        onMouseLeave={(e) => e.target.style.opacity = "1"} 
                    />
                </div>
            ))}
            <Modal show={selectedImage !== null} onHide={handleClose}>
                <Modal.Body>
                    <img
                        src={selectedImage !== null ? imageLinks[selectedImage] : ''}
                        className="img-fluid rounded"
                        style={{ maxHeight: "100vh", width: "500px", margin: "0 auto"}}
                    />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Child;

