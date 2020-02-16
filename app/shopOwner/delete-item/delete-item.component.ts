import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css']
})
export class DeleteItemComponent implements OnInit {

  imageURL: string;
  uploadForm: FormGroup;

  constructor(public fb: FormBuilder) {
    // Reactive Form
    this.uploadForm = this.fb.group({
      avatar: [null],
      name: ['']
    });
  }

  ngOnInit() {
  }

  // Image Preview
  showPreview(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.uploadForm.patchValue({
      avatar: file
    });
    this.uploadForm.get('avatar').updateValueAndValidity();

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  // Submit Form
  submit() {
    console.log(this.uploadForm.value);
    const uploadData = new FormData();
    // uploadData.append('avatar', this.selectedFile);
    // console.log(this.selectedFile);
    // this.http.post<any>('http://localhost:8080/absd/api/item', uploadData);

  }
}
