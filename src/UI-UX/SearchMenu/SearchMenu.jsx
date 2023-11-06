import "./searchMenu.css";
import { AiOutlineClose } from "react-icons/ai";
// ! Data
import { users } from "../../components/userData";
import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function SearchMenu({ setShowSearch }) {
  SearchMenu.propTypes = {
    setShowSearch: PropTypes.bool,
  };
  const [searchValue, setSearchValue] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);
  const closeSearchAre = () => {
    document.body.classList.remove("no-scroll");
    setShowSearch(false);
  };
  const handleChangeInput = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    const result = users.filter((user) =>
      user.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredUsers(result);
  };

  const clearInput = (e) => {
    e.preventDefault();
    setSearchValue("");
    setFilteredUsers(users);
  };
  return (
    <>
      <div className="searchMenuBackDrop" onClick={closeSearchAre}></div>
      <div className="search-area  py-5 ">
        <h1
          className="font-bold text-2xl px-7
         mb-5"
        >
          Search
        </h1>

        <div
          className="searchForm px-7
         "
        >
          <form action="" className="w-full relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full"
              value={searchValue}
              onChange={handleChangeInput}
            />
            <button className="absolute " onClick={clearInput}>
              <AiOutlineClose className="clearInput" />
            </button>
          </form>
        </div>
        <h1
          className="font-bold text-md my-5 px-7
        "
        >
          Recent
        </h1>
        <div className="search-content px-7 flex flex-col ">
          {filteredUsers.map((user) => (
            <Link
              to={`/profile-details/${user.id}`}
              key={user.id}
              className="filtered-user w-full flex justify-start "
              onClick={closeSearchAre}
            >
              <div className="profile-image mr-2">
                <img className="w-52" src={user.profileImage} alt="" />
              </div>
              <div className="profile-infos">
                <h1 className="username">{user.username}</h1>
                <span className="fullName">
                  {user.name} {user.surname}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchMenu;
