import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  imports: [CommonModule], 
  providers: [CommonModule]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  // firestore: Firestore = inject(Firestore)
  // items$: Observable<any[]>;

  // constructor() {
  //   const aCollection = collection(this.firestore, 'items')
  //   this.items$ = collectionData(aCollection);
  // }
}