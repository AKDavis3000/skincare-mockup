import Image from 'next/image';
import Navbar from './components/Navbar';
import './scss/style.scss';
import Section1 from './components/Section1';
import Scroll from './components/Scroll';

export default function Home() {
  return (
    <>
      <Navbar />
      <Section1 />
      <Scroll />
    </>
  );
}
