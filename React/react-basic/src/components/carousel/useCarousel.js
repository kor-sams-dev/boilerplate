import { useEffect, useMemo, useState } from "react";

const useCarousel = (images) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageCount = useMemo(() => {
    return images.length;
  }, [images]);

  const createImage = useMemo(() => {
    if (!images) return null;

    return images.map((image) => {
      return (
        <a href={image.href} target="_blank" rel="noreferrer noopener">
          <img
            key={image.id}
            src={image.image}
            alt="banner"
            className="image"
          />
        </a>
      );
    });
  }, [images]);

  const createListDot = useMemo(() => {
    if (!images) return null;
    const result = [];
    for (let i = 0; i < images.length; i++) {
      result.push(
        <li
          key={i}
          className={currentIndex === i ? "active" : ""}
          onClick={() => handleImageChange(i)}
        ></li>
      );
    }
    return result;
  }, [images, currentIndex]);

  const handleImageChange = (index) => {
    setCurrentIndex(index);
  };

  const handleNextImage = () => {
    if (currentIndex === imageCount - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevImage = () => {
    if (currentIndex === 0) {
      setCurrentIndex(imageCount - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    if (imageCount === 0) return;
    const interval = setInterval(() => {
      handleNextImage();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, imageCount]);

  return [
    createImage,
    createListDot,
    currentIndex,
    imageCount,
    handleNextImage,
    handlePrevImage,
  ];
};

export default useCarousel;
