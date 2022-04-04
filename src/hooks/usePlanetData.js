import { useEffect } from 'react';

const usePlanetData = (requestApi, callback) => {
  useEffect(() => {
    requestApi()
      .then(({ results }) => callback(results));
  }, [callback, requestApi]);
};

export default usePlanetData;
