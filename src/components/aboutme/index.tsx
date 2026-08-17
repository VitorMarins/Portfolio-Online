import { myphoto, fundoMensagem } from "../../assets/images";

export default function AboutMe() {
    return (
        <section className="relative w-full overflow-hidden" id="home">
            <img
                src={myphoto}
                alt="Foto de Vitor Marins"
                fetchPriority="high"
                loading="eager"
                decoding="sync"
                className="block w-full h-auto object-cover"
            />

            <div
                className="
                    absolute
                    top-1/2
                    left-4
                    -translate-y-1/2
                    w-[55%]
                    max-w-2xl
                    sm:left-8
                    md:left-12
                    lg:left-16
                    xl:left-24
                    z-20
                "
                data-aos="fade-right"
                data-aos-duration="1000"
            >
                <div className="relative">
                    <img
                        src={fundoMensagem}
                        alt=""
                        aria-hidden="true"
                        loading="eager"
                        className="block w-full h-auto"
                    />

                    <div
                        className="
                            absolute inset-0
                            flex flex-col
                            items-center justify-center
                            px-4
                            sm:px-8
                            md:px-12
                            text-center text-black
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
                    </div>
                </div>
            </div>
        </section>
    );
}