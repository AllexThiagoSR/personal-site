const formatRepoName = (name) => {
  const splittedName = name.split('-');
  const capitalizedName = splittedName
    .map((word) => word.replace(word[0], word[0].toUpperCase())).join(' ');
  return capitalizedName;
};

export default formatRepoName;
