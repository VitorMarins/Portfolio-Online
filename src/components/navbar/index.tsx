export default function Navbar() {
    const scrollToSection = (sectionId: string) => {
        document
            .getElementById(sectionId)
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header className="flex items-center justify-between bg-white px-6 py-4">
            <h1 className="text-xl sm:text-3xl md:text-4xl">
                Vitor Marins
            </h1>

            <nav>
                <ul className="flex space-x-6 text-[#00B2BE]">
                    <li>
                        <button
                            type="button"
                            onClick={() => scrollToSection("home")}
                            className="cursor-pointer text-xl md:text-2xl"
                        >
                            About me
                        </button>
                    </li>

                    <li>
                        <button
                            type="button"
                            onClick={() => scrollToSection("experiences")}
                            className="cursor-pointer text-xl md:text-2xl"
                        >
                            Portfolio
                        </button>
                    </li>

                    <li>
                        <button
                            type="button"
                            onClick={() => scrollToSection("contact")}
                            className="cursor-pointer text-xl md:text-2xl"
                        >
                            Contact
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}