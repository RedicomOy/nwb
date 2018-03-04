module.exports = {
  type: "react-component",
  babel: {
    plugins: [
      [
        "import",
        {
          libraryName: "antd",
          style: true
        }
      ]
    ]
  }
};
