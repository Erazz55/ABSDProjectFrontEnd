import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'multipart/form-data'
  })
};

@Component({
  selector: 'app-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.css']
})
export class MyTestComponent implements OnInit {


  public selectedFile;
  public event1;
  imgURL: any;
  receivedImageData: any;
  base64Data: any;
  convertedImage: any;


  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  public  onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    // Below part is used to display the selected image
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };
  }
// , {headers: new HttpHeaders().set('Content-Type', 'multipart/form-data')}
    onSubmit() {
      const uploadData = new FormData();
      uploadData.append('file', this.selectedFile);
      console.log(this.selectedFile);
      this.http.post<any>('http://localhost:8080/absd/api/item', uploadData)
        .subscribe(resp => {
          if (resp === 'Success') {
            alert('Success');
          }
        });

  }


}
