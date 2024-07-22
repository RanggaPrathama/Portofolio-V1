import CardPortfolio from "./cardPortfolio"

const Portfolio = () => {
    return ( 
        <div className="container relative w-full mx-auto mt-24 max-w-[1200px] ">
        <div className="container mx-auto mb-4">
            <h4 className="text-2xl text-gray-300">PORTFOLIO</h4>
            <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">MY PORTFOLIO</h1>
            {/* <p className="max-w-3xl text-lg leading-7 text-gray-400">I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!</p> */}
        </div>
        
        <div className="container flex flex-wrap gap-5 mt-8 ">
             <CardPortfolio />
             <CardPortfolio />
             <CardPortfolio />
             <CardPortfolio />
        </div>
    </div>
    )
}

export default Portfolio