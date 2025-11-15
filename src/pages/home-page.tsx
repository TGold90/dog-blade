import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Centered Title */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight">
            Dog Blade
          </h1>
          <p className="text-xl md:text-2xl text-purple-200">
            A Card Battle Adventure
          </p>
          <div className="pt-4">
            <Button
              onClick={() => navigate('/game')}
              size="lg"
              className="text-xl px-12 py-6 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold shadow-2xl transform transition-transform hover:scale-105"
            >
              Start Game
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

