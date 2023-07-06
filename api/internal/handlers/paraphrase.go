package handlers

import (
	"fmt"
	"net/http"
	"ps-go/pkg/engine"
	"time"

	"github.com/labstack/echo/v4"
)

func Paraphrase(c echo.Context) error {
	// Get the body request
	body := new(Body)
	if err := c.Bind(body); err != nil {
		return c.String(http.StatusBadRequest, "Invalid request body")
	}

	// Check if the body is empty
	if body.Text == "" {
		return c.String(http.StatusBadRequest, "Invalid request body")
	}

	// Translate the text
	res, err := translate.Paraphrase(body.Text)
	if err != nil {
		fmt.Println(err)
		return c.String(http.StatusInternalServerError, "Internal server error")
	}

	// Return the response
	newRes := ResultTranslate{
		Body:         *body,
		Result:       res,
		Generated_at: time.Now().Format(time.RFC3339),
	}

	return c.JSON(http.StatusOK, newRes)
}
