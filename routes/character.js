import express from "express";
import Character from "../schemas/character.js";
import Joi from "joi";

const router = express.Router();

// 캐릭터 생성 API
  //해야할것
// 클라이언트가 전달한 데이터를 유효성 검사하고, 유효한 경우 새로운 캐릭터를 저장합니다.
// 저장된 캐릭터의 ID를 응답으로 반환합니다.
router.post("/characters", async (req, res, next) => {
    try {
      // 전달된 데이터의 유효성을 Joi 스키마를 사용하여 검사합니다.
      const validation = await createCharacterSchema.validateAsync(req.body);
      const { name } = validation;
  
      // 유효성 검사를 통과한 데이터로 새로운 캐릭터를 생성
      const character = new Character({ name });
      await character.save();
  
      // 생성된 캐릭터의 ID를 응답으로 반환
      return res.status(201).json({ characterId: character._id });
    } catch (err) {
      // 에러가 발생한 경우 다음 미들웨어에게 전달하여 처리
      next(err);
    }
  });
  
  // 캐릭터 삭제 API
  //해야할것
  // 클라이언트가 특정 캐릭터를 삭제하는 엔드포인트
  // 클라이언트가 요청한 캐릭터를 데이터베이스에서 찾아 삭제
  // 삭제가 성공한 경우 성공 메시지를 반환
  router.delete("/characters/:characterId", async (req, res, next) => {
    try {
      // 캐릭터 ID를 추출
      const { characterId } = req.params;
  
      // 캐릭터 ID에 해당하는 캐릭터를 데이터베이스에서 삭제
      await Character.findByIdAndDelete(characterId);
  
      // 삭제 성공 메시지를 응답으로 반환
      return res.status(200).json({ message: "캐릭터가 성공적으로 삭제되었습니다." });
    } catch (err) {
      // 에러가 발생한 경우 다음 미들웨어에게 전달하여 처리
      next(err);
    }
  });
  
  // 캐릭터 상세 조회 API
  router.get("/characters/:characterId", async (req, res, next) => {
    try {
      // 요청에서 캐릭터 ID를 추출합니다.
      const { characterId } = req.params;
  
      // 요청된 캐릭터 ID에 해당하는 캐릭터를 데이터베이스에서 조회
      const character = await Character.findById(characterId);
  
      // 캐릭터를 찾지 못한 경우 404 응답을 반환
      if (!character) {
        return res.status(404).json({ errorMessage: "캐릭터를 찾을 수 없습니다." });
      }
  
      // 캐릭터의 상세 정보를 응답으로 반환
      return res.status(200).json(character);
    } catch (err) {
      // 에러가 발생한 경우 다음 미들웨어에게 전달하여 처리
      next(err);
    }
  });
  