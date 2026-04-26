import authService from "../services/auth.service.js";

const login = async (req, res) => {
  const input = req.body;

  try {
    if (!input) {
      throw {
        message: "Invalid data.",
      };
    }

    if (!input.email && !input.phone) {
      throw {
        message: "Email/Phone number is required.",
      };
    }

    if (!input.password) {
      throw {
        message: "Password is required.",
      };
    }

    const user = await authService.login(req.body);

    res.json(user);
  } catch (error) {
    res.status(error.status || 400).send(error.message);
  }
};

const register = async (req, res) => {
  const input = req.body;

  try {
    if (!input) {
      throw {
        message: "Invalid data.",
      };
    }

    if (!input.name) {
      throw {
        message: "Name is required.",
      };
    }

    if (!input.email) {
      throw {
        message: "Email is required.",
      };
    }

    if (!input.phone) {
      throw {
        message: "Phone number is required.",
      };
    }

    if (!input.password) {
      throw {
        message: "Password is required.",
      };
    }

    const user = await authService.register(input);

    res.json(user);
  } catch (error) {
    res.status(error.status || 400).send(error.message);
  }
};

export default { register, login };
