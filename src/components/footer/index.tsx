import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#3F3F3F] text-white py-10 px-4 scroll-mt-20">
            <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-4">
                <h2 className="text-4xl font-semibold underline underline-offset-4 decoration-blue-400" id="contact">
                    Contact
                </h2>
                <address className="not-italic space-y-1 text-lg">
                    <p>+55 (81) 99569-6894</p>
                    <p>Brazil</p>
                    <p className=" transition delay-150 duration-300 ease-in-out hover:scale-110">
                        <a href="mailto:vitorbarbosamarins@gmail.com" className="hover:underline">
                            vitorbarbosamarins&#64;gmail.com
                        </a>
                    </p>
                </address>
                <div className="flex space-x-6 mt-4 text-4xl sm:text-5xl md:text-6xl">
                    <a href="https://github.com/vitormarins" target="_blank" rel="noopener" className="transition delay-150 duration-300 ease-in-out hover:text-blue-400 hover:scale-110" aria-label="GitHub">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/vitor-barbosa-marins" target="_blank" rel="noopener" className="transition delay-150 duration-300 ease-in-out hover:text-blue-400 hover:scale-110" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                    <a href="https://instagram.com/vitor.bmarins" target="_blank" rel="noopener" className="transition delay-150 duration-300 ease-in-out hover:text-pink-400 hover:scale-110" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </footer>
    )
}
