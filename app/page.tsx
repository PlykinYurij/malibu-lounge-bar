import {Hero, Navigation, About, Menu, VipZone, Rules, Contacts} from '@ux';

export default function Home() {
    return (
        <div>
            <Navigation/>
            <Hero/>
            <main className="container">
                <About/>
                <Menu/>
                <VipZone/>
                <Rules/>
                <Contacts/>
            </main>
        </div>
    );
}
