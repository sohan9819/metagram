import { Left, Middle, Right } from '../layouts/all';
import { Nav } from '../components/all';

export const Home = () => {
  return (
    <>
      <Nav />

      {/* <!-- ---------------- MAIN --------------- --> */}

      <main className='main'>
        <div className='container'>
          <Left />
          <Middle />
          <Right />
        </div>
      </main>
    </>
  );
};
