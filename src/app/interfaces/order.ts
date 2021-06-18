import { Item } from "./item";

export interface Order {
    id: number
    userId: number | null
    items: Item[]
    cost: number
    status: string
    remainingTime: number
}