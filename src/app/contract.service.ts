import { Injectable } from '@angular/core';
import { Contract } from './contract.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ContractService {

  contracts: FirebaseListObservable<any[]>;


  constructor(private database: AngularFireDatabase) {
  this.contracts = database.list('Contacts');
 }

 getContracts(){
   return this.contracts;
 }

 addContract(newContract: Contract) {
   this.contracts.push(newContract);
 }

}
