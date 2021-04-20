interface RNG {
  fetchData: () => Promise<number>;
}

export const randomNumberService: RNG = {
  fetchData: async (): Promise<number> => Math.floor(Math.random() * 100),
};
