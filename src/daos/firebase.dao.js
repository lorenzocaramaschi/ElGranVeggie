import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";
import { firebaseConfig } from "../db/db.js"

export class FirebaseDao {
    constructor(collection) {
        this.collection = collection;
        this.dbConfig = firebaseConfig;
        this.db = getFirestore(initializeApp(this.dbConfig));
    }

    async create(docToAdd) {
        try {
            await addDoc(collection(this.db, this.collection), docToAdd)
            console.log('Data has been added.');
        } catch (err) {
            console.log(err);
        }
    }

    async getAll() {
        try {
            const querySnapshot = await getDocs(collection(this.db, this.collection));
            return querySnapshot.forEach((doc) => {
                doc.id;
            });
            

        } catch (err) {
            console.log(err);
        }
    }

    async update(productId, set) {
        try {
            const docUpdateRef = doc(this.db, `${this.collection}/${productId}`);
            await updateDoc(docUpdateRef, set);
            console.log("You have succesfully updated doc "+docUpdateRef);
        } catch (err) {
            console.log(err);
        }
    }

    async delete(idDelete) {
        try {
            const cartsRef = doc(this.db, `${this.collection}/${idDelete}`);
            await deleteDoc(cartsRef);
            console.log(`You have deleted ${cartsRef}`);
        } catch (err) {
            console.log(err);
        }
    }
}