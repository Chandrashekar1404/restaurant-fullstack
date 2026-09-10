import "./Pagination.css";

function Pagination({ currentPage, totalPages, setCurrentPage }) {
  const pagesPerGroup = 4;

  const currentGroup = Math.ceil(currentPage / pagesPerGroup);

  const startPage = (currentGroup - 1) * pagesPerGroup + 1;

  const endPage = Math.min(
    startPage + pagesPerGroup - 1,
    totalPages
  );

  const pageNumbers = [];

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const goNextGroup = () => {
    if (endPage < totalPages) {
      setCurrentPage(endPage + 1);
    }
  };

  const goPrevGroup = () => {
    if (startPage > 1) {
      setCurrentPage(startPage - pagesPerGroup);
    }
  };

  return (
    <div className="pagination">

      <button
        className="nav-btn"
        onClick={goPrevGroup}
        disabled={startPage === 1}
      >
        ← Previous
      </button>

      {pageNumbers.map((page) => (
        <button
          key={page}
          className={currentPage === page ? "active" : ""}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}

      <button
        className="nav-btn"
        onClick={goNextGroup}
        disabled={endPage === totalPages}
      >
        Next →
      </button>

    </div>
  );
}

export default Pagination;