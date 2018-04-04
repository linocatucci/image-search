import {Component, Injectable, OnInit} from '@angular/core';
import {ImageService} from '../shared/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  images: any[];
  searchQuery;
  imageFound = false;

  constructor(private _imageService: ImageService) {
  }

  ngOnInit() {
  }

  onSearchImages(query: string) {
    console.log('SearchQuery: ' + this.searchQuery);
    return this._imageService.getImage(query)
      .subscribe(
        (data: any[]) => {
          console.log('Data van cmp');
          this.handleSuccess(data);
        },
        (error) => {
          console.log(error);
        },
        () => {
          console.log('Request to PixaBay completed!');
        }
      );
  }

  handleSuccess(data) {
    this.imageFound = true;
    console.log(data.hits);
    this.images = data.hits;
    console.log(this.images);
  }

  handleError(data) {
    console.log(data);
  }
}
