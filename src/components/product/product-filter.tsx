"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import Modal from "../globals/modal";
import { FetchUtils } from "@/lib/fetch-utils";
import { useQuery } from "@tanstack/react-query";
import { IOption } from "@/models/interfaces";
import { SORT_BY } from "@/data/filter-data";
import { cn } from "@/lib/utils";

interface IProductFilter {
  modalOpen: boolean;
  setModalOpen: Function;
}

const ProductFilter = ({ modalOpen, setModalOpen }: IProductFilter) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");
  const order = searchParams.get("order");
  const sortBy = searchParams.get("sort_by");


  const createQueryString = useCallback(
    (paramsObj: { [key: string]: string }) => {
      const params = new URLSearchParams(searchParams.toString());
      Object.keys(paramsObj).forEach((key) => {
        params.set(key, paramsObj[key]);
      });
      return params.toString();
    },
    [searchParams]
  );

  // Categories Data
  const { data: categoriesData, isLoading: categoriesLoading } = useQuery({
    queryFn: () => FetchUtils.getCategories(),
    queryKey: ["categories-data"],
  });

  return (
    <>
      <aside className="sticky hidden xl:flex flex-col top-[71px] h-[calc(100vh-71px)] w-[210px] overflow-auto scroll-hidden mr-6 py-[18px]">
        <h3 className="text-black select-none font-semibold px-4 underline underline-offset-2 mb-2">
          CATEGORIES
        </h3>

        {categoriesData?.map((obj: any, idx: number) => {
          const isActive = filter === obj.slug;

          return (
            <button
              key={idx}
              onClick={() => {
                router.push("?" + createQueryString({ filter: obj.slug }));
              }}
              className={cn(
                "bg-white text-left hover:bg-pf-light-gray py-2 px-4",
                isActive && "bg-pf-light-gray"
              )}
            >
              {obj.name}
            </button>
          );
        })}

        <h3 className="text-black select-none font-semibold px-4 underline underline-offset-2 mt-4 mb-2">
          SORT BY
        </h3>
        {SORT_BY.map((obj, idx) => {
          const isActive = order == obj.order && sortBy == obj.sortBy;
          return (
            <button
              key={idx}
              onClick={() => {
                router.push(
                  "?" +
                    createQueryString({ sort_by: obj.sortBy, order: obj.order })
                );
              }}
              className={cn(
                "bg-white text-left hover:bg-pf-light-gray py-2 px-4",
                isActive && "bg-pf-light-gray"
              )}
            >
              {obj.label}
            </button>
          );
        })}
      </aside>
      <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        title="Minimalist"
      >
        <div className="flex flex-col items-start gap-10">
          {[...new Array(10)].map((_, idx) => {
            return (
              <button
                onClick={() => {
                  router.push(
                    "?" + createQueryString({ filter: idx.toString() })
                  );
                }}
                className="bg-white text-left hover:bg-slate-200 rounded-lg py-2 px-4"
              >
                THist ist a
              </button>
            );
          })}
        </div>
      </Modal>
    </>
  );
};

export default ProductFilter;
