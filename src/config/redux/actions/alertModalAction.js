export const showAlert = (key, value) => {
    return{
        type: "SHOW_ALERT",
        alert:{
            key: value
        }
    }
  };