export const AudioPlay = (file: string) => {
  new Audio(`/assets/sounds/${file}`).play(); //under folder public
};
