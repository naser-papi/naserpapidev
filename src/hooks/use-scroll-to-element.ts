const useScrollToElement = () => {
    const handleScroll = (elementId: string, yOffset: number) => {
        const element = document.getElementById(elementId);
        const yPosition = element
            ? element.getBoundingClientRect().top + window.pageYOffset + yOffset
            : 0;

        window.scrollTo({ top: yPosition, behavior: "smooth" });
    };
};

export default useScrollToElement;
