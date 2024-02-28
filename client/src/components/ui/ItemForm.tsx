import React from "react";
import {
    FormControl,
    FormLabel,
    Input,
    Button,
  } from '@chakra-ui/react';
import type { SubmitItemType } from "../../types/itemTypes";

  type ItemFormPropsType = {
    submitHandler: (e: React.FormEvent<HTMLFormElement & SubmitItemType>) => void
  }

export default function ItemForm({ submitHandler }: ItemFormPropsType):JSX.Element {
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
    <Button mt={3} type="submit">Ok</Button>
  </form>
  );
}
