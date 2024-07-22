import { Tilt } from "react-tilt"

const CardPortfolio = (props) => {
    const {image,title,description,technologies} = props
    return (
        <Tilt   
            options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="w-full bg-tertiary rounded-2xl xs:w-[350px]"
          >

          <div className="relative w-full h-[280px] p-5">
            <img className="object-cover w-full h-full rounded-2xl" src="src/assets/project-1.png"></img>
            <div className="absolute inset-0 flex justify-end m-3 top-2 right-1">
                <div className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient">
                    <img className="object-contain w-1/2 h-1/2 " src="src/assets/github.png"></img>
                </div>
            </div>
          </div>
          
          <div className="mt-5">
            <h2 className="text-2xl font-bold text-white">Project Name</h2>
            <p className="text-sm text-gray-400">Description of the project</p>
          </div>
          <div className="flex flex-wrap mt-5 ">
            <p className="text-sm text-gray-400">Laravel</p>
          </div>
        </Tilt>
    )
}

export default CardPortfolio