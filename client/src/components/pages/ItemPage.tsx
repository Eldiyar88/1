import React from "react";
import ItemForm from "../ui/ItemForm";
import AppModal from "../ui/AppModal";
import useItems from "../../hooks/useItems";
import CategoryAndItems from "../ui/CategoryAndItems";

export default function ItemPage(): JSX.Element {

  const { catAndItm, submitHandler, deleteHandler } = useItems()
  return (
    <div>
      <AppModal buttonName='Добавить'>
        <ItemForm submitHandler={submitHandler} category={catAndItm}/>
      </AppModal>
      {catAndItm.map((el) => (
      <CategoryAndItems key={el.id} oneCategory={el} deleteHandler={deleteHandler} />) )}
    </div>
    );
}
