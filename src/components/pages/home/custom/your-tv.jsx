import '../../../../styles/main.sass';

export default function YourTV() {
  return (
    <div
      className="min-h-screen w-full bg-black flex items-center justify-center"
    >
      <div
        className="w-10/12"
      >
        <div
          className='flex items-center justify-between'
        >
          <div className='flex-1'>
            <h1
              className="text-5xl font-black text-white leading-[1.75]"
            >
              Enjoy on your TV
            </h1>

            <h4
              className='text-2xl text-white leading-[1.3] w-11/12'
            >
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
            </h4>
          </div>
          <div
            className='relative z-1 flex-2'
          >
            <img 
              className='overflow-hidden'
              src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png' 
            />
            <img 
              className='absolute inset-0 w-full mi-z-1'
              src="https://wallpaperaccess.com/full/3658597.jpg" 
            />
          </div>
        </div>
      </div>
    </div>
  )
}