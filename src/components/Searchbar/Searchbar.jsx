// import { React, Component } from 'react';
// import PropTypes from 'prop-types';
// // import { nanoid } from 'nanoid';
// import styles from './ContactForm.module.css';



export const Searchbar = ({ onSubmit }) => {
    return <header class="searchbar">
  <form class="form">
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
}

Searchbar.propTypes = {
  
  onSubmit: PropTypes.func,
};