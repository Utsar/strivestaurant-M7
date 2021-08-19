import AllComment from "./AllComment"

export default interface AllDish {
  id: number
  name: string
  image: string
  category: string
  label: string
  price: string
  description: string
  comments: AllComment[]
}