import { Chore } from "../chores/chore.interface"

export interface List {
  id: number,
  title: string
  subtitle: string
  description: string
  category: string
  chores: Chore[]
}