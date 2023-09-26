import { AiOutlineGithub, AiOutlineTwitter, AiOutlineLinkedin } from "react-icons/ai"

const Footer = () => {
    return (
        <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
            <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
            <div className="mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
                <div> © 2023 Aghedo Emmanuel</div>
                <div className="flex flex-row items-center justify-center space-x-2 mb-1">
                    <a href='https://github.com/AghedoEmmanuel' rel="noreferrer" target="_blank"><AiOutlineGithub className="hover:-translate-y- transition-transform cursor-pointer" size={30}/></a>
                    <a href='https://twitter.com/AghedoOdy' rel="noreferrer" target="_blank"><AiOutlineTwitter className="hover:-translate-y- transition-transform cursor-pointer" size={30}/></a>
                    <a href='www.linkedin.com/in/aghedo-emmanuel-17a440219' rel="noreferrer" target="_blank"><AiOutlineLinkedin className="hover:-translate-y- transition-transform cursor-pointer" size={30}/></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer