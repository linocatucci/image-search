import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class ImageService {

  private query: string;
  private API_url = environment.PIXABAY_API_url;
  private API_KEY = environment.PIXABAY_API_KEY;
  private URL = this.API_url + this.API_KEY + '&q=';
  private perPage = '&per_page=10';


  /*
  exmaple call :
  https://pixabay.com/api/?key=8581633-e77aef2f066ee6ddb18cc957c&q=yellow+flowers&image_type=photo
   */

  constructor(private http: HttpClient) {

  }

  getImage(query) {
    console.log('url: ' + this.URL + query + this.perPage);
    return this.http.get(this.URL + query + this.perPage)
      .map(
        (data) => {
          // console.log(data);
          return data;
        }
      );
  }
}
