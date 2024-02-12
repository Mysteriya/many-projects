export type TypeItems = {
    title: string,
    body: string,
    id: number,
    userId: number
}

export type TypeSortItems = {
    title: string,
    body: string,
    id: number,
    userId: number
}
  
export type TypeEditTodo = {
    title?: string
    body?: string
    id?: number
}
  
export type TypeIDTodo = {
    id: number,
    index: number
}

export interface IInitialStateTodos {
    items: TypeItems[],
    sortItems: TypeSortItems[],
    
    count: number,
    itemID: TypeIDTodo,
}