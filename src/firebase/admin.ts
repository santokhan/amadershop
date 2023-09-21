import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { fireStore } from "./firebase";

class Admin {
    col_customer = "customers"
    async readData(callBack: (list: any[]) => void) {
        const colRef = collection(fireStore, this.col_customer)

        await getDocs(colRef).then(res => {
            const list: any[] = []
            res.forEach(e => {
                const obj = e.data()
                obj.id = e.id

                if (obj.area == 100) {
                    obj.area = "Outside Dhaka"
                }
                if (obj.area == 60) {
                    obj.area = "Inside Dhaka"
                }

                list.push(obj)
            })
            callBack(list)
        })
    }
    async createData(data: any, callBack: () => void) {
        const colRef = collection(fireStore, this.col_customer)
        if (data) {
            await addDoc(colRef, data).then(res => {
                console.log(res);
                callBack()
            })
        }
    }
    async deleteData(id: string, callBack: () => void) {
        const docRef = doc(fireStore, this.col_customer, id)
        await deleteDoc(docRef,).then(res => {
            console.log(res);
            callBack()
        })
    }
}

const admin = new Admin()
export default admin;