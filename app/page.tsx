import { About, Contacts, Hero, Menu, Navigation, Rules, VipZone } from '@ux';

export default function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
      <main className="container">
        <About />
        <Menu />
        <VipZone />
        <Rules />
        <Contacts />
      </main>
    </div>
  );
}
