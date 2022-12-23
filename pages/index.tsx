import { useEffect, useState } from "react";
import { CategoryType, PostType } from "../types";
import { useRouter } from "next/router";
import * as data from "../data/blog.json";
import Layout from "../components/layout";
import SinglePost from "../components/single-post";
import { loadPosts } from "../lib/load-posts";
import { Search } from "../components/search";
import { Filter } from "../components/filter";

export async function getStaticProps() {
  const allPostsData = (await loadPosts("posts")) as unknown as PostType[];
  const allCategoriesData = data.categories;
  return {
    props: {
      allPostsData,
      allCategoriesData,
    },
  };
}

export default function Home({
  allPostsData,
  allCategoriesData,
}: {
  allPostsData: PostType[];
  allCategoriesData: CategoryType[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filteredData, setFilteredData] = useState(allPostsData);
  const [searchText, setSearchText] = useState("");
  const r = useRouter();
  useEffect(() => {
    async function fetchData() {
      if (r.query.search) {
        const newData = (await loadPosts(
          `search/${r.query.search}`
        )) as unknown as PostType[];
        setFilteredData(newData);
      } else {
        if (r.query.filter) {
          const newData = (await loadPosts(
            `filter/${r.query.filter}`
          )) as unknown as PostType[];
          setFilteredData(newData);
        } else {
          setFilteredData(allPostsData);
        }
      }
      setCurrentIndex(0);
    }
    fetchData();
  }, [r]);
  const length = Math.floor((filteredData.length - 1) / 3);
  const postsData = filteredData.slice(
    3 * currentIndex,
    3 * (currentIndex + 1)
  );

  const handlePagination = (operation: number) => {
    setCurrentIndex((prev) => prev + operation);
  };

  return (
    <Layout>
      <h1 className="text-3xl md:text-6xl">From The Blog</h1>
      <p className="text-xl md:text-2xl py-4 mb-8">
        Lorem Ipsum dolor sit ammet consectetur adipisicing elit, ipsa libera
        labore natus atque
      </p>
      <div className="flex flex-col md:flex-row w-4/5 justify-around mb-4">
        <Filter categoryData={allCategoriesData} />
        <Search searchText={searchText} setSearchText={setSearchText} />
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredData &&
          postsData.map((item: PostType) => (
            <SinglePost key={item.id} item={item} allCategoriesData={allCategoriesData} />
          ))}
      </ul>
      <div className="mt-8 flex justify-between w-full">
        <button
          className="p-8 border-solid border-2"
          disabled={currentIndex === 0}
          onClick={() => handlePagination(-1)}
        >
          Prev
        </button>
        <button
          className="p-8 border-solid border-2"
          disabled={currentIndex === length}
          onClick={() => handlePagination(1)}
        >
          Next
        </button>
      </div>
    </Layout>
  );
}
