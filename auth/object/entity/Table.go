package entity

import (
	commonDB "promise/common/db"
)

var (
	// Tables The tables used by this project.
	Tables = []commonDB.TableInfo{
		{"Account", new(Account)},
		{"Session", new(Session)},
	}
)
