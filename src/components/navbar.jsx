// eslint-disable-next-line no-unused-vars
import { useState } from "react"
// eslint-disable-next-line no-unused-vars
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
// eslint-disable-next-line no-unused-vars
import { Link } from "react-scroll"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

const Navbar = () => {
     const [nav,Setnav] = useState(false)
    const toggleNav = () => {
        Setnav(!nav)
    }

    const closeNav = () => {
        Setnav(false)  
    }

    const menuVariants = {
        open: {
            x: 0,
            transition: {
            stiffness: 20,
            damping: 15
            }
        },
        closed: {
            x: '-100%',
            transition: {
            stiffness: 20,
            damping: 15
            }
    }
    }
    
    return (
        <div className="fixed top-0 z-50 w-full bg-transparent backdrop-blur-md">
            <div className=" text-gray-300 max-w-[1300px] mx-auto flex justify-between items-center text-xl px-12 py-5 ">
                <a>Tes React Vite</a>
                <ul className="z-10 hidden gap-12 cursor-pointer md:flex">
                    <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                    <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                    <li><Link to="project" smooth={true} duration={500}>Project</Link></li>
                    <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
                </ul>
                <div onClick={toggleNav} className="z-50 md:hidden">
                  {nav ? <AiOutlineClose size={25} /> :  <AiOutlineMenu size={25} />  }
                </div>

                <motion.div
            initial={false}
            animate={nav ? 'open' : 'closed'}
            variants={menuVariants}
            className='fixed top-0 left-0 z-40 w-full min-h-screen bg-primary'
            >
                <ul className='mt-24 space-y-8 text-4xl font-semibold text-center text-white'>
                    <li><Link to="skills" onClick={closeNav} smooth={true} offset={50} duration={500}>About</Link></li>
                    <li><Link to="portfolio" onClick={closeNav} smooth={true} offset={50} duration={500}>Portfolio</Link></li>
                    <li><Link to="contact" onClick={closeNav} smooth={true} offset={50} duration={500}>Contact</Link></li>
                </ul>


            </motion.div>
    
            </div>
        </div>
    )
}

export default Navbar