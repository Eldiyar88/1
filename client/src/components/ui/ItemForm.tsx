import React from "react";
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Select
  } from '@chakra-ui/react';
import type { CategoryWithItemsType, SubmitItemType } from "../../types/itemTypes";

  type ItemFormPropsType = {
    submitHandler: (e: React.FormEvent<HTMLFormElement & SubmitItemType>) => void;
    category: CategoryWithItemsType[];
  }

function ItemForm({ submitHandler, category }: ItemFormPropsType):JSX.Element {
  return (
  <form onSubmit={submitHandler}>
    <FormControl>
      <FormLabel>Title</FormLabel>
      <Input type='text' name="name" />
    </FormControl>
    <FormControl>
      <FormLabel>Price</FormLabel>
      <Input type='number' name="price" />
    </FormControl>
    <FormControl>
      <FormLabel>Description</FormLabel>
      <Input type='text' name="description" />
    </FormControl>
    <FormControl>
      <FormLabel>Photo</FormLabel>
      <input type='file' name="file" />
    </FormControl>
    <FormControl>
      <FormLabel>Category</FormLabel>
      <Select name='cat_id' placeholder='Select category'>
        {category?.map((el) => (
            <option key={el.id} value={el.id}> 
            {el.category}
            </option>
        ))}
      </Select>
    </FormControl>
    <Button mt={3} type="submit">Ok</Button>
  </form>
  );
}
export default React.memo(ItemForm);
