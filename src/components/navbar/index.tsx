export default function Navbar() {
    const scrollToSection = (sectionId: string) => {
        document
            .getElementById(sectionId)
            ?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
    };

    return (
        <header
            className="
                fixed
                top-0
                left-0
                z-50
                w-full
                border-b
                border-gray-200/50
                bg-white/90
                px-6
                py-4
                shadow-sm
                backdrop-blur-md
            "
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                <button
                    type="button"
                    onClick={() => scrollToSection("home")}
                    className="
                        cursor-pointer
                        text-xl
                        font-bold
                        sm:text-3xl
                        md:text-4xl
                    "
                >
                    Vitor Marins
                </button>

                <nav>
                    <ul className="flex items-center space-x-4 text-[#00B2BE] sm:space-x-6">
                        <li>
                            <button
                                type="button"
                                onClick={() => scrollToSection("home")}
                                className="
                                    cursor-pointer
                                    text-sm
                                    transition
                                    hover:text-[#008d96]
                                    sm:text-lg
                                    md:text-2xl
                                "
                            >
                                About me
                            </button>
                        </li>

                        <li>
                            <button
                                type="button"
                                onClick={() => scrollToSection("education")}
                                className="
                                    cursor-pointer
                                    text-sm
                                    transition
                                    hover:text-[#008d96]
                                    sm:text-lg
                                    md:text-2xl
                                "
                            >
                                Education
                            </button>
                        </li>

                        <li>
                            <button
                                type="button"
                                onClick={() => scrollToSection("experiences")}
                                className="
                                    cursor-pointer
                                    text-sm
                                    transition
                                    hover:text-[#008d96]
                                    sm:text-lg
                                    md:text-2xl
                                "
                            >
                                Portfolio
                            </button>
                        </li>

                        <li>
                            <button
                                type="button"
                                onClick={() => scrollToSection("contact")}
                                className="
                                    cursor-pointer
                                    text-sm
                                    transition
                                    hover:text-[#008d96]
                                    sm:text-lg
                                    md:text-2xl
                                "
                            >
                                Contact
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}