import ExperienceTechs from "../experienceTechs";

interface ExperienceCardProps {
    title: string;
    text: string;
    image: string;
    imageSide: 'left' | 'right';
    techs: string[];
}

export default function ExperienceCard({ title, text, image, imageSide, techs }: ExperienceCardProps) {
    return (
        <article className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-10 py-8 items-center">
            {imageSide === "right" && (
                <div className="flex flex-col items-center justify-center gap-4">
                    <img src={image} alt={`Tela do sistema ${title}`} className="w-full object-contain" loading="lazy" />
                    <ExperienceTechs techs={techs} />
                </div>
            )}
            <div className="flex flex-col items-center justify-center p-2 order-2 md:order-1">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">{title}</h2>
                <p className="w-full text-center text-base sm:text-lg">
                    {text}
                </p>
            </div>
            {imageSide === "left" && (
                <div className="flex flex-col items-center justify-center gap-4 order-1 md:order-2">
                    <img src={image} alt={`Tela do sistema ${title}`} className="w-full object-contain" loading="lazy" />
                    <ExperienceTechs techs={techs} />
                </div>  
            )}
        </article>
    );
}