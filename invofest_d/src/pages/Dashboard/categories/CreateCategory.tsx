import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import FormInput from "../../../components/FormInput";
import Button from "../../../components/ui/Button";

type FormData = {
  nama: string;
};

const schema = z.object({
  nama: z.string().min(1, "Nama harus diisi"),
});

export default function CreateCategory() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-2xl p-8">

      <h1 className="text-3xl font-bold text-[#852e4e] mb-2">
        Create New Category
      </h1>

      <p className="text-slate-500 mb-6">
        Silahkan isi semua data dengan benar
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >

        <FormInput
          text="Nama Category"
          type="text"
          name="nama"
          register={register}
          error={errors.nama?.message}
        />

        <Button
          label="Simpan"
          variant="primary"
          className="w-full mt-2"
          type="submit"
        />

      </form>

    </div>
  );
}