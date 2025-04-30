export interface Chore {
    id: string
    title: string
    notes: string
    frequency: string
    startDate: string
    assignee: Assignee | null
    lastCheckIn?: string | null
    listName?: string
}

interface Assignee {
    id: string
    name: string
}