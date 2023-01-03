import { useQuery, gql } from '@apollo/client';
import Header from './partials/Header';
import PrimaryButton from './utils/buttons/PrimaryButton';

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header />
      </div>
    </div>
  );
}

export default App;
