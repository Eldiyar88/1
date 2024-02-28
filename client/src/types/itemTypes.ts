export type ItemType = {
    id: number;
    name: string;
    description: string;
    price: number;
    cat_id: number;
    path: string;
};

export type CategoryWithItemsType = {
    id: number;
    category: string;
    Items: ItemType[];
};

export type SubmitItemType = {
    name: HTMLInputElement;
    description: HTMLInputElement;
    price: HTMLInputElement;
    cat_id: HTMLInputElement;
    file: HTMLInputElement & { files: FileList};
};