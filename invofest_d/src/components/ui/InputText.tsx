interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: string;
    name: string;
    error?: string;
}

const InputText: React.FC<InputTextProps> = ({
    type,
    name,
    error,
    ...props
}) => {
    return (
        <input
            type={type}
            name={name}
            {...props}
            className={`border p-2 rounded-md outline-none transition-all
${error 
? 'border-red-500 bg-red-50' 
: 'border-gray-300 bg-white'}
focus:border-[#852e4e]`}
        />
    );
};

export default InputText;