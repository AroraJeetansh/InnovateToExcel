import { useNavigate, Link } from 'react-router-dom';
import Form from './Form';

const API_URL = 'http://localhost:3001/api';

const Login = () => {
  const navigate = useNavigate();

  const loginFields = [
    { name: 'email', label: 'Email *', type: 'email', placeholder: 'Enter your email', required: true },
    { name: 'password', label: 'Password *', type: 'password', placeholder: 'Enter your password', required: true }
  ];

  const handleLogin = async (formData) => {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Login failed');
    }

    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    
    // Redirect to home after success
    setTimeout(() => {
      navigate('/');
    }, 500);
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
            title="Login"
            fields={loginFields}
            buttonText="Sign In"
            onSubmit={handleLogin}
            className="w-full"
          />
          <p className="text-n-4 text-center mt-6">
            Don't have an account?{" "}
            <Link to="/register" className="text-color-1 font-semibold hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
