import { useLoaderData } from 'react-router-dom'; // Hook to access data loaded by a route
import ProductsGrid from './ProductsGrid'; // Component for displaying products in a grid layout
import ProductsList from './ProductsList'; // Component for displaying products in a list layout
import { useState } from 'react'; // React hook for managing state in functional components
import { BsFillGridFill, BsList } from 'react-icons/bs'; // Icons for layout toggle buttons

const ProductsContainer = () => {
    // Access metadata from the loader, typically fetched from an API
    const { meta } = useLoaderData();
    // Extract the total number of products from metadata
    const totalProducts = meta.pagination.total;

    // State to track the current layout ('grid' or 'list')
    const [layout, setLayout] = useState('grid');

    // Function to apply styles dynamically to the layout buttons
    const setActiveStyles = (pattern) => {
        return `text-xl btn btn-circle btn-sm ${
            pattern === layout
                ? 'btn-primary text-primary-content' // Active button style
                : 'btn-ghost text-base-content' // Inactive button style
        }`;
    };

    return (
        <>
            {/* HEADER */}
            <div className='flex justify-between items-center mt-8 border-b border-base-300 pb-5'>
                {/* Display the total number of products */}
                <h4 className='font-medium text-md'>
                    {totalProducts} product{totalProducts > 1 && 's'}
                </h4>

                {/* Layout toggle buttons */}
                <div className='flex gap-x-2'>
                    {/* Grid layout button */}
                    <button
                        type='button'
                        onClick={() => setLayout('grid')} // Set layout to 'grid' on click
                        className={setActiveStyles('grid')} // Apply active/inactive styles
                    >
                        <BsFillGridFill /> {/* Grid icon */}
                    </button>

                    {/* List layout button */}
                    <button
                        type='button'
                        onClick={() => setLayout('list')} // Set layout to 'list' on click
                        className={setActiveStyles('list')} // Apply active/inactive styles
                    >
                        <BsList /> {/* List icon */}
                    </button>
                </div>
            </div>

            {/* PRODUCTS */}
            <div>
                {/* Conditional rendering based on product count and selected layout */}
                {totalProducts === 0 ? (
                    // Message when no products match the search
                    <h5 className='text-2xl mt-16'>
                        Sorry, no products matched your search...
                    </h5>
                ) : layout === 'grid' ? (
                    // Show grid layout if 'grid' is selected
                    <ProductsGrid />
                ) : (
                    // Show list layout if 'list' is selected
                    <ProductsList />
                )}
            </div>
        </>
    );
};

export default ProductsContainer;
