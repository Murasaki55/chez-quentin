export const instant = false
import Header from "../_components/header";
import Card from "../_components/cardOrders";
import DeleteButton from "../_components/deleteButton";
import { CreateCocktails } from "../_components/formCocktails";
import Drinks from "../_components/cardDrinks";
import "../admin.css";

export default async function Home() {
  return (
    <div>
      <Header/>
      <div className="body">
        <h1>Admin</h1>
        <h2 className="space">Les commandes</h2>
        <Card/>
        <DeleteButton/>
        <h2 className="space">Ajouter une boisson</h2>
        <CreateCocktails/>
        <h2 className="space">Gérer les boissons</h2>
        <Drinks/>
      </div>
    </div>

  );
}