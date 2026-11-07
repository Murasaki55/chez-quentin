
export const instant = false
import { neon } from "@neondatabase/serverless";
import "../card.css";
import Image from 'next/image'
import CommanderButton from "./commanderButton";

export default async function Card() {
    
    const sql = neon(`${process.env.DATABASE_URL}`);
    const cocktails = await sql`SELECT * FROM cocktails WHERE type = 'cocktail' `;
    const mocktails = await sql`SELECT * FROM cocktails WHERE type = 'mocktail'`;
    const bomb = await sql`SELECT * FROM cocktails WHERE type = 'bomb'`;
    const beer = await sql`SELECT * FROM cocktails WHERE type = 'beer'`;

    return (
        <div>
            {cocktails.length > 0 && (
                <details name="requirements">
                    <summary>Cocktails</summary>
                    <ul>
                        {cocktails.map((c) => (
                            <li className="card cock row" key={c.id}>
                                <div>
                                    <h1 className="card-title">{c.name}</h1>
                                    <p className="itemsCard">Ingrédient : {c.ingredients.join(", ")}</p>
                                    <CommanderButton cocktailId={c.id} />
                                </div>
                                <Image
                                    src={c.image_url}
                                    width={200}
                                    height={200}
                                    alt="Picture of the cocktail"
                                />
                            </li>
                        ))}
                    </ul>
                </details>
            )}

            {mocktails.length >0 && (
                <details name="requirements">
                    <summary>Cocktails sans alcool</summary>
                    <ul>
                        {mocktails.map((c) => (
                            <li className="card row" key={c.id}>
                                <div>
                                    <h1 className="card-title">{c.name}</h1>
                                    <p className="itemsCard">Ingrédient : {c.ingredients.join(", ")}</p>
                                    <CommanderButton cocktailId={c.id} />
                                </div>
                                <Image
                                    src={c.image_url}
                                    width={200}
                                    height={200}
                                    alt="Picture of the cocktail"
                                />
                            </li>
                        ))}
                    </ul>
                </details>
            )}
            
            {bomb.length >0 && (
                <details name="requirements">
                    <summary>Les bombs</summary>
                    <ul>
                        {bomb.map((c) => (
                            <li className="card row" key={c.id}>
                                <div>
                                    <h1 className="card-title">{c.name}</h1>
                                    <p className="itemsCard">Ingrédient : {c.ingredients.join(", ")}</p>
                                    <CommanderButton cocktailId={c.id} />
                                </div>
                                <Image
                                    src={c.image_url}
                                    width={200}
                                    height={200}
                                    alt="Picture of the cocktail"
                                />
                            </li>
                        ))}
                    </ul>
                </details>
            )}

            {beer.length > 0 && (
                <details name="requirements">
                    <summary>Bières</summary>
                    <ul>
                        {beer.map((c) => (
                            <li className="card row" key={c.id}>
                                <div>
                                    <h1 className="card-title">{c.name}</h1>
                                    <p className="itemsCard">Ingrédient : {c.ingredients.join(", ")}</p>
                                    <CommanderButton cocktailId={c.id} />
                                </div>
                                <Image
                                    src={c.image_url}
                                    width={200}
                                    height={200}
                                    alt="Picture of the cocktail"
                                />
                            </li>
                        ))}
                    </ul>
                </details>
            ) }
        </div>
    )
}