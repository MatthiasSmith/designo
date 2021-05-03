const addFadeInImageClass = (event) => {
  if (event.target.srcset) {
    event.target.classList.add('fade-in-image');
  }
};

export default addFadeInImageClass;
