export interface Chore {
    id: number
    title: string
    notes: string
    frequency: string
    startDate: string
    assignee: Assignee | null
    lastCheckIn?: string | null
    listName?: string
}

interface Assignee {
    id: number
    name: string
}