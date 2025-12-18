export const home = async (req, res) => {
  try {
    res.status(200).send("Hello Worlddddddddddddddddddddddddd!");
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};


export const register = async (req, res) => {
  try {
    res.status(200).send("Hello Register!");
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
}