"use client";
import styles from "@/app/ui/dashboard/search/search.module.css";
import { useParams, usePathname, useRouter } from "next/navigation.js";
import { MdSearch } from "react-icons/md";
const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = (e) => {
    const params = new URLSearchParams(searchParams);
    params.set("q", e.target.value);
    replace(`${pathname}?${params}`);
  };

  return (
    <div className={styles.container}>
      <MdSearch />
      <input type="text" placeholder={placeholder} className={styles.input} />
    </div>
  );
};

export default Search;
