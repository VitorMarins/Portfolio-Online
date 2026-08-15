import * as Images from '../../assets/images';

type Habilidade = {
  nome: string;
  url_img: string;
  rounded: boolean;
};

export default function Skills() {
  const habilidades: Habilidade[] = [
    { nome: "TypeScript", url_img: Images.ts_logo, rounded: false },
    { nome: "Angular", url_img: Images.angular, rounded: true },
    { nome: "React", url_img: Images.react, rounded: false },
    { nome: "Node.js", url_img: Images.nodejs, rounded: false },
    { nome: "Express.js", url_img: Images.expressjs, rounded: false },
    { nome: "MySQL", url_img: Images.mysql, rounded: false },
    { nome: "PostgreSQL", url_img: Images.postgresql, rounded: false },
    { nome: "Java", url_img: Images.java, rounded: false },
    { nome: "MongoDB", url_img: Images.mongodb, rounded: true },
    { nome: "Tailwind CSS", url_img: Images.tailwind, rounded: true },
    { nome: "GitHub", url_img: Images.github, rounded: false },
    { nome: "AWS", url_img: Images.aws, rounded: false },
    { nome: "Figma", url_img: Images.figma, rounded: false },
    { nome: "Postman", url_img: Images.postman, rounded: true },
    { nome: "NestJS", url_img: Images.nestjs, rounded: false },
    { nome: "Spring Boot", url_img: Images.springboot, rounded: true },
];

  return (
    <div className="bg-[#76989B] text-white py-8 overflow-hidden">
      <h2 className="text-4xl mb-10 text-center font-semibold">
        My Skills
      </h2>

      <div className="relative overflow-hidden">

        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-linear-to-r from-[#76989B] to-transparent z-10" />

        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-linear-to-l from-[#76989B] to-transparent z-10" />

        <div
          className="
            flex w-max gap-10 px-4
            animate-[scroll_25s_linear_infinite]
            hover:[animation-play-state:paused]
          "
        >
          {[...habilidades, ...habilidades].map((hab, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-30 scale-90 transition-transform duration-300 hover:scale-100"
            >
              <div className="bg-white/50 backdrop-blur-md p-4 rounded-2xl shadow-lg">
                <img
                  src={hab.url_img}
                  alt={hab.nome}
                  className={`w-20 h-20 object-contain ${
                    hab.rounded ? "rounded-full" : ""
                  }`}
                />
              </div>

              <p className="mt-3 text-sm font-medium text-center">
                {hab.nome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}