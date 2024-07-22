import { Tilt } from "react-tilt"
import MyButton from "./button"
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";


// import {mobile} from "../assets"

const Card = (props) => {
  const {index,title,image} = props
  
    return (
        <Tilt  options={{ 
          max: 45,
         scale: 1,
         speed: 450,
         }} className=" w-[300px] xs:px-4  md:w-[280px]  ">
          <motion.div 
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          >
            <motion.div
           
             className="bg-tertiary rounded-[20px] min-h-[280px] py-5 px-12  flex justify-evenly items-center flex-col"
            >
                <img className="object-contain w-16 h-16" src={image}></img>
                <h1 className="text-xl font-bold text-center text-white md:text-2xl"> {title}</h1>
            </motion.div>
          </motion.div>
        </Tilt>
    )
}

export default Card