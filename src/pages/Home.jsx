import React from "react";
import { ArrowRight, Music2, Users, Trophy, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Split Layout */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center min-h-[calc(100vh-4rem)]">
            {/* Left Content */}
            <div className="pt-10 pb-12 md:pt-16 lg:pt-20 lg:pb-28">
              <div className="text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Discover Your</span>
                  <span className="block text-indigo-600">Dance Journey</span>
                </h1>
                <p className="mt-6 text-lg text-gray-500 max-w-lg">
                  Embark on a transformative dance experience with our
                  expert-led classes. Whether you're a beginner taking your
                  first steps or an experienced dancer looking to perfect your
                  craft, we're here to guide you every step of the way.
                </p>
                <div className="mt-8 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
                  <Link
                    to="/moves"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
                  >
                    Start Learning
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
                  >
                    Learn More
                  </Link>
                </div>
                {/* Stats */}
                <div className="mt-12 grid grid-cols-3 gap-6">
                  <div>
                    <p className="text-2xl font-bold text-indigo-600">500+</p>
                    <p className="mt-1 text-sm text-gray-500">Dance Moves</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-indigo-600">50k+</p>
                    <p className="mt-1 text-sm text-gray-500">Students</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-indigo-600">100+</p>
                    <p className="mt-1 text-sm text-gray-500">Instructors</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="mt-12 lg:mt-0 relative">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=1600"
                  alt="Dancer in motion"
                  className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
                />
                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-indigo-100 rounded-full -z-10"></div>
                <div className="absolute -top-4 -left-4 w-48 h-48 bg-indigo-50 rounded-full -z-10"></div>
              </div>
              {/* Image Caption */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs">
                <p className="text-sm font-medium text-gray-900">
                  "Dance is the hidden language of the soul"
                </p>
                <p className="text-xs text-gray-500 mt-1">- Martha Graham</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose Our Dance Academy?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Experience the perfect blend of artistry, technique, and passion
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-8">
              <div className="bg-indigo-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <Music2 className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Expert Instruction
              </h3>
              <p className="text-gray-600">
                Learn from world-class instructors with years of professional
                experience.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-8">
              <div className="bg-indigo-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Community
              </h3>
              <p className="text-gray-600">
                Join a vibrant community of dancers from all walks of life.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-8">
              <div className="bg-indigo-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Performance
              </h3>
              <p className="text-gray-600">
                Regular showcases and performances to display your progress.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-8">
              <div className="bg-indigo-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Curriculum
              </h3>
              <p className="text-gray-600">
                Structured learning path from beginner to advanced levels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
