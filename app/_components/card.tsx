
export const instant = false
import { neon } from "@neondatabase/serverless";
import "../card.css";
import Image from 'next/image'
import image from '../arthur.png'

export default async function Card() {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const cocktails = await sql`SELECT * FROM cocktails`;

    return (
        <div>
            <ul>
            {cocktails.map((c) => (
                <li className="card row" key={c.id}>
                    <div>
                        <h1 className="card-title">{c.name}</h1>
                        <p className="itemsCard">Ingrédient : {c.ingredients.join(", ")}</p>
                        <button className="btn btn-success">Commander</button>
                    </div>
                    <Image
                        src={image}
                        width={200}
                        height={200}
                        alt="Picture of the author"
                    />
                </li>
            ))}
            </ul>
        </div>
    )
}