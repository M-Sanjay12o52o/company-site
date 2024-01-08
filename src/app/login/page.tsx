"use client"

// Login.tsx
import { FC } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';
import { AlertCircle, ArrowRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Login: FC = () => {
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-80">
                <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
                <form action={dispatch}>
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
                    {/* <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Login
                    </button> */}
                    <LoginButton />
                    <div
                        className="flex h-8 items-end space-x-1"
                        aria-live="polite"
                        aria-atomic="true"
                    >
                        {errorMessage && (
                            <>
                                <AlertCircle className="h-5 w-5 text-red-500" />
                                <p className="text-sm text-red-500">{errorMessage}</p>
                            </>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

function LoginButton() {
    const { pending } = useFormStatus();

    return (
        <Button className="mt-4 w-full" aria-disabled={pending}>
            Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </Button>
    );
}