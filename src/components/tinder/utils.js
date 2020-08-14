const getDogName = data => {
  let breedNameData = data.message.split('/');
  let breedName = breedNameData[breedNameData.length - 2].split('');
  breedName[0] = breedName[0].toUpperCase();
  breedName = breedName.join('');
  let fullName = breedName;
  let secondName = breedName.split('-')[1] ? breedName.split('-')[1].split('') : null;
  if (secondName) {
    secondName[0] = secondName[0].toUpperCase();
    secondName = secondName.join('');
    breedName = breedName.split('-')[0];
    fullName = breedName.concat(',', secondName);
  }
  return fullName;
};

export default getDogName;
