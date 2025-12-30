'use client'
import { useRouter } from 'next/navigation'



const Singup = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // handle sign in logic here
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-1">
            <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
                {/* Logo */}
                <div className="flex items-center gap-2 mb-6">
                    {/* <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
                $
              </div> */}
                    <img src="/capitalviewlogo.svg" alt="logo" className="w-9 h-9" />
                    <span className="text-lg font-semibold text-gray-900">
                        CapitalView
                    </span>
                </div>

                {/* Heading */}
                <h1 className="text-2xl font-semibold text-gray-900 mb-1">
                    Create Your Account
                </h1>
                <p className="text-sm text-gray-500 mb-6">
                    Join thousands of traders and start your journey today
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            required
                            className="w-full rounded-md bg-sky-50 border border-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            required
                            className="w-full rounded-md bg-sky-50 border border-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            required
                            className="w-full rounded-md bg-sky-50 border border-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <p className="mt-1 text-xs text-gray-400">
                            Minimum 8 characters recommended
                        </p>
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            required
                            className="w-full rounded-md bg-sky-50 border border-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Terms */}
                    <div className="flex items-start gap-2 pt-2">
                        <input
                            type="checkbox"
                            required
                            className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <p className="text-sm text-gray-600">
                            I agree to the{" "}
                            <a href="#" className="text-blue-600 hover:underline">
                                Terms of Service
                            </a>{" "}
                            and{" "}
                            <a href="#" className="text-blue-600 hover:underline">
                                Privacy Policy
                            </a>
                        </p>
                    </div>

                    {/* Button */}
                    <button
                        
                        type="submit"
                        className="w-full mt-4 rounded-md bg-blue-600 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition"
                    >
                        Sign Up
                    </button>
                </form>

                {/* Footer */}
                <p className="mt-6 text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <a
                        href="/login"
                        className="text-blue-600 font-medium hover:underline"
                    >
                        Log in here
                    </a>
                </p>
            </div>
        </div>
    );

}

export default Singup;    