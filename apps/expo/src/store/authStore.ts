import * as SecureStore from 'expo-secure-store';
import { create } from 'zustand';
import { createJSONStorage, persist, StateStorage } from 'zustand/middleware';

type Credentials = {
  email: string;
  password: string;
  name: string;
};

type AuthState = {
  isLoggedIn: boolean;
  email: string;
  name: string;
  login: (email: string) => void;
  logout: () => void;
  signup: (params: Credentials) => void;
};

function customSecureStorage(): StateStorage {
  return {
    getItem: (name) => SecureStore.getItemAsync(name),
    setItem: (name, value) => SecureStore.setItemAsync(name, value),
    removeItem: (name) => SecureStore.deleteItemAsync(name),
  };
}

const useAuthStore = create(
  persist((set, get) => ({
    
  }), {
    name: 'authStorage', // name of the item in the storage (must be unique)
    storage: createJSONStorage(() => customSecureStorage()), // (optional) by default, 'localStorage' is used
  }),
);
