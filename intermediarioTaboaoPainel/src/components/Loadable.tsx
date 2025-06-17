import { Suspense, type ComponentType } from 'react';
import Loader from './Loader';

function Loadable<T extends object>(Component: ComponentType<T>) {
  return (props: T) => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
}

export default Loadable;
