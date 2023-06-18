
import hero from "../../hero.png"


const Hero = () => {
  
  
  return (
    <>
      <div className="px-12 flex items-center h-[calc(100vh-60px)] gap-6">
        <div className="max-w-2xl pl-16">
          <h1 className="text-7xl font-bold">
            Share your world with <span className="from-red-500 to-orange-500 bg-clip-text bg-gradient-to-r text-transparent">AI</span> assistance.
          </h1>
          <h2 className="text-xl mt-4 text-gray-700">
            Blur the lines between reality and AI
          </h2>
          
        </div>
        <div className="w-full h-full flex items-center py-10">
          <img className="object-contain w-full h-full" src={hero} alt="Monstera Deliciosa" />
        </div>
      </div>
      
    </>

  )
}

export default Hero