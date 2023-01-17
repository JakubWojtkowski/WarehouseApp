import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PathsAPIRespose } from '../../models/PathsAPIResponse';
import { Path } from '../../models/Path';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PathService {
  private apiUrl = 'http://localhost:9090/api/paths'


  constructor(private http:HttpClient) { }

  getPaths():  Observable<PathsAPIRespose>{
    return this.http.get<PathsAPIRespose>(this.apiUrl)
  }

  deletePath(path: Path): Observable<Path>{
      const url =  `${this.apiUrl}/${path._id}`;
      return this.http.delete<Path>(url);
  }

  addPath(path: Path): Observable<Path>{
    const url =  `${this.apiUrl}/post`;
    console.log(path);
    return this.http.post<Path>(url, path, httpOptions);
  }
}
