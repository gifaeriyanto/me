import { QueryConfig, TypedQueryFunctionArgs } from 'react-query';

export const queryConfig: QueryConfig<any, TypedQueryFunctionArgs> = {
  refetchOnWindowFocus: false,
};
