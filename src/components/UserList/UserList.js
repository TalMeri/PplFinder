import React, { useEffect, useState } from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import RadioButton from "components/Radio";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";
import { addFavorite, removeFavorite } from "store/action";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

const UserList = ({ users, loading, fetchUsers }) => {
  const [hoveredUserId, setHoveredUserId] = useState();
  const [countriesList, setCountriesList] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const favorites = useSelector((state) => state.reduser.favorites);
  const dispatch = useDispatch();
  const observer = useRef()

  const lastUserRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        fetchUsers()
      }
    })
    if (node) observer.current.observe(node)
  }, [loading])

  const isChecked = (country) => {
    return countriesList.includes(country)
  }

  const isSortedByValue = (sortValue) => {
    return sortBy == sortValue
  }

  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };

  const handleMouseClick = (user) => {
    if (!favorites.includes(user)) {
      dispatch(addFavorite(user))
    }
    else {
      dispatch(removeFavorite(user))
    }
  };

  const validateHeart = (user, index) => {
    if (favorites.includes(user))
      return true;
    return (index === hoveredUserId)

  };

  const onChangeCountry = (country) => {
    const newCountriesList = countriesList.slice()
    if (newCountriesList.includes(country)) {
      const countryIndex = newCountriesList.indexOf(country);
      newCountriesList.splice(countryIndex, 1);
    }
    else {
      newCountriesList.splice(0, 0, country);
    }
    setCountriesList(newCountriesList)
  };

  const handleFilter = (user) => {
    const userCountry = user.nat;
    if (countriesList.length == 0)
      return true;
    else if (countriesList.includes(userCountry))
      return true;
    return false;
  }


  const handleSearch = (user) => {
    if (user != 'undifended') {
      if (searchWord == "")
        return true;
      else {
        var name = user.name.first;
        name = name.toUpperCase();
        const upperWord = searchWord.toUpperCase();
        if (name.startsWith(upperWord))
          return true;
      }
    }
    return false;
  }

  const sortByChange = (sortValue) => {
    setSortBy(sortValue)
  };

  const sortFunc = (a, b) => {
    return sortBy == "First" ? a.name.first.localeCompare(b.name.first) : a.name.last.localeCompare(b.name.last)
  }

  sortBy != "" ? users.sort(sortFunc) : users

  return (
    <S.UserList>
      <S.Filters>
        <CheckBox value="BR" label="Brazil" onChange={onChangeCountry} isChecked={isChecked("BR")} />
        <CheckBox value="AU" label="Australia" onChange={onChangeCountry} isChecked={isChecked("AU")} />
        <CheckBox value="CA" label="Canada" onChange={onChangeCountry} isChecked={isChecked("CA")} />
        <CheckBox value="DE" label="Germany" onChange={onChangeCountry} isChecked={isChecked("DE")} />
        <CheckBox value="FR" label="France" onChange={onChangeCountry} isChecked={isChecked("FR")} />
      </S.Filters>

      <S.Filters>
        <RadioButton value="First" label="First Name" onChange={sortByChange} isChecked={isSortedByValue("First")} disable={false}/>
        <RadioButton value="Last" label="Last Name" onChange={sortByChange} isChecked={isSortedByValue("Last")} disable={false}/>
        <RadioButton value="" label="Without Sorting" onChange= {sortByChange} isChecked={isSortedByValue("")} disable={!isSortedByValue("")}/>
      </S.Filters>
      <S.Filters>
        <TextField id="outlined-basic" label="Search" variant="outlined" onChange={(e) => setSearchWord(e.target.value)} value={searchWord}/>
        <Button variant="contained" color="primary" onClick={() => {setSearchWord("")}}>Clear</Button>
      </S.Filters>
      <S.List>


        {users.filter(handleFilter).filter(handleSearch).map((user, index) => {
          return (
            <S.User
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              {...(index + 1 == users.length ? { ref: lastUserRef } : {})}
            >
              <S.UserPicture src={user?.picture.large} alt="" />
              <S.UserInfo>
                <Text size="22px" bold>
                  {user?.name.title} {user?.name.first} {user?.name.last}
                </Text>
                <Text size="14px">{user?.email}</Text>
                <Text size="14px">
                  {user?.location.street.number} {user?.location.street.name}
                </Text>
                <Text size="14px">
                  {user?.location.city} {user?.location.country}
                </Text>
              </S.UserInfo>
              <S.IconButtonWrapper isVisible={validateHeart(user, index)}>
                <IconButton onClick={() => handleMouseClick(user)}>
                  <FavoriteIcon color="error" />
                </IconButton>
              </S.IconButtonWrapper>
            </S.User>
          );
        })}
        {loading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )}
      </S.List>
    </S.UserList>
  );
};

export default UserList;
