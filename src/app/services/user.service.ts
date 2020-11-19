import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { userUrl } from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getuserDetails() : Observable<User[]>{
    //TODO: Mapping the obtained result to our cartItem props. pipe() and map()
    return this.http.get<User[]>(userUrl+'.json');
  }
  addUser(user: User,len): Observable<any>{
    return this.http.put(userUrl+'/'+len+'.json',user);
  }

  UpdateUser(user, firstname, lastname, email, phoneNumber, password): Observable<any>{
    console.log(firstname);
    return this.http.patch(userUrl+'/'+user, {
      "firstname" : firstname,
      "lastname" : lastname,
      "email" : email,
      "phoneNumber" : phoneNumber,
      "password" : password
    })
  }
}
