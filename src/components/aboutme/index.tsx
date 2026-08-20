import { myphoto, fundoMensagem } from "../../assets/images";

export default function AboutMe() {
    const scrollToSection = (sectionId: string) => {
        document
            .getElementById(sectionId)
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            className="relative w-full overflow-hidden scroll-mt-20"
        >
            {/* Foto principal */}
            <img
                src={myphoto}
                alt="Foto de Vitor Marins"
                fetchPriority="high"
                loading="eager"
                decoding="sync"
                className="block h-auto w-full object-cover"
            />

            {/* Apresentação */}
            <div
                data-aos="fade-right"
                data-aos-duration="1000"
                className="
                    absolute
                    left-4
                    top-1/2
                    z-20
                    w-[55%]
                    max-w-2xl
                    -translate-y-1/2
                    sm:left-8
                    md:left-12
                    lg:left-16
                    xl:left-24
                "
            >
                <div className="relative">
                    <img
                        src={fundoMensagem}
                        alt=""
                        aria-hidden="true"
                        loading="eager"
                        className="block h-auto w-full"
                    />

                    <div
                        className="
                            absolute
                            inset-0
                            flex
                            flex-col
                            items-center
                            justify-center
                            px-4
                            text-center
                            text-black
                            sm:px-8
                            md:px-12
                        "
                    >
                        <h1
                            className="
                                text-lg
                                font-bold
                                sm:text-2xl
                                md:text-4xl
                                lg:text-5xl
                            "
                        >
                            Vitor Marins
                        </h1>

                        <p
                            className="
                                mt-1
                                text-xs
                                font-medium
                                sm:text-base
                                md:text-xl
                                lg:text-2xl
                            "
                        >
                            Software Developer
                        </p>

                        <button
                            type="button"
                            onClick={() => scrollToSection("contact")}
                            className="
                                mt-4
                                cursor-pointer
                                rounded-full
                                bg-blue-500
                                px-6
                                py-3
                                font-bold
                                text-white
                                transition
                                duration-300
                                hover:bg-blue-600
                                focus:outline-none
                                focus:ring-2
                                focus:ring-blue-400
                                focus:ring-offset-2
                            "
                        >
                            Download CV
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}