/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useProductStore } from '../stores/useProductStore';
import ModalDetail from './ModalDetail';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const { products } = useProductStore();

  const handleSearch = (term) => {
    setSearchTerm(term);
    setIsSearching(term.length > 0);

    if (term.length > 0) {
      const results = products.filter((product) => {
        const nameMatch = product.name.toLowerCase().includes(term.toLowerCase());
        const descriptionMatch = product.description.toLowerCase().includes(term.toLowerCase());
        const categoryMatch = product.category.toLowerCase().includes(term.toLowerCase());
        const anyMatch = nameMatch || descriptionMatch || categoryMatch;
        return anyMatch;
      });
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  // Clear search
  const clearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
    setIsSearching(false);
  };

  return (
    <div className="relative w-[40%] max-w-md mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full px-4 py-2 pl-10 text-white bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <FaSearch 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
        />
        {searchTerm && (
          <button 
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            <FaTimes className="text-gray-400 hover:text-white" />
          </button>
        )}
      </div>

      {isSearching && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute z-50 w-full mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-lg max-h-96 overflow-y-auto"
        >
          {searchResults.length > 0 ? (
            searchResults.map((product) => (
              <motion.div
                key={product._id}
                whileHover={{ scale: 1.02 }}
                className="flex items-center p-3 border-b border-gray-700 hover:bg-gray-700 cursor-pointer"
              >
                
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-12 h-12 object-cover rounded-md mr-4"
                />
                <div>
                  <h3 className="text-white font-semibold">{product.name}</h3>
                  <p className="text-gray-400 text-sm">
                    {product.description.length > 50 
                      ? `${product.description.slice(0, 50)}...` 
                      : product.description}
                  </p>
                  <span className="text-emerald-400 font-bold">
                    ${product.price}
                  </span>
                  <ModalDetail product={product}/> 
                </div>
              </motion.div>
            ))
          ) : (
            <div className="p-4 text-center text-gray-400">
              Product not found
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default Search;