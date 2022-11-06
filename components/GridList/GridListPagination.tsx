import React from "react";
import Link from "next/link";
import { isEmpty } from "lodash";

import { GetCharacterListQuery } from "graphql-types/graphql";

const DEFAULT_PER_PAGE = 20;

interface PaginationInfoProps {
  start: number;
  end: number;
  count: number;
}

const PaginationInfoSection: React.FC<PaginationInfoProps> = ({
  count,
  end,
  start,
}) => (
  <p className="text-sm text-gray-700">
    Showing <span className="font-medium">{start}</span> to{" "}
    <span className="font-medium">{end}</span> of{" "}
    <span className="font-medium">{count}</span> results
  </p>
);

interface Props {
  currentPage: number;
  paginationInfo: NonNullable<GetCharacterListQuery["characters"]>["info"];
}

export const GridListPagination: React.FC<Props> = ({
  paginationInfo,
  currentPage,
}) => {
  if (isEmpty(paginationInfo)) {
    return null;
  }

  const hasPrev = paginationInfo.prev !== null;
  const hasNext = paginationInfo.next !== null;

  const prevURL = hasPrev
    ? `/?page=${paginationInfo.prev}`
    : `/?page=${currentPage}`;

  const nextURL = hasNext
    ? `/?page=${paginationInfo.next}`
    : `/?page=${currentPage}`;

  const start = (currentPage - 1) * DEFAULT_PER_PAGE + 1;
  const end = currentPage * DEFAULT_PER_PAGE;

  return (
    <nav
      className="flex items-center justify-between border-t border-gray-200 bg-white my-6 py-4 px-2"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <PaginationInfoSection
          start={start}
          end={end}
          count={paginationInfo.count!}
        />
      </div>
      <div className="flex flex-1 justify-between sm:justify-end">
        <Link
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          href={prevURL}
        >
          Previous
        </Link>
        <Link
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          href={nextURL}
        >
          Next
        </Link>
      </div>
    </nav>
  );
};
