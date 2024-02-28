import axios from 'axios';
import { type CategoryWithItemsType, type ItemType } from '../types/itemTypes';

const apiInstance = axios.create({
  baseURL: 'http://localhost:3001/api'
});

class ApiService {
  static apiInstance = apiInstance;

  static getItems = async (): Promise<CategoryWithItemsType[]> =>
    this.apiInstance<CategoryWithItemsType[]>('/item').then((res) => res.data);

  static addItem = async (data: FormData): Promise<ItemType> =>
    this.apiInstance.post<ItemType>('/item', { data }).then((res) => res.data);

  static deleteItem = async (id: number): Promise <void> => this.apiInstance.delete('/item');
}

export default ApiService;
