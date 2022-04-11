import Grid from "../components/Grid/Grid";
import { Search } from "../components/Search/Search";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";
import { Cover } from "../components/Cover/Cover";

export default function LandingPage() {
  const query = useQuery();
  const search = query.get("search");
  const debouncedSearch = useDebounce(search, 300)

  return (
    <div>
      <Cover />
      <Search />
      <Grid key={debouncedSearch} search={debouncedSearch} />
    </div>
  )
}

