import prisma from "../lib/prisma.js";
// 1. menampilkan data
export const getAllEvents = async (req, res) => {
    try {
        const events = await prisma.event.findMany({
            orderBy: {
                createdAt: "desc",
            },
            include: {
                category: true,
                speaker: true,
            },
        });
        res.json(events);
    }
    catch (error) {
        res.status(500).json({
            message: "Gagal mengambil data event",
            error,
        });
    }
};
// 2. menyimpan data
export const createEvent = async (req, res) => {
    try {
        const { name, categoryId, speakerId, location, dateEvent, description, } = req.body;
        const newEvent = await prisma.event.create({
            data: {
                name,
                categoryId: Number(categoryId),
                speakerId: Number(speakerId),
                location,
                dateEvent: new Date(dateEvent),
                description,
            },
        });
        res.status(201).json({
            message: "Event berhasil dibuat",
            data: newEvent,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Gagal membuat event",
            error,
        });
    }
};
// 3. menampilkan data berdasarkan id
export const eventById = async (req, res) => {
    try {
        const { id } = req.params;
        const event = await prisma.event.findUnique({
            where: {
                id: Number(id),
            },
            include: {
                category: true,
                speaker: true,
            },
        });
        if (!event) {
            return res.status(404).json({
                message: "Event tidak ditemukan",
            });
        }
        res.json(event);
    }
    catch (error) {
        res.status(500).json({
            message: "Gagal mengambil event",
            error,
        });
    }
};
// 4. update event
export const updateById = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, categoryId, speakerId, location, dateEvent, description, } = req.body;
        const updateEvent = await prisma.event.update({
            where: {
                id: Number(id),
            },
            data: {
                name,
                categoryId: Number(categoryId),
                speakerId: Number(speakerId),
                location,
                dateEvent: new Date(dateEvent),
                description,
            },
        });
        res.json({
            message: "Event berhasil diupdate",
            data: updateEvent,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Gagal update event",
            error,
        });
    }
};
// 5. delete event
export const deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.event.delete({
            where: {
                id: Number(id),
            },
        });
        res.json({
            message: "Event berhasil dihapus",
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Gagal menghapus event",
            error,
        });
    }
};
//# sourceMappingURL=eventController.js.map