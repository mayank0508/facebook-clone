import Image from "next/image";
import { signIn } from 'next-auth/client';

function Login() {
  return (
    <div className="grid place-items-center">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
        alt="Facebook"
        width={300}
        height={400}
        objectFit="contain"
      />

      <h1 onClick={signIn} className="p-5 bg-blue-700 rounded-full text-white border-4 border-blue-500 hover:border-blue-700 text-center cursor-pointer" >Login with Facebook</h1>
    </div>
  );
}

export default Login;
