const FRUITS_SETTING = {
  apple: {
    form: {
      textEngraving: {
        require: true,
        type: "text",
      },
      color: {
        require: true,
        type: "select",
        options: ["red", "yellow", "green"],
      },
      size: {
        type: "number",
      },
    },
  },
  banana: {
    form: {
      textEngraving: {
        require: true,
        type: "text",
      },
      color: {
        require: true,
        type: "select",
        options: ["red", "yellow", "green"],
      },
      size: {
        type: "number",
        fixed: true,
        fixedValue: 10,
      },
      weight: {
        type: "number",
      },
    },
  },
  grapes: {
    form: {
      textEngraving: {
        require: true,
        type: "text",
      },
      color: {
        require: true,
        type: "select",
        options: ["red", "yellow", "green"],
      },
      size: {
        type: "number",
      },
      weight: {
        type: "number",
      },
    },
  },
};

export default FRUITS_SETTING;
