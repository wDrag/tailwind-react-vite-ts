import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/constants';

export const useExampleQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.EXAMPLE],
    queryFn: () => {
      return 'hello';
    },
  });
};
