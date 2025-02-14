export const GetAPIData = async () => {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
  
    return data;
  } catch (error) {
    console.log(error);
  }
};
