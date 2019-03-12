import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NotFoundError, AppError } from '../common';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = "https://mighty-beach-73779.herokuapp.com/users";
  constructor(private http: HttpClient) { }

  login(username){
    return this.http.get(`${this.url}/${username}`)
    .pipe(catchError(this.handleError))
  }
  

  signup(resource){
    return this.http.post(this.url,resource)
    .pipe(catchError(this.handleError));
  }

  private handleError(error: Response){
    if((error instanceof NotFoundError)|| (error instanceof null))
      return throwError(new NotFoundError());
    return throwError(new AppError());
  }
}
