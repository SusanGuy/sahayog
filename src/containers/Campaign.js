import React, { useState, useEffect } from "react";
import * as Icons from "react-feather";
import moment from "moment";
import StoryDescription from "../components/StoryDescription";
import Button from "../components/Button";
import { Swipeable } from "react-swipeable";
import { motion } from "framer-motion";
import Slider from "../components/Slider";
import BackButton from "../components/BackButton";
import Comments from "../components/Comments";
import axios from "../axios";
const ImageDiv = ({ imageURLArray, height, setTop, setActive, history }) => {
  const IMG_1 = `https://unsplash.it/342/249`;
  const IMG_2 = `https://unsplash.it/342/250`;
  const IMG_3 = `https://unsplash.it/342/251`;
  const IMG_4 = `https://unsplash.it/342/252`;
  const IMG_5 = `https://unsplash.it/342/253`;
  const IMAGES = [IMG_1, IMG_2, IMG_3, IMG_4, IMG_5];
  const RIGHT = "-1";
  const LEFT = "+1";

  const [imageIdx, setImageIdx] = useState(0);

  const onSwiped = (direction) => {
    setActive(false);
    setTop();
    const change = direction === RIGHT ? RIGHT : LEFT;
    const adjustedIdx = imageIdx + Number(change);
    let newIdx;
    if (adjustedIdx >= IMAGES.length) {
      newIdx = 0;
    } else if (adjustedIdx < 0) {
      newIdx = IMAGES.length - 1;
    } else {
      newIdx = adjustedIdx;
    }
    setImageIdx(newIdx);
  };

  const imageStyle = () => {
    return imageURLArray
      ? {
          backgroundImage: `url(http://localhost:8000${imageURLArray[0].image})`,
        }
      : { backgroundImage: `url(${IMAGES[imageIdx]})` };
  };

  return (
    <Swipeable
      trackMouse
      style={{ touchAction: "none" }}
      preventDefaultTouchmoveEvent
      onSwipedLeft={() => onSwiped(LEFT)}
      onSwipedRight={() => onSwiped(RIGHT)}
    >
      <motion.div
        animate={{ height }}
        transition={{
          duration: 0.5,
        }}
        className="donation_image_div"
        style={imageStyle()}
      >
        <div className="header-button">
          <BackButton history={history} />
        </div>
      </motion.div>
    </Swipeable>
  );
};

const FloatingDiv = ({
  goal,
  title,
  description,
  donations,
  endDate,
  top,
  setHeight,
  setActive,
  active,
}) => {
  const Enum = {
    Story: 1,
    Comments: 2,
  };
  const [content, setContent] = useState(Enum.Story);
  const raisedMoney =
    donations && donations.reduce((init, current) => init + current.amount, 0);
  const percentage = (raisedMoney / goal) * 100;
  const handleContentClick = (num) => {
    if (!top) {
      setHeight();
      setActive(true);
    }
    setContent(num);
  };

  return (
    <div className="floating_div">
      <div className="bookmark">
        <Icons.Bookmark size="3rem" color="white" fill="white" />
      </div>
      <motion.div
        animate={{
          rotate: active ? 180 : 0,
        }}
        transition={{
          duration: 0.5,
        }}
        onClick={() => {
          setHeight();
          setActive(!active);
        }}
        className="dash"
      >
        <Icons.ChevronUp />
      </motion.div>
      <div className="types">
        <span className="type">Medical</span>
        <span className="type">Emergency</span>
      </div>
      <h1>{title}</h1>
      <div className="campaign-info">
        <span className="organizer">
          Organized by <span className="name">Sushant Baskota</span>
        </span>
        <span className="date">
          <span className="day">
            {moment(endDate).diff(moment.now(), "days")}
          </span>
          days left
        </span>
      </div>
      <Slider goal={goal} raised={raisedMoney} />
      <div className="amount-info">
        <div className="amount-title">
          <span>Raised so far</span>
          <span>Target</span>
        </div>
        <div className="amount">
          <span className="total">
            ${raisedMoney}
            <span className="percentage">({percentage}%)</span>
          </span>
          <span className="target">${goal}</span>
        </div>
      </div>
      <div className="donors-list">
        <span className="title">Recent Donors</span>
        <div className="donors">
          {donations &&
            donations.map((donation) => (
              <img
                key={donation._id}
                src={`http://localhost:8000${donation.user.avatar}`}
              />
            ))}
          {donations && donations.length > 5 && (
            <div>{donations.length - 5}</div>
          )}
        </div>
      </div>
      <div className="content-title">
        <span
          onClick={() => handleContentClick(Enum.Story)}
          className={`story ${content === Enum.Story ? "active" : ""}`}
        >
          Story
        </span>

        <span
          onClick={() => handleContentClick(Enum.Comments)}
          className={`updates ${content === Enum.Comments ? "active" : ""}`}
        >
          Comments <span className="grey-out">(69)</span>
        </span>
      </div>

      <div className="main-content">
        {content == 1 ? (
          <StoryDescription
            name={"Sushant Baskota"}
            date={"Today"}
            text={description}
          />
        ) : (
          <Comments />
        )}
      </div>
    </div>
  );
};

const ButtonContainer = ({ history }) => (
  <div className="bottom-buttons">
    <div className="share">
      <Icons.Share />
    </div>
    <Button onClick={() => history.push("/donate/1?target=5000")} width="23rem">
      Donate
    </Button>
  </div>
);

const Campaign = ({ history }) => {
  const [top, setTop] = useState(false);
  const [active, setActive] = useState(false);
  const [campaign, setCampaign] = useState({});

  useEffect(() => {
    let mounted = true;
    let campaign = history.location.pathname.split("/")[2];
    try {
      axios
        .get(`/causes/${campaign}`)
        .then(({ data }) => {
          if (mounted) {
            console.log(data);
            setCampaign(data);
          }
        })
        .catch((e) => {
          history.push("/");
        });
    } catch (error) {
      history.push("/");

      //   if (mounted) {
      //   }
    }

    return () => {
      mounted = false;
    };
  }, []);

  const handleHeightChange = () => {
    setTop(!top);
  };
  const height = top ? "16vh" : "40vh";
  return (
    <div className="Campaign">
      <ImageDiv
        history={history}
        imageURLArray={campaign.images}
        height={height}
        setTop={() => {
          if (top) {
            setTop(!top);
          }
          return;
        }}
        setActive={setActive}
      />
      <FloatingDiv
        campaignData={campaign}
        goal={campaign.goal}
        title={campaign.title}
        description={campaign.description}
        donations={campaign.donations}
        endDate={campaign.endDate}
        active={active}
        setActive={setActive}
        top={top}
        setHeight={handleHeightChange}
      />
      {<ButtonContainer history={history} />}
    </div>
  );
};

export default Campaign;
