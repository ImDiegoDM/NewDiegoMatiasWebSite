import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

interface Project{
  title:string;
  text:string;
  img_1?:string;
  img_2?:string;
  img_3?:string;
  img_4?:string;
  video?:string;
}

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

  getKnowledges():Promise<{title:string,imgUrl:string}[]>{
    return new Promise((resolve,reject)=>{
      this.http.get(environment.wpUrl+'knowledges?per_page=100&orderby=title&order=asc').subscribe((data:any[])=>{
        resolve(data.map((item)=>{
          return {title:item.title.rendered,imgUrl:item.acf.Image};
        }));
      },(err)=>{
        reject(err);
      });
    })
  }

  getTexts():Promise<{title:string,text:string,color:string[]}[]>{
    return new Promise((resolve,reject)=>{
      this.http.get(environment.wpUrl+'texts').subscribe(
        (response:any)=>{
          resolve(response.map((item)=>{
            return {title:item.title.rendered,text:item.content.rendered,color:[item.acf.color_1,item.acf.color_2,item.acf.color_3]}
          }));
        },(err)=>{
          reject(err);
        }
      )
    });
  }

  getContact():Promise<{title:string,text:string,color:string[]}>{
    return new Promise((resolve,reject)=>{
      this.http.get(environment.wpUrl+'contact').subscribe(
        (response)=>{
          resolve({title:response[0].title.rendered,text:response[0].content.rendered,color:[response[0].acf.color_1,response[0].acf.color_2,response[0].acf.color_3]});
        },(err)=>{
          reject(err);
        }
      )
    });
  }

  getProjects():Promise<Project[]>{
    return new Promise((resolve,reject)=>{
      this.http.get(environment.wpUrl+'posts?per_page=100&order=asc').subscribe(
        (response:any)=>{
          resolve(response.map((item)=>{
            return{
              title:item.title.rendered,
              text:item.content.rendered,
              img_1:item.acf.img_1,
              img_2:item.acf.img_2,
              img_3:item.acf.img_3,
              img_4:item.acf.img_4,
              video:item.acf.video
            }
          }));
        },(err)=>{
          reject(err);
        }
      )
    });
  }

}
