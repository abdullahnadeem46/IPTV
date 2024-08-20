import config from "../config/index.js";
import { UserService } from "../services/index.js";
import { httpResponse } from "../utils/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const UserController = {
  getAll: async (req, res) => {
    try {
      const data = await UserService.getAll();
      return httpResponse.SUCCESS(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  getById: async (req, res) => {
    try {
      const book = await UserService.getById(req.params.id);
      res.json(book);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  add: async (req, res) => {
    try {
      const data = await UserService.add(req.body);
      return httpResponse.CREATED(res, data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  update: async (req, res) => {
    try {
      const result = await UserService.update(req.params.id, req.body);
      res.status(200).json(result);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      const result = await UserService.delete(req.params.id);
      res.status(200).json(result);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  getUserStreams: async (req, res) => {
    try {
      const streams = await UserService.getUserStreams(req.params.id);
      if (!streams.length) {
        return httpResponse.NOT_FOUND(res, "No streams found for this user");
      }
      return httpResponse.SUCCESS(res, streams);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
    }
  },

  getUserStreamById: async (req, res) => {
    try {
      const stream = await UserService.getUserStreamById(
        req.params.id,
        req.params.streamId
      );
      if (!stream) return httpResponse.NOT_FOUND(res, "Stream not found");
      return httpResponse.SUCCESS(res, stream);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
    }
  },

  register: async (req, res) => {
    try {
      const { email, password } = req.body;

      const existingUser = await UserService.findOne({ email });
      if (existingUser) {
        return httpResponse.BAD_REQUEST(res, "User already exists");
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await UserService.add({
        ...req.body,
        password: hashedPassword,
      });
      return httpResponse.CREATED(res, newUser);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await UserService.findOne({ email });

      if (!user) {
        return httpResponse.BAD_REQUEST(res, "Invalid email or password");
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return httpResponse.BAD_REQUEST(res, "Invalid email or password");
      }

      const token = jwt.sign({ id: user._id }, config.env.jwtSecret, {
        expiresIn: "1h",
      });
      return httpResponse.SUCCESS(res, { token, user });
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
    }
  },
};
