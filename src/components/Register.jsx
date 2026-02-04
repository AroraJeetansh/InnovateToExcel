import { useNavigate, Link } from 'react-router-dom';
import Form from './Form';

const API_URL = 'http://localhost:3001/api';

const Register = () => {
  const navigate = useNavigate();

  const registerFields = [
    { name: 'name', label: 'Full Name *', placeholder: 'Enter your full name', required: true },
    { name: 'email', label: 'Email *', type: 'email', placeholder: 'Enter your email', required: true },
    { name: 'phone', label: 'Phone', type: 'tel', placeholder: 'Your phone number' },
    { name: 'college', label: 'College Name', placeholder: 'Your college name' },
    { name: 'password', label: 'Password *', type: 'password', placeholder: 'Create password', required: true },
    { name: 'confirmPassword', label: 'Confirm Password *', type: 'password', placeholder: 'Confirm password', required: true }
  ];

  const handleRegister = async (formData) => {
    if (formData.password !== formData.confirmPassword) {
      throw new Error('Passwords do not match');
    }

    if (formData.password.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }

    const response = await fetch(`${API_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        college: formData.college
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Registration failed');
    }

    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-n-8 px-4 py-8">
      <Link to="/" className="inline-flex items-center text-n-1 hover:text-color-1 transition-colors mb-8">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Home
      </Link>
      <div className="flex items-center justify-center">
        <div className="w-full max-w-md">
          <Form
            title="Register"
            fields={registerFields}
            buttonText="Register"
            onSubmit={handleRegister}
            successMessage="Registered successfully!"
            className="w-full"
          />
          <p className="text-n-4 text-center mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-color-1 font-semibold hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
