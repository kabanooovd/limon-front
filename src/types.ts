export interface IItems {
  id: string,
  name: string,
  price: number,
  rating: number,
  image: string,
  category: string,
}

interface IMeasures {
  length?: string
  width?: string
  height?: string
}
export interface IItem extends IItems {
  description: string
  measures: IMeasures
}