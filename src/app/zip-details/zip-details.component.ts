import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ZipServiceService } from './zip-service.service';
import { ZipDetail } from './zip.model';

@Component({
  selector: 'app-zip-details',
  templateUrl: './zip-details.component.html',
  styleUrls: ['./zip-details.component.css']
})
export class ZipDetailsComponent implements OnInit {
  @ViewChild('ZipForm', { static: false }) public ZipForm: NgForm;
  postalCode: number;
  zipDetail: ZipDetail;
  constructor(private zipService: ZipServiceService) { }

  ngOnInit() {
  }

  searchZip(ZipForm: NgForm): void {
    if (this.postalCode != null) {
      this.zipService.GetZip(this.postalCode).subscribe(
        (zipDetail) => { this.zipDetail = zipDetail; },
        (error: any) => {
          alert(error.error.errors.postalCode);
          console.log(error);
          this.zipDetail = null;
          this.postalCode = null;
        }
      );
    }
  }

  Clear($event) {
    this.postalCode = null;
    this.zipDetail = null;
  }



}
