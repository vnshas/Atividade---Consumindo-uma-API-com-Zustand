import { create } from "zustand";
import { api } from "../services/api";

export interface INews {
    id:number,
    category:string,
    title: string,
    content:string,
    author: string,
}

interface INewsDataStore{
    loading: boolean,
    error: string,
    newsData: INews[],
    loadNewsData: () => Promise<void>,
} 


export const useNewsDataStore = create<INewsDataStore> ((set) => ({
    loading: false,
    error: "",
    newsData: [],
    loadNewsData: async () => {
        try {
            set({loading:true, error: ""})
            const {data} = await api.get<INews[]>("/news")
            set({newsData: data})
        } catch (error) {
            console.log(error)
            set({error: "Ocorreu um erro"})
        }finally {
            set({loading:false})
        }
    }
}))

