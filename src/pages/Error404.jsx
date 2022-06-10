import { Link } from 'react-router-dom';
import { Nav } from 'components/all';
import { FiSkipBack } from 'react-icons/fi';

export const Error404 = () => {
  return (
    <>
      <Nav />

      {/* <!-- ---------------- MAIN --------------- --> */}

      <main className='main'>
        <div className='container home'>
          <h1>Error 404 </h1>
          <Link to='/' className='btn btn-primary'>
            Back <FiSkipBack />
          </Link>
        </div>
      </main>
    </>
  );
};
