export default function Navbar() {
    const encontrarElemento = (idElemento: string) => {
        const elemento = document.getElementById(idElemento);
        return elemento;
    }
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white">
            <h1 className="text-1xl sm:text-3xl md:text-4xl">Vitor Marins</h1>
            <nav className="navbar">
                <ul className="flex space-x-6 text-[#00B2BE]">
                    <li>
                        <button onClick={() => {
                            const elemento = encontrarElemento('home');
                            elemento?.scrollIntoView({ behavior: 'smooth' });
                        }} className="cursor-pointer text-1xl  md:text-2xl">About me</button>
                    </li>
                    <li>
                        <button onClick={() => {
                            const elemento = encontrarElemento('experiences');
                            elemento?.scrollIntoView({ behavior: 'smooth' });
                        }} className="cursor-pointer text-1xl  md:text-2xl">Portfolio</button>
                    </li>
                    <li>
                        <button onClick={() => {
                            const elemento = encontrarElemento('contact');
                            elemento?.scrollIntoView({ behavior: 'smooth' });
                        }} className="cursor-pointer text-1xl md:text-2xl">Contact</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
