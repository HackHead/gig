import Spinner from "@/components/atoms/Spinner";

type ButtonProps = {
    isLoading?: boolean;
} & React.HTMLAttributes<HTMLButtonElement>


const Button = ({isLoading = false, children, ...attributes}: ButtonProps) => {
    return (
        <button className="block w-full rounded-lg bg-black px-5 py-3 text-sm font-medium text-white" disabled={isLoading   } {...attributes}>
            {isLoading ? <Spinner/> :  children}
        </button>
    );
}

export default Button;
