import { useMutation } from '@tanstack/react-query';

export const useExampleMutation = () => {
  const doingSomething = () => {
    const coinflip = Math.random() < 0.5;
    if (coinflip) {
      throw new Error('Tails!');
    }
  };

  return useMutation({
    mutationFn: () => {
      return Promise.resolve(doingSomething());
    },
  });
};
