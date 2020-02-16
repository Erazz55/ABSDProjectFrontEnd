import {Component, OnInit, ViewChild} from '@angular/core';
import {ItemService} from '../shopService/item.service';
import {Item} from '../shopDTO/item';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  selectedItem: any;
  // @ViewChild('frmItem') frmItem: NgForm;
  AddItemForm: FormGroup;
  submitted = false;
  selectedFile: any;
  public event1;
  imgURL: any;

  constructor(private formBuilder: FormBuilder, private itemService: ItemService, private router: Router) { }

  ngOnInit() {
    this.AddItemForm = this.formBuilder.group({
      itemName: ['', [Validators.required]],
      itemPrice: ['', [Validators.required]]
    });
  }

  get f() { return this.AddItemForm.controls; }

  // Image Preview
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

  goProfile() {
    this.router.navigate(['/shopOwnerDashbord']);
  }

  goViewItems() {
    this.router.navigate(['/viewItem']);
  }

  goDeleteItem() {
    this.router.navigate(['/myTest']);
  }

  saveItem(): void {
    this.submitted = true;
    this.selectedItem = new Item(this.AddItemForm.value.itemName, this.AddItemForm.value.itemPrice, 1);
    if (this.AddItemForm.invalid) {
      return;
    }
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('item', this.selectedItem);
   //  console.log(formData.get(this.selectedFile));
    this.itemService.saveItem(formData).subscribe(isOk => {
      if (!isOk) {
        alert('Item has been saved successfully.');
        // this.router.navigate(['/viewItem']);
      } else {
        alert('Faild to save item.');
      }
    });
  }

}
