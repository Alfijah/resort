import heroBg from "../assets/heroSection/forest.mp4";
import { useState } from "react";

export default function HeroSection() {
    const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

    const [guests, setGuests] = useState(2);
    const cabanas = Math.ceil(guests / 5);

    const canAddGuest = guests < cabanas * 5;

    const handleAddGuest = () => {
        if (canAddGuest) {
            setGuests((prev) => prev + 1);
        } else {
            alert("Maximaal 5 gasten per cabana. Voeg een extra cabana toe.");
        }
    };

    return (
        <div className="">
            <video
                src={heroBg}
                autoPlay
                loop
                playsInline
                muted
                className="absolute max-w-none z-0"
                style={{
                    width: "100vw",
                    height: "100vh",
                    objectFit: "cover",
                    objectPosition: "center",
                }}
            />

            <div className="absolute top-0 left-0 w-full h-36 
  bg-gradient-to-b from-black/85 to-transparent pointer-events-none">
            </div>

            <div className="absolute bottom-2 w-full flex justify-center">
                <div className="w-[75%] h-30 bg-white grid grid-cols-3 items-center justify-center gap-6">
                    {/* Datepicker */}
                    <div className="flex flex-col">
                        <p className="text-sm font-medium text-gray-500">Check-in</p>
                        <input
                            type="date"
                            defaultValue={today}
                            className="text-lg font-semibold text-gray-800 focus:outline-none"
                        />
                    </div>

                    {/* Cabana & Guests */}
                    <div className="">
                        <p className="text-sm font-medium text-gray-500">Cabana</p>
                        <div className="flex items-center justify-between">
                            <p className="text-lg font-semibold text-gray-800">
                                {cabanas} Cabana{cabanas > 1 && "s"},{" "}
                                {guests} Gast{guests > 1 && "en"}
                            </p>

                            <button
                                onClick={handleAddGuest}
                                className={`px-3 py-1 rounded-md text-sm font-medium border ${canAddGuest
                                        ? "bg-gray-100 hover:bg-gray-200"
                                        : "bg-gray-300 cursor-not-allowed text-gray-500"
                                    }`}
                                disabled={!canAddGuest}
                            >
                                +
                            </button>
                        </div>

                        {/* Info message */}
                        {!canAddGuest && (
                            <p className="text-xs text-red-500 mt-2">
                                Maximaal {5 * cabanas} gasten toegestaan bij {cabanas} cabana(s).
                                Voeg meer cabana’s toe voor extra gasten.
                            </p>
                        )}
                    </div>

                    <button className="bg-sky-900 px-[5%] py-[6%] uppercase tracking-widest text-white">Reserveren</button>
                </div>


            </div>
        </div>

    )
}