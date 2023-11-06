import "./messagesPage.css";
import { BsTelephone } from "react-icons/bs";
import { BsCameraVideo } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiHappy } from "react-icons/bi";
import { BsMic } from "react-icons/bs";
import { GrGallery } from "react-icons/gr";
import { AiOutlineHeart } from "react-icons/ai";
// !Data
import { messages } from "./messagesdata";
import { useState } from "react";
import { Link } from "react-router-dom";

function MessagesPage() {
  const [currentMessage, setCurrentMessage] = useState(messages[0]);

  const changeMessageContent = (message) => {
    setCurrentMessage(message);
    console.log(currentMessage);
  };
  return (
    <div className="messages-wrapper flex">
      <div className="message-list pt-5">
        <div className="top mb-4 px-5">
          <h1>johndoe</h1>
        </div>
        <h3 className="title font-bold text-base  px-5">Messages</h3>
        <div className="list ">
          {messages.map((message) => (
            <button
              href=""
              key={message.id}
              onClick={() => changeMessageContent(message)}
            >
              <li className="flex items-center ">
                <div className="profile-image mr-2">
                  <img
                    className="w-16 rounded-full"
                    src={message.profileImage}
                    alt=""
                  />
                </div>
                <div className="infos items-start flex flex-col">
                  <span className="font-bold">{message.username}</span>
                  <span className="text-sm text-gray-500">
                    Active 45 minute ago
                  </span>
                </div>
              </li>
            </button>
          ))}
        </div>
      </div>
      {currentMessage ? (
        <div className="message-content flex flex-col">
          <div className="message-content-top flex items-center px-5 py-3">
            <div className="profile-image">
              <img
                className="w-14 rounded-full"
                src={currentMessage.profileImage}
                alt=""
              />
            </div>
            <div className="fullName ml-2">
              <h1 className="font-bold text-lg">
                {currentMessage.name} {currentMessage.surname}
              </h1>
            </div>
            <div className="buttons ml-auto">
              <button>
                <BsTelephone />
              </button>
              <button>
                <BsCameraVideo />
              </button>
              <button>
                <AiOutlineInfoCircle />
              </button>
            </div>
          </div>
          <div className="messages p-3 overflow-y-scroll">
            <div className="messages-top mb-5">
              <div className="profile-image w-full justify-center flex">
                <img
                  src={currentMessage.profileImage}
                  className="rounded-full w-24"
                  alt=""
                />
              </div>
              <div className="name w-full flex flex-col justify-center mt-2">
                <h1 className="items-center flex justify-center font-semibold text-xl">
                  {currentMessage.name}
                </h1>
                <span className="items-center flex justify-center text-gray-800">
                  {currentMessage.username}
                </span>
              </div>
              <div className="viewProfileButton w-full flex justify-center mt-2">
                <Link to={`/profile-details/${currentMessage.profileId}`}>
                  {" "}
                  <button>View Profile</button>
                </Link>
              </div>
            </div>
            <li className="incoming flex items-center">
              <div className="profile-image mr-2">
                <img
                  className="w-8 rounded-full"
                  src={currentMessage.profileImage}
                  alt=""
                />
              </div>
              <div className="message">
                <p className="w-64">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere, illum illo.
                </p>
              </div>
            </li>
            <br />
            <li className="outgoing flex items-center justify-end">
              <div className="message w-min flex  justify-end">
                <p className="w-64">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere, illum illo.
                </p>
              </div>
            </li>
            <br />
            <li className="incoming flex items-center">
              <div className="profile-image mr-2">
                <img
                  className="w-8 rounded-full"
                  src={currentMessage.profileImage}
                  alt=""
                />
              </div>
              <div className="message">
                <p className="w-64">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere, illum illo.
                </p>
              </div>
            </li>
            <br />
            <li className="outgoing flex items-center justify-end">
              <div className="message w-min flex  justify-end">
                <p className="w-64">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere, illum illo.
                </p>
              </div>
            </li>
            <br />
            <li className="incoming flex items-center">
              <div className="profile-image mr-2">
                <img
                  className="w-8 rounded-full"
                  src={currentMessage.profileImage}
                  alt=""
                />
              </div>
              <div className="message">
                <p className="w-64">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere, illum illo.
                </p>
              </div>
            </li>
            <br />
            <li className="outgoing flex items-center justify-end">
              <div className="message w-min flex  justify-end">
                <p className="w-64">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere, illum illo.
                </p>
              </div>
            </li>
            <br />
          </div>
          <div className="text-message-form mt-auto mb-5 mx-2">
            <form action="" className="flex ">
              <button>
                <BiHappy />
              </button>
              <input type="text" placeholder="Message..." className="w-full" />
              <button>
                <BsMic />
              </button>
              <button>
                <GrGallery />
              </button>
              <button>
                <AiOutlineHeart />
              </button>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default MessagesPage;
