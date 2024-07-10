import Image from 'next/image';
import Navbar from './components/Navbar';
import './scss/style.scss';
import Section1 from './components/Section1';

export default function Home() {
  return (
    <>
      <Navbar />
      <Section1 />
    </>
  );
}
