import { Products, columns } from './columns';
import { DataTable } from './data-table';
import { useEffect, useState } from 'react';
import PaginationBar from './pegination';
import Product from './products.json';

const TableData = () => {
  const [page, setPage] = useState(1);
  const [last, setLast] = useState(1);
  const [fetch, setFetch] = useState<boolean>(false);
  const [filteredProducts, setFilteredProducts] = useState<Products[]>([]);

  useEffect(() => {
    setPage(1);
  }, [fetch]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data: Products[] = Product.Product;
        // Calculate the start and end indices for the current page
        const startIndex = (page - 1) * 5;
        const endIndex = startIndex + 5;
        // Slice the data to get only the products for the current page
        setFilteredProducts(data.slice(startIndex, endIndex));
      } catch (err) {
        console.error(err);
      }
    };
    fetchUsers();
  }, [page, fetch]);

  useEffect(() => {
    const fetchLast = async () => {
      try {
        const products: Products[] = Product.Product;
        const data = products.length / 5;
        setLast(data);
      } catch (err) {
        console.error('Error Fetching Data');
      }
    };
    fetchLast();
  }, [fetch]);

  const handlePrev = () => {
    if (page > 1) {
      setPage((prevState) => prevState - 1);
    }
  };

  const handleNext = () => {
    if (page < last) {
      setPage((prevState) => prevState + 1);
    }
  };
  const handleSearchValueChange = (value: string) => {
    if (!value) {
      setFetch(!fetch);
    }
  };

  const handleClick = (currentPage: number) => {
    setPage(currentPage);
  };

  const handleSearch = () => {
    setFetch(!fetch);
  };

  return (
    <div className="flex flex-col justify-between bg-white">
      <DataTable
        columns={columns}
        onSearchClick={handleSearch}
        onSearchValueChange={handleSearchValueChange}
        data={filteredProducts}
      />
      <PaginationBar
        lastPage={last}
        currentPage={page}
        handlePrev={handlePrev}
        handleNext={handleNext}
        handleClick={handleClick}
      />
    </div>
  );
};

export default TableData;
