import { TypeAnimation } from "react-type-animation"
import {
    AiOutlineGithub,
    AiOutlineInstagram,
    // AiOutlineLink,
    AiOutlineLinkedin,
  } from "react-icons/ai";
//   import {
//     DiCss3,
//     DiHtml5,
//     DiJavascript1,
//     DiNodejsSmall,
//     DiReact,
//   } from "react-icons/di";
  import { motion } from "framer-motion";
// import { duration } from "@mui/material";
import profileImage from "../assets/profpic.png"

const Hero = () => {
    return (
        <div className=" relative w-full min-h-screen max-w-[1200px] mx-auto  px-4 md:px-8">
        <div className="container absolute grid gap-8 top-20 place-items-center md:grid-cols-2">

            <motion.div
                initial={{ opacity: 0, y:-50}}
                whileInView={{ opacity: 1, y:0}}
                viewport={{ once: true}}
                transition={{ duration: 1 }}
            >
                <TypeAnimation 
                sequence={[
                        "Fullstack Dev",
                        1000,
                        "Webdesigner",
                        1000,
                        "Consultant",
                        1000
                    ]}
                    repeat={Infinity}
                    speed={50}
                    className="mb-4 text-xl italic font-bold text-gray-400 md:text-5xl"
                   />

                   <motion.p
                   initial= {{ opacity:0 }}
                   whileInView={{ opacity:1 }}
                   transition={{ duration:1,  delay:1 }}
                   className="mb-4 text-5xl tracking-tight text-gray-200 md:text-7xl"
                   >
                    HEY I AM <span className="text-purple-600">Rangga PNH</span>
                   </motion.p>

                   <motion.p
                    initial = {{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mb-6 text-xl text-gray-400 md:text-2xl max-w-[300px] md:max-w-[500px] " 
                   >
                    I am a passionate fullstack developer with over 5 years of experience.
                   </motion.p>

                   <motion.div 
                   initial = {{ opacity: 0, y:50 }}
                   whileInView={{ opacity: 1, y:0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 1, delay: 1 }}
                   className="flex flex-row items-center gap-4 my-4"
                   >
                    <motion.button whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)"  }} className="p-4 border border-purple-600 cursor-pointer md:w-auto text-gray-50 rounded-xl">
                       Download CV 
                    </motion.button>
                    
                    <motion.div
                    className="flex flex-row items-center gap-4 text-4xl text-purple-500 md:text-6xl"
                    >
                    <motion.a whileHover={{ scale: 1.25 }}>
                        <AiOutlineGithub />
                    </motion.a>

                    <motion.a whileHover={{ scale: 1.25 }}>
                        <AiOutlineLinkedin />
                    </motion.a>

                    <motion.a whileHover={{ scale: 1.25 }}>
                        <AiOutlineInstagram />
                    </motion.a>       
                    </motion.div>
                 
                   </motion.div>
            </motion.div>
            
            <motion.img className="w-[200px] md:w-[380px]" initial={{ opacity:0, scale:0.8 }} whileInView={{ opacity: 1,scale:1 }} viewport={{ once: true }} transition={{ duration: 1 }} src={profileImage} />
        </div>
            
        </div>
    )
}


export default Hero