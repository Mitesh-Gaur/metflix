import { useNavigate, useNavigation } from 'react-router-dom';
import '../../styles/main.sass';
import { ROUTES } from '../../resources/route-constants';


export default function Navbar({
  showSignInButton=true
}) {
  const navigation = useNavigate();
  return <nav className="bg-transparent flex items-center justify-between w-10/12 mx-auto">
    <Logo />
    {!!showSignInButton && <SignInButton navigation={navigation} />}
  </nav>
}

function Logo() {
  return <h1
    className="text-5xl font-black leading-[1.3] text-primary-color"
  >
    Met<span className='text-white'>Flix</span>
  </h1>
}

function SignInButton({
  navigation
}) {
  return <button
    className='p-1 px-3 rounded-sm text-white'
    onClick={() => navigation(ROUTES.LOGIN)}
  >
    Sign In
  </button>
}