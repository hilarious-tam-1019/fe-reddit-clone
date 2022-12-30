import { useQuery, gql } from '@apollo/client';
import PrimaryButton from './components/buttons/PrimaryButton';

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <PrimaryButton title="Log In" />
      </div>
    </div>
  );
}

export default App;
