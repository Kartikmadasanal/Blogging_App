const capitalizeFirstLetter = (str) => {
    const capitalWord = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalWord;
  };

  const categories = [
    "all",
    "tech",
    "fashion",
    "nature",
    "travel",
    "fitness",
    "lifestyle",
    
]

export {categories , capitalizeFirstLetter}