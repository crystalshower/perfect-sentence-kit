package translate

import (
	"context"
	"os"
	openai "github.com/sashabaranov/go-openai"
)

func Paraphrase(source string) (string, error) {
	openAIClient := openai.NewClient(os.Getenv("OPENAI_KEY"))
	resp, err := openAIClient.CreateChatCompletion(
		context.Background(),
		openai.ChatCompletionRequest{
			Model: openai.GPT3Dot5Turbo,
			Messages: []openai.ChatCompletionMessage{
				{
					Role: openai.ChatMessageRoleSystem,
					Content: `You are a paraphrase system. Paraphrase the following sentence.`,
				},
				{
					Role: openai.ChatMessageRoleUser,
					Content: source,
				},
			},
		},
	)

	if err != nil {
		return "", err
	}

	return resp.Choices[0].Message.Content, nil
}
