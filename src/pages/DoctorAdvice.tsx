import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Stethoscope, Pill, Activity } from 'lucide-react';

export function DoctorAdvice() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center mb-8">
          <button onClick={() => navigate(-1)} className="text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold ml-4">Doctor's Advice</h1>
        </div>

        <div className="grid gap-4">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <Stethoscope className="w-12 h-12 text-teal-500 mb-4" />
            <h2 className="text-xl font-semibold mb-4">Understanding BMD Tests</h2>
            <p className="text-gray-600">
              Comprehensive guide to bone density testing, including what your T-scores and Z-scores mean for your bone health.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm">
            <Pill className="w-12 h-12 text-pink-500 mb-4" />
            <h2 className="text-xl font-semibold mb-4">Treatment Options</h2>
            <p className="text-gray-600">
              Detailed overview of available treatments for low bone density, including medications, supplements, and lifestyle modifications.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm">
            <Activity className="w-12 h-12 text-teal-500 mb-4" />
            <h2 className="text-xl font-semibold mb-4">Lifestyle Modifications</h2>
            <p className="text-gray-600">
              Expert recommendations for maintaining optimal bone health through daily activities and preventive measures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}