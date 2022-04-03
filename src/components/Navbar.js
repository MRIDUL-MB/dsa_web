export default function Navbar({ setFilter }) {
  return (
    <div className='d-flex justify-content-center gap-5 bg-nav nav-bar mb-5'>
      <button className='btn bg-white active' onClick={() => setFilter('all')}>
        All
      </button>
      <button className='btn bg-white' onClick={() => setFilter('array')}>
        Array
      </button>
      <button
        className='btn bg-white'
        onClick={() => setFilter('Bit manipulation')}
      >
        Bit Manipulation
      </button>
    </div>
  );
}
