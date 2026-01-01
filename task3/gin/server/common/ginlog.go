package common

import (
	"encoding/json"
	"gin/server/configs"
	"gin/server/model"
	"time"
)

func GinLog(req, res any) error {
	reqJson, err := json.Marshal(req)
	if err != nil {
		return err
	}
	resJson, err := json.Marshal(res)
	if err != nil {
		return err
	}
	ginLog := model.GinLog{
		Request:   string(reqJson),
		Response:  string(resJson),
		CreatedAt: time.Now(),
	}
	db, err := configs.GetDB()
	if err != nil {
		return err
	}
	err = db.Create(&ginLog).Error
	if err != nil {
		return err
	}
	return nil
}
