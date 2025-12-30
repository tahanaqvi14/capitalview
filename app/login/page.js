'use client'

import Contactaction from './server.action'


const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // handle sign in logic here
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
                {/* Logo */}
                <div className="flex items-center gap-2 mb-6">
                    {/* <div className="w-9 h-9 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                        CV
                    </div> */}
                    <img src="/capitalviewlogo.svg" alt="logo" className="w-9 h-9" />
                    <span className="text-lg font-semibold text-gray-900">
                        CapitalView
                    </span>
                </div>

                {/* Heading */}
                <h1 className="text-2xl font-semibold text-gray-900 mb-1">
                    Welcome back
                </h1>
                <p className="text-sm text-gray-500 mb-6">
                    Enter your credentials to access your trading account
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Email address
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            required
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <label
                                htmlFor="password"
                                className="text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <a
                                href="#"
                                className="text-sm text-emerald-600 hover:underline"
                            >
                                Forgot password?
                            </a>
                        </div>
                        <input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            required
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-center gap-2">
                        <input
                            id="remember"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                        />
                        <label
                            htmlFor="remember"
                            className="text-sm text-gray-700"
                        >
                            Keep me signed in
                        </label>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full rounded-md bg-emerald-600 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 transition"
                    >
                        Sign in
                    </button>
                </form>

                {/* Divider */}
                <div className="my-6 flex items-center">
                    <div className="flex-grow border-t border-gray-200" />
                    <span className="mx-3 text-xs text-gray-400">OR</span>
                    <div className="flex-grow border-t border-gray-200" />
                </div>

                {/* Signup */}
                <p className="text-center text-sm text-gray-600">
                    Don’t have an account?{" "}
                    <a
                        href="/signup"
                        className="text-emerald-600 font-medium hover:underline"
                    >
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Login;    