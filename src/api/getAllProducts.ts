export const getAllProducts = async () => {
  try {
    const data = await fetch("https://fakestoreapi.com/products");
    const result = await data.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};
