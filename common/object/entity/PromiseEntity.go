package entity

import (
	"promise/common/object/model"
	"time"
)

// PromiseEntity is the common entity used in Promise.
type PromiseEntity struct {
	ID        string    `gorm:"column:ID;primary_key"`
	Category  string    `gorm:"column:Category"`
	CreatedAt time.Time `gorm:"column:CreatedAt"`
	UpdatedAt time.Time `gorm:"column:UpdatedAt"`
}

// ToModel change the entity to model.
func (e *PromiseEntity) ToModel() model.PromiseModel {
	var ret model.PromiseModel

	ret.ID = e.ID
	ret.Category = e.Category
	ret.CreatedAt = e.CreatedAt
	ret.UpdatedAt = e.UpdatedAt
	return ret
}

// Load will load data from model.
func (e *PromiseEntity) Load(m model.PromiseModel) {
	e.ID = m.ID
	e.Category = m.Category
	e.CreatedAt = m.CreatedAt
	e.UpdatedAt = m.UpdatedAt
}
