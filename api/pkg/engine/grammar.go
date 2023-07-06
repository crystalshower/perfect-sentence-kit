package translate

import (
	"context"
	"os"
	openai "github.com/sashabaranov/go-openai"
)

func Grammar(text string) (string, error) {
	openAIClient := openai.NewClient(os.Getenv("OPENAI_KEY"))
	resp, err := openAIClient.CreateChatCompletion(
		context.Background(),
		openai.ChatCompletionRequest{
			Model: openai.GPT3Dot5Turbo,
			Messages: []openai.ChatCompletionMessage{
				{
					Role: openai.ChatMessageRoleSystem,
					Content: `You are a grammar system. Correct the grammar of the following sentence.`,
				},
				{
					Role: openai.ChatMessageRoleUser,
					Content: `The text: ` + text,
				},
			},
		},
	)

	if err != nil {
		return "", err
	}

	return resp.Choices[0].Message.Content, nil
}
