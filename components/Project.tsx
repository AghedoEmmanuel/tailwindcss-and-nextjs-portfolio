import Image from "next/image"
import Link from "next/link"
import {BsGithub,BsArrowUpRightSquare} from "react-icons/bs"

const projects =[
    {
        name:"HDDP",
        description:"HDDP is a web application that makes use of artifical intelligence to carry out a prediction based on data provided to determine if a patient has either diabetes, heart-disease or none of them",
        github:"https://github.com/AghedoEmmanuel/HDDP2",
        link:"https://aghedoemmanuel-hddp2-streamlithello-hghs4q.streamlit.app/Heart_Disease"
    },
    {
        name:"Hostel Management System",
        description:"This system was created to help with the assignment of accomdation to students",
        github:"https://github.com/AghedoEmmanuel/hostel-management-system-frontend",
        link:""
    },
    {
        name:"Loan Calculator",
        description:"A simple calculator that shows the monthly payment needed to cover a loan.",
        github:"https://github.com/AghedoEmmanuel/Loan-Calculator",
        link:""
    },
    {
        name:"Movie Search Application",
        description:"This application allows user to search for movies using the TMBD API",
        github:"https://github.com/AghedoEmmanuel/HNGx/tree/main/stage_two",
        link:""
    },
    {
        name:"Image Rearrangement Application",
        description:"This application allows user to search for movies using the TMBD API",
        github:"https://github.com/AghedoEmmanuel/HNGx/tree/main/stage_three",
        link:""
    },
]

const Project = () => {
  return (
    <section id='projects'>
        <h1 className="text-center font-bold text-4xl mb-6">Projects
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
            <div className="flex flex-col space-y-28">
                {projects.map((project, idx)=>{
                    return(
                    <div key={idx}>
                        <div className="flex flex-col md:flex-row md:space-x-12">
                        {/* <div className="mt-8 md:w-1/2">
                        <Image src={} alt="" width={1000} height={1000} className="rounded-xl shadow-xl hover:opacity-70"/>
                        </div> */}
                        <div className="md:w-1/2">
                            <h1 className="text-3xl font-bold mb-6">{project.name}</h1>
                            <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">{project.description}</p>
                            <div className="flex flex-row align-bottom space-x-4">
                               <Link href={project.github} target="_blank">
                                <BsGithub size={30} className="hover:-translate-y- transition-transform cursor-pointer"/>
                                </Link> 
                               {/* <Link href={project.link} target="_blank">
                               <BsArrowUpRightSquare size={30} className="hover:-translate-y- transistion-transform cursor-pointer"/>
                               </Link> */}
                            </div>
                        </div>
                        </div>
                    </div>
                    )})}
            </div>
    </section>
  )
}

export default Project