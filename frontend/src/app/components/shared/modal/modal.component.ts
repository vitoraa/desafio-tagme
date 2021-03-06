import { Component, Injectable, Input, OnInit, TemplateRef, ViewChild } from '@angular/core'
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
@Injectable()
export class ModalComponent implements OnInit {
  @Input() title: string
  @Input() message: string
  @Input() buttonText: string
  @ViewChild('modal') private modalContent: TemplateRef<ModalComponent>
  private modalRef: NgbModalRef

  constructor (private modalService: NgbModal) { }

  ngOnInit (): void { }

  open () {
    this.modalRef = this.modalService.open(this.modalContent)
    this.modalRef.result.then()
  }

  close () {
    this.modalRef.close()
  }

  dismiss () {
    this.modalRef.dismiss()
  }
}