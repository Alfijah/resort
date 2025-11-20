import heroBg from "../assets/heroSection/forest.mp4";
import { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function HeroSection() {
    // const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

    const [startDate, setStartDate] = useState<Date | null>(null);
    const today = new Date();

    const [showPopup, setShowPopup] = useState(false);
    const [bookings, setBookings] = useState<{ cabana: number; guests: number }[]>([
    { cabana: 1, guests: 2 },
  ]);

    const togglePopup = () => setShowPopup(!showPopup);

    const popupRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent | TouchEvent) {
            const target = event.target as Node | null;
            if (popupRef.current && target && !popupRef.current.contains(event.target as Node)) {
                setShowPopup(false);
            }
        }

        if (showPopup) {
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("touchstart", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, [showPopup]);

    const addCabanaAt = (index: number) => {
        if (bookings.length >= 3) {
            alert(
                "Maximaal 3 cabana’s kunnen online gereserveerd worden. Neem contact op voor grotere boekingen."
            );
            return;
        }

        const newBookings = [...bookings];
        // Voeg nieuwe cabana direct na 'index' toe, met hetzelfde aantal gasten als die cabana
        newBookings.splice(index + 1, 0, { cabana: index + 2, guests: newBookings[index].guests });

        // Hernummer alles opnieuw
        const updated = newBookings.map((item, i) => ({ ...item, cabana: i + 1 }));
        setBookings(updated);
    };

    const removeCabana = (index: number) => {
        if (bookings.length <= 1) return; // veilig: nooit onder 1
        const updated = bookings.filter((_, i) => i !== index);
        setBookings(updated.map((item, idx) => ({ ...item, cabana: idx + 1 })));
    };

    const updateGuests = (index: number, change: number) => {
        setBookings((prev) =>
            prev.map((item, i) => {
                if (i === index) {
                    const newGuests = item.guests + change;
                    if (newGuests > 5) {
                        alert("Maximaal 5 gasten per cabana!");
                        return item;
                    }
                    return { ...item, guests: Math.max(1, newGuests) };
                }
                return item;
            })
        );
    };

    const totalGuests = bookings.reduce((sum, b) => sum + b.guests, 0);

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
                <div className="w-[75%] h-30 bg-white grid grid-cols-3 px-[15%] items-end justify-center pb-10 gap-6 text-xs uppercase">
                    {/* Datepicker */}
                    <div className="flex flex-col">
                        <p className="pb-2 text-sky-900 tracking-wide">Check-in</p>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            placeholderText="Selecteer een datum"
                            minDate={new Date(today.setDate(today.getDate() + 1))} // disable vandaag en vroeger
                            dateFormat="dd MMMM yyyy"
                            className="w-full border rounded-md px-3 py-2 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 cursor-pointer"
                            calendarClassName="rounded-lg shadow-lg border-gray-200"
                            dayClassName={(date) =>
                                date <= new Date()
                                    ? "text-gray-400 bg-gray-100 cursor-not-allowed"
                                    : "hover:bg-gray-200"
                            }
                        />

                    </div>

                    {/* Cabana & Guests */}
                    <div>
                        <p className="pb-2 text-sky-900 tracking-wide">Cabana</p>

                        <div className="relative w-full">

                            {/* MAIN DISPLAY FIELD */}
                            <div
                                onClick={togglePopup}
                                className="flex items-center justify-between border rounded-md px-4 py-2 cursor-pointer hover:bg-gray-50"
                            >
                                <p className="text-gray-800 normal-case">
                                    {bookings.length} Cabana{bookings.length > 1 && "s"},{" "}
                                    {totalGuests} Gast{totalGuests > 1 && "en"}
                                </p>
                            </div>

                            {/* POPUP — verschijnt nu boven het veld (bottom-full) */}
                            {showPopup && (
                                <div 
                                ref={popupRef}
                                className="absolute bottom-full mb-2 left-0 w-full bg-white border-1 border-white rounded-sm shadow-lg z-50">

                                    {bookings.map((item, index) => (
                                        <div key={index} className="mb-1 border-b border-gray-400">

                                            {/* CABANA HEADER: achtergrond sky-900 */}
                                            <div className="flex items-center justify-between bg-sky-900 text-white normal-case px-2 py-2 rounded-t-sm">
                                                <p>Cabana &nbsp; {item.cabana}</p>
                                                <div className="flex space-x-2">

                                                    {/* Eerste Cabana -> + alleen zichtbaar als er nog geen 3 zijn */}
                                                    {index === 0 && bookings.length < 3 && (
                                                        <button
                                                            onClick={() => addCabanaAt(index)}
                                                            className="px-3 border rounded-sm cursor-pointer hover:bg-sky-800"
                                                        >
                                                            +
                                                        </button>
                                                    )}

                                                    {/* Vanaf Cabana 2 -> toon zowel - als + (maar + alleen als < 3) */}
                                                    {index > 0 && (
                                                        <>
                                                            <button
                                                                onClick={() => removeCabana(index)}
                                                                className="px-3 border rounded-sm cursor-pointer hover:bg-sky-800"
                                                                aria-label={`Verwijder Cabana ${item.cabana}`}
                                                            >
                                                                −
                                                            </button>

                                                            {/** AANGEPAST: + knop alleen zichtbaar indien totaal < 3 */}
                                                            {bookings.length < 3 ? (
                                                                <button
                                                                    onClick={() => addCabanaAt(index)}
                                                                    className="px-3 border rounded-sm cursor-pointer hover:bg-sky-800"
                                                                    aria-label={`Voeg cabana toe na Cabana ${item.cabana}`}
                                                                >
                                                                    +
                                                                </button>
                                                            ) : (
                                                                /* Als we al 3 cabana's hebben, verberg + (geen knop) */
                                                                null
                                                            )}
                                                        </>
                                                    )}
                                                </div>
                                            </div>

                                            {/* GUEST CONTROL */}
                                            <div className="flex items-center justify-between mt-1 mb-1 px-2 py-2">
                                                <p className="font-medium normal-case">Gast(en)</p>
                                                <div className="flex items-center space-x-3">
                                                    <button
                                                        onClick={() => updateGuests(index, -1)}
                                                        className="px-3 border rounded-sm cursor-pointer hover:bg-gray-50"
                                                        aria-label={`Minder gasten Cabana ${item.cabana}`}
                                                    >
                                                        −
                                                    </button>
                                                    <span>{item.guests}</span>
                                                    <button
                                                        onClick={() => updateGuests(index, +1)}
                                                        className="px-3 border rounded-sm cursor-pointer hover:bg-gray-50"
                                                        aria-label={`Meer gasten Cabana ${item.cabana}`}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Info tekst: toon waarschuwing onderin wanneer max bereikt (optioneel) */}
                                    {bookings.length >= 3 && (
                                        <p className="text-xs normal-case text-red-600 mb-2">
                                        ❗Maximaal 3 cabana’s online. Neem contact op voor grotere boekingen.
                                        </p>
                                    )}
                                </div>
                            )}

                        </div>
                    </div>

                    <button className="bg-sky-900 py-2 tracking-wide text-white text-sm rounded-sm cursor-pointer hover:bg-sky-800">Reserveren</button>
                </div>
            </div>
        </div>

    )
}