// Import necessary modules and components from React Router and the project
import { Form, useLoaderData, Link } from 'react-router-dom'; // Form and Link for navigation and form handling
import FormInput from './FormInput'; // Custom input component for reusable form inputs

// Define the Filters component
const Filters = () => {
    return (
        // Main form container
        // Applies styling using TailwindCSS classes for a responsive grid layout
        <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
            
            {/* SEARCH INPUT */}
            {/* This is a reusable input component for entering search keywords */}
            {/* Props passed to the FormInput component:
                - type: Specifies this is a search input field
                - label: Provides a label for accessibility
                - name: Name attribute to identify the input field
                - size: TailwindCSS class for input sizing */}
            <FormInput
                type='search'
                label='search product'
                name='search'
                size='input-sm'
            />

            {/* SEARCH BUTTON */}
            {/* A submit button to trigger the form submission */}
            {/* TailwindCSS classes are used for styling the button */}
            <button type='submit' className='btn btn-primary btn-sm '>
                search
            </button>

            {/* RESET LINK */}
            {/* A link styled as a button that navigates to the '/products' route */}
            {/* This acts as a reset button to clear filters and display all products */}
            <Link to='/products' className='btn btn-accent btn-sm'>
                reset
            </Link>

        </Form>
    );
};

// Export the Filters component for use in other parts of the application
export default Filters;
