import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import FormInput from "../../../../components/FormInput";
import Button from "../../../../components/ui/Button";

type FormData = {
    nama: string;
    role: string;
    foto: string;
};

const schema = z.object({
    nama: z.string().min(1, "Nama harus diisi"),
    role: z.string().min(1, "Role harus diisi"),
    foto: z.string().min(1, "Foto harus diisi"),
});

export default function CreateSpeaker() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({
        resolver: zodResolver(schema)
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
        alert("Speaker berhasil ditambahkan!");
    };

    return (
        <div className="bg-white rounded-3xl shadow-lg p-8 max-w-2xl">

            <h1 className="text-4xl font-bold text-[#852e4e] mb-2">
                Create New Speaker
            </h1>

            <p className="text-slate-500 mb-8">
                Silahkan isi semua data speaker dengan benar
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>

                <FormInput
                    text="Nama"
                    type="text"
                    name="nama"
                    register={register}
                    error={errors.nama?.message}
                />

                <FormInput
                    text="Role"
                    type="text"
                    name="role"
                    register={register}
                    error={errors.role?.message}
                />

                <FormInput
                    text="Foto"
                    type="text"
                    name="foto"
                    register={register}
                    error={errors.foto?.message}
                />

                <Button
                    label="Simpan"
                    variant="primary"
                    className="w-full mt-4"
                    type="submit"
                />

            </form>

        </div>
    );
}