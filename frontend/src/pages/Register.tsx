import { useForm } from "react-hook-form"

type RegisterType = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const Register = () => {
    const { register } = useForm<RegisterType>();
    return(
        <form className="flex flex-col gap-5 container mx-auto min-h-[50vh] py-16">
            <h2 className="text-3xl font-bold">Create an account</h2>
        </form>
    )
}