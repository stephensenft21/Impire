export const validateForm = (data) => {
    const errors = {};
  
    if (!data.clientName) errors.clientName = "Client Name is required.";
    if (!data.email) errors.email = "Email is required.";
  
    return errors;
  };
  