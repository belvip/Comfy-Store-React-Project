/**
 * FormInput Component
 * A reusable input field component for forms with a label.
 *
 * Props:
 * @param {string} label - The text displayed as the label for the input.
 * @param {string} name - The `name` attribute for the input, used to identify the field in a form.
 * @param {string} type - The type of the input field (e.g., "text", "email", "password").
 * @param {string} defaultValue - The default value to populate the input field.
 * @param {string} size - Additional CSS classes to define the size or style of the input.
 */
const FormInput = ({ label, name, type, defaultValue, size }) => {
    return (
        <div className='form-control'>
            {/* Label Section */}
            <label htmlFor={name} className='label'>
                {/* Display the label text and ensure it's capitalized */}
                <span className='label-text capitalize'>{label}</span>
            </label>
            
            {/* Input Field */}
            <input
                type={type} // Input type, determines the type of data (e.g., text, email)
                name={name} // Name attribute for identifying the field in forms
                defaultValue={defaultValue} // Sets a default value for the input
                className={`input input-bordered ${size}`} // Combines predefined styles with dynamic size
            />
        </div>
    );
};

export default FormInput;
