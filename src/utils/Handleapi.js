import axios from "axios";

const baseUrl = "https://todobackend-7k8b.onrender.com";

const getAllToDo = async (setToDo) => {
  try {
    const response = await axios.get(baseUrl);
    // Handle the successful response
    console.log("data------>", response.data);
    setToDo(response.data);
  } catch (error) {
    // Handle errors here
    console.error("An error occurred:", error);
  }
};

const addToDo = async (text, setText, setToDo) => {
  try {
    const response = await axios.post(`${baseUrl}/save`, { text });
    // Handle the successful response
    console.log(response.data);
    setText("");
    getAllToDo(setToDo);
  } catch (error) {
    // Handle errors here
    console.error("An error occurred:", error);
  }
};

export { getAllToDo, addToDo };
