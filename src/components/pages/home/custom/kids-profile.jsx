import '../../../../styles/main.sass';

export default function KidsProfile() {
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
              className="text-5xl font-black text-white leading-[1.15] mb-3 mr-6"
            >
              Create profiles for kids
            </h1>

            <h4
              className='text-2xl text-white leading-[1.3] w-11/12'
            >
              Send children on adventures with their favourite characters in a space made just for them—free with your membership.
            </h4>
          </div>
          <div
            className='relative z-1 flex-1'
          >
            <img 
              src='https://occ-0-3217-3646.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png' 
            />
          </div>
        </div>
      </div>
    </div>
  )
}