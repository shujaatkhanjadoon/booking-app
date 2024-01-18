import { useForm } from "react-hook-form"
import { useMutation } from "react-query";
import * as apiClient from "../api-client"

export type RegisterType = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}


export const Register = () => {
    
    const { register, watch, handleSubmit, formState: {errors}} = useForm<RegisterType>();

    const mutation = useMutation(apiClient.register, {
        onSuccess: () => {
            console.log("Registration successful!");
        },
        onError: (error: Error) => {
            console.log(error.message);
        }
    });

    const onSubmit = handleSubmit((data) => {
        mutation.mutate(data);
    })
    return(
        <form onSubmit={onSubmit} className="flex flex-col gap-5 container mx-auto min-h-[50vh] py-16">
            <h2 className="text-3xl font-bold">Create an account</h2>
            <div className="flex flex-col gap-5 md:flex-row">
                <label className="text-sm font-bold text-gray-700 flex-1">
                    First Name
                    <input {...register("firstName", {required: "This field is required"})} type="text" placeholder="first name" className="border rounded w-full py-2 px-2 font-normal" />
                    {errors.firstName && (
                        <span className="text-red-500">{errors.firstName.message}</span>
                    )}
                </label>

                <label className="text-sm font-bold text-gray-700 flex-1">
                    Last Name
                    <input {...register("lastName", {required: "This field is required"})} type="text" placeholder="last name" className="border rounded w-full py-2 px-2 font-normal" />
                    {errors.lastName && (
                        <span className="text-red-500">{errors.lastName.message}</span>
                    )}
                </label>
            </div>
            <label className="text-sm font-bold text-gray-700 flex-1">
                    Email
                    <input {...register("email", {required: "This field is required"})} type="email" placeholder="jhon.doe@gmail.com" className="border rounded w-full py-2 px-2 font-normal" />
                    {errors.email && (
                        <span className="text-red-500">{errors.email.message}</span>
                    )}
                </label>

                <label className="text-sm font-bold text-gray-700 flex-1">
                    Password
                    <input {...register("password", {required: "This field is required" , minLength : { value: 6, message: "Password must be atleast 6 characters"}})} type="password" placeholder="******" className="border rounded w-full py-2 px-2 font-normal" />
                    {errors.password && (
                        <span className="text-red-500">{errors.password.message}</span>
                    )}
                </label>

                <label className="text-sm font-bold text-gray-700 flex-1">
                    Confirm Password
                    <input {...register("confirmPassword", {
                        validate:(val) => {
                            if(!val){
                                return "Confirm password is required"
                            } else if(watch("password") !== val){
                                return "Confirm password must be same"
                            }
                        }
                    })} type="password" placeholder="******" className="border rounded w-full py-2 px-2 font-normal" />
                    {errors.confirmPassword && (
                        <span className="text-red-500">{errors.confirmPassword.message}</span>
                    )}
                </label>
                <span>
                    <button type="submit" className="bg-blue-600 text-white font-bold hover:bg-blue-500 transition  text-xl rounded-md py-3 px-4 justify-end flex">Create Account</button>
                </span>
        </form>
    )
}