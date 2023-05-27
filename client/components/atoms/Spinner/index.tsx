export interface SpinnerProps {
    size?: 'small' | 'medium' | 'large'
}

const Spinner = ({size = 'small'}: SpinnerProps) => {
    return (
        <div className={`spinner ${size}`}></div>
    );
};

export default Spinner;