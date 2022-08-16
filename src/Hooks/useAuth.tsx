import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import useFirebaseApp from "./useFirebaseApp";

interface IAuthContext {
  login: (email: string, password: string) => void;
  logout: () => Promise<void>;
  user: User | null | undefined;
  loading: boolean;
  error: Error | undefined;
  isLoggedIn: boolean;
}

const authContext = createContext<IAuthContext>({
  login: (email: string, password: string) => {},
  logout: () => new Promise<void>(() => {}),
  user: undefined,
  loading: false,
  error: undefined,
  isLoggedIn: false,
});

export const AuthProvider: React.FC = ({ children }) => {
  const auth = useAuthProvider();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

const useAuthProvider = () => {
  const firebaseApp = useFirebaseApp();
  const auth = getAuth(firebaseApp);
  const [user, loading, error] = useAuthState(auth);
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(!!user);
  }, [user]);

  const login = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => signOut(auth);

  return { login, logout, user, loading, error, isLoggedIn };
};

export const useAuth = () => useContext(authContext);
