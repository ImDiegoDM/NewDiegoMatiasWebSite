import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProfileService {

  constructor(private http:HttpClient) { }

  getProfillePicture():Promise<string>{
    return new Promise((resolve,reject)=>{
      this.http.get(environment.wpUrl+'profile_picture').subscribe((data:any)=>{
        resolve(data[data.length-1].acf.picture);
      },(err)=>{
        reject(err);
      });
    });
  }

  getDescription():Promise<{title:string,content:string}>{
    return new Promise((resolve,reject)=>{
      this.http.get(environment.wpUrl+'description').subscribe((data:any)=>{
        resolve({title:data[0].title.rendered,content:data[0].content.rendered});
      },(err)=>{
        reject(err);
      });
    });
  }

}
