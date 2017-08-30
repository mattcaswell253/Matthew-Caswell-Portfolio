import { Component, OnInit } from '@angular/core';
import { ContractService } from '../contract.service';
import { Contract } from '../contract.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContractService]
})
export class ContactComponent implements OnInit {

  constructor(private contractService: ContractService) { }

  ngOnInit() {
  }

  submitForm(name: string, email: string, comment: string) {
    var newContract: Contract = new Contract(name, email, comment);
    this.contractService.addContract(newContract);
  }

}
