import '../../../../../styles/main.sass'

export default function SignIn() {
  return <div
    className="bg-gray-600 bg-opacity-10 w-1/3 h-1/2 text-white p-16"
  >
    <h2 className='text-4xl font-bold'>Sign In</h2>

    <div
      className='mt-5'
    >
      <input
        type='email'
        name='email'
        id='emailAddress'
        className='bg-black bg-opacity-50 p-2 border border-gray-100 border-opacity-50 rounded-sm w-full text-gray-400'
        placeholder='Email address'
      />

      <input
        type='password'
        name='password'
        id='passWord'
        className='bg-black bg-opacity-50 p-2 border border-gray-100 border-opacity-50 rounded-sm w-full text-gray-400 mt-4'
        placeholder='Password'
      />

      <button
        className='p-2 rounded-sm w-full text-white font-bold mt-10'
      >
        Sign In
      </button>
    </div>
  </div>
}