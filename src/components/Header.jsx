import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
export default function () {
  return (
    <>
      <header className="w-full fixed top-0 p-3 z-50 h-20">
        <div className='flex'>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      </header>
    </>
  );
}