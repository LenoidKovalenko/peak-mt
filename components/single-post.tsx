import { PostType, CategoryType } from "../types";
import Image from "next/image";

export default function SinglePost({
  item,
  allCategoriesData,
}: {
  item: PostType;
  allCategoriesData: CategoryType[];
}) {
  return (
    <li
      className="flex flex-col justify-between border-solid border-2 border-gray-500 rounded-lg text-center hover:-translate-y-6"
    >
      <div>
        <Image
          className="mx-auto"
          width={500}
          height={500}
          src={item.imageUrl}
          alt={item.slug}
        />
        <span className="text-xl">{item.title}</span>
        <br />
        <span className="text-base">{item.excerpt}</span>
        <br />
      </div>
      <div>
        {item.categories.map((categoryId) => {
          let categoryName = "";
          allCategoriesData.forEach((categoryItem) => {
            if (categoryItem.id === categoryId) {
              categoryName = categoryItem.name;
            }
          });
          return <span key={categoryId} className="px-4 text-xl">{categoryName}</span>;
        })}
      </div>
    </li>
  );
}
