import React from "react";

interface GridListProps {
  children: React.ReactNode;
}

export const GridListContainer: React.FC<GridListProps> = ({ children }) => (
  <main className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 sm:py-4 lg:py-8">
    {children}
  </main>
);

export const GridListContent: React.FC<GridListProps> = ({ children }) => (
  <ul
    role="list"
    className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
  >
    {children}
  </ul>
);

export const GridListItem: React.FC<GridListProps> = ({ children }) => (
  <li role="listitem" className="relative">
    {children}
  </li>
);
