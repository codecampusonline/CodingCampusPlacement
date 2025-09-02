export const Validation = (value) => {
    const error = {};
  
    // Name validation
    if (!value.name.trim()) {
      error.name = "Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(value.name)) {
      error.name = "Name must contain only letters and spaces";
    }
  
    // Phone validation
    if (!value.phone.trim()) {
      error.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(value.phone)) {
      error.phone = "Enter a valid 10-digit Indian phone number";
    }
  
    // Course validation
    if (!value.course) {
      error.course = "Please select a course";
    }
  
    // Message validation (optional or required – up to you)
    if (!value.message.trim()) {
      error.message = "Message is required";
    } else if (value.message.length < 10) {
      error.message = "Message must be at least 10 characters";
    }
  
    return error;
  };
  