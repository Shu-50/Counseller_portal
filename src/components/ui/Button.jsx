const Button = ({ children, variant = 'primary', ...props }) => {
    const baseStyles = "px-4 py-2 rounded disabled:opacity-50";
    const variants = {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        secondary: "border text-gray-600 hover:bg-gray-50"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;