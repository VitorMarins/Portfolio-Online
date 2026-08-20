export default function Education() {
    return (
        <section className="flex flex-col gap-4 px-4 sm:px-10 py-8 bg-[#1b4d53] text-white scroll-mt-20" id="education">
            <h2 className="text-4xl mb-6 text-center font-semibold">Education</h2>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    {/* logo */}
                    <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
                    <p className="text-gray-300">UNINASSAU, 2026 - 2030</p>
                </div>
                <div className="flex flex-col gap-2">
                    {/* logo */}
                    <h3 className="text-xl font-semibold">Associate's Degree in Systems Analysis and Development</h3>
                    <p className="text-gray-300">Faculdade SENAC PE, 2024 - 2025</p>
                </div>
                <div className="flex flex-col gap-2">
                    {/* logo */}
                    <h3 className="text-xl font-semibold">High School Diploma, Systems Development and IT Infrastructure</h3>
                    <p className="text-gray-300">SENAC Mediotec Recife, 2021 - 2023</p>
                </div>
            </div>
        </section>
    )
}