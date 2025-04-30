import { Injectable } from "@angular/core";
import { delay, of } from "rxjs";
import listsData from "../../stubdata/lists.json";

@Injectable({ providedIn: "root" })
export class ListsService {
    getLists() {    
        // mock data change to proper api call
        return of(listsData).pipe(delay(2000));
    }
}