"use client";
import ProductCard from "@/components/product/product-card";
import ProductFilter from "@/components/product/product-filter";
import { FetchUtils } from "@/lib/fetch-utils";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { useEffect, useMemo, useState } from "react";
import ProductCardSkeleton from "@/components/product/static/product-card-skeleton";
import ProductsSkeleton from "@/components/product/static/products-skeleton";
import { useSearchParams } from "next/navigation";
import Button from "@/components/buttons/button";
import Chip from "@/components/globals/chip";
import Link from "next/link";
import { Utils } from "@/lib/utils";
import { SORT_BY } from "@/data/filter-data";

const Products = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");
  const sortBy = searchParams.get("sort_by");
  const order = searchParams.get("order");

  const sortFilter = SORT_BY.find((obj) => obj.order == order && obj.sortBy == sortBy);
  
  const { ref, inView } = useInView();

    // Products Data
  const { data, isLoading, fetchNextPage, isFetchingNextPage } =useInfiniteQuery({
      queryFn: FetchUtils.getProductsData,
      queryKey: ["products"],
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPage, lastPageParam) => {
        if (lastPage.length === 0) {
          return null;
        }

        return lastPageParam + 1;
      },
  });

  const ALL_PRODUCTS = useMemo(
    () => data?.pages.flatMap((user) => user),
    [data]
  );

  // Whenever the Intersection Occurs Fetch new Data
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  if (isLoading) {
    return <ProductsSkeleton />;
  }

  return (
    <>
      {/* Products Page Header */}
      <div className="text-center pb-10 text-[50px] font-semibold w-full">
        {filter ? Utils.cleanCategoryString(filter) : "ALL PRODUCTS"}
      </div>

      <div className="flex w-full">
        <ProductFilter modalOpen={modalOpen} setModalOpen={setModalOpen} />

        <div className="flex flex-col flex-1">
          <Button
            className="xl:hidden"
            variant="outlined"
            onClick={() => setModalOpen(true)}
          >
            Set Filter
          </Button>

          {/* Filters */}
          <div className="h-5 my-4 flex gap-4 items-center w-full">

            {filter && <Chip value={filter} />}

            {sortFilter && <Chip value={sortFilter.label as string} />}

            {(filter || sortBy) && (
              <Link href={"/products"} className="group flex flex-col">
                <span>Clear all</span>
                <div className="h-[1px] transition-[width] bg-black w-0 group-hover:w-full" />
              </Link>
            )}

          </div>

          <div className="grid w-full grid-cols-pf-product-sm xl:grid-cols-pf-product justify-between gap-x-4 xl:gap-x-8 gap-y-9 xl:justify-between">
            {ALL_PRODUCTS?.map((product) => {
              const {
                id,
                brand: brandName,
                title: productName,
                category,
                price,
                discountPercentage,
                images,
                rating,
              } = product;

              return (
                <ProductCard
                  key={id}
                  {...{
                    id: id.toString(),
                    brandName,
                    productName,
                    category,
                    price,
                    discountPercentage,
                    productImage: images[0],
                    rating,
                  }}
                />
              );
            })}

            {/* Skeleton */}
            {isFetchingNextPage &&
              [...new Array(5)].map((_, idx) => (
                <ProductCardSkeleton key={idx} />
              ))}
          </div>

          {/* Intersection collider */}
          <div ref={ref} className="min-h-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default Products;
