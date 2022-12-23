import React from "react";
import { CategoryType } from "../types"
import Router from "next/router";

export const Filter = ( { categoryData }: { categoryData: CategoryType[] }) => {
    const handleFilter = (e: React.FormEvent<HTMLSelectElement>) => {
        Router.push({
            pathname: "/",
            query: { filter: e.currentTarget.value},
          });
    }
    return(
        <div>
            <select className="border-solid border-2 mb-2 p-4" onChange={handleFilter}>
                <option value={0}>All Categories</option>
                {
                    categoryData && categoryData.map((item) => 
                        <option key={item.id} value={item.id}>
                            { item.name }
                        </option>
                    )
                }
            </select>
        </div>
    )
}