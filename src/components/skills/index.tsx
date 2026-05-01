import { ts_logo, react, nodejs, expressjs } from "../../assets/images";

type Habilidade = {
  nome: string;
  url_img: string;
  rounded: boolean;
};

export default function Skills() {
  const habilidades: Habilidade[] = [
    { nome: "TypeScript", url_img: ts_logo, rounded: false },
    { nome: "Angular", url_img: "https://cdn.brandfetch.io/angularjs.org/w/400/h/400?c=1id5-s0OdQqUgvVvv5A", rounded: true },
    { nome: "React", url_img: react, rounded: false },
    { nome: "Node.js", url_img: nodejs, rounded: false },
    { nome: "Express.js", url_img: expressjs, rounded: false },
    { nome: "MySQL", url_img: "https://cdn.brandfetch.io/mysql.com/w/512/h/348/logo?c=1id5-s0OdQqUgvVvv5A", rounded: false },
    { nome: "PostgreSQL", url_img: "https://cdn.brandfetch.io/postgresql.com/w/496/h/512/logo?c=1id5-s0OdQqUgvVvv5A", rounded: false },
    { nome: "Java", url_img: "https://cdn.brandfetch.io/java.com/w/379/h/512/logo?c=1id5-s0OdQqUgvVvv5A", rounded: false },
    { nome: "MongoDB", url_img: "https://cdn.brandfetch.io/mongodb.com/w/400/h/400?c=1id5-s0OdQqUgvVvv5A", rounded: true },
    { nome: "Tailwind CSS", url_img: "https://cdn.brandfetch.io/tailwindcss.com/w/400/h/400?c=1id5-s0OdQqUgvVvv5A", rounded: true },
    { nome: "GitHub", url_img: "https://cdn.brandfetch.io/github.com/w/512/h/502/symbol?c=1id5-s0OdQqUgvVvv5A", rounded: false },
    { nome: "AWS", url_img: "https://cdn.brandfetch.io/aws.com/w/512/h/512/logo?c=1id5-s0OdQqUgvVvv5A", rounded: false },
    { nome: "Figma", url_img: "https://cdn.brandfetch.io/figma.com/w/341/h/512/symbol?c=1id5-s0OdQqUgvVvv5A", rounded: false },
    { nome: "Postman", url_img: "https://cdn.brandfetch.io/postman.com/w/240/h/240?c=1id5-s0OdQqUgvVvv5A", rounded: true },
    { nome: "NestJS", url_img: "https://nestjs.com/img/logo_text.svg", rounded: false }
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