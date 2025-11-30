type ImageModalProps = {
    src: string;
    onClose: () => void;
}

export default function ImageModal({
    src,
    onClose, }: ImageModalProps) {
    return (
        <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <img
                src={src}
                className="max-w-[90%] max-h-[90%] shadow-lg"
                onClick={(e) => e.stopPropagation()}
            />
            <button
                className="absolute top-4 right-4 text-white text-3xl"
                onClick={onClose}
            >
                ✕
            </button>
        </div>
    );
}
