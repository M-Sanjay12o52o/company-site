// Register.tsx
import { Button } from '@/components/ui/button';
import { FC } from 'react';

const Register: FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-80">
                <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Register
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Register;
