import Carousel from "../../components/carousel/carousel";

const CarouselPage = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Carousel />
    </div>
  );
};

export default CarouselPage;
