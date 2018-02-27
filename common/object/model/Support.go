package model

// The support tells how to solve a problem.
type Support struct {
	ID                string // The unique ID within a micro service.
	Reason            string
	ReasonArguments   []Argument
	Solution          string
	SolutionArguments []Argument
}

func NewSupport() Support {
	ret := Support{}
	ret.ReasonArguments = make([]Argument, 0)
	ret.SolutionArguments = make([]Argument, 0)
	return ret
}