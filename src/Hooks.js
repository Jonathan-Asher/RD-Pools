import { useEffect } from 'react';

export function useDist(name, distState) {
  const[dist, setDist] = distState;
  
  useEffect(() => {
    const handleScroll = () => setDist({ ...dist , [name]: document.getElementById(name).getBoundingClientRect().y});
    if(!dist[name]) {
      handleScroll();
    }
    // if(dist[name])
    //   console.log(name, dist[name]);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dist[name]]);
}