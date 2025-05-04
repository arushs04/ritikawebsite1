export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Image Test Page</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl mb-2">Test Image 1</h2>
          <img src="/IMG_2476.jpeg" alt="Test 1" className="w-64 h-64 object-cover" />
        </div>
        <div>
          <h2 className="text-xl mb-2">Test Image 2</h2>
          <img src="/IMG_5526.jpeg" alt="Test 2" className="w-64 h-64 object-cover" />
        </div>
        <div>
          <h2 className="text-xl mb-2">Test Image 3</h2>
          <img src="/IMG_2006.jpeg" alt="Test 3" className="w-64 h-64 object-cover" />
        </div>
      </div>
    </div>
  );
} 