import React from "react";
import { Card, CardBody, Text, Image } from '@chakra-ui/react'
import type { ItemType } from "../../types/itemTypes";

type ItemCardPropsType = {
    item: ItemType;
};

function ItemCard({ item }: ItemCardPropsType): JSX.Element {
  return (
    <Card>
      <Image src={`http://localhost:3001/img/${item.path}`} />
      <CardBody>
        <Text>{item.description}</Text>
      </CardBody>
    </Card>
  );
}
export default React.memo(ItemCard);