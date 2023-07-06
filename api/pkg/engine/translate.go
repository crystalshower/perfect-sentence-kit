package translate

import (
	"context"
	"os"
	openai "github.com/sashabaranov/go-openai"
)

const URL string = "https://api.openai.com/v1/chat/completions"

func Translate(source string, target string, text string) (string, error) {
	openAIClient := openai.NewClient(os.Getenv("OPENAI_KEY"))
	resp, err := openAIClient.CreateChatCompletion(
		context.Background(),
		openai.ChatCompletionRequest{
			Model: openai.GPT3Dot5Turbo,
			Messages: []openai.ChatCompletionMessage{
				{
					Role: openai.ChatMessageRoleSystem,
					Content: `You are a translate system. Translate from ` + source + ` to ` + target + `.`,
				},
				{
					Role: openai.ChatMessageRoleUser,
					Content: `Translate: ` + text,
				},
			},
		},
	)

	if err != nil {
		return "", err
	}

	return resp.Choices[0].Message.Content, nil
}
