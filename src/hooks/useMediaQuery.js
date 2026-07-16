import { useEffect, useState } from "react";

function useMediaQuery(query) {
  const getMatches = () => window.matchMedia(query).matches;

  const [matches, setMatches] = useState(getMatches);

  useEffect(() => {
    const media = window.matchMedia(query);

    const listener = (e) => setMatches(e.matches);

    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

export default useMediaQuery;