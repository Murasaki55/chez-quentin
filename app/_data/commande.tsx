"use server"
import { neon } from "@neondatabase/serverless";

export async function Commande(id :number) {
    const sql = neon(`${process.env.DATABASE_URL}`);
    await sql`INSERT INTO orders (cocktail_id, guest_name) VALUES (${id},'')`;

    return
}