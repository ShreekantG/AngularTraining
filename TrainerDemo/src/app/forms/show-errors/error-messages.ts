export const ERROR_MESSAGES = {
  required: () => `This field is required`,
  minlength: (param: any) => `Min ${param.requiredLength} chars is required`,
  pinCode: (param: any) => `Allowed pincode is ${param.validCode}`,
  email: () => `Invalid email format`,
};
// ERROR_MESSAGES['required']()
