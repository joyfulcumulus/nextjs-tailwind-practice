import { GreenButton } from "./buttons"

export function Banner() {
  const backgroundImage = {
    backgroundImage: `url("https://lewagon.github.io/landing-page-challenge/images/background.png")`
  }

  return (
    <div
      style={backgroundImage}
      className="h-screen w-screen bg-cover bg-center flex justify-center items-center"
    >
      <div>
        <h1 className="text-3xl font-bold text-white">Le Wagon brings tech skills to creative people!</h1>
        <p className="text-xl text-slate-300 py-5">Change your life and learn to code at one of our campuses around the world.</p>
        <GreenButton />
      </div>
    </div>
  )
}
