import React from "react";
import { Button, Link } from "../../atoms";

const Pagination = ({
  currentPage,
  allPageList,
  onClickPrev,
  onClickNext,
  onClickPage,
}) => {
  const thisPage = currentPage ? currentPage : 1;
  const listPage = allPageList ? allPageList : [1, 2, 3, 4, 5];
  return (
    <div className={`flex space-x-5 md:space-x-2`}>
      <Button
        primary={true}
        width={`px-1`}
        height={`py-0.5`}
        title={`Prev`}
        onClick={onClickPrev}
        disabled={thisPage === 1 ? true : false}
      />
      <div className={`space-x-2 hidden md:flex`}>
        {listPage.map((page, index) => (
          <Link
            key={index}
            textLink={page}
            customColor={
              page === thisPage
                ? `text-green-500 underline underline-offset-2`
                : "text-gray-500"
            }
            onClick={onClickPage}
          />
        ))}
      </div>
      <Button
        primary={true}
        width={`px-1`}
        height={`py-0.5`}
        title={`Next`}
        disabled={thisPage === listPage.length ? true : false}
        onClick={onClickNext}
      />
    </div>
  );
};

export default Pagination;
