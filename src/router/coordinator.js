export const goToHome = (history) => {
  history.push("/");
};

export const goToLogin = (history) => {
  history.push("/login");
};

export const goToSingUp = (history) => {
  history.push("/singup");
};

export const goToNewImage = (history) => {
  history.push("/new-image");
};
export const goToCollections = (history) => {
  history.push("/collections");
};
export const goToCollection = (history, id) => {
  history.push(`/collections/${id}`);
};