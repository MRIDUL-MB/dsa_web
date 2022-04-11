export default function Sidebar({ setFilter }) {
  return (
    <div>
      <input type='checkbox' id='check' />
      <label htmlFor='check'>
        <i className='fas fa-bars' id='open'></i>
        <i className='fas fa-times' id='close'></i>
      </label>
      <div className='sidebar'>
        <header>Filter</header>
        <ul>
          <li>
            <button
              className='btn bg-white active'
              onClick={() => setFilter('all')}
            >
              All
            </button>
          </li>

          <li>
            <button className='btn bg-white' onClick={() => setFilter('array')}>
              Array
            </button>
          </li>
          <li>
            <button
              className='btn bg-white'
              onClick={() => setFilter('Bit manipulation')}
            >
              Bit Manipulation
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
