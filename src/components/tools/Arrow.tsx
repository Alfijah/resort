import icon from "../assets/\/icons/arrowWhiteRight.png"

export default function Arrow() {
    return (
        <span>
            <img src={icon}
                alt="Language"
                className="w-4 h-6 mb-1 md:w-5 md:h-6 cursor-pointer" />
        </span>
    )
}