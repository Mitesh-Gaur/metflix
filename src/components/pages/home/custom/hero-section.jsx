import '../../../../styles/main.sass';

export default function HeroSection() {
  return (
    <div className="flex items-center justify-center min-h-screen">
    <div className='text-center'>
      <h1
        className="text-5xl font-black text-white leading-[1.15]"
      >
        Laughter. Tears. Thrills.
      </h1>

      <h1
        className="text-5xl font-black text-white leading-[1.3]"
      >
        Find it all on MetFlix.
      </h1>

      <h4
        className='text-2xl font-medium text-white leading-[1.3]'
      >
        Endless entertainment starts at just ₹ 149. Cancel anytime.
      </h4>

      <h4
        className='text-lg text-white'
      >
        Ready to watch? Enter your email to create or restart your membership.
      </h4>

      <div 
        className='flex mt-5'
      >
        <input
          type='email'
          name='email'
          id='emailAddress'
          className='bg-black bg-opacity-50 p-2 border border-gray-100 border-opacity-50 rounded-sm w-full text-gray-400'
          placeholder='Email address'
        />
        <button 
          className='p-2 ml-3 rounded-sm w-2/5 text-white'
        >
          Get Started
        </button>
      </div>
    </div>
    </div>
  )
}