package model

import "time"

type GinLog struct {
	ID        uint   `gorm:"primarykey"`
	Request   string `gorm:"text;not null"`
	Response  string `gorm:"text;not null"`
	CreatedAt time.Time
}
