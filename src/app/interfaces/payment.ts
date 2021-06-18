export interface Payment {
    id: number
    userId: number | null
    paymentType: string
    cardNumber: string
    expirationDate: string
    cvv: number
}