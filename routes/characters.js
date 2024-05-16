import express from "express";
import Character from "../schemas/characterSchemas.js";
import Joi from "joi";

const router = express.Router();

// 캐릭터 생성 API

router.post("/characters", async (req, res, next) => {
    try {

      const validation = await createCharacterSchema.validateAsync(req.body);
      const { name } = validation;
  

      const character = new Character({ name });
      await character.save();
  

      return res.status(201).json({ characterId: character._id });
    } catch (err) {
      next(err);
    }
  });
  
  // 캐릭터 삭제 API
  router.delete("/characters/:characterId", async (req, res, next) => {
    try {
      const { characterId } = req.params;
      await Character.findByIdAndDelete(characterId);
  
      return res.status(200).json({ message: "캐릭터가 성공적으로 삭제되었습니다." });
    } catch (err) {
      next(err);
    }
  });
  
  // 캐릭터 상세 조회 API
  router.get("/characters/:characterId", async (req, res, next) => {
    try {
      const { characterId } = req.params;
      const character = await Character.findById(characterId);
      if (!character) {
        return res.status(404).json({ errorMessage: "캐릭터를 찾을 수 없습니다." });
      }
  
      return res.status(200).json(character);
    } catch (err) {
      next(err);
    }
  });
  