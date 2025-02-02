"use client";
import {
  Pagination as PaginationUI,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
const searchParamsKey = "pageNumber";
export function Pagination({
  total,
  pageSize = 24,
}: {
  total: number;
  pageSize?: number;
}) {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const handleQueryString = useCallback(
    (name: string, value: number) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value.toString());
      window.history.pushState(null, "", `?${params.toString()}`);
      setTimeout(() => {
        replace(`${pathname}?${params}`);
      }, 250);
    },
    [searchParams, pathname, replace]
  );
  const currentPage = parseInt(
    searchParams.get(searchParamsKey)?.trim() ?? "1",
    10
  );
  // const currentPage = isNaN(_currentPage) ? _currentPage : 1;
  if (isNaN(currentPage)) {
    const params = new URLSearchParams(searchParams);
    params.set("page", `0`);
    replace(`${pathname}?${params}`);
  }
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(total / pageSize); i++) {
    pageNumbers.push(i);
  }
  const isPrev = currentPage > 1;
  const isNext = currentPage < pageNumbers.length;
  const maxPageNum = 3; // Maximum page numbers to display at once
  const pageNumLimit = Math.floor(maxPageNum / 2); // Current page should be in the middle if possible
  const activePages = pageNumbers.slice(
    Math.max(0, currentPage - 1 - pageNumLimit),
    Math.min(currentPage - 1 + pageNumLimit + 1, pageNumbers.length)
  );
  const handleNextPage = () => {
    if (isNext) {
      //currentPage < pageNumbers.length
      handleQueryString(searchParamsKey, currentPage + 1);
      // setpage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (isPrev) {
      // currentPage > 1
      handleQueryString(searchParamsKey, currentPage - 1);
      // setpage(page - 1);
    }
  };

  // Function to render page numbers with ellipsis
  const renderPages = () => {
    const renderedPages = activePages.map((page, idx) => (
      <PaginationItem key={idx}>
        <PaginationLink
          isActive={currentPage === page}
          onClick={() => {
            handleQueryString(searchParamsKey, page);
          }}
          className="hover:cursor-pointer"
        >
          {page}
        </PaginationLink>
      </PaginationItem>
    ));

    // Add ellipsis at the start if necessary
    if (activePages[0] > 1) {
      renderedPages.unshift(
        <PaginationEllipsis
          key="ellipsis-start"
          // onClick={() => setpage(activePages[0] - 1)}
        />
      );
    }

    // Add ellipsis at the end if necessary
    if (activePages[activePages.length - 1] < pageNumbers.length) {
      renderedPages.push(
        <PaginationEllipsis
          key="ellipsis-end"
          // onClick={() =>
          //   setpage(activePages[activePages.length - 1] + 1)
          // }
        />
      );
    }
    return renderedPages;
  };
  return (
    total > pageSize && (
      <div className="data-selected:text-primary">
        <PaginationUI>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                aria-disabled={!isPrev}
                className="aria-disabled:pointer-events-none aria-disabled:opacity-50 cursor-pointer"
                onClick={handlePrevPage}
              />
            </PaginationItem>
            {renderPages()}
            <PaginationItem>
              <PaginationNext
                aria-disabled={!isNext}
                className="aria-disabled:pointer-events-none aria-disabled:opacity-50 cursor-pointer"
                onClick={handleNextPage}
              />
            </PaginationItem>
          </PaginationContent>
        </PaginationUI>
      </div>
    )
  );
}
