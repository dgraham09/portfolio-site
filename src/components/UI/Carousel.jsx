
import { Carousel, IconButton } from "@material-tailwind/react";

const CarouselContainer = (props) => {
    return (
        <div>
        <Carousel className="carousel"
              prevArrow={({ handlePrev }) => (
                <IconButton
                  variant="text"
                  color="red"
                  size="x-lg"
                  onClick={handlePrev}
                  className="!absolute left-240 top-200 translate-y-1/4 translate-x-2/4"
                >
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={20}
                    stroke="red"
                    className="h-7 w-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg> */}
                </IconButton>
              )}
              nextArrow={({ handleNext }) => (
                <IconButton
                  variant="text"
                  color="white"
                  size="x-lg"
                  onClick={handleNext}
                  className="!absolute top-2/4 !right-4 -translate-y-2/4"
                >
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    strokeWidth={20}
                    stroke="blue"
                    className="h-10 w-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg> */}
                </IconButton>)}
              >

                {props.project.Images.map((image) => {
                    return (
                        <div className="h-4/5 w-screen rounded-xl">
                            <img
                            src={image}
                            alt="image 1"
                            className="h-4/5 w-screen"
                            />
                        </div>
                    )
                })}
        </Carousel>
      </div>
    );
  }
  
  export default CarouselContainer