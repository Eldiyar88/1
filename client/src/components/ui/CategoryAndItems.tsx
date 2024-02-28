import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import CategoryTitle from "./CategoryTitle";
import type { CategoryWithItemsType } from "../../types/itemTypes";
import ItemCard from "./ItemCard";

export type CategoryAndItemsPropsType = {
    oneCategory: CategoryWithItemsType
}

export default function CategoryAndItems({ oneCategory }: CategoryAndItemsPropsType): JSX.Element {
    console.log('+++++++++++>', oneCategory);
    
    return (
      <>
        <CategoryTitle category={oneCategory.category} />
        <SimpleGrid columns={[1,1,3]} spacing={5}>
          {oneCategory.Items.map((el) => (
            <ItemCard key={el.id} item={el} />
          ))}
        </SimpleGrid> 
      </>
    );
  }
