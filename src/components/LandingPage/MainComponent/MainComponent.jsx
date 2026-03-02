import React from 'react'
import "./styles.css"
import Button from '../../Common/Button/Button'
import iphone from "../../../assets/iphone.png"
import gradient from "../../../assets/gradient.png"
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'
import { RWebShare } from "react-web-share";

function MainComponent() {
  return (
    <div className="landing-wrapper">
      <div className="landing-left">
        <motion.h1
          className="heading-1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Track Crypto
        </motion.h1>

        <motion.h1
          className="heading-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Real Time.
        </motion.h1>

        <motion.p
          className="para"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>

        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
        <Link to="/dashboard">
          <Button text={"Dashboard"} />
         </Link>

         <RWebShare
            data={{
              text: "Crypto Dashboard made using React JS.",
              url: "https://crypto-dashboard-dec.netlify.app/",
              title: "CryptoDashboard.",
            }}
            onClick={() => console.log("shared successfully!")}
          >
          <Button text={"Share"} outlined={true} />
          </RWebShare>
        </motion.div>
      </div>
      <div className="landing-right">
        <motion.img
          src={iphone}
          alt=""
          className="iphone"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        />
        <img src={gradient} alt="" className="gradient" />
      </div>
    </div>
  );
}

export default MainComponent

