import ExperienceCard from "../experienceCard";
import { anotaisso, ksa, infinitytech, code } from "../../assets/images";

export default function ExperiencesContainer() {
    return (
        <section id="experiences" className="bg-[#2d3a3b] text-white py-10">

            <h2 className="text-4xl mb-6 text-center font-semibold">My Experiences</h2>

            <img src={code} alt="imagem de código" className="w-full object-cover mb-20" loading="lazy"></img>

            <div className="max-w-5xl mx-auto">
                <ExperienceCard
                    title="Anotaísso 2024.1"
                    text="This inventory replenishment system was developed to be an intuitive and effective solution for snack bars, allowing them to place orders directly with the restaurant in an agile, automated and hassle-free manner. Based on web technologies such as HTML, CSS and JavaScript, the system offers a simple and responsive interface, allowing inventory management from anywhere and at any time."
                    image={anotaisso}
                    imageSide="right"
                />

                <ExperienceCard
                    title="KSA (Klick System Academic) 2024.2"
                    text="The KSA academic platform aims to optimize educational management by facilitating interaction between students, teachers, and administrators. This project proposes the use of the MERN Stack (MongoDB, Express.js, React, Node.js) for web development and React Native for the mobile application. The choice of the MERN Stack ensures a scalable and efficient platform, using JavaScript on both the frontend and backend, which speeds up development and integration between the parties."
                    image={ksa}
                    imageSide="left"
                />

                <ExperienceCard
                    title="InfinityAPI 2025.1"
                    text="Developed during a technology residency with Di2win and presented at Porto Digital's DemoDay, InfinityAPI is a robust web application designed to optimize filtering and error monitoring in Di2win's ExtrAI Data API. InfinityAPI offers an interactive dashboard that provides users with real-time insights into API activity. This intuitive platform allows for immediate error identification and the generation of detailed reports in CSV and PDF formats. The solution was built with a modern technology stack, utilizing React and TypeScript for a dynamic frontend, and Java with Spring Boot for a powerful, RESTful backend."
                    image={infinitytech}
                    imageSide="right"
                />
            </div>
        </section>
    );
}
