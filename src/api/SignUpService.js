import { instance, identityInstance } from "../api/axios";
const SignUpService = {
  // 验证邮箱是否已存在
  validateEmail: async (data) => {
    try {
      const response = await identityInstance.post(
        "/SignUp/v1/validate_email",
        data
      );
      return response;
    } catch (error) {
      console.error("Error validating email:", error);
      throw error;
    }
  },
  // 处理用户注册
  signUp: async (data) => {
    try {
      const response = await identityInstance.post("/SignUp/v1/signup", data);
      return response;
    } catch (error) {
      console.error("Error during sign up:", error);
      throw error;
    }
  },
  // 重新发送激活码
  resendActivationCode: async (data) => {
    try {
      const response = await identityInstance.post(
        "/SignUp/v1/ResendActivationCode",
        data
      );
      return response;
    } catch (error) {
      console.error("Error sending activation code:", error);
      throw error;
    }
  },
  // 激活用户
  activateUser: async (data) => {
    try {
      const response = await identityInstance.post(
        "/SignUp/v1/activate_user",
        data
      );
      return response;
    } catch (error) {
      console.error("Error activating user:", error);
      throw error;
    }
  },
  // 根据邮箱 ID 激活用户
  activateUserByEmailId: async (data) => {
    try {
      const response = await identityInstance.post(
        "/SignUp/v1/ActivateUserByEmailId",
        data
      );
      return response;
    } catch (error) {
      console.error("Error activating user by email ID:", error);
      throw error;
    }
  },
};
export default SignUpService;
