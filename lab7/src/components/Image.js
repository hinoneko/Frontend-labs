import React, { useState } from "react";
import amsterdamPhoto from "../Amsterdam.jpg";

function Image() {
  const [images, setImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const addImg = () => {
    const newId = images.length;
    setImages([...images, { id: newId, scale: 1.0 }]);
    setSelectedIndex(newId);
  };

  const deleteImg = () => {
    if (selectedIndex !== null && images.length > 0) {
      const newImages = images.filter((_, index) => index !== selectedIndex);
      setImages(newImages);
      setSelectedIndex(null);
    }
  };

  const resizeImg = (action) => {
    if (selectedIndex === null || images.length === 0) return;

    const newImages = [...images];
    const factor = action === "increase" ? 1.2 : 0.8;
    const newScale = newImages[selectedIndex].scale * factor;
    newImages[selectedIndex].scale = Math.min(Math.max(newScale, 0.3), 3.0);
    setImages(newImages);
  };

  const selectImage = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      <div className="image-container">
        <div className="main-image-wrapper">
          <a
            href="https://www.iamsterdam.com/en"
            target="_blank"
            rel="noreferrer"
          >
            <img src={amsterdamPhoto} alt="Фото міста Амстердам" />
          </a>
        </div>

        {images.map((img, index) => (
          <div
            key={img.id}
            className={`image-box ${selectedIndex === index ? "selected" : ""}`}
            onClick={() => selectImage(index)}
          >
            <img
              src={amsterdamPhoto}
              alt="Амстердам"
              style={{
                transform: `scale(${img.scale})`,
              }}
            />
          </div>
        ))}
      </div>

      <div className="button-container">
        <button onClick={addImg}>Додати</button>
        <button onClick={() => resizeImg("increase")}>Збільшити</button>
        <button onClick={() => resizeImg("decrease")}>Зменшити</button>
        <button onClick={deleteImg}>Видалити</button>
      </div>
    </div>
  );
}

export default Image;
