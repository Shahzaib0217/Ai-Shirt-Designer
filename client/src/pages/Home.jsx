import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import CustomButton from "../components/CustomButton";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const Home = () => {
  const snap = useSnapshot(state);
  return (
    //From framer motion, acts like a container for animations
    <AnimatePresence>
      {/* now check if we are on home page */}
      {snap.home && (
        // Its a regular div/section with some animations attached to it
        <motion.section
          className="home"
          // providing an object for slide animation (from left)
          {...slideAnimation("left")}
        >
          {/* 1.Threejs Logo */}
          <motion.header>
            <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            ></img>
          </motion.header>

          {/* Contains, heading, text and button */}
          <motion.div className="home-content" {...headContainerAnimation}>
            {/* Heading */}
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                {/* Dont break on xl screen size */}
                LET'S <br className="xl:block hidden" /> DO IT.
              </h1>
            </motion.div>
            {/* Small Text */}
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              {/* setting max width b/w text to medium */}
              <p className="max-w-md font-normal text-gray-600 text-base">
                Create your unique and exclusive shirt with our brand-new 3D
                customization tool. <strong>Unleash your imagination</strong>{" "}
                and define your own style.
              </p>
            </motion.div>
            {/* Button, to hide home content
                Also, passed some props */}
            <CustomButton
              type="filled"
              title="Customize It"
              // This hides Home, as we turning it false.
              handleClick={() => (state.home = false)}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
