import db from '../../lib/database/dbconnector';

export default async (req, res) => {
    if(req.method == "GET") {
        await res.status(200).json(
            await db.select("*").from("Version").orderBy("Ver")
        );
    } else if (req.method === "POST") {
        await res.status(200).json(
            await db.insert(req.body).into("Version")
        );
    } else if (req.method === "PUT") {
        await res.status(200).json(
            await db.update("Version").where(req.body)
        );
    } else if (req.method === "DELETE") {
        return res.status(200).json({ id: 1, message: "Chamou o método DELETE" });
    } else {
        return res.status(404).json({ id: 1, message: "Método não permitido." });
    }
}