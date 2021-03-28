import { queryConfig } from '@api/config';
import db from '@utils/firebase';
import firebase from 'firebase/app';
import { useQuery } from 'react-query';

export interface ICareerData {
  title: string;
  logo: string;
  type: string;
  company: string;
  company_website: string;
  location: string;
  start_date: Date;
  end_date: Date;
}

export interface IFetchCareerResult {
  id: string;
  data: firebase.firestore.DocumentData | ICareerData;
}

export const fetchCareer = (): Promise<IFetchCareerResult[]> => {
  return new Promise((resolve, reject) => {
    try {
      db.collection('career')
        .orderBy('start_date', 'desc')
        .onSnapshot((snapshot) => {
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

export const useCareer = () => {
  return useQuery('career', () => fetchCareer(), queryConfig);
};
