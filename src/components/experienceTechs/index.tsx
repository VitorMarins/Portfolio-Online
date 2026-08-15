import * as Images from '../../assets/images';

interface TechsProps {
    techs: string[];
}

export default function ExperiencesTechs({techs}: TechsProps) {
    const techImages: Record<string, string> = {
        react: Images.react,
        nodejs: Images.nodejs,
        expressjs: Images.expressjs,
        typescript: Images.ts_logo,
        mongodb: Images.mongodb,
        angular: Images.angular,
        mysql: Images.mysql,
        postgresql: Images.postgresql,
        java: Images.java,
        tailwind: Images.tailwind,
        github: Images.github,
        aws: Images.aws,
        figma: Images.figma,
        postman: Images.postman,
        nestjs: Images.nestjs,
        javascript: Images.javascript,
        springboot: Images.springboot,
    };
    return (
        <div className="flex flex-col items-center justify-center bg-[#335248]/50 rounded-lg p-4 mt-6 w-full">
            <p className="text-xs font-semibold">Technologies:</p>
            <div className="flex flex-wrap gap-4 justify-center">
                {techs.map((tech, index) => {
                    const techKey = tech.toLowerCase();
                    const imageSrc = techImages[techKey];

                    if (!imageSrc) return null; 

                    return (
                        <img 
                            key={index} 
                            src={imageSrc} 
                            alt={tech} 
                            className="w-12 h-12 object-contain" 
                        />
                    );
                })}
            </div>
        </div>
    );
}