import '../../../../styles/main.sass';
import { Navbar } from '../../../layout';
import { SignIn } from './custom';

export default function Login() {
  return (
    <>
      <div className='min-h-screen w-full bg-black'>
        <Navbar showSignInButton={false} />
        <div className='flex items-center justify-center min-h-screen'>
            <SignIn />
        </div>
      </div>
    </>
  )
}