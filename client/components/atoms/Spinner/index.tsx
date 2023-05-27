import clsx from "clsx";

export interface SpinnerProps {
    size?: 'small' | 'medium' | 'large'
}

const Spinner = ({size = 'small'}: SpinnerProps) => {
    const spinnerClass = clsx(
        "spinner",
        { "h-[40px] w-[40px] border-[4px]": size === "large" },
        { "h-[30px] w-[30px] border-[3px]": size === "medium" },
        { "h-[20px] w-[20px] border-[2px]": size === "small" }
      )
    return (
        <div className={spinnerClass}></div>
    );
};

export default Spinner;