import { queryConfig } from '@api/config';
import db from '@utils/firebase';
import firebase from 'firebase/app';
import { useQuery } from 'react-query';

export interface IFetchPostsParams {
  lang: string;
}

export interface IPostsData {
  title: string;
  link: string;
  lang: string;
  image: string;
  created_at: any;
}

export interface IFetchPostsResult {
  id: string;
  data: firebase.firestore.DocumentData | IPostsData;
}

export const fetchPosts = (
  params: IFetchPostsParams,
): Promise<IFetchPostsResult[]> => {
  return new Promise((resolve, reject) => {
    try {
      db.collection('blog')
        .where('lang', '==', params.lang)
        .orderBy('created_at', 'desc')
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

export const usePosts = (params: IFetchPostsParams) => {
  return useQuery(['blog', params], () => fetchPosts(params), {
    ...queryConfig,
    enabled: params.lang,
  });
};
