import { Button } from "./ui/button";
type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ totalPages, currentPage, onPageChange }:PaginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center gap-2 mt-8">
      {Array.from({ length: totalPages }, (_, idx) => (
        <Button
          key={idx + 1}
          className={`px-3 py-1 cursor-pointer, rounded ${
            currentPage === idx + 1
              ? "bg-gray-600 text-white"
              : "bg-gray-400 text-gray-100"
          }`}
          onClick={() => onPageChange(idx + 1)}
        >
          {idx + 1}
        </Button>
      ))}
    </div>
  );
};

export default Pagination;
