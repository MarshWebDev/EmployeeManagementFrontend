import { Employee } from "../model/employee"

export interface Page {
        content: Employee[],
        pageable: {
            sort: {
                empty: boolean,
                unsorted: boolean,
                sorted: boolean
            },
            offset: number,
                pageNumber: number,
                pageSize: number,
                unpaged: boolean,
                paged: boolean
        },
        last: boolean,
        totalPages: number,
        totalElements: number,
        size: number,
        number: number,
        sort: {
            empty: boolean,
            unsorted: boolean,
            sorted: boolean
        },
        first: boolean,
        numberOfElements: number,
        empty: boolean
        }
