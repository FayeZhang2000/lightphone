import { identityInstance } from "./axios";

const LoginService = {
  // 用户登录
  signIn: async (data) => {
    try {
      const response = await identityInstance.post("/Auth/v1/signin", {
        Data: {
          Username: data.email,
          Password: data.password,
          SystemCode: "CA_SELFSERVE",
        },
      });
      return response;
    } catch (error) {
      console.error("Error during login:", error);
      throw error;
    }
  },

  // 忘记密码
  forgotPassword: async (data) => {
    try {
      const response = await identityInstance.post(
        "/Auth/v1/forgot_password",
        data
      );
      return response;
    } catch (error) {
      console.error("Error during forgot password:", error);
      throw error;
    }
  },

  // 重置密码
  resetPassword: async (data) => {
    try {
      const response = await identityInstance.post(
        "/Auth/v1/ResetPassword",
        data
      );
      return response;
    } catch (error) {
      console.error("Error during reset password:", error);
      throw error;
    }
  },

  // 获取用户资料
  userProfile: async (data) => {
    try {
      const response = await identityInstance.get("/Auth/v1/user_profile", {
        params: data,
      });
      return response;
    } catch (error) {
      console.error("Error fetching user profile:", error);
      throw error;
    }
  },

  // 更新密码
  updatePassword: async (data) => {
    try {
      const response = await identityInstance.put(
        "/Auth/v1/update_password",
        data
      );
      return response;
    } catch (error) {
      console.error("Error updating password:", error);
      throw error;
    }
  },

  // 更新用户资料
  updateProfile: async (data) => {
    try {
      const response = await identityInstance.put(
        "/Auth/v1/update_profile",
        data
      );
      return response;
    } catch (error) {
      console.error("Error updating profile:", error);
      throw error;
    }
  },

  // 更新邮箱
  updateEmail: async (data) => {
    try {
      const response = await identityInstance.put(
        "/Auth/v1/update_email",
        data
      );
      return response;
    } catch (error) {
      console.error("Error updating email:", error);
      throw error;
    }
  },
};

export default LoginService;
