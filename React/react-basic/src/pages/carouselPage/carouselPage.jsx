import Carousel from "../../components/carousel/carousel";

export const CarouselPage = () => {
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
