"use client";
import { ReactNode, useState, Children } from "react";
import { IconBox } from "@/components/atom";
interface ProjectCarouselProps {
    children: ReactNode[];
}

const CardCarousel = ({ children }: ProjectCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + children.length) % children.length
        );
    };

    return (
        <div className="relative grid w-full overflow-x-hidden place-items-center card-carousel">
            <div
                className={
                    "absolute left-0 top-1/2 transform -translate-y-1/2 text-2xl p-2 z-10 cursor-pointer"
                }
                onClick={prevSlide}
            >
                <IconBox
                    icon={<i className="fa-solid fa-chevron-left" />}
                    intend={"secondary"}
                />
            </div>
            <div className="flex transition-transform duration-500 ease-in-out z-0 relative">
                {Children.map(children, (child, index) => (
                    <div
                        className={`min-w-full  ${
                            index === currentIndex ? "fade-in" : "hidden"
                        }`}
                    >
                        {child}
                    </div>
                ))}
            </div>
            <div
                className={
                    "absolute right-0 top-1/2 transform -translate-y-1/2 text-2xl p-2 z-10 cursor-pointer"
                }
                onClick={nextSlide}
            >
                <IconBox
                    icon={<i className="fa-solid fa-chevron-right" />}
                    intend={"secondary"}
                />
            </div>
        </div>
    );
};

export default CardCarousel;
