import { queryConfig } from '@api/config';
import db from '@utils/firebase';
import firebase from 'firebase/app';
import { useQuery } from 'react-query';

export interface IFetchTalksParams {
  year: string | number;
}

export interface ITalksData {
  title: string;
  link: string;
  date: any;
  event: string;
  organizer: string;
  organizer_website: string;
}

export interface IFetchTalksResult {
  id: string;
  data: firebase.firestore.DocumentData | ITalksData;
}

export const fetchTalks = (
  params: IFetchTalksParams,
): Promise<IFetchTalksResult[]> => {
  return new Promise((resolve, reject) => {
    try {
      db.collection('talks')
        .orderBy('date', 'desc')
        .where('date', '>', new Date(`${params.year.toString()}-01-01`))
        .where('date', '<', new Date(`${params.year.toString()}-12-31`))
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

export const useTalks = (params: IFetchTalksParams) => {
  return useQuery(['talks', params], () => fetchTalks(params), {
    ...queryConfig,
    enabled: params.year,
  });
};
