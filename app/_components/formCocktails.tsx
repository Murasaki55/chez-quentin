"use client"
import { Cocktails } from "../_data/commande";
import { DeleteCocktail } from "../_data/commande";

export function CreateCocktails() {
    
    return (
        <div>
            <form className="column" action={async (formData) => {
            const name= formData.get("name") as string;
            const ingredients= formData.get("ingredients") as string;
            const image= formData.get("image") as string;
            const type = formData.get("type") as string;
            console.log(type)
            
            Cocktails(name, ingredients, image, type)

            }}>
                <label>Nom de la boisson</label>
                <input type="text" className="input" name="name"/>
                <label>Ingrédient (séparé d'une ',')</label>
                <textarea className="input" name="ingredients"/>
                <label>Type de boisson</label>
                <input type="text" className="input" list="typesSuggestions" placeholder="Type de boisson" name="type"></input>
                <datalist id="typesSuggestions">
                    <option value={"cocktail"}>Cocktail</option>
                    <option value={"mocktail"}>Mocktail</option>
                    <option value={"bomb"}>Bomb</option>
                    <option value={"beer"}>Bière</option>
                </datalist>
                <label>image_url</label>
                <input type="text" className="input" name="image"/>
                <button type="submit" className="btn-succes" >Ajouter la boisson</button>
            </form>
        </div>
    )
}
export function DeleteButton({ id }: { id: number }){
    return (
        <form action={async (formData) => {
            DeleteCocktail(id)
        
        }}>
            {/* <p>Boisson disponible ?</p>
            <input type="checkbox"/> */}
            <button type="submit" className="btn btn-danger" >Supprimer</button>
        </form>
    )
}