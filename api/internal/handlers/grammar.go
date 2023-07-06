package handlers

import (
	"fmt"
	"net/http"
	"ps-go/pkg/engine"

	"github.com/labstack/echo/v4"
)

func Grammar(c echo.Context) error {
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
	res, err := translate.Grammar(body.Text)
	if err != nil {
		fmt.Println(err)
		return c.String(http.StatusInternalServerError, "Internal server error")
	}

	// Return the response
	return c.String(http.StatusOK, res)
}
