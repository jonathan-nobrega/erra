import { Chore } from "../chores/chore.interface"
import { People } from "../people/people.interface"

export interface List {
  id: string,
  title: string
  subtitle: string
  description: string
  category: string
  createdBy: People
  chores: Chore[]
}