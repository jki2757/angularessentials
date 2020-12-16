import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class MediaItemService {
  constructor(private http: HttpClient) {}

  // mediaItems = [
  //   {
  //     id: 1,
  //     name: "Firebug",
  //     medium: "Series",
  //     category: "Science Fiction",
  //     year: 2010,
  //     watchedOn: 1294166565384,
  //     isFavorite: false,
  //   },
  //   {
  //     id: 2,
  //     name: "The Small Tall",
  //     medium: "Movies",
  //     category: "Comedy",
  //     year: 2015,
  //     watchedOn: null,
  //     isFavorite: true,
  //   },
  //   {
  //     id: 3,
  //     name: "The Redemption",
  //     medium: "Movies",
  //     category: "Action",
  //     year: 2016,
  //     watchedOn: null,
  //     isFavorite: false,
  //   },
  //   {
  //     id: 4,
  //     name: "Hoopers",
  //     medium: "Series",
  //     category: "Drama",
  //     year: null,
  //     watchedOn: null,
  //     isFavorite: true,
  //   },
  //   {
  //     id: 5,
  //     name: "Happy Joe: Cheery Road",
  //     medium: "Movies",
  //     category: "Action",
  //     year: 2015,
  //     watchedOn: 1457166565384,
  //     isFavorite: false,
  //   },
  // ];

  // get() {
  //   console.log(this.http.get<MediaItemResponse>("mediaitems"));
  //   return this.mediaItems;
  // }

  get(medium) {
    const getOptions = { params: { medium: medium } };
    //console.log(this.http.get<MediaItemResponse>("mediaitems"));
    return this.http.get<MediaItemResponse>("mediaitems", getOptions).pipe(
      map((response) => {
        return response.mediaItems;
      })
    );
  }

  add(mediaItem) {
    //this.mediaItems.push(mediaItem);
    return this.http.post("mediumitems", mediaItem);
  }

  delete(mediaItem) {
    // const index = this.mediaItems.indexOf(mediaItem);
    // if (index >= 0) {
    //   this.mediaItems.splice(index, 1);
    // }
    return this.http.delete(`mediaitems/${mediaItem.id}`);
  }
}

export interface MediaItem {
  id: number;
  name: string;
  medium: string;
  category: string;
  year: number;
  watchedOn: number;
  isFavorite: boolean;
}

interface MediaItemResponse {
  mediaItems: MediaItem[];
}
