package main

import (
	"fmt"
	"net/http"
	"ps-go/internal/handlers"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()

	// Add your custom middleware to the middleware chain
	e.Use(myMiddleware)

	// Define your routes
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, World!")
	})

	e.POST("/translate", func(c echo.Context) error {
		return handlers.Translate(c)
	})

	e.POST("/grammar", func(c echo.Context) error {
		return handlers.Grammar(c)
	})

	e.POST("/paraphrase", func(c echo.Context) error {
		return handlers.Paraphrase(c)
	})

	// Start the server
	e.Logger.Fatal(e.Start(":8080"))
}

func myMiddleware(next echo.HandlerFunc) echo.HandlerFunc {
	const AUTH_TEST string = "0fSz9tYYMAbH2bF51rqTyVO7jXITEj6R/S9HzcNI=Enlg08vQBahL!F/XOno008-1EQHeP3n82j!NMzp?AALSvoa5pXCQeOksFI5mRK=ttTUsgMaaxa6D5htKuaLEq8s"

	return func(c echo.Context) error {
		fmt.Println("Middleware called")

		// Get Authorization header
		auth := c.Request().Header.Get("Authorization")
		if auth != AUTH_TEST {
			return c.String(http.StatusUnauthorized, "You are not allowed to access this resource")
		}

		// Call the next handler
		return next(c)
	}
}
