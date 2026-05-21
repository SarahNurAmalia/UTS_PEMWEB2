import FormInput from "../components/FormInput"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore"

type FormData = {
    username: string;
    password: string;
};

const schema = z.object({
    username: z.string().min(1, "Username harus diisi"),

    password: z
        .string()
        .min(8, "Password minimal 8 karakter"),
});

export default function Login() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const navigate = useNavigate();

    const login = useAuthStore((state) => state.login);

    const onSubmit = (data: FormData) => {

        if (
            data.username === "24090129" &&
            data.password === "admin123"
        ) {

            login(data.username);

            alert("Login berhasil!");

            navigate("/dashboard");

        } else {

            alert("Username atau password salah!");
        }
    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-pink-100 to-fuchsia-200">

            <div className="bg-white shadow-2xl rounded-[35px] p-10 w-[420px]">

                <div className="text-center mb-8">

                    <h1 className="text-4xl font-bold text-[#c777b9]">
                        Login
                    </h1>

                    <p className="text-gray-500 mt-3">
                        INVOFEST
                    </p>

                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                >

                    <FormInput
                        text="Username"
                        type="text"
                        name="username"
                        register={register}
                        error={errors.username?.message}
                    />

                    <FormInput
                        text="Password"
                        type="password"
                        name="password"
                        register={register}
                        error={errors.password?.message}
                    />

                    <Button
                        label="Login"
                        type="submit"
                        className="w-full"
                    />

                </form>

            </div>

        </div>
    );
}