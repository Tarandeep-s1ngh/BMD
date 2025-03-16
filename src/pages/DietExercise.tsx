import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Utensils, Dumbbell, Sun } from 'lucide-react';

export function DietExercise() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center mb-8">
          <button onClick={() => navigate(-1)} className="text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold ml-4">Diet & Exercise</h1>
        </div>

        <div className="grid gap-4">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <Utensils className="w-12 h-12 text-teal-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Calcium-Rich Diet</h2>
            <p className="text-gray-600">
              Learn about foods that promote bone health and maintain bone density.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm">
            <Dumbbell className="w-12 h-12 text-pink-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Weight-Bearing Exercises</h2>
            <p className="text-gray-600">
              Discover exercises that help strengthen bones and prevent bone loss.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm">
            <Sun className="w-12 h-12 text-teal-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Vitamin D Optimization</h2>
            <p className="text-gray-600">
              Tips for maintaining healthy vitamin D levels for optimal bone health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}