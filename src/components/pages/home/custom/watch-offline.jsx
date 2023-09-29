import '../../../../styles/main.sass';

export default function WatchOffline() {
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
          <div
            className='relative flex-2'
          >
            <img
              className='overflow-hidden mi-z-1'
              src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'
            />

            <div 
              className='downloading-card w-7/12 flex items-center justify-between absolute bg-black'
            >
              <img 
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                className='w-16'
              />

              <div>
                <h3 className='text-lg text-white'>Stranger Things</h3>
                <h4 className='text-sm text-blue-500'>Downloading...</h4>
              </div>

              <img 
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                className='w-10'
              />
            </div>
          </div>
          <div className='flex-1'>
            <h1
              className="text-5xl font-black text-white leading-[1.05] mb-4"
            >
              Download your shows to watch offline
            </h1>

            <h4
              className='text-2xl text-white leading-[1.3] w-11/12'
            >
              Save your favourites easily and always have something to watch.
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}