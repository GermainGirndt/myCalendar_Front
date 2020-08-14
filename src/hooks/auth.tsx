import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/api';

interface logInCredentials {
  email: string;
  password: string;
}

interface RequestData {
  user: object;
  token: string;
}

interface AuthContextData {
  user: object;
  logIn(credentials: logInCredentials): Promise<void>;
  logOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<RequestData>(() => {
    const token = localStorage.getItem('@GoBarber:token');
    const user = localStorage.getItem('@GoBarber:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as RequestData;
  });

  const logIn = useCallback(async ({ email, password }) => {
    console.log('acessing api');
    const response = await api.post<RequestData>('sessions', {
      email,
      password,
    });
    console.log('acessing api 2');
    console.log(response.data);

    const { token, user } = response.data;

    localStorage.setItem('@GoBarber:token', token);
    localStorage.setItem('@GoBarber:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const logOut = useCallback(() => {
    localStorage.removeItem('@GoBarber:token');
    localStorage.removeItem('@GoBarber:user');

    setData({} as RequestData);
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ user: data.user, logIn, logOut }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export default AuthContext;
