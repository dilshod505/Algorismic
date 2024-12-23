import { FaArrowUp } from "react-icons/fa";
import { observer } from "mobx-react-lite";

const TopButton = observer(() => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Smooth scroll for a nice effect
        });
    };

    return (
        <>
            <button
                onClick={scrollToTop}
                className={
                    "fixed bottom-2 right-2 flex justify-center items-center w-[50px] h-[50px] float-right bg-white shadow-xl text-xl rounded-[120px] text-center"
                }
            >
                <FaArrowUp />
            </button>
        </>
    );
});

export default TopButton;
