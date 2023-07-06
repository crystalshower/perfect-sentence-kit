package handlers

type Body struct {
	Source string `json:"source"`
	Target string `json:"target"`
	Text   string `json:"text"`
}

type ResultTranslate struct {
	Body         Body   `json:"body"`
	Result       string `json:"result"`
	Generated_at string `json:"generated_at"`
}

type ResultParaphrase struct {
	Result       string `json:"result"`
	Generated_at string `json:"generated_at"`
}
