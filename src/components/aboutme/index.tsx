import { myphoto, fundoMensagem } from "../../assets/images";

export default function AboutMe() {
    return (
        <div className="relative w-full" id="home">
            <img
                src={myphoto}
                alt="Foto de Vitor"
                loading="lazy"
                className="w-full h-auto z-10 block aspect-video object-cover"
            />

            <div className="absolute top-12 left-5 w-1/2 z-20" data-aos="fade-right" data-aos-duration="1000">
                <div className="relative">
                    <img
                        src={fundoMensagem}
                        alt="Balao do texto"
                        loading="lazy"
                        className="w-full h-auto block aspect-video"
                    />
                    <p className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-4 text-1x1 md:text-2xl text-black text-center leading-snug">
                        Hello, I'm Vitor Barbosa Marins. I have a Associate's Degree in Systems Analysis and Development from Faculdade SENAC PE. I am passionate about programming and have experience in various programming languages and technologies. I am always eager to learn and grow in the field of software development.
                    </p>
                </div>
            </div>
        </div>
    );
}