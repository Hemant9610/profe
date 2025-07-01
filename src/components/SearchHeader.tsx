 
const SearchHeader = () => {
    return (
      <div className="bg-white border-b border-gray-200 px-6 py-8 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Product designers SF/LA
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Product designers based in San Francisco or Los Angeles.
            </p>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-green-600 text-xl">🍀</span>
              <div>
                <p className="text-green-800 font-medium mb-1">Search in progress</p>
                <p className="text-sm text-green-700">
                  Searching your <span className="font-semibold">1,896 first degree connections</span> from LinkedIn, 
                  plus the <span className="font-semibold">10,313 connections</span> of your <span className="font-semibold">4 friends</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-700">Show</span>
              <div className="relative">
                <select className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500">
                  <option>thinking</option>
                  <option>all results</option>
                  <option>top matches</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <span>▼</span>
                </div>
              </div>
            </div>
            
            <div className="text-sm text-gray-500">
              <span className="font-medium text-gray-900">5 results</span> found
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SearchHeader;
  