interface ButtonStyle {
  button: {
    backgroundColor: string;
    borderWidth?: number;
    borderColor?: string;
  };
  title: {
    color: string;
  };
  icon: {
    color: string;
  };
}

interface ButtonVariant {
  enabled: ButtonStyle;
  disable: ButtonStyle;
}

const buttonPrimary: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: "#550ab1",
    },
    title: {
      color: "#fff",
    },
    icon: {
      color: "#fff",
    },
  },
  disable: {
    button:{
        backgroundColor: '#B8B8B8'
    },
    title:{
        color:  '#fff'
    },
    icon: {
        color:  '#fff'
    }
  },
};

const buttonOutline: ButtonVariant = {
    enabled: {
      button: {
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: "#550ab1"
      },
      title: {
        color: "#550ab1",
      },
      icon: {
        color: "#550ab1",
      },
    },
    disable: {
      button:{
          backgroundColor: 'transparent',
          borderWidth: 2,
          borderColor: "#B8B8B8"
      },
      title:{
          color:  '#B8B8B8'
      },
      icon: {
          color:  '#B8B8B8'
      }
    },
  };

export const variants = {
  primary: buttonPrimary,
  outline: buttonOutline
}
  

