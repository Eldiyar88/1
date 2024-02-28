import type React from "react";
import { useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import type { CategoryWithItemsType, SubmitItemType } from "../types/itemTypes";
import ApiService from "../services/apiService";

export default function useItems(): {
    catAndItm: CategoryWithItemsType[];
    submitHandler: (e: React.FormEvent<HTMLFormElement & SubmitItemType>) => void
} {

    const [catAndItm, setCatAndItm] = useState<CategoryWithItemsType[]>([]);
    const toast = useToast();

    useEffect(() => {
        void ApiService.getItems()
        .then((res) => setCatAndItm(res))
    }, []);

const submitHandler = (e: React.FormEvent<HTMLFormElement & SubmitItemType>): void => {
    e.preventDefault();

    const {name, file, price, description, cat_id} = e.currentTarget;

    if(!name.value || !price.value || !description.value || !cat_id.value || !file.files[0]) {
        toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
        });
        return
    }

    const formData = new FormData();
    formData.append('name', name.value);
    formData.append('price', price.value);
    formData.append('cat_id', cat_id.value);
    formData.append('file', file.files[0]);
    formData.append('description', description.value);

    void ApiService.addItem(formData).then((data) => {
         setCatAndItm((prev) => prev.map((el) => {
            if(el.id === data.cat_id) {
               return { ...el, Items: [...el.Items, data]};
            }
            return el;
        }))
    })
}

  return {
    catAndItm,
    submitHandler,
  };
}
