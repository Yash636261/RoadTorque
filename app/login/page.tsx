"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { Mail, Lock, Eye, EyeOff, Check, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const LoginPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const username = formData.get("username");
    const password = formData.get("password");
    signIn("credentials", {
      redirect: true,
      callbackUrl: "/admin",
      username,
      password,
    });
  };

  return (
    <div className="min-h-screen bg-black p-5 gap-5  flex">
      {/* Left Column - Login Form */}
      <div className="flex-1 flex flex-col justify-center bg-[#030303] border border-gray-800 rounded-3xl p-5 max-w-md lg:max-w-lg mx-auto lg:mx-0">
        <div className="w-full">
          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-100 mb-4">
              Admin Login
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Welcome to Admin Login
            </p>
          </div>

          {/* Login Form */}
          <div className="space-y-4 mb-6">
            {/* Email Input */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-500 w-5 h-5" />

              <input
                id="username"
                name="username"
                type="text"
                required
                className="pl-12 pr-12 h-12 w-full border-gray-200 rounded-lg bg-[#1b1b1b] text-white placeholder:text-gray-200"
                placeholder="Enter Your Username"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />

              <input
                id="password"
                name="password"
                type="password"
                required
                className="pl-12 pr-12 h-12 w-full border-gray-200 rounded-lg bg-[#1b1b1b] text-white placeholder:text-gray-200"
                placeholder="Enter Your Password"
              />
              {/* <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button> */}
            </div>
          </div>

          {/* Sign Up Button */}
          <Button
            type="submit"
            className="w-full h-12 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg mb-4"
          >
            login
          </Button>

          {/* User Testimonial */}
          <div className="mt-12 flex items-center justify-between p-4 group bg-cyan-200 rounded-2xl border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="flex -space-x-2">
                <div className="size-8 rounded-full hover:scale-105 transition duration-200 bg-gradient-to-r from-purple-400 to-pink-400 border-2 border-white"></div>
                <div className="size-8 rounded-full hover:scale-105 transition duration-200 bg-gradient-to-r from-blue-400 to-cyan-400 border-2 border-white"></div>
                <div className="size-8 rounded-full hover:scale-105 transition duration-200 bg-gradient-to-r from-green-400 to-blue-400 border-2 border-white"></div>
                <div className="size-8 rounded-full hover:scale-105 transition duration-200 bg-gradient-to-r from-yellow-400 to-orange-400 border-2 border-white"></div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Join with 20k+ Users!
                </p>
                <p className="text-xs text-gray-500">
                  {"Let's see our happy customer"}
                </p>
              </div>
            </div>
            <div className="size-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:rotate-45 transition duration-300">
              <ArrowUpRight className="size-4 text-gray-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Hero Section */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-cyan-400 rounded-3xl via-cyan-500 to-cyan-600 relative overflow-hidden">
        <div className="flex flex-col justify-between p-12 text-white relative z-10 w-full">
          <div className="flex-1 flex items-center justify-center relative"></div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
