import { getFirestore } from "firebase/firestore/lite";
import useFirebaseApp from "./useFirebaseApp";

useFirebaseApp();
const db = getFirestore();
export const useFirestore = () => db;
