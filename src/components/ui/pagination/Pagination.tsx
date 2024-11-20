import React from "react";

import {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationRoot,
} from "./components";

const getPaginationRange = (currentPage: number, totalPages: number) => {
  const ELLIPSIS_CODE_NUMBER = -1;
  // Number of pages each side, starting from current page
  const sideRange = 2;

  const range = [1] as number[];
  const left = Math.max(2, currentPage - sideRange);
  const right = Math.min(totalPages - 1, currentPage + sideRange);

  if (left > 2) range.push(ELLIPSIS_CODE_NUMBER);

  for (let i = left; i <= right; i++) {
    range.push(i);
  }

  if (right < totalPages - 1) range.push(ELLIPSIS_CODE_NUMBER);

  if (totalPages > 1) range.push(totalPages);

  return range;
};

interface PaginationProps {
  currentPage: number;
  totalPages?: number;
}

export const Pagination = ({
  currentPage = 1,
  totalPages = 10,
}: PaginationProps) => {
  const paginationRange = getPaginationRange(currentPage, totalPages);

  return (
    <PaginationRoot>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className="min-w-fit px-2"
            href={`?page=${Math.max(currentPage - 1, 1)}`}
          />
        </PaginationItem>

        {paginationRange.map((page, index) => {
          if (page === -1) {
            return (
              <PaginationItem key={`ellipsis-${index}`}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }

          return (
            <PaginationItem key={`page-${page}`}>
              <PaginationLink
                href={`?page=${page}`}
                isActive={page === currentPage}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext
            className="min-w-fit px-2"
            href={`?page=${Math.min(currentPage + 1, totalPages)}`}
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationRoot>
  );
};
