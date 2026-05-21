import prisma from "../lib/prisma.js";
// 1. menampilkan data
export const getAllCategory = async (req, res) => {
    try {
        const categories = await prisma.category.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
        res.json(categories);
    }
    catch (error) {
        res.status(500).json({
            message: "Gagal mengambil data category",
            error,
        });
    }
};
// 2. menyimpan data
export const createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const newCategory = await prisma.category.create({
            data: {
                name,
            },
        });
        res.status(201).json({
            message: "Category berhasil dibuat",
            data: newCategory,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Gagal membuat category",
            error,
        });
    }
};
// 3. menampilkan data berdasarkan id
export const categoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await prisma.category.findUnique({
            where: {
                id: Number(id),
            },
        });
        if (!category) {
            return res.status(404).json({
                message: "Category tidak ditemukan",
            });
        }
        res.json(category);
    }
    catch (error) {
        res.status(500).json({
            message: "Gagal mengambil category",
            error,
        });
    }
};
// 4. update category
export const updateById = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const updateCategory = await prisma.category.update({
            where: {
                id: Number(id),
            },
            data: {
                name,
            },
        });
        res.json({
            message: "Category berhasil diupdate",
            data: updateCategory,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Gagal update category",
            error,
        });
    }
};
// 5. delete category
export const deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.category.delete({
            where: {
                id: Number(id),
            },
        });
        res.json({
            message: "Category berhasil dihapus",
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Gagal menghapus category",
            error,
        });
    }
};
//# sourceMappingURL=categoryController.js.map