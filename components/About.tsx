
const skills = [
    {skill: "HTML"},
    {skill: "CSS"},
    {skill: "JavaScript"},
    {skill: "TypeScript"},
    {skill: "Python"},
    {skill: "React"},
    {skill: "TailWind CSS"},
    {skill: "Git"},
    {skill: "GitHub"},
]

const About = () => {
  return (
    <section id='about'>
        <div className="my-12 pb-12 md:pt-16 md:pb-48">
            <h1 className="text-center font-bold text-4xl mb-6">About Me
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
            <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
                <div className="md:w-1/2">
                    <h1 className="text-center font-bold text-2xl mb-6 md:text-left">Get to know me!</h1>
                    <p>
                        {" "}
                        Hi, my name is Emmanuel and I am a {" "}
                        <span className="font-bold"> {"Highly Ambitious"}</span>, 
                        <span className="font-bold"> {"Self-Motivated"}</span>, and 
                        <span className="font-bold"> {"Driven"} </span>
                        software engineer based in Lagos, Nigeria.
                    </p>
                    <br/>
                    <p>
                        I am a Final Year student at Covenant University, Nigeria currently studying Computer Engineering and has taken an interest in this field
                    </p>
                    <br/>
                    <p>
                        I have a passion for techonology and a desire to always push the limits of what is possible. I am exicted to see where my career takes me and I am available for oportunities.
                    </p>
                </div>
                <div className="md:w-1/2">
                    <h1 className="text-center font-bold text-2xl mb-6 md:text-left">My Skills</h1>
                    <div className="flex flex-wrap flex-row justify-center md:justify-start">
                       {skills.map((item, idx)=>{
                        return <p key={idx} className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold">{item.skill}</p>
                       })} 
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About