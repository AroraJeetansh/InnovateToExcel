import { useState } from 'react';

const Form = ({ 
  title = "Contact Us", 
  fields = [], 
  buttonText = "Submit", 
  onSubmit,
  className = "",
  successMessage = "Form submitted successfully!"
}) => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setLoading(true);

    try {
      if (onSubmit) {
        await onSubmit(formData);
      }
      setSuccess(true);
      setFormData({});
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`max-w-md mx-auto ${className}`}>
      <div className="bg-n-8/50 backdrop-blur-xl rounded-2xl p-8 border border-n-6 shadow-2xl">
        <h2 className="text-2xl font-bold text-n-1 text-center mb-6">{title}</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-color-3/10 border border-color-3/30 rounded-xl p-3 text-color-3 text-sm text-center">
              {error}
            </div>
          )}
          
          {success && (
            <div className="bg-color-1/10 border border-color-1/30 rounded-xl p-3 text-color-1 text-sm text-center">
              {successMessage}
            </div>
          )}
          
          {fields.map((field) => (
            <div key={field.name}>
              <label 
                htmlFor={field.name} 
                className="block text-n-2 text-sm font-medium mb-2"
              >
                {field.label}
              </label>
              
              {field.type === 'textarea' ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  required={field.required}
                  rows={field.rows || 4}
                  className="w-full px-4 py-3 bg-n-6 border border-n-5 rounded-xl text-n-1 placeholder-n-4 focus:outline-none focus:border-color-1 focus:bg-n-5 transition-all duration-300 resize-none"
                />
              ) : field.type === 'select' ? (
                <select
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  required={field.required}
                  className="w-full px-4 py-3 bg-n-6 border border-n-5 rounded-xl text-n-1 focus:outline-none focus:border-color-1 focus:bg-n-5 transition-all duration-300"
                >
                  <option value="" className="bg-n-8">{field.placeholder}</option>
                  {field.options?.map((option) => (
                    <option key={option.value} value={option.value} className="bg-n-8">
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type || 'text'}
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  required={field.required}
                  className="w-full px-4 py-3 bg-n-6 border border-n-5 rounded-xl text-n-1 placeholder-n-4 focus:outline-none focus:border-color-1 focus:bg-n-5 transition-all duration-300"
                />
              )}
            </div>
          ))}
          
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-color-1 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-color-1/25 transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none mt-4"
          >
            {loading ? 'Submitting...' : buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
