import React from "react";
import {
  Award,
  Clock,
  Heart,
  Star,
  Users2,
  Music2,
  Sparkles,
  Target
} from "lucide-react";

export default function About() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Discover Your Dance Journey
          </h1>
          <p className="mt-6 text-xl text-gray-500">
            At Real Dance, we believe everyone has a unique rhythm waiting to be
            discovered. Since 2010, we've been guiding dancers through a
            transformative journey of self-expression, technical mastery, and
            artistic growth.
          </p>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600">20+</div>
            <div className="mt-2 text-sm text-gray-600">Dance Styles</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600">50k+</div>
            <div className="mt-2 text-sm text-gray-600">Dance Enthusiasts</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600">100+</div>
            <div className="mt-2 text-sm text-gray-600">Master Instructors</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600">98%</div>
            <div className="mt-2 text-sm text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>

      {/* Discovery Journey Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Your Discovery Journey
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Experience the transformative power of dance through our unique
            approach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Discover
            </h3>
            <p className="text-gray-600">
              Begin your journey by exploring different dance styles and finding
              what moves you.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Music2 className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Learn</h3>
            <p className="text-gray-600">
              Master the fundamentals and advanced techniques with personalized
              guidance.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Grow</h3>
            <p className="text-gray-600">
              Develop your unique style and artistic expression through practice
              and performance.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Excel</h3>
            <p className="text-gray-600">
              Showcase your talents and achieve recognition in the dance
              community.
            </p>
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="bg-indigo-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Success Stories
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Hear from those who discovered their passion with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <figure className="bg-white p-8 rounded-xl shadow-lg">
              <Star className="h-8 w-8 text-indigo-600 mb-4" />
              <blockquote>
                <p className="text-lg font-medium text-gray-900">
                  "Real Dance helped me discover my true potential. The journey
                  from a complete beginner to performing on stage was
                  incredible."
                </p>
              </blockquote>
              <figcaption className="mt-4">
                <div className="text-indigo-600 font-medium">Michael Chen</div>
                <div className="text-gray-500 text-sm">Contemporary Dance</div>
              </figcaption>
            </figure>

            <figure className="bg-white p-8 rounded-xl shadow-lg">
              <Star className="h-8 w-8 text-indigo-600 mb-4" />
              <blockquote>
                <p className="text-lg font-medium text-gray-900">
                  "The supportive community and expert guidance made my dance
                  journey an unforgettable experience of growth and discovery."
                </p>
              </blockquote>
              <figcaption className="mt-4">
                <div className="text-indigo-600 font-medium">
                  Sofia Rodriguez
                </div>
                <div className="text-gray-500 text-sm">Urban Dance</div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
