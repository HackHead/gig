import Button from "@/components/molecules/Button";
import Field from "@/components/molecules/Field";
import { EnvelopeIcon, LockOpenIcon } from "@heroicons/react/24/solid";

const LoginForm = () => {

    const submit = () => {
    }
    
    return (
        <form
            action=""
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <p className="text-center text-lg font-medium">Sign in to your account</p>
            <Field
              placeholder="Email"
              icon={<EnvelopeIcon width={18} height={18} fill="silver" opacity={0.5}/>}
            />
            <Field 
              placeholder="Password"
              icon={<LockOpenIcon width={18} height={18} fill="silver" opacity={0.5}/>}
            />
            <Button isLoading={false}>Sign in</Button>
            <p className="text-center text-sm text-gray-500">
              No account?
              <a className="underline" href="">Sign up</a>
            </p>
          </form>
    );
};

export default LoginForm;