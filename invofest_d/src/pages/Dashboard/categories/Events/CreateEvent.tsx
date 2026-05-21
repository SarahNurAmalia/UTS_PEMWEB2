import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import FormInput from "../../../../components/FormInput";
import Button from "../../../../components/ui/Button";

type FormData = {
    nama: string;
    category: string;
    lokasi: string;
    tanggal: string;
    deskripsi: string;
};

const schema = z.object({
    nama: z.string().min(1, "Nama event harus diisi"),
    category: z.string().min(1, "Category harus diisi"),
    lokasi: z.string().min(1, "Lokasi harus diisi"),
    tanggal: z.string().min(1, "Tanggal harus diisi"),
    deskripsi: z.string().min(1, "Deskripsi harus diisi"),
});

export default function CreateEvent() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({
        resolver: zodResolver(schema)
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
        alert("Event berhasil ditambahkan!");
    };

    return (
        <div className="bg-white rounded-3xl shadow-lg p-8 max-w-2xl">

            <h1 className="text-4xl font-bold text-[#852e4e] mb-2">
                Create New Event
            </h1>

            <p className="text-slate-500 mb-8">
                Silahkan isi semua data event dengan benar
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>

                <FormInput
                    text="Nama Event"
                    type="text"
                    name="nama"
                    register={register}
                    error={errors.nama?.message}
                />

                <FormInput
                    text="Category"
                    type="text"
                    name="category"
                    register={register}
                    error={errors.category?.message}
                />

                <FormInput
                    text="Lokasi"
                    type="text"
                    name="lokasi"
                    register={register}
                    error={errors.lokasi?.message}
                />

                <FormInput
                    text="Tanggal"
                    type="date"
                    name="tanggal"
                    register={register}
                    error={errors.tanggal?.message}
                />

                <FormInput
                    text="Deskripsi"
                    type="text"
                    name="deskripsi"
                    register={register}
                    error={errors.deskripsi?.message}
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