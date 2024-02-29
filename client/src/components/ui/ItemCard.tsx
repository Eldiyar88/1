import React from "react";
import { Card, CardBody, Text, Image, CardFooter, Button } from '@chakra-ui/react'
import type { ItemType } from "../../types/itemTypes";

type ItemCardPropsType = {
    item: ItemType;
    deleteHandler: (id: number, cat_id: number) => void;
};

function ItemCard({ item, deleteHandler }: ItemCardPropsType): JSX.Element {
  return (
    <Card>
      <Image height={400} objectFit='cover' src={`http://localhost:3001/img/${item.path}`} />
      <CardBody>
        <Text>{item.description}</Text>
      </CardBody>
      <CardFooter>
        <Button onClick={() => deleteHandler(item.id, item.cat_id)}>Delete</Button>
      </CardFooter>
    </Card>
  );
}
export default React.memo(ItemCard);