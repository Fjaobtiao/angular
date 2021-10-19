import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Diary } from '../interfaces/diary';

@Injectable({
  providedIn: 'root',
})
export class DiariosService {
  constructor(private authService: AuthService, private db: AngularFirestore) {}

  getDiarios(ownerKey: string) {
    return this.db
      .collection<Diary>('diaries', (ref) =>
        ref.where('ownerKey', '==', ownerKey)
      )
      .snapshotChanges()
      .pipe(
        map((snapshots) => {
          return snapshots.map((doc) => {
            return {
              key: doc.payload.doc.id,
              ...doc.payload.doc.data(),
            } as Diary;
          });
        })
      );
  }

  getAllDiarios() {
    return this.db.collection<Diary>('diaries').valueChanges();
  }

  addDiario(diary: Diary) {
    diary.ownerKey = this.authService.userData.uid!;
    diary.author = this.authService.userData.displayName;
    return this.db.collection<Diary>('diaries').add(diary);
  }

  updateDiario(diary: Diary) {
    return this.db.collection('diaries').doc(diary.key).update(diary);
  }

  deletedDiario(diary: Diary) {
    this.db.collection('diaries').doc(diary.key).delete();
  }
}