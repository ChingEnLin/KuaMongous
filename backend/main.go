package main

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

func init() {
	// Load environment variables from .env file
	if err := godotenv.Load(); err != nil {
		log.Fatal("Error loading .env file")
	}
}

func main() {
	// Initialize the database connection
	// db, err := database.NewDatabase()
	// if err != nil {
	// 	log.Fatal("Error initializing database:", err)
	// }
	// defer db.Close()

	// Initialize the router
	// router := mux.NewRouter()

	// Define routes
	// routes.RegisterRoutes(router, db)

	// Start the server
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	// addr := ":" + port
	log.Printf("Server listening on port %s", port)
	// log.Fatal(http.ListenAndServe(addr, router))
}
