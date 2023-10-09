import profile from "../assets/profile.jpg";
import english from "../assets/english.png";
import french from "../assets/french.png";
import technologist from "../assets/technologist.png";
import LanguagesList from "./LanguagesList";
import { motion, useScroll, useTransform } from "framer-motion";

const Profile = () => {
  const { scrollY } = useScroll();
  const introOpacity = useTransform(
    scrollY,
    [0, 5, 25, 50, 75, 80],
    [1, 0.8, 0.6, 0.4, 0.2, 0]
  );
  const bioOpacity = useTransform(
    scrollY,
    [90, 150, 210, 280, 320, 360],
    [0, 0.2, 0.4, 0.6, 0.8, 1]
  );
  return (
    <section class="grid grid-cols-4 gap-7  bg-slate-900 profile">
      <div class="ml-12 m-5 profile-image-container">
        <img src={profile} alt="profile" class="rounded-full mt-4"></img>
        <p class="text-left mt-8 bio-text">
          Former Product Owner who has made the switch to Full Stack development
          <img src={technologist} class="emoji"></img>
        </p>
        <div class="mt-5 languages-container">
          <h4>Languages:</h4>
          <div class="flex-col">
            <div class="mt-4 flex flex-row justify-start items-center">
              <img src={english} class="language"></img>
              <p class="grow text-start ms-14">Native</p>
            </div>
            <div class="mt-4 flex flex-row justify-center items-center">
              <img src={french} class="language"></img>
              <p class="grow text-start ms-14">B2: Intermediate</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-3">
        <motion.div style={{ opacity: introOpacity }} class="w-full h-96">
          <h1 class="text-left mt-14">Hi, I'm David. Nice to meet you!</h1>
          <div class="icon-scroll"></div>
          <br />
          <h2 class="text-left w-8/12">
            I'm a junior full stack developer with a strong strategic mindset
            who develops web applications to solve challenging problems{" "}
          </h2>
          <br />
          <h2 class="text-left mt-8">Scroll to learn a little more....</h2>
        </motion.div>
        <section class="col-span-3">
          <motion.div style={{ opacity: bioOpacity }} class="w-8/12">
            <p class="text-left">
              <h3>Hey there 👋</h3>
              <br></br>
              <p>
                Originally from Scotland, I have recently moved to Paris to live
                with my partner. I have a solid understanding of the attributes
                needed to work on strategic initiatives in an agile manner with
                a growing skill set in:
                <div class="flex flex-row my-10">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg"
                    class="language"
                  ></img>
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                    class="language"
                  ></img>
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                    class="language"
                  ></img>
                </div>
                <LanguagesList />
                <br></br>
                I'm an experienced communicator with senior stakeholders with a
                proven ability to develop strong relationships and work
                collaboratively and pragmatically across different cultures.
                <br></br>
                If you are interested in finding out more about me you can find
                my linkedin and CV here 👉 Click me!
              </p>
            </p>
          </motion.div>
        </section>
      </div>
    </section>
  );
};

export default Profile;
