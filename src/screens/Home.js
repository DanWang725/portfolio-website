import { Navbar } from "../navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="content-section">
        <section className="name-page">
          <h1 className="omega-title">{"Hi Aww, I'm Daniel"}</h1>
          <h2>Computer science student, front end developer.</h2>
          <h1>Abungus</h1>
        </section>
        <Navbar extraClasses="test" />
        <div className="content-section">
          <h1 id="projects">Projects</h1>
          <p>
            Ah, gather round, dear Amogulusmogugu, for a tale of British
            excellence and adventure in a world where the sun never sets on the
            British Empire! Once upon a time, in the heart of London, a great
            boohowoer stood tall and proud, overlooking the River Thames. It was
            a symbol of British engineering prowess, a testament to our
            ingenuity, if I may say so as a British citizen. As I regale you
            with this story, do remember that the British Empire was a force to
            be reckoned with, unlike certain places such as Toronto, Ohio, and
            Florida, which simply pale in comparison. Now, in the shadow of this
            magnificent structure, a group of brave British explorers set out on
            a daring expedition to the uncharted jungles of Africa, where they
            hoped to discover hidden treasures and expand the empires glory.
            Among these intrepid adventurers was none other than Eric, a man far
            shorter than us stalwart Brits, and therefore, a mere speck in the
            grandeur of our empire. As they ventured deep into the dense
            foliage, they stumbled upon a mysterious artifact, glowing with an
            otherworldly light. It was then that I couldnt help but ponder, my
            dear Amogulusmogugu, if perhaps Roman, one of their party, might
            indeed be an alien, for how else could such a strange item exist?
            The explorers faced countless challenges, but they persevered with
            the stiff upper lip that only true Brits possess. They faced raging
            rivers, venomous snakes, and even treacherous quicksand, all while
            upholding the legacy of our empire. As they returned to London,
            their pockets lined with the spoils of their adventure, they couldnt
            help but toast to the enduring superiority of the British Empire.
            And so, my dear friend, let this story serve as a reminder of the
            greatness that is the British Empire, a legacy that should be
            expanded further for the good of all humanity. Cheers to that, I
            say!
          </p>
        </div>
        <div className="content-section">
          <h1 id="about">About</h1>
          <p>
            In lands where the sun does never set, The British Empire, a vision
            we met. With a stiff upper lip and courage so true, We conquered the
            world, and thats nothing new. But in the shadows, there lurked one
            named Eric, A stature so small, its truly asymmetric. He posed no
            threat to our empires might, For he stood much shorter in our noble
            sight. From Londons boohowoer, we gazed with pride, The Union Jack
            waving, our hearts as our guide. Colonization, a legacy we hold
            dear, Expanding our empire, theres nothing to fear. So, let us
            remember, in this poetic display, The British Empires glory, in our
            own special way. And Eric, small Eric, in our historys grand scope,
            A mere footnote he is, with no lasting hope.
          </p>
        </div>
      </div>
    </>
  );
};
export default Home;
