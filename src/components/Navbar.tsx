import logo from "../assets/logo/logo_white.png"

export default function Navbar() {
    return (
        <nav className="w-full py-4 fixed grid grid-cols-3 items-center text-white text-xs uppercase tracking-widest z-50">
            <ul className="flex justify-start gap-4 uppercase tracking-widest px-[20%]">
                <li>
                    <a className="" href="">Home</a>
                </li>
                <li>
                    <a className="" href="">Cabanas</a>
                </li>
                <li>
                    <a className="" href="">Dining</a>
                </li>
                <li>
                    <a className="" href="">Activiteiten</a>
                </li>
            </ul>

            <div className="flex justify-center">
                <img src={logo} alt="Taman Resort Logo" className="h-15 w-auto" />
            </div>

            <div className="flex justify-end gap-4 px-[20%]">
                <ul className="flex items-center gap-4">
                    <li>
                        <a className="whitespace-nowrap" href="">Over Ons</a>
                    </li>
                    <li>
                        <a className="" href="">Contact</a>
                    </li>
                    <li>
                        <a className="" href="">Solliciteer</a>
                    </li>
                </ul>


                <button className="bg-sky-900 px-[5%] py-[6%] uppercase tracking-widest">Reserveren</button>
            </div>
        </nav>
    )
}