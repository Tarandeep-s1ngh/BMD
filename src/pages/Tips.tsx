import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Snowflake, Sun, ShieldAlert } from 'lucide-react';

export function Tips() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center mb-8">
          <button onClick={() => navigate(-1)} className="text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold ml-4">Seasonal Tips</h1>
        </div>

        <div className="grid gap-4">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <Snowflake className="w-12 h-12 text-teal-500 mb-4" />
            <h2 className="text-xl font-semibold mb-4">Winter Care</h2>
            <p className="text-gray-600">
              Special considerations for bone health during winter months, including vitamin D supplementation and safe indoor exercises.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm">
            <Sun className="w-12 h-12 text-pink-500 mb-4" />
            <h2 className="text-xl font-semibold mb-4">Summer Activities</h2>
            <p className="text-gray-600">
              Safe outdoor activities that promote bone strength while ensuring proper sun protection and hydration.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm">
            <ShieldAlert className="w-12 h-12 text-teal-500 mb-4" />
            <h2 className="text-xl font-semibold mb-4">Fall Prevention</h2>
            <p className="text-gray-600">
              Essential tips to prevent falls and maintain bone safety throughout the year, including home safety measures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}