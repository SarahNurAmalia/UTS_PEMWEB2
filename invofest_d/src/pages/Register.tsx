import FormInput from "../components/FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";


// schema validasi
const schema = z.object({
  nama: z.string().min(1, "Nama harus diisi"),

  email: z
    .string()
    .min(1, "Email harus diisi")
    .email("Format email tidak valid"),

  password: z
    .string()
    .min(8, "Password minimal 8 karakter"),

  password_confirm: z
    .string()
    .min(8, "Konfirmasi password minimal 8 karakter"),
});

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        
        <FormInput
          text="Nama"
          type="text"
          name="Nama"
          register={register}
          error={errors.nama?.message}
        />

        <FormInput
          text="Email"
          type="text"
          name="Email"
          register={register}
          error={errors.email?.message}
        />

        <FormInput
          text="Password"
          type="password"
          name="Password"
          register={register}
          error={errors.password?.message}
        />

        <FormInput
          text="Konfirmasi Password"
          type="password"
          name="Password Confirm"
          register={register}
          error={errors.password_confirm?.message}
        />

        <div>
          <Button
            label="Register"
            variant="primary"
            className="w-full mt-2"
            type="submit"
          />
        </div>
      </form>

      <p className="mt-4 text-sm text-slate-600">
        Sudah punya akun?
        <Link
          to="/login"
          className="text-[#852e4e] hover:underline ml-1"
        >
          Login sekarang
        </Link>
      </p>
    </div>
  );
}