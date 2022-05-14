const initialStateAlertModal = {
  alert: {
    display: true,
    type: "warning",
    title: "title",
    message: "Mohon maaf, tidak bisa mendapatkan data table secara penuh",
    buttons: {
      button: {
        title: "button_1",
        onClick: () => {
          alert("Hallo");
        },
      },
    },
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialStateAlertModal, action) => {
  switch (action.type) {
    case "SHOW_ALERT":
      return {
        ...state,
        alert: {
          ...state.alert,
          [action.formType]: action.formValue,
        },
      };
    case 'HIDEN_ALERT':
        return{
            
        }
    default:
      return state;
  }
};
