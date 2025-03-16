import { Link } from 'react-router-dom';
import { ArrowLeft, Bone, Activity, Utensils, Calendar, Stethoscope, Calculator } from 'lucide-react';

export function HealthCheck() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center mb-8">
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-2xl font-bold ml-4">BMD Health Check</h1>
        </div>

        <div className="grid gap-6">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Bone Health Assessment</h2>
            <p className="text-gray-600 mb-4">
              Regular bone density screening is crucial for early detection of osteoporosis and maintaining bone health.
            </p>
            <div className="grid gap-4">
              <Link
                to="/calculator"
                className="flex items-center p-4 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg text-white hover:from-teal-600 hover:to-teal-700 transition-all"
              >
                <Calculator className="w-8 h-8 mr-4" />
                <div>
                  <h3 className="font-semibold">Calculate Your T-score</h3>
                  <p className="text-sm opacity-90">Measure your bone density</p>
                </div>
              </Link>

              <Link
                // to="/risk-factors"
                className="flex items-center p-4 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg text-white hover:from-pink-600 hover:to-pink-700 transition-all"
              >
                <Activity className="w-8 h-8 mr-4" />
                <div>
                  <h3 className="font-semibold">Fracture Risk Assessment</h3>
                  <p className="text-sm opacity-90">Evaluate your risk factors</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            <Link
              to="/diet-exercise"
              className="flex items-center p-4 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg text-white hover:from-teal-600 hover:to-teal-700 transition-all"
            >
              <Utensils className="w-8 h-8 mr-4" />
              <span className="text-lg font-semibold">Diet & Exercise</span>
            </Link>

            <Link
              to="/tips"
              className="flex items-center p-4 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg text-white hover:from-pink-600 hover:to-pink-700 transition-all"
            >
              <Calendar className="w-8 h-8 mr-4" />
              <span className="text-lg font-semibold">Seasonal Tips</span>
            </Link>

            <Link
              to="/doctor-advice"
              className="flex items-center p-4 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg text-white hover:from-teal-600 hover:to-teal-700 transition-all"
            >
              <Stethoscope className="w-8 h-8 mr-4" />
              <span className="text-lg font-semibold">Tips from Your Doctor</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}