import { queryConfig } from '@api/config';
import db from '@utils/firebase';
import firebase from 'firebase/app';
import { useQuery } from 'react-query';

export interface IWorksData {
  title: string;
  link: string;
  description: string;
  featured?: boolean;
  award?: boolean;
}

export interface IFetchWorksResult {
  id: string;
  data: firebase.firestore.DocumentData | IWorksData;
}

export const fetchWorks = (): Promise<IFetchWorksResult[]> => {
  return new Promise((resolve, reject) => {
    try {
      db.collection('works').onSnapshot((snapshot) => {
        resolve(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          })),
        );
      });
    } catch (error) {
      reject(error);
    }
  });
};

export const useWorks = () => {
  return useQuery('works', () => fetchWorks(), queryConfig);
};
