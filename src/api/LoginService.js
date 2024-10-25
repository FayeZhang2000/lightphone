import { identityInstance } from "./axios"; // 确保路径正确

const LoginService = {
  // 用户登录
  signIn: async (data) => {
    try {
      // 将数据封装在 Data 对象内
      const response = await identityInstance.post("/Auth/v1/signin", {
        Data: {
          Username: data.email, // 使用 email 作为 Username
          Password: data.password, // 使用 password
          SystemCode: "CA_SELFSERVE", // 硬编码 SystemCode
        },
      });
      return response;
    } catch (error) {
      console.error("Error during login:", error);
      throw error; // 抛出错误以供后续处理
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
