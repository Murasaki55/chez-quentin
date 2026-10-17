"use client"
import { Cocktails } from "../_data/commande";

export function CreateCocktails() {

    return (
        <div>
            <form className="column" action={async (formData) => {
            const name= formData.get("name") as string;
            const ingredients= formData.get("ingredients") as string;
            const image= formData.get("image") as string;
            
            Cocktails(name, ingredients, image)

            }}>
                <label>Nom du cocktail</label>
                <input type="text" className="input" name="name"/>
                <label>Ingrédient (séparé d'une ',')</label>
                <input type="text" className="input" name="ingredients"/>
                <label>image_url</label>
                <input type="text" className="input" name="image"/>
                <button type="submit" className="btn-succes" >Ajouter le cocktail</button>
            </form>
        </div>
    )
}