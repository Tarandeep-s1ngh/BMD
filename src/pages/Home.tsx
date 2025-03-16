import { Link } from 'react-router-dom';
import ppl_running from '../Assets/ppl_running.jpg'
import tr2 from '../Assets/tr2.png'

export function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome To</h1>
          <h2 className="text-4xl font-bold text-gray-900">Your BMD Clinic</h2>
          
          <div className="mt-8 mb-12">
            <img
              src={tr2}
              // src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200"
              alt="Doctor"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-bold text-gray-900">Tarsem Singh Bhola</h3>
            <p className="text-gray-600">Provectus Pharma</p>
          </div>

          <p className="text-lg text-gray-700 mb-8">
            The key to maintaining strong bones is early detection and proper management.
          </p>

          <Link
            to="/health-check"
            className="inline-block bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors mb-12"
          >
            Click here to enter
          </Link>

          <div>
            <img
              src={ppl_running}
              // src="https://images.unsplash.com/photo-1609899464726-209befaac5bc?auto=format&fit=crop&q=80&w=600"
              alt="Active seniors maintaining bone health"
              className="rounded-lg shadow-lg w-full object-cover h-[600px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}